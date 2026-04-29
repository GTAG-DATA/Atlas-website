import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const SITE_NAME = 'Atlas Corporate Services';
const BASE_URL = 'https://www.atlascorp.ae';
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

// ── WebSite schema — triggers Google Sitelinks & search box ──────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Atlas Corporate Services",
  "url": "https://www.atlascorp.ae",
  "description": "DIFC company formation, fund structuring, family office setup and compliance services in Dubai.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.atlascorp.ae/services?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ── Organisation schema ───────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atlas Corporate Services",
  "url": "https://www.atlascorp.ae",
  "logo": "https://www.atlascorp.ae/logo.png",
  "description": "Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup, compliance and ongoing corporate governance in Dubai.",
  "email": "info@atlascorp.ae",
  "telephone": "+971529798302",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GV-00-10-03-BC09, Level 3, Gate Village Building 10",
    "addressLocality": "DIFC, Dubai",
    "addressCountry": "AE"
  },
  "areaServed": ["AE", "GB", "US", "SG", "IN"],
  "sameAs": [
    "https://www.instagram.com/atlas.corporate/",
    "https://www.facebook.com/profile.php?id=61572146018529",
    "https://www.linkedin.com/company/atlas-difc/",
    "https://x.com/atlascorpdxb"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971529798302",
    "email": "info@atlascorp.ae",
    "contactType": "customer service",
    "areaServed": "AE",
    "availableLanguage": ["English", "Arabic"]
  }
};

// ── Local Business schema ─────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Atlas Corporate Services",
  "url": "https://www.atlascorp.ae",
  "logo": "https://www.atlascorp.ae/logo.png",
  "image": "https://www.atlascorp.ae/opengraph.jpg",
  "description": "Expert DIFC company formation, fund structuring, family office setup and compliance services in Dubai.",
  "telephone": "+971529798302",
  "email": "info@atlascorp.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "GV-00-10-03-BC09, Level 3, Gate Village Building 10",
    "addressLocality": "DIFC, Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": "Dubai International Financial Centre",
  "priceRange": "$$$$"
};

// ── SiteNavigationElement — tells Google your key pages ──────────────────────
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Atlas Corporate Services — Key Pages",
  "itemListElement": [
    { "@type": "SiteNavigationElement", "position": 1, "name": "DIFC Company Setup",               "url": "https://www.atlascorp.ae/service/difc-company-setup" },
    { "@type": "SiteNavigationElement", "position": 2, "name": "Family Office Setup",              "url": "https://www.atlascorp.ae/service/family-office-setup" },
    { "@type": "SiteNavigationElement", "position": 3, "name": "Fund Setup",                       "url": "https://www.atlascorp.ae/service/fund-setup" },
    { "@type": "SiteNavigationElement", "position": 4, "name": "DIFC Foundations",                 "url": "https://www.atlascorp.ae/service/difc-foundations" },
    { "@type": "SiteNavigationElement", "position": 5, "name": "DIFC Prescribed Company (SPV)",    "url": "https://www.atlascorp.ae/service/difc-prescribed-company-spv" },
    { "@type": "SiteNavigationElement", "position": 6, "name": "Compliance & Economic Substance",  "url": "https://www.atlascorp.ae/service/compliance-economic-substance" },
    { "@type": "SiteNavigationElement", "position": 7, "name": "Contact Us",                       "url": "https://www.atlascorp.ae/contact" },
    { "@type": "SiteNavigationElement", "position": 8, "name": "Insights & Guides",                "url": "https://www.atlascorp.ae/insights" },
  ]
};

export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  schema,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  // Always use trailing slash to match CF Pages served URL (avoids 308 redirect loop with Google)
  const normalizedCanonical = canonical
    ? (canonical === '/' ? '/' : canonical.endsWith('/') ? canonical : `${canonical}/`)
    : undefined;
  const canonicalUrl = normalizedCanonical ? `${BASE_URL}${normalizedCanonical}` : undefined;

  const schemas = [
    organizationSchema,
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />

      {/* Structured Data (JSON-LD) */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
