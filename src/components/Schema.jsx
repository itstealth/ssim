// Rich homepage @graph schema — CollegeOrUniversity + WebSite combined
const homepageGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "CollegeOrUniversity",
        "EducationalOrganization",
        "LocalBusiness",
        "Organization",
      ],
      "@id": "https://ssim.ac.in/#organization",
      name: "Siva Sivani Institute of Management",
      alternateName: "SSIM Hyderabad",
      url: "https://ssim.ac.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://ssim.ac.in/ssimlogo.webp",
      },
      image: ["https://ssim.ac.in/banner.png", "https://ssim.ac.in/ssimlogo.webp"],
      description:
        "Siva Sivani Institute of Management (SSIM) is an AICTE-approved autonomous business school in Hyderabad offering PGDM, PGDM BA, PGDM BIFS, FPM and EFPM programs with strong industry integration, placements, and management education excellence.",
      telephone: "+91-9391114948",
      email: "admissions@ssim.ac.in",
      foundingDate: "1992",
      address: {
        "@type": "PostalAddress",
        streetAddress: "NH 44, Kompally",
        addressLocality: "Secunderabad",
        addressRegion: "Telangana",
        postalCode: "500100",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.5457",
        longitude: "78.4867",
      },
      areaServed: {
        "@type": "State",
        name: "Telangana",
      },
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "S. P. Sampathy's Siva Sivani Educational Society",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "AICTE Approved",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "NBA Accredited",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "NAAC Accredited",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "SAQS Accredited",
        },
      ],
      department: [
        { "@type": "EducationalOrganization", name: "PGDM" },
        { "@type": "EducationalOrganization", name: "PGDM Business Analytics" },
        {
          "@type": "EducationalOrganization",
          name: "PGDM Banking Insurance and Financial Services",
        },
        { "@type": "EducationalOrganization", name: "FPM" },
        { "@type": "EducationalOrganization", name: "EFPM" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Admissions",
          telephone: "+91-9391114948",
          email: "admissions@ssim.ac.in",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Telugu"],
        },
        {
          "@type": "ContactPoint",
          contactType: "Placements",
          telephone: "+91-9133305060",
          email: "placements@ssim.ac.in",
          areaServed: "IN",
        },
      ],
      knowsAbout: [
        "Management Education",
        "PGDM",
        "Business Analytics",
        "Finance",
        "Marketing",
        "Human Resources",
        "Banking and Financial Services",
        "Leadership",
        "Corporate Management",
      ],
      keywords: [
        "Top B School Hyderabad",
        "PGDM College Hyderabad",
        "Business School Telangana",
        "AICTE Approved PGDM",
        "Management Institute Hyderabad",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      priceRange: "₹₹₹",
    },
    {
      "@type": "WebSite",
      "@id": "https://ssim.ac.in/#website",
      url: "https://ssim.ac.in/",
      name: "SSIM Hyderabad",
      publisher: {
        "@id": "https://ssim.ac.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://ssim.ac.in/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function HomepageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraphSchema) }}
    />
  );
}

// Backward-compat alias (kept so other pages importing OrganizationSchema don't break)
export function OrganizationSchema() {
  return <HomepageSchema />;
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


