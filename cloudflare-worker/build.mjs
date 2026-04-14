/**
 * build.mjs — Inlines admin.html into src/index.ts before wrangler deploy
 * Run: node build.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const adminHtml = fs.readFileSync(path.join(__dirname, 'admin.html'), 'utf-8');
const indexSrc  = fs.readFileSync(path.join(__dirname, 'src/index.ts'), 'utf-8');

// Escape backticks and template literal chars in the HTML
const escaped = adminHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

const patched = indexSrc.replace(
  /const ADMIN_HTML = `ADMIN_HTML_PLACEHOLDER`;/,
  `const ADMIN_HTML = \`${escaped}\`;`
);

// Write to a temp file that wrangler will use
fs.writeFileSync(path.join(__dirname, 'src/index.built.ts'), patched, 'utf-8');
console.log('✅ Admin HTML inlined → src/index.built.ts');
console.log('   Now run: wrangler deploy --config wrangler.toml (with main = src/index.built.ts)');
