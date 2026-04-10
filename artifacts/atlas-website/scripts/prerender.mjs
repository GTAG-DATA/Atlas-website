/**
 * Atlas Corporate Services — Static HTML Pre-renderer
 *
 * Runs after `vite build` to generate route-specific HTML files with
 * pre-injected <title>, <meta description>, <canonical> and Open Graph tags.
 *
 * This allows search engines to read the correct metadata for every page
 * without waiting for JavaScript to execute, dramatically improving crawlability
 * and SERP snippet quality.
 *
 * Usage (automatic via build script):
 *   node scripts/prerender.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.resolve(__dirname, '../dist/public');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌  dist/public/index.html not found — run `vite build` first.');
  process.exit(1);
}

const BASE_URL    = 'https://www.atlascorp.ae';
const SITE_NAME   = 'Atlas Corporate Services';
const DEFAULT_OG  = `${BASE_URL}/opengraph.jpg`;
const SUFFIX      = ` | ${SITE_NAME}`;

// ─── Route manifest ──────────────────────────────────────────────────────────

const routes = [
  // ── Main pages ──────────────────────────────────────────────────────────────
  {
    path: '/',
    title: 'Atlas Corporate Services | DIFC Company Setup, Fund Structuring and Compliance',
    description: 'Atlas Corporate Services helps businesses establish and manage entities in the DIFC. Expert company setup, fund structuring, family office services and compliance support in Dubai.',
  },
  {
    path: '/services',
    title: `Corporate Services for DIFC Companies${SUFFIX}`,
    description: "Explore Atlas's full suite of DIFC corporate services: company setup, family offices, fund formation, prescribed companies, compliance, accounting and more.",
  },
  {
    path: '/contact',
    title: `Contact Atlas Corporate Services | DIFC Advisory${SUFFIX}`,
    description: 'Get in touch with Atlas Corporate Services. Our DIFC specialists are ready to discuss company formation, fund setup, family office structuring and compliance support.',
  },
  {
    path: '/blog',
    title: `DIFC Insights and Regulatory Updates | Atlas Blog${SUFFIX}`,
    description: 'Expert commentary on DIFC regulations, UAE corporate tax, family office structuring, fund regulations and the wider GCC financial services landscape.',
  },
  {
    path: '/insights',
    title: `Resource Library | DIFC Guides and Regulatory Handbooks${SUFFIX}`,
    description: 'Practical guides and handbooks covering DIFC entity types, economic substance, UAE corporate tax and family office structuring — written by Atlas specialists.',
  },

  // ── Service pages ────────────────────────────────────────────────────────────
  {
    path: '/service/difc-company-setup',
    title: `DIFC Company Setup | Formation and Licensing${SUFFIX}`,
    description: 'Set up your company in the Dubai International Financial Centre with Atlas. Full company formation, licensing, registered office and ongoing compliance support for DIFC entities.',
  },
  {
    path: '/service/family-office-setup',
    title: `DIFC Family Office Setup | Structuring and Governance${SUFFIX}`,
    description: 'Establish a regulated family office in the DIFC with Atlas. Expert structuring, licensing, governance and ongoing compliance support for single and multi-family offices in Dubai.',
  },
  {
    path: '/service/fund-setup',
    title: `DIFC Fund Setup | Fund Structuring and Registration${SUFFIX}`,
    description: 'Register and structure your investment fund in the DIFC with Atlas. Specialist support for exempt funds, qualified investor funds and fund management company setup in Dubai.',
  },
  {
    path: '/service/fund-spv-support',
    title: `DIFC Fund and SPV Support | Administration and Governance${SUFFIX}`,
    description: 'Ongoing fund administration, SPV management and governance support for DIFC-registered vehicles. Atlas provides expert back-office and compliance services for fund managers.',
  },
  {
    path: '/service/residency-banking-concierge',
    title: `UAE Residency and Banking Concierge | DIFC Entity Support${SUFFIX}`,
    description: 'Secure UAE residency visas and open corporate bank accounts for your DIFC entity. Atlas provides end-to-end residency and banking support for founders and key personnel.',
  },
  {
    path: '/service/difc-foundations',
    title: `DIFC Foundation Setup | Wealth Structuring and Succession${SUFFIX}`,
    description: 'Establish a DIFC Foundation for wealth preservation, succession planning and charitable purposes. Atlas handles the full setup, governance documentation and ongoing compliance.',
  },
  {
    path: '/service/difc-prescribed-company-spv',
    title: `DIFC Prescribed Company (SPV) | Holding Structure Setup${SUFFIX}`,
    description: 'Set up a DIFC Prescribed Company for use as a holding structure, SPV or co-investment vehicle. Atlas manages the full registration and ongoing administration process.',
  },
  {
    path: '/service/company-secretarial-governance',
    title: `Company Secretarial and Governance Services | DIFC${SUFFIX}`,
    description: 'Comprehensive company secretarial and governance support for DIFC-registered entities. Atlas handles board meetings, statutory filings, UBO registers and regulatory correspondence.',
  },
  {
    path: '/service/compliance-economic-substance',
    title: `DIFC Compliance and Economic Substance Services${SUFFIX}`,
    description: 'Stay compliant with DIFC regulations and UAE economic substance requirements. Atlas provides AML compliance, ESR assessments, regulatory reporting and governance advisory.',
  },
  {
    path: '/service/accounting-tax',
    title: `DIFC Accounting and Tax Services | VAT, Corporate Tax and Audit${SUFFIX}`,
    description: 'Expert accounting, bookkeeping and tax compliance services for DIFC companies. Atlas manages UAE corporate tax filings, VAT returns, financial statements and audit coordination.',
  },

  // ── Blog posts ───────────────────────────────────────────────────────────────
  {
    path: '/blog/difc-2026-fund-regulations',
    title: `DIFC 2026: New Fund Regulations and What They Mean for Asset Managers${SUFFIX}`,
    description: 'The DIFC Authority has introduced significant updates to its fund regulations framework in 2026. We examine the key changes and what they mean for asset managers in the centre.',
    ogType: 'article',
  },
  {
    path: '/blog/family-office-difc-2026-guide',
    title: `Setting Up a Family Office in DIFC: The 2026 Complete Guide${SUFFIX}`,
    description: 'Everything you need to know about establishing a family office in the DIFC in 2026 — entity types, licensing, governance, costs and the key advantages of the Dubai jurisdiction.',
    ogType: 'article',
  },
  {
    path: '/blog/uae-corporate-tax-year-end-checklist',
    title: `UAE Corporate Tax Year-End Checklist for DIFC Companies${SUFFIX}`,
    description: 'A practical checklist for DIFC companies approaching their UAE Corporate Tax year-end. Covers qualifying free zone status, transfer pricing, filing deadlines and key elections.',
    ogType: 'article',
  },
  {
    path: '/blog/adgm-vs-difc-2026',
    title: `ADGM vs DIFC: Which Financial Free Zone Is Right for Your Business in 2026?${SUFFIX}`,
    description: 'An objective comparison of ADGM and DIFC for businesses choosing a UAE financial free zone in 2026, covering regulation, costs, entity types, banking and strategic considerations.',
    ogType: 'article',
  },
  {
    path: '/blog/difc-prescribed-companies-structuring',
    title: `Using DIFC Prescribed Companies for Investment Structuring${SUFFIX}`,
    description: 'A practical guide to DIFC Prescribed Companies (PCs) — what they are, how they are used for investment holding and SPV structures, and how to establish one with Atlas.',
    ogType: 'article',
  },
  {
    path: '/blog/difc-foundations-wealth-protection',
    title: `DIFC Foundations: The Complete Guide to Wealth Protection and Legacy Planning${SUFFIX}`,
    description: 'An in-depth guide to DIFC Foundations — their legal structure, key advantages for wealth protection, succession planning, how they compare to trusts and how to establish one.',
    ogType: 'article',
  },

  // ── Insight articles ─────────────────────────────────────────────────────────
  {
    path: '/insights/difc-101',
    title: `DIFC 101: A Complete Guide to the Dubai International Financial Centre${SUFFIX}`,
    description: 'Everything you need to know about the DIFC, including its legal framework, entity types, regulatory environment and why businesses choose Dubai\'s premier financial hub.',
    ogType: 'article',
  },
  {
    path: '/insights/prescribed-company-handbook',
    title: `DIFC Prescribed Company Handbook${SUFFIX}`,
    description: 'A comprehensive handbook covering DIFC Prescribed Companies: qualifying criteria, uses for investment holding and SPVs, formation process, costs and ongoing obligations.',
    ogType: 'article',
  },
  {
    path: '/insights/economic-substance-guide',
    title: `UAE Economic Substance Regulations: A Complete Guide for DIFC Entities${SUFFIX}`,
    description: 'A practical guide to UAE Economic Substance Regulations for DIFC entities — scope, relevant activities, substance requirements, reporting obligations and penalties for non-compliance.',
    ogType: 'article',
  },
  {
    path: '/insights/uae-corporate-tax-overview',
    title: `UAE Corporate Tax: A Complete Overview for DIFC Companies${SUFFIX}`,
    description: 'A comprehensive guide to UAE Corporate Tax for DIFC-registered entities, covering registration, qualifying free zone person status, exempt income and filing obligations.',
    ogType: 'article',
  },
];

// ─── Meta injection helper ────────────────────────────────────────────────────

function esc(str) {
  // Escape characters that could break HTML attribute values
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMeta(html, route) {
  const { title, description, path: routePath, ogType = 'website' } = route;
  const canonical = `${BASE_URL}${routePath === '/' ? '' : routePath}`;
  const safeTitle = esc(title);
  const safeDesc  = esc(description);
  const safeCanon = esc(canonical);

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${safeTitle}</title>`,
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${safeDesc}"`,
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${safeCanon}"`,
  );

  // Replace OG title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${safeTitle}"`,
  );

  // Replace OG description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${safeDesc}"`,
  );

  // Replace OG URL
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${safeCanon}"`,
  );

  // Replace OG type
  html = html.replace(
    /<meta property="og:type" content="[^"]*"/,
    `<meta property="og:type" content="${esc(ogType)}"`,
  );

  return html;
}

// ─── Main prerender loop ──────────────────────────────────────────────────────

const templateHtml = fs.readFileSync(indexPath, 'utf-8');
let   count = 0;

for (const route of routes) {
  const html = injectMeta(templateHtml, route);

  let outputPath;
  if (route.path === '/') {
    // Overwrite root index.html with homepage meta
    outputPath = indexPath;
  } else {
    // Create /path/to/route/index.html
    const relDir = route.path.replace(/^\//, '');
    const outDir = path.join(distDir, relDir);
    fs.mkdirSync(outDir, { recursive: true });
    outputPath = path.join(outDir, 'index.html');
  }

  fs.writeFileSync(outputPath, html, 'utf-8');
  count++;
  console.log(`  ✓  ${route.path}`);
}

console.log(`\n🚀  Pre-rendered ${count} routes to ${distDir}\n`);
