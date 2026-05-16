import { copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = process.env.GITHUB_PAGES_BASE ?? "/sparkling-sjamsde/";
const publicDir = ".output/public";
const indexPath = join(publicDir, "index.html");

let html = readFileSync(indexPath, "utf8");

html = html
  .replaceAll('src="/assets/', `src="${base}assets/`)
  .replaceAll('href="/assets/', `href="${base}assets/`)
  .replaceAll('src="/manifest.js"', `src="${base}manifest.js"`);

writeFileSync(indexPath, html);
copyFileSync(indexPath, join(publicDir, "404.html"));
