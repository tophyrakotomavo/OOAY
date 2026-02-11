export const SITE_NAME = "OOAY";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://ooay.vercel.app";

export const DEFAULT_TITLE =
  "OOAY | Matieres premieres d'exception pour creations culinaires";
export const DEFAULT_DESCRIPTION =
  "OOAY propose des matieres premieres artisanales d'exception pour sublimer vos creations culinaires.";
export const DEFAULT_OG_IMAGE = "/imageGalerie/Sac.png";

export const KEYWORDS = [
  "OOAY",
  "matieres premieres",
  "ingredients artisanaux",
  "creations culinaires",
  "artisanat malgache",
  "produits naturels",
  "galerie produits",
  "contact fournisseur",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-ooay.ico`,
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "FR",
      availableLanguage: ["French"],
      url: `${SITE_URL}/contact`,
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr",
};
