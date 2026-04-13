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

// ── Shared Organisation schema (reused on every page) ─────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atlas Corporate Services",
  "url": "https://www.atlascorp.ae",
  "logo": "https://www.atlascorp.ae/assets/logo-D-IPHjNp.png",
  "description": "Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup, compliance and ongoing corporate governance in Dubai.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "areaServed": ["AE", "GB", "US", "SG", "IN"],
  "sameAs": [
    "https://www.linkedin.com/company/atlas-corporate-services"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
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
  "logo": "https://www.atlascorp.ae/assets/logo-D-IPHjNp.png",
  "image": "https://www.atlascorp.ae/opengraph.jpg",
  "description": "Expert DIFC company formation, fund structuring, family office setup and compliance services in Dubai.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.2048",
    "longitude": "55.2708"
  },
  "areaServed": "Dubai International Financial Centre",
  "priceRange": "$$$$"
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
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  // Always include organisation schema + any page-specific schema
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
