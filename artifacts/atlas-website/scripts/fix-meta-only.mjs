/**
 * fix-meta-only.mjs
 *
 * Patches <head> SEO tags in dist-production HTML files WITHOUT touching
 * any page body content. Safe to run repeatedly — idempotent.
 *
 * Fixes:
 *   - Removes maximum-scale=1 from viewport
 *   - Adds theme-color + apple-touch-icon
 *   - Replaces all SEO meta/link/script tags with a clean single set
 *   - Eliminates duplicate canonical / description issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.resolve(__dirname, '../dist-production');

const BASE_URL  = 'https://www.atlascorp.ae';
const SITE_NAME = 'Atlas Corporate Services';
const SUFFIX    = ` | ${SITE_NAME}`;

// ─── Route manifest ──────────────────────────────────────────────────────────
const routes = [
  { path: '/', file: 'index.html',
    title: 'Atlas Corporate Services | DIFC Company Setup, Fund Structuring and Compliance',
    description: 'Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup and compliance support in Dubai.',
  },
  { path: '/services', file: 'services/index.html',
    title: `Corporate Services for DIFC Companies${SUFFIX}`,
    description: "Explore Atlas's full suite of DIFC corporate services: company setup, family offices, fund formation, prescribed companies, compliance, accounting and more.",
  },
  { path: '/contact', file: 'contact/index.html',
    title: `Contact Atlas Corporate Services | DIFC Advisory${SUFFIX}`,
    description: 'Get in touch with Atlas Corporate Services. Our DIFC specialists are ready to discuss company formation, fund setup, family office structuring and compliance support.',
  },
  { path: '/blog', file: 'blog/index.html',
    title: `DIFC Insights and Regulatory Updates | Atlas Blog${SUFFIX}`,
    description: 'Expert commentary on DIFC regulations, UAE corporate tax, family office structuring, fund regulations and the wider GCC financial services landscape.',
  },
  { path: '/insights', file: 'insights/index.html',
    title: `Resource Library | DIFC Guides and Regulatory Handbooks${SUFFIX}`,
    description: 'Practical guides and handbooks covering DIFC entity types, economic substance, UAE corporate tax and family office structuring — written by Atlas specialists.',
  },
  { path: '/service/difc-company-setup', file: 'service/difc-company-setup/index.html',
    title: `DIFC Company Setup | Formation and Licensing${SUFFIX}`,
    description: 'Set up your company in the Dubai International Financial Centre with Atlas. Full company formation, licensing, registered office and ongoing compliance support for DIFC entities.',
  },
  { path: '/service/family-office-setup', file: 'service/family-office-setup/index.html',
    title: `DIFC Family Office Setup | Structuring and Governance${SUFFIX}`,
    description: 'Establish a regulated family office in the DIFC with Atlas. Expert structuring, licensing, governance and ongoing compliance support for single and multi-family offices in Dubai.',
  },
  { path: '/service/fund-setup', file: 'service/fund-setup/index.html',
    title: `DIFC Fund Setup | Fund Structuring and Registration${SUFFIX}`,
    description: 'Register and structure your investment fund in the DIFC with Atlas. Specialist support for exempt funds, qualified investor funds and fund management company setup in Dubai.',
  },
  { path: '/service/fund-spv-support', file: 'service/fund-spv-support/index.html',
    title: `DIFC Fund and SPV Support | Administration and Governance${SUFFIX}`,
    description: 'Ongoing fund administration, SPV management and governance support for DIFC-registered vehicles. Atlas provides expert back-office and compliance services for fund managers.',
  },
  { path: '/service/residency-banking-concierge', file: 'service/residency-banking-concierge/index.html',
    title: `UAE Residency and Banking Concierge | DIFC Entity Support${SUFFIX}`,
    description: 'Secure UAE residency visas and open corporate bank accounts for your DIFC entity. Atlas provides end-to-end residency and banking support for founders and key personnel.',
  },
  { path: '/service/difc-foundations', file: 'service/difc-foundations/index.html',
    title: `DIFC Foundation Setup | Wealth Structuring and Succession${SUFFIX}`,
    description: 'Establish a DIFC Foundation for wealth preservation, succession planning and charitable purposes. Atlas handles the full setup, governance documentation and ongoing compliance.',
  },
  { path: '/service/difc-prescribed-company-spv', file: 'service/difc-prescribed-company-spv/index.html',
    title: `DIFC Prescribed Company (SPV) | Holding Structure Setup${SUFFIX}`,
    description: 'Set up a DIFC Prescribed Company for use as a holding structure, SPV or co-investment vehicle. Atlas manages the full registration and ongoing administration process.',
  },
  { path: '/service/company-secretarial-governance', file: 'service/company-secretarial-governance/index.html',
    title: `Company Secretarial and Governance Services | DIFC${SUFFIX}`,
    description: 'Comprehensive company secretarial and governance support for DIFC-registered entities. Atlas handles board meetings, statutory filings, UBO registers and regulatory correspondence.',
  },
  { path: '/service/compliance-economic-substance', file: 'service/compliance-economic-substance/index.html',
    title: `DIFC Compliance and Economic Substance Services${SUFFIX}`,
    description: 'Stay compliant with DIFC regulations and UAE economic substance requirements. Atlas provides AML compliance, ESR assessments, regulatory reporting and governance advisory.',
  },
  { path: '/service/accounting-tax', file: 'service/accounting-tax/index.html',
    title: `DIFC Accounting and Tax Services | VAT, Corporate Tax and Audit${SUFFIX}`,
    description: 'Expert accounting, bookkeeping and tax compliance services for DIFC companies. Atlas manages UAE corporate tax filings, VAT returns, financial statements and audit coordination.',
  },
  { path: '/blog/difc-2026-fund-regulations', file: 'blog/difc-2026-fund-regulations/index.html',
    title: `DIFC 2026: New Fund Regulations and What They Mean for Asset Managers${SUFFIX}`,
    description: 'The DIFC Authority has introduced significant updates to its fund regulations framework in 2026. We examine the key changes and what they mean for asset managers in the centre.',
    ogType: 'article',
  },
  { path: '/blog/family-office-difc-2026-guide', file: 'blog/family-office-difc-2026-guide/index.html',
    title: `Setting Up a Family Office in DIFC: The 2026 Complete Guide${SUFFIX}`,
    description: 'Everything you need to know about establishing a family office in the DIFC in 2026 — entity types, licensing, governance, costs and the key advantages of the Dubai jurisdiction.',
    ogType: 'article',
  },
  { path: '/blog/uae-corporate-tax-year-end-checklist', file: 'blog/uae-corporate-tax-year-end-checklist/index.html',
    title: `UAE Corporate Tax Year-End Checklist for DIFC Companies${SUFFIX}`,
    description: 'A practical checklist for DIFC companies approaching their UAE Corporate Tax year-end. Covers qualifying free zone status, transfer pricing, filing deadlines and key elections.',
    ogType: 'article',
  },
  { path: '/blog/adgm-vs-difc-2026', file: 'blog/adgm-vs-difc-2026/index.html',
    title: `ADGM vs DIFC: Which Financial Free Zone Is Right for Your Business in 2026?${SUFFIX}`,
    description: 'An objective comparison of ADGM and DIFC for businesses choosing a UAE financial free zone in 2026, covering regulation, costs, entity types, banking and strategic considerations.',
    ogType: 'article',
  },
  { path: '/blog/difc-prescribed-companies-structuring', file: 'blog/difc-prescribed-companies-structuring/index.html',
    title: `Using DIFC Prescribed Companies for Investment Structuring${SUFFIX}`,
    description: 'A practical guide to DIFC Prescribed Companies (PCs) — what they are, how they are used for investment holding and SPV structures, and how to establish one with Atlas.',
    ogType: 'article',
  },
  { path: '/blog/difc-foundations-wealth-protection', file: 'blog/difc-foundations-wealth-protection/index.html',
    title: `DIFC Foundations: The Complete Guide to Wealth Protection and Legacy Planning${SUFFIX}`,
    description: 'An in-depth guide to DIFC Foundations — their legal structure, key advantages for wealth protection, succession planning, how they compare to trusts and how to establish one.',
    ogType: 'article',
  },
  { path: '/insights/difc-101', file: 'insights/difc-101/index.html',
    title: `DIFC 101: The Complete Guide for 2026${SUFFIX}`,
    description: "Everything you need to know about the Dubai International Financial Centre: its legal framework, entity types, costs, and why it remains the jurisdiction of choice for international businesses.",
    ogType: 'article',
  },
  { path: '/insights/prescribed-company', file: 'insights/prescribed-company/index.html',
    title: `DIFC Prescribed Company (SPV) Handbook 2026${SUFFIX}`,
    description: 'Everything fund managers, family offices, and investors need to know about structuring a cost-effective special purpose vehicle in the DIFC, including eligibility, costs, and ongoing compliance.',
    ogType: 'article',
  },
  { path: '/insights/economic-substance', file: 'insights/economic-substance/index.html',
    title: `Economic Substance Regulations: Complete Compliance Guide 2026${SUFFIX}`,
    description: 'Who must comply, what the substance test requires, filing deadlines, and penalties for non-compliance. A practical guide for all DIFC-registered entities in 2026.',
    ogType: 'article',
  },
  { path: '/insights/corporate-tax', file: 'insights/corporate-tax/index.html',
    title: `UAE Corporate Tax: What DIFC Businesses Must Know in 2026${SUFFIX}`,
    description: 'The qualifying free zone person regime, qualifying income, registration obligations, transfer pricing rules, and key 2026 filing deadlines for DIFC entities.',
    ogType: 'article',
  },
  { path: '/insights/innovation-licence', file: 'insights/innovation-licence/index.html',
    title: `DIFC Innovation Licence Guide 2026${SUFFIX}`,
    description: 'A complete guide to the DIFC Innovation Licence for technology and fintech businesses: eligibility, costs, the Innovation Testing Licence, and the DFSA regulatory pathway.',
    ogType: 'article',
  },
];

// ─── Organization schema (injected on every page) ─────────────────────────────
const orgSchema = {"@context":"https://schema.org","@type":"Organization","name":"Atlas Corporate Services","url":"https://www.atlascorp.ae","logo":"https://www.atlascorp.ae/assets/logo-D-IPHjNp.png","description":"Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup, compliance and ongoing corporate governance in Dubai.","address":{"@type":"PostalAddress","addressLocality":"Dubai","addressCountry":"AE"},"areaServed":["AE","GB","US","SG","IN"],"sameAs":["https://www.linkedin.com/company/atlas-corporate-services"],"contactPoint":{"@type":"ContactPoint","contactType":"customer service","areaServed":"AE","availableLanguage":["English","Arabic"]}};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function patchHead(html, route) {
  const { title, description, path: rPath, ogType = 'website' } = route;
  const canonical = `${BASE_URL}${rPath}`;
  const t = esc(title), d = esc(description), c = esc(canonical);

  // 1. Fix viewport — remove maximum-scale restriction
  html = html.replace(
    /content="width=device-width,\s*initial-scale=1\.0,\s*maximum-scale=\d+"/,
    'content="width=device-width, initial-scale=1.0"'
  );

  // 2. Replace <title> (handles existing data-rh attribute or plain tag)
  html = html.replace(/<title[^>]*>[^<]*<\/title>/, `<title>${t}</title>`);

  // 3. Strip ALL existing SEO tags (order-independent — handles data-rh reordering)
  html = html
    .replace(/<meta\s[^>]*name="description"[^>]*\/?>/gi, '')
    .replace(/<link\s[^>]*rel="canonical"[^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*property="og:[^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*name="twitter:[^>]*\/?>/gi, '')
    .replace(/<meta\s[^>]*name="theme-color"[^>]*\/?>/gi, '')
    .replace(/<link\s[^>]*rel="apple-touch-icon"[^>]*\/?>/gi, '')
    .replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // 4. Build clean SEO block and inject before </head>
  const seoBlock = `
  <meta name="theme-color" content="#0c1e24" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <meta name="description" content="${d}" />
  <link rel="canonical" href="${c}" />
  <meta property="og:title" content="${t}" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${c}" />
  <meta property="og:type" content="${esc(ogType)}" />
  <meta property="og:image" content="${BASE_URL}/opengraph.jpg" />
  <meta property="og:site_name" content="${esc(SITE_NAME)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t}" />
  <meta name="twitter:description" content="${d}" />
  <meta name="twitter:image" content="${BASE_URL}/opengraph.jpg" />
  <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`;

  html = html.replace('</head>', `${seoBlock}\n  </head>`);
  return html;
}

// ─── Patch each route ─────────────────────────────────────────────────────────
let patched = 0;
let skipped = 0;

for (const route of routes) {
  const filePath = path.join(distDir, route.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  Not found, skipping: ${route.file}`);
    skipped++;
    continue;
  }
  const original = fs.readFileSync(filePath, 'utf-8');
  const updated  = patchHead(original, route);
  fs.writeFileSync(filePath, updated, 'utf-8');
  patched++;
  console.log(`  ✓  ${route.path}`);
}

// Also patch 404.html if it exists (copy of index.html)
const notFoundPath = path.join(distDir, '404.html');
if (fs.existsSync(notFoundPath)) {
  const homeRoute = routes.find(r => r.path === '/');
  const html = fs.readFileSync(notFoundPath, 'utf-8');
  fs.writeFileSync(notFoundPath, patchHead(html, homeRoute), 'utf-8');
  console.log(`  ✓  /404.html`);
}

console.log(`\n✅  Patched ${patched} files (${skipped} skipped) — page body content unchanged\n`);
