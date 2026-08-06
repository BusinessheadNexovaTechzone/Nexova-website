const fs = require('fs');
const path = require('path');

const root = process.cwd();
const appDir = path.join(root, 'app');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const folders = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'api' || entry.name === 'favicon.ico' || entry.name === 'fonts') continue;
      folders.push(fullPath);
    }
  }

  return folders;
}

function createLayoutForDir(dir) {
  const relativeDir = path.relative(appDir, dir).replace(/\\/g, '/');
  const hasPage = fs.existsSync(path.join(dir, 'page.tsx'));
  const hasLayout = fs.existsSync(path.join(dir, 'layout.tsx'));

  if (!hasPage || hasLayout) return;

  const segments = relativeDir.split('/').filter(Boolean);
  if (segments.at(-1) === 'index') segments.pop();
  const canonicalPath = segments.length ? `/${segments.join('/')}` : '/';
  const componentName = segments.length
    ? segments.map((segment) => segment.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(' ').filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')).join('') + 'Layout'
    : 'RootLayout';

  const content = `import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata(${JSON.stringify(canonicalPath)});

export default function ${componentName}({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;

  fs.writeFileSync(path.join(dir, 'layout.tsx'), content, 'utf8');
  console.log(`Created ${path.relative(root, path.join(dir, 'layout.tsx'))}`);
}

function visit(dir) {
  createLayoutForDir(dir);
  for (const child of walk(dir)) {
    visit(child);
  }
}

visit(appDir);
