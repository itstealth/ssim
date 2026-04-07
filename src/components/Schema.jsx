export function OrganizationSchema({
  name = "Siva Sivani Institute of Management",
  url = "https://www.ssim.ac.in",
  logo = "https://www.ssim.ac.in/ssimlogo.webp",
  description = "SSIM Hyderabad offers AICTE-approved PGDM programs, strong placements, industry tie-ups, and modern infrastructure among top private B schools in Hyderabad.",
  address = {
    streetAddress: "NH 44, Kompally",
    addressLocality: "Secunderabad",
    addressRegion: "Telangana",
    postalCode: "500100",
    addressCountry: "IN",
  },
  contactPoint = {
    telephone: "+91-9391114948",
    contactType: "Admissions",
    email: "admissions@ssim.ac.in",
  },
  sameAs = [
    "https://www.facebook.com/ssimhyd",
    "https://www.linkedin.com/school/ssim-hyderabad",
    "https://twitter.com/ssimhyd",
  ],
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
    sameAs,
    foundingDate: "1992",
    legalName: "Siva Sivani Institute of Management",
    alternateName: "SSIM",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({
  name,
  description,
  provider = {
    name: "Siva Sivani Institute of Management",
    url: "https://www.ssim.ac.in",
  },
  courseCode,
  educationalCredentialAwarded = "Post Graduate Diploma in Management",
  timeRequired = "P2Y",
  coursePrerequisites = "Bachelor's degree",
  url,
  image = "https://www.ssim.ac.in/ssimlogo.webp",
  aggregateRating,
  offers,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "EducationalOrganization",
      ...provider,
    },
    courseCode,
    educationalCredentialAwarded,
    timeRequired,
    coursePrerequisites,
    url,
    image,
    ...(aggregateRating && { aggregateRating }),
    ...(offers && { offers }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = {
    "@type": "Organization",
    name: "Siva Sivani Institute of Management",
  },
  publisher = {
    "@type": "Organization",
    name: "Siva Sivani Institute of Management",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ssim.ac.in/ssimlogo.webp",
    },
  },
  url,
  articleBody,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: image || "https://www.ssim.ac.in/ssimlogo.webp",
    datePublished,
    dateModified: dateModified || datePublished,
    author,
    publisher,
    url,
    ...(articleBody && { articleBody }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ItemListSchema({
  name,
  description,
  itemListElement,
  url,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    itemListElement,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CollectionPageSchema({
  name,
  description,
  url,
  mainEntity,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}) {
  return {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
  };
}

export function OfferSchema({
  price,
  priceCurrency = "INR",
  availability = "https://schema.org/InStock",
  url,
  validFrom,
  validThrough,
}) {
  return {
    "@type": "Offer",
    price,
    priceCurrency,
    availability,
    url,
    validFrom,
    validThrough,
  };
}

// WebSite Schema - for the whole website
export function WebSiteSchema({
  name = "Siva Sivani Institute of Management",
  url = "https://www.ssim.ac.in",
  searchActionTarget = "https://www.ssim.ac.in/search?q={search_term_string}",
}) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: searchActionTarget,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema - for blog pages
export function ArticleSchema({
  headline,
  image,
  author = {
    "@type": "Organization",
    name: "Siva Sivani Institute of Management",
  },
  publisher = {
    "@type": "Organization",
    name: "Siva Sivani Institute of Management",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ssim.ac.in/ssimlogo.webp",
    },
  },
  datePublished,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    image: image || "https://www.ssim.ac.in/ssimlogo.webp",
    author,
    publisher,
    datePublished,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema - for pages with breadcrumbs
export function BreadcrumbListSchema({ itemListElement = [] }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item || item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQPage Schema - for FAQ pages
export function FAQPageSchema({ mainEntity = [] }) {
  // If mainEntity is a single object, convert to array
  const questions = Array.isArray(mainEntity) ? mainEntity : [mainEntity];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.name || faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.text || faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CustomSchema({ schema }) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


