import JobDetails from './JobDetails';

export const metadata = {
  title: 'Professor of Marketing Jobs at SSIM | Apply Now',
  description: 'Join SSIM as Professor of Marketing. AICTE-approved autonomous B-School in Secunderabad. Competitive salary, research support. Apply to director@ssim.ac.in',
  keywords: 'professor marketing jobs, SSIM careers, marketing faculty position, Secunderabad business school jobs',
};

// JSON-LD Schema for Job Posting
const jobPostingSchema = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Professor of Marketing",
  "description": "Full-time Professor position in Marketing at Siva Sivani Institute of Management",
  "identifier": {
    "@type": "PropertyValue",
    "name": "SSIM",
    "value": "SSIM/Recruit/Faculty/Marketing/2025-26"
  },
  "datePosted": "2025-12-14",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "EducationalOrganization",
    "name": "Siva Sivani Institute of Management",
    "sameAs": "https://ssim.ac.in",
    "logo": "https://ssim.ac.in/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kompally",
      "addressLocality": "Secunderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "value": "As per AICTE norms",
      "unitText": "YEAR"
    }
  },
  "qualifications": "MBA with minimum 60% marks and Ph.D. in Marketing from reputed Institution. 10 research publications in ABDC/SCOPUS/WoS indexed journals. Minimum 10 years of cumulative experience.",
  "responsibilities": "Lead and teach core and elective Marketing courses at Post-Graduate level. Mentor junior faculty and Ph.D. scholars. Maintain active research program.",
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": "IN"
  }
};

export default function ProfessorMarketingCareer() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <JobDetails />
    </>
  );
}
