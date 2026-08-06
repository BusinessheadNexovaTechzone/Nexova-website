const fs = require('fs/promises');
const path = require('path');
const { URL } = require('url');

const CRAWL_STATE_PATH = path.join(process.cwd(), 'tmp', 'crawler-state.json');
const OUTPUT_DIR = path.join(process.cwd(), 'tmp', 'crawler-output');
const DEFAULT_INTERVAL_MS = 60 * 1000;
const DEFAULT_TIMEOUT_MS = 15 * 1000;
const SAFE_SCHEMES = ['http:', 'https:'];
const MALICIOUS_SCHEMES = ['javascript:', 'data:', 'vbscript:', 'file:'];

async function ensureDirectory(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    // ignore if already exists
  }
}

function safeFilename(urlString) {
  return encodeURIComponent(urlString).replace(/%/g, '_');
}

function isSafeUrl(candidate) {
  try {
    const url = new URL(candidate);
    return SAFE_SCHEMES.includes(url.protocol);
  } catch {
    return false;
  }
}

function isMaliciousLink(href) {
  try {
    const url = new URL(href, 'https://example.com');
    return MALICIOUS_SCHEMES.includes(url.protocol);
  } catch {
    return false;
  }
}

function sanitizeHtml(html, baseUrl) {
  let parser = typeof DOMParser !== 'undefined' ? DOMParser : null;
  const result = {
    sanitizedHtml: html,
    links: [],
    maliciousLinks: [],
    parseError: null,
  };

  if (parser) {
    try {
      const doc = new parser().parseFromString(html, 'text/html');
      const anchors = Array.from(doc.querySelectorAll('a[href]'));
      for (const anchor of anchors) {
        const rawHref = anchor.getAttribute('href')?.trim() || '';
        if (!rawHref) continue;
        const resolved = new URL(rawHref, baseUrl).toString();
        if (isMaliciousLink(rawHref)) {
          result.maliciousLinks.push(resolved);
          anchor.removeAttribute('href');
        } else {
          result.links.push(resolved);
          anchor.setAttribute('href', resolved);
          anchor.setAttribute('rel', 'noopener noreferrer nofollow');
          anchor.setAttribute('target', '_blank');
        }
      }

      const blockedSelectors = ['script', 'iframe', 'object', 'embed', 'link[rel="import"]'];
      blockedSelectors.forEach((selector) => {
        const elements = Array.from(doc.querySelectorAll(selector));
        elements.forEach((element) => element.remove());
      });

      result.sanitizedHtml = doc.documentElement?.outerHTML ?? html;
      return result;
    } catch (error) {
      result.parseError = String(error);
    }
  }

  // fallback sanitization if DOMParser is unavailable or failed
  result.sanitizedHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[\s\S]*?<\/embed>/gi, '');

  const anchorRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  result.sanitizedHtml = result.sanitizedHtml.replace(anchorRegex, (match, href) => {
    const rawHref = href.trim();
    if (isMaliciousLink(rawHref)) {
      result.maliciousLinks.push(rawHref);
      return match.replace(/href=["'][^"']+["']/, '');
    }

    try {
      const resolved = new URL(rawHref, baseUrl).toString();
      result.links.push(resolved);
      return match.replace(/<a/i, '<a target="_blank" rel="noopener noreferrer nofollow"');
    } catch {
      return match;
    }
  });

  return result;
}

async function fetchWithTimeout(urlString, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(urlString, {
      method: 'GET',
      headers: {
        'User-Agent': 'NexovaCrawler/1.0 (+https://example.com)',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const sanitized = sanitizeHtml(html, urlString);
    return {
      url: urlString,
      status: 'success',
      statusCode: response.status,
      fetchedAt: new Date().toISOString(),
      contentType: response.headers.get('content-type') || '',
      html: sanitized.sanitizedHtml,
      links: sanitized.links,
      maliciousLinks: sanitized.maliciousLinks,
      parseError: sanitized.parseError,
    };
  } catch (error) {
    return {
      url: urlString,
      status: 'failed',
      fetchedAt: new Date().toISOString(),
      error: String(error),
      links: [],
      maliciousLinks: [],
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function loadState() {
  try {
    const text = await fs.readFile(CRAWL_STATE_PATH, 'utf8');
    return JSON.parse(text);
  } catch {
    return { urls: [], lastRun: null };
  }
}

async function saveState(state) {
  await fs.writeFile(CRAWL_STATE_PATH, JSON.stringify(state, null, 2), 'utf8');
}

async function saveResult(result) {
  const filename = safeFilename(result.url);
  const jsonPath = path.join(OUTPUT_DIR, `${filename}.json`);
  const htmlPath = path.join(OUTPUT_DIR, `${filename}.html`);

  await fs.writeFile(jsonPath, JSON.stringify(result, null, 2), 'utf8');
  if (result.html) {
    await fs.writeFile(htmlPath, result.html, 'utf8');
  }
}

async function runCycle(urls) {
  for (const url of urls) {
    console.log(`[crawl] fetching ${url}`);
    const result = await fetchWithTimeout(url);
    await saveResult(result);
    if (result.status === 'success') {
      console.log(`[crawl] ok ${url} (${result.statusCode}) links=${result.links.length} malicious=${result.maliciousLinks.length}`);
    } else {
      console.warn(`[crawl] failed ${url}: ${result.error}`);
    }
  }
}

function parseArguments(args) {
  const settings = {
    intervalMs: DEFAULT_INTERVAL_MS,
    timeoutMs: DEFAULT_TIMEOUT_MS,
    continuous: false,
    urls: [],
  };

  args.forEach((arg) => {
    if (arg.startsWith('--interval=')) {
      settings.intervalMs = Number(arg.split('=')[1]) || settings.intervalMs;
    } else if (arg.startsWith('--timeout=')) {
      settings.timeoutMs = Number(arg.split('=')[1]) || settings.timeoutMs;
    } else if (arg === '--continuous') {
      settings.continuous = true;
    } else if (arg === '--once') {
      settings.continuous = false;
    } else if (!arg.startsWith('--')) {
      settings.urls.push(arg);
    }
  });

  return settings;
}

async function main() {
  const args = parseArguments(process.argv.slice(2));
  await ensureDirectory(OUTPUT_DIR);
  const state = await loadState();

  if (args.urls.length > 0) {
    state.urls = args.urls.filter((value, index, self) => self.indexOf(value) === index);
  }

  if (!state.urls.length) {
    console.error('No URLs specified. Provide URLs as arguments or add them to tmp/crawler-state.json.');
    console.error('Example: node scripts/crawler.js --continuous https://example.com https://example.org');
    process.exit(1);
  }

  console.log(`[crawl] starting ${state.urls.length} URLs; continuous=${args.continuous}; interval=${args.intervalMs}ms`);

  do {
    await runCycle(state.urls);
    state.lastRun = new Date().toISOString();
    await saveState(state);

    if (!args.continuous) {
      break;
    }

    console.log(`[crawl] waiting ${args.intervalMs}ms before next iteration`);
    await new Promise((resolve) => setTimeout(resolve, args.intervalMs));
  } while (args.continuous);

  console.log('[crawl] finished');
}

main().catch((error) => {
  console.error('[crawl] unexpected error:', error);
  process.exit(1);
});
