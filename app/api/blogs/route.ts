import { NextResponse } from 'next/server';

const BLOGIFIER_URL = 'https://blogifier.foodzo.ai';

function decodeHtml(value: string) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .trim();
}

function textFromHtml(value: string) {
  return decodeHtml(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' '));
}

function firstMatch(value: string, pattern: RegExp) {
  return value.match(pattern)?.[1] ?? '';
}

function absoluteUrl(value: string) {
  return new URL(value, BLOGIFIER_URL).toString();
}

function parseListing(html: string) {
  const cards = html.match(/<article class="post-grid[\s\S]*?<\/article>/gi) ?? [];

  return cards.flatMap((card) => {
    const href = firstMatch(card, /href=["']([^"']*\/post\/[^"']*)["']/i);
    const title = textFromHtml(firstMatch(card, /class="post-grid-title"[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i));

    if (!href || !title) return [];

    return [{
      url: absoluteUrl(href),
      title,
      excerpt: textFromHtml(firstMatch(card, /class="post-grid-desc"[^>]*>([\s\S]*?)<\/p>/i)),
      author: textFromHtml(firstMatch(card, /class="post-grid-author-name"[^>]*>([\s\S]*?)<\/span>/i)) || 'Anonymous',
      date: textFromHtml(firstMatch(card, /class="post-grid-date-time"[^>]*>([\s\S]*?)<\/time>/i)),
      featuredImage: absoluteUrl(firstMatch(card, /class="post-grid-img"[^>]*src=["']([^"']+)["']/i) || '/img/cover.jpg'),
    }];
  });
}

function parsePost(html: string, listingPost: ReturnType<typeof parseListing>[number]) {
  const contentHtml = firstMatch(html, /class="post-content post-container"[^>]*>([\s\S]*?)<\/section>/i);
  const cleanedContent = (contentHtml || '').trim();
  const content = cleanedContent ? decodeHtml(cleanedContent) : listingPost.excerpt;
  const image = firstMatch(html, /class="post-cover-img"[^>]*src=["']([^"']+)["']/i);

  return {
    id: listingPost.url,
    title: textFromHtml(firstMatch(html, /class="post-title"[^>]*>([\s\S]*?)<\/h1>/i)) || listingPost.title,
    category: 'Blog',
    date: textFromHtml(firstMatch(html, /class="post-meta-date-time"[^>]*>([\s\S]*?)<\/time>/i)) || listingPost.date,
    excerpt: listingPost.excerpt || textFromHtml(content).slice(0, 160),
    author: textFromHtml(firstMatch(html, /class="post-meta-author-name"[^>]*>([\s\S]*?)<\/a>/i)) || listingPost.author,
    readTime: `${Math.max(1, Math.ceil(textFromHtml(content).split(/\s+/).filter(Boolean).length / 200))} min read`,
    content,
    featuredImage: absoluteUrl(image || new URL(listingPost.featuredImage).pathname),
  };
}

export async function GET() {
  try {
    const listingResponse = await fetch(BLOGIFIER_URL, {
      next: { revalidate: 60 },
      headers: { Accept: 'text/html' },
    });

    if (!listingResponse.ok) {
      throw new Error(`Blogifier returned ${listingResponse.status}`);
    }

    const listingPosts = parseListing(await listingResponse.text());
    const posts = await Promise.all(
      listingPosts.map(async (listingPost) => {
        try {
          const postResponse = await fetch(listingPost.url, {
            next: { revalidate: 60 },
            headers: { Accept: 'text/html' },
          });
          return postResponse.ok ? parsePost(await postResponse.text(), listingPost) : parsePost('', listingPost);
        } catch {
          return parsePost('', listingPost);
        }
      }),
    );

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Blogifier fetch error:', error);
    return NextResponse.json({ error: 'Unable to load Blogifier posts' }, { status: 502 });
  }
}