const presentation = "/programs/presentation.png";
const industry = "/programs/industrial-revolution.png";
const experiential = "/programs/seminar.png";
const pulse = "/programs/market.png";
const bookreview = "/programs/ratings.png";
const social = "/programs/share.png";
const industryreview = "/programs/industry.png";
const companyreview = "/programs/marketing.png";
const independent = "/programs/studying.png";
const article = "/programs/search.png";
const trainning = "/programs/thought-leadership.png";
const project = "/programs/project.png";
const internship = "/programs/working-man.png";
const certification = "/programs/online-learning.png";
const viva = "/programs/meeting.png";
const budget = "/programs/budget.png";
const partners = "/programs/partners.png";
const shopping = "/programs/shopping-online.png";
const economics = "/programs/economics.png";
const performance = "/programs/performance.png";
const planning = "/programs/planning.png";
const teaching = "/programs/teaching.png";

export const programData = {
  "fpm/efpm": {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Fellow Program in Management (FPM) / Executive Fellow Program in Management (EFPM)",
      "description": "FPM / EFPM at Siva Sivani Institute of Management (SSIM) is a doctoral-level management program designed to develop advanced research skills in business and management domains. The 3-year program focuses on interdisciplinary research, academic excellence, and industry-relevant problem solving. It prepares scholars for careers in academia, consulting, and corporate research roles.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/fpm-efpm",
      "courseCode": "FPM-EFPM",
      "educationalCredentialAwarded": "Fellow Program in Management (Doctoral Level)",
      "courseMode": "Full-time / Executive",
      "timeRequired": "P3Y",
      "numberOfCredits": 45,
      "educationalLevel": "Doctoral",
      "occupationalCategory": "Research, Academia, Management Consulting, Business Research",
      "inLanguage": "en",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time / Part-time (Executive)",
        "startDate": "2026-06",
        "endDate": "2029-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "teaches": [
        "Research Methodology",
        "Advanced Management Theories",
        "Quantitative and Qualitative Research",
        "Organizational Behavior",
        "Finance and Accounting Research",
        "Operations Management",
        "Marketing Research",
        "Strategic Management",
        "Data Analysis for Research"
      ],
      "about": [
        "Doctoral Program in Management",
        "FPM Hyderabad",
        "Executive FPM India",
        "AICTE Approved Doctoral Program",
        "Management Research Program"
      ],
      "keywords": "FPM SSIM, EFPM Hyderabad, Doctoral Program Management India, Fellow Program in Management, Executive PhD in Management India",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "FPM/EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "FPM - 45, EFPM - 36",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree:
        "Fellow Program in Management (FPM) / Executive Fellow Program in Management (EFPM)",
    },
    specializations: [
      {
        title: "Accounting & Finance",
        icon: budget,
      },
      {
        title: "Organizational Behavior / Human Resource",
        icon: partners,
      },
      {
        title: "Marketing",
        icon: shopping,
      },
      {
        title: "Economics",
        icon: economics,
      },
      {
        title: "Operations Management",
        icon: performance,
      },
      {
        title: "General Management",
        icon: teaching,
      },
      {
        title: "Strategic Management",
        icon: planning,
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
    faqs: [
      {
        question: "What is the FPM program at SSIM Hyderabad and what are its key details?",
        answer: "FPM (Fellow Program in Management) at SSIM is a 3-year full-time on-campus AICTE-approved doctoral-level program with 45 academic credits, designed for scholars pursuing careers in teaching, academic research, consulting, and advanced business studies.",
      },
      {
        question: "What is the FPM program at SSIM and how long does it take?",
        answer: "SSIM's FPM is a 3-year full-time AICTE-approved doctoral-level program with a maximum thesis submission window of 5 years. It's built for scholars serious about research, academia, and advanced management thinking.",
      },
      {
        question: "What research domains can FPM scholars specialize in at SSIM?",
        answer: "FPM scholars can specialize in Accounting & Finance, Marketing, Economics, Operations Management, Strategic Management, Organisational Behaviour/HR, and General Management — covering the full spectrum of management research.",
      },
      {
        question: "What is the total fee for FPM at SSIM — and are there any concessions?",
        answer: "The total FPM fee is ₹3,00,000 for the complete program. SSIM alumni receive a 25% fee waiver. Stipend-eligible scholars are exempted from tuition fees and pay only ₹70,000 — making it one of the most affordable doctoral programs available.",
      },
      {
        question: "What stipends does SSIM offer for full-time FPM scholars?",
        answer: "Full-time FPM scholars receive ₹20,000/month (1st year), ₹25,000/month (2nd year), and ₹30,000/month (3rd year) — rewarding serious researchers while supporting their academic journey.",
      },
      {
        question: "What careers open up after completing FPM from SSIM?",
        answer: "FPM graduates move into academia, research institutions, consulting firms, corporate strategy, policy research, and higher education — roles that demand doctoral-level thinking and credibility that a regular MBA cannot provide.",
      },
    ],
  },
  fpm: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Fellow Program in Management (FPM) / Executive Fellow Program in Management (EFPM)",
      "description": "FPM / EFPM at Siva Sivani Institute of Management (SSIM) is a doctoral-level management program designed to develop advanced research skills in business and management domains. The 3-year program focuses on interdisciplinary research, academic excellence, and industry-relevant problem solving. It prepares scholars for careers in academia, consulting, and corporate research roles.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/fpm-efpm",
      "courseCode": "FPM-EFPM",
      "educationalCredentialAwarded": "Fellow Program in Management (Doctoral Level)",
      "courseMode": "Full-time / Executive",
      "timeRequired": "P3Y",
      "numberOfCredits": 45,
      "educationalLevel": "Doctoral",
      "occupationalCategory": "Research, Academia, Management Consulting, Business Research",
      "inLanguage": "en",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time / Part-time (Executive)",
        "startDate": "2026-06",
        "endDate": "2029-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "teaches": [
        "Research Methodology",
        "Advanced Management Theories",
        "Quantitative and Qualitative Research",
        "Organizational Behavior",
        "Finance and Accounting Research",
        "Operations Management",
        "Marketing Research",
        "Strategic Management",
        "Data Analysis for Research"
      ],
      "about": [
        "Doctoral Program in Management",
        "FPM Hyderabad",
        "Executive FPM India",
        "AICTE Approved Doctoral Program",
        "Management Research Program"
      ],
      "keywords": "FPM SSIM, EFPM Hyderabad, Doctoral Program Management India, Fellow Program in Management, Executive PhD in Management India",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "FPM",
    keyInfo: {
      duration: "3 years",
      credits: "45",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM)",
    },
    specializations: [
      {
        title: "Accounting & Finance",
        icon: budget,
      },
      {
        title: "Organizational Behavior / Human Resource",
        icon: partners,
      },
      {
        title: "Marketing",
        icon: shopping,
      },
      {
        title: "Economics",
        icon: economics,
      },
      {
        title: "Operations Management",
        icon: performance,
      },
      {
        title: "General Management",
        icon: teaching,
      },
      {
        title: "Strategic Management",
        icon: planning,
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential,
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation,
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview,
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social,
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview,
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning,
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview,
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship,
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification,
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project,
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article,
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva,
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
    faqs: [
      {
        question: "What is the FPM program at SSIM Hyderabad and what are its key details?",
        answer: "FPM (Fellow Program in Management) at SSIM is a 3-year full-time on-campus AICTE-approved doctoral-level program with 45 academic credits, designed for scholars pursuing careers in teaching, academic research, consulting, and advanced business studies.",
      },
      {
        question: "What is the FPM program at SSIM and how long does it take?",
        answer: "SSIM's FPM is a 3-year full-time AICTE-approved doctoral-level program with a maximum thesis submission window of 5 years. It's built for scholars serious about research, academia, and advanced management thinking.",
      },
      {
        question: "What research domains can FPM scholars specialize in at SSIM?",
        answer: "FPM scholars can specialize in Accounting & Finance, Marketing, Economics, Operations Management, Strategic Management, Organisational Behaviour/HR, and General Management — covering the full spectrum of management research.",
      },
      {
        question: "What is the total fee for FPM at SSIM — and are there any concessions?",
        answer: "The total FPM fee is ₹3,00,000 for the complete program. SSIM alumni receive a 25% fee waiver. Stipend-eligible scholars are exempted from tuition fees and pay only ₹70,000 — making it one of the most affordable doctoral programs available.",
      },
      {
        question: "What stipends does SSIM offer for full-time FPM scholars?",
        answer: "Full-time FPM scholars receive ₹20,000/month (1st year), ₹25,000/month (2nd year), and ₹30,000/month (3rd year) — rewarding serious researchers while supporting their academic journey.",
      },
      {
        question: "What careers open up after completing FPM from SSIM?",
        answer: "FPM graduates move into academia, research institutions, consulting firms, corporate strategy, policy research, and higher education — roles that demand doctoral-level thinking and credibility that a regular MBA cannot provide.",
      },
    ],
  },
  efpm: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Fellow Program in Management (FPM) / Executive Fellow Program in Management (EFPM)",
      "description": "FPM / EFPM at Siva Sivani Institute of Management (SSIM) is a doctoral-level management program designed to develop advanced research skills in business and management domains. The 3-year program focuses on interdisciplinary research, academic excellence, and industry-relevant problem solving. It prepares scholars for careers in academia, consulting, and corporate research roles.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/fpm-efpm",
      "courseCode": "FPM-EFPM",
      "educationalCredentialAwarded": "Fellow Program in Management (Doctoral Level)",
      "courseMode": "Full-time / Executive",
      "timeRequired": "P3Y",
      "numberOfCredits": 45,
      "educationalLevel": "Doctoral",
      "occupationalCategory": "Research, Academia, Management Consulting, Business Research",
      "inLanguage": "en",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time / Part-time (Executive)",
        "startDate": "2026-06",
        "endDate": "2029-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "teaches": [
        "Research Methodology",
        "Advanced Management Theories",
        "Quantitative and Qualitative Research",
        "Organizational Behavior",
        "Finance and Accounting Research",
        "Operations Management",
        "Marketing Research",
        "Strategic Management",
        "Data Analysis for Research"
      ],
      "about": [
        "Doctoral Program in Management",
        "FPM Hyderabad",
        "Executive FPM India",
        "AICTE Approved Doctoral Program",
        "Management Research Program"
      ],
      "keywords": "FPM SSIM, EFPM Hyderabad, Doctoral Program Management India, Fellow Program in Management, Executive PhD in Management India",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "36",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Executive Fellow Program in Management (EFPM)",
    },
    specializations: [
      {
        title: "Accounting & Finance",
        icon: budget,
      },
      {
        title: "Organizational Behavior / Human Resource",
        icon: partners,
      },
      {
        title: "Marketing",
        icon: shopping,
      },
      {
        title: "Economics",
        icon: economics,
      },
      {
        title: "Operations Management",
        icon: performance,
      },
      {
        title: "General Management",
        icon: teaching,
      },
      {
        title: "Strategic Management",
        icon: planning,
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential,
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation,
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview,
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social,
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview,
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning,
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview,
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship,
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification,
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project,
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article,
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva,
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
    faqs: [
      {
        question: "What is the Executive Fellow Program in Management (EFPM) at SSIM?",
        answer: "EFPM at SSIM Hyderabad is an AICTE-approved doctoral-level management program designed specifically for working professionals who want to build expertise in research, academics, consulting, and strategic leadership roles.",
      },
      {
        question: "Who is the SSIM EFPM program really built for?",
        answer: "Not for fresh graduates — EFPM is designed for working executives, consultants, industry professionals, and academicians who want a doctoral credential without pausing their career. If you have 3+ years of experience and a research mindset, EFPM is your next move.",
      },
      {
        question: "Can I complete EFPM while working full-time?",
        answer: "Yes — that's exactly the point. SSIM's EFPM is a 3-year part-time doctoral program structured for busy professionals, with a flexible thesis submission window of up to 5 years under exceptional circumstances.",
      },
      {
        question: "What does EFPM demand from its scholars beyond coursework?",
        answer: "EFPM scholars go beyond classroom learning — you must publish case studies, present research at national/international conferences, and publish papers in SCOPUS/ABDC indexed journals. It's a program that builds your academic reputation, not just your degree.",
      },
      {
        question: "What will EFPM actually change in your career?",
        answer: "EFPM sharpens interdisciplinary research thinking, advanced analytical capabilities, and ethical research practices — opening doors to senior academia, independent consulting, policy roles, and C-suite advisory positions that a regular MBA simply cannot unlock.",
      },
      {
        question: "What is the total fee structure for the EFPM program at SSIM Hyderabad?",
        answer: "The total EFPM fee is ₹4,50,000 for the complete program duration — starting with a non-refundable acceptance fee of ₹60,000, followed by three installments of ₹1,30,000 each, making it a structured and manageable investment for working professionals.",
      },
      {
        question: "Can EFPM scholars at SSIM get a stipend or fee exemption?",
        answer: "Yes. Eligible full-time research scholars receive monthly stipends of ₹20,000 (1st year), ₹25,000 (2nd year), and ₹30,000 (3rd year). Stipend-receiving scholars are exempted from tuition fees and only need to pay ₹70,000 — covering the acceptance fee and refundable security deposit — making it one of the most affordable doctoral programs in Hyderabad.",
      },
    ],
  },
  "pgdm-ba": {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "PGDM in Business Analytics",
      "description": "PGDM in Business Analytics at Siva Sivani Institute of Management (SSIM) is a 2-year full-time postgraduate program designed to build expertise in data-driven decision making, analytics, statistics, machine learning fundamentals and business intelligence. The program combines management education with analytical and technical skills aligned with industry requirements.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/pgdm-ba",
      "courseCode": "PGDM-BA",
      "educationalCredentialAwarded": "Post Graduate Diploma in Management (Business Analytics)",
      "courseMode": "Full-time",
      "timeRequired": "P2Y",
      "numberOfCredits": 120,
      "educationalLevel": "Postgraduate",
      "occupationalCategory": "Business Analytics, Data Analytics, Management",
      "inLanguage": "en",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time",
        "startDate": "2026-06",
        "endDate": "2028-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "teaches": [
        "Business Analytics",
        "Data Analysis",
        "Statistical Modeling",
        "Machine Learning Basics",
        "Data Visualization",
        "Business Intelligence",
        "Predictive Analytics",
        "Big Data Concepts",
        "Python for Analytics"
      ],
      "about": [
        "PGDM Business Analytics",
        "Data Analytics Course in Hyderabad",
        "AICTE Approved PGDM",
        "Business Analytics Management Program",
        "MBA Equivalent Program"
      ],
      "keywords": "PGDM Business Analytics, Business Analytics Course Hyderabad, PGDM Analytics SSIM, Data Science Management Course, MBA Analytics Equivalent",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "PGDM BA",
    about:
      "The PGDM Business Analytics program blends management education with data science and technology skills for the digital business era. Built on core management, analytics, industry tools, and functional domain specialization, the program prepares students to solve real business problems using data-driven decision making.",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Business Analytics",
    },
    specializations: [
      {
        title: "Marketing Analytics",
        icon: "📊",
      },
      {
        title: "Financial Analytics",
        icon: "💹",
      },
      {
        title: "HR Analytics",
        icon: "👥",
      },
      {
        title: "Operational Analytics",
        icon: "⚙️",
      },
      {
        title: "Artificial Intelligence",
        icon: "🤖",
      },
      {
        title: "Big Data Analytics",
        icon: "📈",
      },
      {
        title: "Cloud Computing",
        icon: "☁️",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "Four-Pillar Learning Model",
        description:
          "The program combines core management, analytics and data science, technology platforms, and domain specialization in Marketing, HRM, Finance, or Operations.",
      },
      {
        title: "Hands-on Analytics Tools",
        description:
          "Students work with Power BI, Python, SQL, Excel, Tableau, SPSS, Azure ML, and IBM analytics modules.",
      },
      {
        title: "Microsoft-Certified Faculty",
        description:
          "Microsoft-trained and certified faculty bring current data analytics and AI tools into the classroom.",
      },
      {
        title: "Application-Based Learning",
        description:
          "The learning model uses live case studies, industry projects, internships, guest sessions, and a balanced theory-practice-technology approach.",
      },
      {
        title: "IBM Co-branded Certification",
        description:
          "Students earn SSIM and IBM certification exposure through industry-aligned IBM modules and analytics platforms.",
      },
      {
        title: "Global Analytics Recognition",
        description:
          "The program connects students with WDSAI and the Analytics Society of India for broader professional exposure.",
      },
      {
        title: "Career-Ready Analytics Focus",
        description:
          "Graduates are prepared for analytics-led roles across Marketing, Finance, Operations, HRM, and data-driven management functions.",
      },
      {
        title: "Future Leadership Pathway",
        description:
          "The curriculum connects business strategy with analytics, AI, and technology exposure for future leadership roles.",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM BA",
      //   link: pgdmba,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent pgdm-ba",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Python for Analytics",
            },
            {
              title: "SQL for Business Intelligence",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Financial Analytics",
            },
            {
              title: "Marketing Analytics",
            },
            {
              title: "Multivariate Data Analysis",
            },
            {
              title: "Human Resource Management",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
            {
              title: "Elective - II",
            },
            {
              title: "HR Analytics",
            },
            {
              title: "Machine Learning - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "Business Analysis Using Case Studies",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    partners: [
      {
        name: "IBM",
        logo: "/IBM.jpg",
        label: "Industry Partner",
      },
      {
        name: "World Data Science",
        logo: "/World Data Science.jpeg",
        label: "Recognised by",
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong analytical and quantitative skills",
      "Interest in data-driven decision making",
      "Basic understanding of mathematics and statistics",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      programHighlights: {
        dataGenerated: "2.5 quintillion bytes daily",
        growthRate: "25%",
        growthPeriod: "2020-2030",
        uniquePosition:
          "First institute in Telugu states offering specialized PGDM in Business Analytics",
      },
    },
    additionalSections: {
      programAdvantages: {
        id: "programAdvantages",
        title: "Program Advantages",
        description:
          "The client-approved BA deck positions this program as a digital-age management program for students who want business strategy, analytics, AI, and technology exposure in one pathway.",
        items: [
          {
            title: "Core Management Foundation",
            description:
              "Covers Marketing, Finance, HRM, Operations, Strategy, Economics, Business Communication, and Research Methodology.",
          },
          {
            title: "Analytics and Data Science Skills",
            description:
              "Builds capability in data analysis, statistics, predictive modelling, econometrics, machine learning, and social media analytics.",
          },
          {
            title: "Technology Tools and Platforms",
            description:
              "Includes hands-on exposure to Power BI, Python, SQL, Excel, Tableau, SPSS, Azure ML, and IBM analytics modules.",
          },
          {
            title: "Domain Specialization",
            description:
              "Students apply analytics to functional business problems by choosing Marketing, HRM, Finance, or Operations.",
          },
          {
            title: "Essential Analytics Courses",
            description:
              "The program includes AI, large language models, machine learning, SQL, Tableau, Power BI, generative AI and prompt engineering, system thinking in AI, agentic AI, design thinking, and agile DevOps exposure.",
          },
          {
            title: "2030 Skill Alignment",
            description:
              "The curriculum supports analytical thinking, AI and big data skills, digital literacy, critical thinking, creativity, leadership, lifelong learning, emotional intelligence, and sustainability awareness.",
          },
        ],
      },
      industryConnect: {
        id: "industryConnect",
        title: "Industry and Global Partnerships",
        description:
          "The program strengthens employability through recognized certification pathways, certified faculty, professional memberships, and industry-led learning.",
        items: [
          {
            title: "IBM Co-branded Certification",
            description:
              "Students gain exposure to IBM-recognized analytics tools, platforms, and practical problem-solving methods.",
          },
          {
            title: "Microsoft-Powered Analytics Learning",
            description:
              "Microsoft-certified faculty train students on Power BI, Azure ML, and Excel-based analytics for real business challenges.",
          },
          {
            title: "Analytics Society of India",
            description:
              "Institutional membership helps students connect with analytics professionals, conferences, and emerging industry conversations.",
          },
          {
            title: "WDSAI Recognition Opportunity",
            description:
              "Students can pursue international membership with World Data Science and AI for additional global exposure.",
          },
          {
            title: "Expert-Led Learning Ecosystem",
            description:
              "Guest lectures, workshops, and masterclasses by analytics professionals bridge academic concepts with industry practice.",
          },
        ],
      },
      careerPathways: {
        id: "careerPathways",
        title: "Career Pathways",
        description:
          "Analytics-powered roles exist across every business function. The program prepares students for data-driven decision making in Marketing, Finance, Operations, HRM, and general management.",
        groups: [
          {
            title: "Core Analytics Roles",
            items: [
              "Business Analyst",
              "Data Analyst",
              "Business Research Associate",
              "Marketing Analyst",
              "HR Analyst",
              "Finance Analyst",
              "Operations Analyst",
              "Product Analyst",
              "Data-driven management roles",
            ],
          },
          {
            title: "Marketing Analytics",
            items: [
              "Customer segmentation and churn prediction",
              "Campaign ROI and A/B testing",
              "Website traffic, attribution, and lead analytics",
              "Demand forecasting and pricing optimization",
              "Consumer sentiment and brand insight analytics",
            ],
          },
          {
            title: "Financial Analytics",
            items: [
              "Financial forecasting and scenario analysis",
              "FP&A trend analysis and revenue modelling",
              "Risk analysis and stress testing",
              "Credit scoring and fraud detection",
              "Investment research, valuation, and portfolio analytics",
            ],
          },
          {
            title: "Operations and HR Analytics",
            items: [
              "Supply chain and demand forecasting",
              "Inventory, logistics, quality, and production analytics",
              "Recruitment metrics and workforce planning",
              "People analytics for performance, engagement, and retention",
              "Compensation, benefits, learning, and development analytics",
            ],
          },
        ],
      },
    },
    electives: {
      minor: {
        title: "Electives",
        color: "bg-purple-50 border-purple-200",
        headerColor: "bg-purple-600",
        specializations: [
          {
            name: "Finance",
            courses: [
              "Investment Analysis & Portfolio Management",
              "Financial Modelling",
              "Financial Market",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Consumer Behaviour",
              "Sales Management",
              "Digital & Social Media Marketing",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Workforce Planning & Talent Acquisition Analytics",
              "Competency Mapping with Compensation",
              "Performance Management Analytics",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Strategic Operations Management",
            ],
          },
        ],
      },
    },
    faqs: [
      {
        question: "What is the PGDM-BA program at SSIM Hyderabad?",
        answer: "The PGDM-BA (Post Graduate Diploma in Management – Business Analytics) at Siva Sivani Institute of Management (SSIM) is a 2-year, full-time, on-campus postgraduate management program with 120 credits and a sanctioned intake of 60 seats. It is among the pioneering PGDM Business Analytics programs integrating Business Management, Analytical Mathematics, Statistics, and Computer Science to produce data-driven management professionals.",
      },
      {
        question: "What subjects and specialization areas are covered in the PGDM-BA at SSIM?",
        answer: "The curriculum covers Marketing Analytics, Financial Analytics, HR Analytics, Operational Analytics, Artificial Intelligence and Neural Networks, Advanced Machine Learning, Big Data Analytics, and Cloud Computing Techniques. Students choose from 50+ elective subjects across 3 specialization domains, ensuring industry-aligned depth and breadth.",
      },
      {
        question: "Is the SSIM PGDM-BA program approved by AICTE and accredited?",
        answer: "Yes. The PGDM-BA at SSIM is approved by AICTE, accredited by NBA and NAAC, affiliated with AIU (Association of Indian Universities), and holds SAQS (South Asian Quality Suretrust) accreditation.",
      },
      {
        question: "How is PGDM-BA at SSIM different from a regular MBA in Analytics?",
        answer: "Unlike a conventional MBA, the PGDM-BA uniquely blends management breadth with data science rigour — integrating Analytical Mathematics, Statistics, and Computer Science as core pillars. Students benefit from 50+ elective choices, 3 specialization domains, paid internships (Earn-While-You-Learn), gamification-based learning, and direct corporate interface — producing practitioners ready for real-world analytics roles from Day 1.",
      },
      {
        question: "What is the teaching methodology followed in the PGDM-BA program at SSIM?",
        answer: "SSIM follows an experiential learning approach. Students engage in simulations, gamification exercises, corporate interviews, and industrial visits. Faculty bring combined expertise from industry, academia, and research. The paid summer internship model (Earn-While-You-Learn) ensures students gain hands-on professional exposure while studying, accelerating placement readiness.",
      },
      {
        question: "What are the career opportunities after completing PGDM-BA from SSIM?",
        answer: "PGDM-BA graduates from SSIM are equipped for roles such as Business Analyst, Data Analyst, Marketing Analyst, Financial Analytics Specialist, HR Analytics Consultant, Machine Learning Engineer, Data Scientist, and Business Intelligence Manager. With global demand for analytics professionals projected to grow 25% between 2020–2030, SSIM PGDM-BA is one of the most future-proof management specializations available today.",
      },
      {
        question: "Which sectors and companies recruit PGDM-BA graduates from SSIM?",
        answer: "SSIM PGDM-BA graduates are recruited across BFSI (Banking, Financial Services & Insurance), IT & Technology, Management Consulting, FMCG, E-Commerce, and Healthcare sectors. SSIM's Corporate Connect ecosystem — including a dedicated Placement Team, structured internship pipeline, and industry guest lectures — ensures active recruiter engagement every academic year.",
      },
      {
        question: "Does SSIM offer paid internships as part of the PGDM-BA curriculum?",
        answer: "Yes. The PGDM-BA program includes paid summer internships through an Earn-While-You-Learn model embedded in the curriculum. These internships provide structured real-world industry experience and frequently serve as a springboard for Pre-Placement Offers (PPOs) from hiring companies.",
      },
      {
        question: "What is the scope of Business Analytics as a career in India and globally?",
        answer: "With 2.5 quintillion bytes of data generated globally every day, organizations across industries are rapidly shifting to data-driven decision-making. The demand for Business Analytics professionals is projected to grow by 25% between 2020 and 2030. In India, Hyderabad is among the top analytics hubs, making an SSIM PGDM-BA — a Hyderabad-based, AICTE-approved program — a strong career investment.",
      },
      {
        question: "What accreditations and rankings does SSIM hold as a B-school?",
        answer: "Siva Sivani Institute of Management (SSIM) is AICTE-approved, NBA-accredited, NAAC-accredited, AIU-affiliated, and holds SAQS accreditation — making it one of the few B-schools in South India with this full portfolio of recognitions. These accreditations validate the quality of faculty, curriculum, infrastructure, and student outcomes, providing credibility for placements and higher education abroad.",
      },
      {
        question: "What is SSIM's legacy and how long has it been offering management education?",
        answer: "SSIM has been offering quality management education since 1992, with uninterrupted AICTE approvals for over 33 years. Part of the S P Sampathy's Siva Sivani Educational Society — a multi-institution group spanning school to postgraduate education in Telangana — SSIM has built a strong legacy in Hyderabad's management education landscape, with PGDM-BA being its pioneering analytics-focused offering.",
      },
      // {
      //   question: "What campus facilities and student life does SSIM offer for PGDM-BA students?",
      //   answer: "SSIM's Hyderabad campus offers a full-time residential experience with academic infrastructure, dedicated analytics labs, corporate connect facilities, and an active student life programme. The campus has a 24/7 Women's Helpline (91333 05062), an Internal Complaints Committee, and robust safety policies. Prospective students can explore the campus through SSIM's virtual tour at ssim.ac.in/virtual-tour.",
      // },
       {
        question: "What campus facilities and student life does SSIM offer for PGDM-BA students?",
        answer: "SSIM's Hyderabad campus offers a full-time residential experience with academic infrastructure, dedicated analytics labs, corporate connect facilities, and an active student life programme. Prospective students can explore the campus through SSIM's virtual tour at ssim.ac.in/virtual-tour.",
      },
    ],
  },
  "pgdm-bifs": {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "PGDM in Banking, Insurance and Financial Services (BIFS)",
      "description": "PGDM in Banking, Insurance and Financial Services (BIFS) at Siva Sivani Institute of Management (SSIM) is a 2-year full-time postgraduate management program focused on the BFSI sector. The course covers banking operations, insurance management, financial analytics, capital markets, risk management and fintech, with strong industry exposure and placement support.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/pgdm-bifs",
      "courseCode": "PGDM-BIFS",
      "educationalCredentialAwarded": "Post Graduate Diploma in Management (PGDM)",
      "courseMode": "Full-time",
      "timeRequired": "P2Y",
      "numberOfCredits": 125,
      "educationalLevel": "Postgraduate",
      "occupationalCategory": "Banking, Insurance, Financial Services, Finance",
      "inLanguage": "en",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time",
        "startDate": "2026-06",
        "endDate": "2028-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "teaches": [
        "Banking Operations",
        "Retail and Digital Banking",
        "Insurance Management",
        "Risk Management",
        "Financial Analytics",
        "Capital Markets",
        "Portfolio Management",
        "FinTech and Blockchain",
        "Fraud Risk Analytics"
      ],
      "about": [
        "PGDM BIFS",
        "Banking and Finance Course in Hyderabad",
        "AICTE Approved PGDM",
        "BFSI Management Program",
        "MBA Equivalent Program"
      ],
      "keywords": "PGDM BIFS, Banking and Finance Course Hyderabad, PGDM Finance SSIM, BFSI Course India, Insurance Management Course, MBA Finance Equivalent",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "PGDM BIFS",
    about:
      "SSIM pioneered a tailor-made PGDM program for the Banking, Financial Services and Insurance sector in 2008. The PGDM-BIFS program is designed for BFSI careers with banking, finance, insurance, analytics, and management orientation, supported by recognition from the Insurance Institute of India, Mumbai.",

    keyInfo: {
      duration: "2 years",
      credits: "125",
      "Sanctioned Intake": "60",
      location: "Full-time On-campus",
      degree:
        "Post Graduate Diploma in Management - Banking, Insurance and Financial Services",
    },
    specializations: [
      {
        title: "Banking Stream",
        icon: "🏦",
        description:
          "Retail banking, Digital banking, Risk and Treasury management in banks",
      },
      {
        title: "Insurance Stream",
        icon: "🛡️",
        description:
          "Insure-tech, Fraud risk management in insurance reinsurance management",
      },
      {
        title: "Analytical Stream",
        icon: "📊",
        description:
          "Fraud risk analytics, Financial analytics and Algo trading with Python",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "III Accreditation",
        description:
          "The program is recognized by Insurance Institute of India (III), Mumbai for prior learning credits and Licentiate Certificate eligibility on successful completion.",
      },
      {
        title: "Pioneering BFSI Program",
        description:
          "Started in 2008, PGDM-BIFS has graduated 17 batches and continues with the 18th and 19th batches in progress.",
      },
      {
        title: "Strong Placement Record",
        description:
          "Recent batches recorded 100%, 95.8%, and 96% placements according to the client deck.",
      },
      {
        title: "Dedicated BFSI Structure",
        description:
          "The program framework includes core courses, skill-based courses, specialized courses, and managerial competency development components.",
      },
      {
        title: "Emerging BFSI Career Alignment",
        description:
          "The curriculum aligns with banking, insurance, mutual fund, pension, risk, analytics, and customer-facing BFSI opportunities.",
      },
      {
        title: "New Modules for 2026-28",
        description:
          "Additional modules have been integrated into the program for Batch 2026-28 as highlighted in the client deck.",
      },
      {
        title: "NISM Immersion Program, Mumbai",
        description:
          "Gain first-hand exposure to India's premier securities market ecosystem through an exclusive industry immersion experience.",
      },
      {
        title: "FinTech & Mortgage Banking Certifications",
        description:
          "Stay future-ready with specialized certifications aligned to the evolving BFSI industry.",
      },
      {
        title: "Academic Collaboration with ICMAI",
        description:
          "Enhance your financial and management competencies through industry-recognized learning opportunities.",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM BIFS",
      //   link: pgdmbifs,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in management theory, economics, banking principles, and business communication",
          topics: [
            {
              title: "Management Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Financial Reporting, Statements & Analysis",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Principles and Practices of Banking",
            },
            {
              title: "Basics of Business Communication (BBC)",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session [1]",
            },
            {
              title: "Industry Readiness - I [1]",
            },
            {
              title: "Experiential Learning [1]",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master retail banking, insurance, corporate finance, and advanced analytics",
          topics: [
            {
              title: "Retail Banking and Wealth management",
            },
            {
              title: "Insurance and Risk Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Marketing of Financial Services",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Art of Business Communication in Digital Era (ABCDE)",
            },
            {
              title: "Research Methodology",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session [1]",
            },
            {
              title: "Industry Readiness - II [1]",
            },
            {
              title: "Social Project [1]",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore corporate credit analysis, investment management, derivatives, and financial modeling",
          topics: [
            {
              title: "Corporate & Retail Credit Analysis",
            },
            {
              title: "Principles and Practice of Life and General Insurance",
            },
            {
              title: "Investment Analysis & Portfolio Management",
            },
            {
              title: "Derivatives and Structured Products",
            },
            {
              title: "Financial Modelling",
            },
            {
              title: "Introduction to Econometrics",
            },
            {
              title: "Technology Enabled Managerial Communication (TEMC)",
            },
            {
              title: "Management Accounting",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session [1]",
            },
            {
              title: "Industry Readiness - III [1]",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to investment banking, fintech, wealth management, and industry projects",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Investment Banking",
            },
            {
              title: "Financial Planning and Wealth Management",
            },
            {
              title: "AML & KYC in Banks",
            },
            {
              title: "Fintech",
            },
            {
              title: "Reinsurance Management",
            },
            {
              title: "Corporate Communication for Industry 5.0 (CCI)",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/ MOOCS/ Certificate Course",
            },
          ],
          mdevelopment: [
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Master strategic management, fixed income securities, trade finance, and group insurance",
          topics: [
            {
              title: "Fixed Income Securities",
            },
            {
              title: "Strategic Management",
            },
            {
              title: "Trade Finance & Mortgage Banking",
            },
            {
              title: "Group Insurance and Retirement Benefits",
            },
          ],
          mdevelopment: [
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description: "Complete dissertation and corporate governance studies",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
            {
              title: "Dissertation",
            },
          ],
          mdevelopment: [],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong interest in Banking, Insurance and Financial Services",
      "Analytical and quantitative aptitude",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      careerOptions: [
        "NAV Analysts in Fintech Companies",
        "Private & Public Sector Banks",
        "Life Insurance Companies",
        "General Insurance & Health Insurance Companies",
        "Insurance Intermediaries",
        "Stock Broking Firms",
        "Mutual Fund Companies",
        "Marketing Research Companies",
        "Bancassurance channels",
      ],
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      placementRate: 100,
    },
    additionalSections: {
      programAdvantages: {
        id: "programAdvantages",
        title: "Program Highlights",
        description:
          "PGDM-BIFS is built around the Banking, Insurance and Financial Services sector with a long-running program history, specialized credits, and III recognition.",
        stats: [
          { label: "Program started", value: "2008" },
          { label: "Graduated batches", value: "17" },
          { label: "Total credits", value: "125" },
          { label: "Sanctioned intake", value: "60" },
        ],
        items: [
          {
            title: "Program Legacy",
            description:
              "The program started in 2008 with an intake of 60 students. The 18th batch is in Trimester V for 2024-26 and the 19th batch is in Trimester III for 2025-27.",
          },
          {
            title: "Program Structure",
            description:
              "The framework includes 14 core courses, 8 skill-based courses, 15 specialized courses, and 6 MCD components.",
          },
          {
            title: "BFSI-Focused Preparation",
            description:
              "The deck emphasizes technical backgrounds, insurance domain training, banking and finance knowledge, and management trainee orientation.",
          },
        ],
      },
      industryConnect: {
        id: "industryConnect",
        title: "Recognition, Placements and Internships",
        description:
          "The BIFS deck highlights III recognition, recent placement outcomes, and current internship performance as core proof points.",
        stats: [
          { label: "2021-23 placement", value: "100%" },
          { label: "2022-24 placement", value: "95.8%" },
          { label: "2023-25 placement", value: "96%" },
          { label: "2024-26 average internship stipend", value: "Rs.17,387" },
        ],
        items: [
          {
            title: "Insurance Institute of India Recognition",
            description:
              "SSIM is the only B-school in the twin states of Andhra Pradesh and Telangana recognized by III, Mumbai for prior learning credits and award of the Licentiate Certificate on successful completion of PGDM-BIFS.",
          },
          {
            title: "Recognition Renewal",
            description:
              "Recognition of insurance courses for Licentiate Certification was awarded in 2016 and renewed in 2021 and 2023, valid for three years.",
          },
          {
            title: "2023-25 Placement Snapshot",
            description:
              "Highest package: Rs.10.7 LPA, lowest package: Rs.4.75 LPA, average package: Rs.6.2 LPA.",
          },
          {
            title: "2024-26 Internship Snapshot",
            description:
              "Highest stipend: Rs.35,000, lowest stipend: Rs.9,000, average stipend: Rs.17,387.",
          },
          {
            title: "NISM Immersion Program, Mumbai",
            description:
              "Gain first-hand exposure to India's premier securities market ecosystem through an exclusive industry immersion experience.",
          },
          {
            title: "FinTech & Mortgage Banking Certifications",
            description:
              "Stay future-ready with specialized certifications aligned to the evolving BFSI industry.",
          },
          {
            title: "Academic Collaboration with ICMAI",
            description:
              "Enhance your financial and management competencies through industry-recognized learning opportunities.",
          },
        ],
      },
      careerPathways: {
        id: "careerPathways",
        title: "BFSI Career Pathways",
        description:
          "The BFSI sector is projected to keep expanding, with stronger hiring across mutual funds, insurance, pension products, and technology-enabled financial services.",
        items: [
          {
            title: "BFSI Hiring Outlook",
            description:
              "The deck cites an 8.7% hiring increase in 2025-26, a potential 10% rise by 2030, and 2,50,000 permanent jobs by 2030.",
          },
          {
            title: "Local Market Advantage",
            description:
              "Candidates with local language skills and grassroots sales experience are described as 2.5 times more likely to be shortlisted and able to command 10-15% higher compensation.",
          },
          {
            title: "Growing BFSI Domains",
            description:
              "Talent demand is rising in mutual funds, insurance, pension products, banking, finance, and allied financial services.",
          },
        ],
        groups: [
          {
            title: "Emerging Job Roles",
            items: [
              "Actuary Assistants - Life, Casualty and Property",
              "Underwriting Assistants",
              "Claims Processing and Adjuster roles",
              "Operations and Policy Servicing",
              "Risk Managers",
              "Investment Management",
              "Insurance Broking",
              "Insurance Surveyors",
              "MIS and Content Development",
              "Business Analysts in software companies",
              "Domain and Subject Matter Experts",
              "Bancassurance Unit Managers",
              "Customer Relationship Management front-office roles",
              "Marketing Unit and Agency Managers",
              "Insurance Research and Training",
              "TPA support services",
              "POS roles",
            ],
          },
        ],
      },
    },
    electives: {
      minor: {
        title: "Minor Electives",
        color: "bg-purple-50 border-purple-200",
        headerColor: "bg-purple-600",
        specializations: [
          {
            name: "Banking",
            courses: [
              "Retail Banking",
              "AML & KYC",
              "Risk & Treasury Management in Banks",
            ],
          },
          {
            name: "Insurance",
            courses: [
              "InsureTech",
              "Fraud Risk Management in Insurance",
              "Liability Insurance",
            ],
          },
          {
            name: "Operations",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Service Operations Management",
            ],
          },
          {
            name: "Marketing",
            courses: [
              "Sales Management",
              "Services Marketing and CRM",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Human Resource Development",
              "Performance and Compensation Management",
              "Managing Diversity",
            ],
          },
          {
            name: "Analytics",
            courses: [
              "Fraud and Risk Analytics",
              "Financial Analysis and Algo-Trading with Python",
              "Blockchain and AI-Applications in Banking",
            ],
          },
          {
            name: "Agri Business Management",
            courses: [
              "Basics of Agriculture",
              "Agri Business Marketing and Sales",
              "Agri Warehousing and Supply Chain Management",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Software Project and Quality Management",
              "IT Project Management",
              "E-business Technologies and Digital Transformation",
            ],
          },
        ],
      },
      sectoral: {
        title: "Sectoral Electives",
        color: "bg-yellow-50 border-yellow-200",
        headerColor: "bg-yellow-500",
        specializations: [
          {
            name: "Entrepreneurship",
            courses: [
              "Innovation Management and Entrepreneurship",
              "Family, Small and Social Entrepreneurship",
            ],
          },
          {
            name: "Digital Marketing",
            courses: ["Digital Marketing", "Social Media & Content Marketing"],
          },
          {
            name: "Analytics",
            courses: [
              "Fintech & Digital Banking",
              "Predictive Analytics using R",
            ],
          },
          {
            name: "Pharma Management",
            courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
          },
          {
            name: "Hospitality & Tourism Marketing",
            courses: ["Hospitality Marketing", "Tourism Marketing"],
          },
          {
            name: "Retail Management",
            courses: ["Retail Management", "Visual Merchandising"],
          },
          {
            name: "Real Estate Management",
            courses: [
              "Strategic Real Estate Marketing",
              "Advance Real Estate Investment & Development",
            ],
          },
          {
            name: "Banking",
            courses: ["Mortgage Banking & Trade Finance", "AML & KYC"],
          },
          {
            name: "Insurance",
            courses: [
              "Reinsurance Management",
              "Group Insurance & Retirement Benefits",
            ],
          },
        ],
      },
    },
    faqs: [
      {
        question: "What is PGDM-BIFS at SSIM Hyderabad?",
        answer: "PGDM-BIFS at SSIM is a 2-year full-time, on-campus Post Graduate Diploma in Management in Banking, Insurance and Financial Services. The program carries 125 credits with a sanctioned intake of 60 students per batch.",
      },
      {
        question: "Is PGDM-BIFS at SSIM approved by AICTE?",
        answer: "Yes. PGDM-BIFS at SSIM is AICTE, NBA & NAAC approved, AIU affiliated, and SAQS accredited with outcome-based education.",
      },
      {
        question: "What are the key specializations offered in the PGDM-BIFS program?",
        answer: "Students can choose electives in Banking, Insurance, Analytics, Marketing, Operations, Human Resource, Technology Management, Agri Business Management, Digital Marketing, and FinTech.",
      },
      {
        question: "What practical learning opportunities are included in the PGDM-BIFS program?",
        answer: "The program includes industry visits, simulations, internships, certification courses, company review sessions, live projects, outbound training, and term-end viva sessions with industry experts.",
      },
      {
        question: "Is a PGDM-BIFS degree from SSIM equivalent to an MBA?",
        answer: "Yes. SSIM is recognized by the Association of Indian Universities (AIU), which makes the PGDM-BIFS diploma equivalent to an MBA degree for employment and higher education purposes.",
      },
      {
        question: "What makes SSIM Hyderabad's PGDM-BIFS program unique?",
        answer: "The program offers III accreditation, NSE-assisted finance labs, Equity Levers certifications, CESIM simulations, international exchange opportunities, and strong industry integration.",
      },
      {
        question: "How can students apply for PGDM-BIFS at SSIM Hyderabad?",
        answer: "Students can apply online through the official SSIM admissions portal by submitting academic details, entrance exam scores, and required documents.",
      },
      {
        question: "What career opportunities and roles are available after completing PGDM-BIFS at SSIM Hyderabad?",
        answer: "Graduates can build careers across banking, insurance, fintech, financial analytics, risk management, wealth management, and investment services. Key roles include Financial Analyst, Risk Analyst, Banking Associate, Insurance Advisor, FinTech Executive, Relationship Manager, and Investment Analyst.",
      },
      {
        question: "Does SSIM Hyderabad provide placement support for PGDM-BIFS students?",
        answer: "Yes. SSIM offers placement assistance through internships, industry collaborations, simulations, corporate mentoring, and campus recruitment drives.",
      },
      {
        question: "Are international exposure opportunities available in PGDM-BIFS?",
        answer: "Yes. SSIM offers international exchange opportunities with institutions like Herzing University, Atlanta (USA).",
      },
      {
        question: "What is the total fee and hostel facility available for PGDM-BIFS at SSIM Hyderabad?",
        answer: "The total program fee for Batch 2026–28 is ₹8,40,000 for the complete two-year duration. Additionally, SSIM offers hostel accommodation with A/C and Non-A/C rooms in single and double occupancy options, inclusive of food facilities, at separate charges.",
      },
      {
        question: "What scholarships are available for PGDM-BIFS at SSIM Hyderabad?",
        answer: "SSIM offers merit scholarships based on entrance exam scores (up to ₹90,000 for 90+ percentile in CAT/XAT/GMAT), academic performance in Class X, XII & Graduation (up to ₹45,000), and special categories including the President Scholarship (₹1,00,000) for Defence personnel children. The best applicable scholarship is awarded if eligible for multiple criteria.",
      },
    ],
  },
  "pgdm-triple-specialisation": {
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "PGDM Triple Specialisation",
      "description": "PGDM Triple Specialisation at Siva Sivani Institute of Management (SSIM) is a 2-year full-time management program designed to develop cross-functional business skills with triple specialization options in areas like Finance, Marketing, HR, Business Analytics and more. The program focuses on experiential learning, industry exposure, leadership development, and strong placement support.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Siva Sivani Institute of Management",
        "sameAs": "https://www.ssim.ac.in/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "NH 44, Kompally",
          "addressLocality": "Secunderabad",
          "addressRegion": "Telangana",
          "postalCode": "500100",
          "addressCountry": "IN"
        }
      },
      "url": "https://ssim.ac.in/programs/pgdm-triple-specialisation",
      "courseCode": "PGDM-TPS",
      "educationalCredentialAwarded": "Post Graduate Diploma in Management (PGDM)",
      "courseMode": "Full-time",
      "timeRequired": "P2Y",
      "numberOfCredits": 120,
      "occupationalCategory": "Management, Business Administration",
      "inLanguage": "en",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnCampus",
        "courseWorkload": "Full-time",
        "startDate": "2026-06",
        "endDate": "2028-05",
        "location": {
          "@type": "Place",
          "name": "SSIM Campus",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Secunderabad",
            "addressRegion": "Telangana",
            "addressCountry": "India"
          }
        }
      },
      "educationalLevel": "Postgraduate",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "teaches": [
        "Finance",
        "Marketing",
        "Human Resource Management",
        "Business Analytics",
        "Operations Management",
        "Entrepreneurship",
        "Digital Marketing"
      ],
      "about": [
        "Triple Specialisation PGDM",
        "Management Course in Hyderabad",
        "AICTE Approved PGDM",
        "MBA Equivalent Program"
      ],
      "keywords": "PGDM Triple Specialisation, Management Course Hyderabad, PGDM SSIM, MBA Equivalent, Triple Specialization MBA, Business School India",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.2",
        "reviewCount": "619",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    name: "PGDM Triple Specialisation",
    about:
      "The PGDM Triple Specialisation program at SSIM Hyderabad lets students choose three functional areas, gain multi-domain expertise, enhance employability, and build cross-functional management skills through an AICTE-approved PGDM framework.",

    keyInfo: {
      duration: "2 years",
      credits: "120",
      "Sanctioned Intake": "180",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management",
    },
    specializations: [
      {
        title: "Finance",
        icon: "💰",
      },
      {
        title: "Marketing",
        icon: "📊",
      },
      {
        title: "Human Resource",
        icon: "👥",
      },
      {
        title: "Operations Management",
        icon: "⚙️",
      },
      {
        title: "Business Analytics",
        icon: "📈",
      },
      {
        title: "Digital Marketing",
        icon: "🌐",
      },
      {
        title: "Banking & Insurance",
        icon: "🏦",
      },
      {
        title: "Retail Management",
        icon: "🏪",
      },
      {
        title: "Entrepreneurship",
        icon: "🚀",
      },
      {
        title: "Agribusiness Management",
        icon: "🌾",
      },
      {
        title: "Technology Management",
        icon: "💻",
      },
      {
        title: "Pharma Management",
        icon: "💊",
      },
    ],
    managerialCompetency: [
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
        description:
          "Structured industry visits where students interact directly with corporate professionals, observe operations in real-time, and gain practical insights into organizational structures, production processes, and business functions.",
      },
      {
        title: "Company Facts Presentation",
        icon: presentation, // Chart for data presentation
        description:
          "Students research and analyze specific companies—covering history, operations, financials, and strategy—and present their findings creatively. This builds their confidence in public speaking, sharpens business analysis, and fosters peer-to-peer learning.",
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
        description:
          "Encourages students to read books across business, leadership, psychology, and other genres. Students present key takeaways, critical reflections, and business applications, promoting intellectual growth and diverse thinking.",
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
        description:
          "Hands-on involvement with NGOs or social enterprises. Students identify societal problems, work at the grassroots, propose innovative solutions, and present their impact—developing empathy, social responsibility, and creative thinking.",
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
        description:
          "In-depth sectoral studies where students examine market trends, industry dynamics, challenges, innovations, and future scope. It fosters macro-level business understanding and helps students identify potential career or business interests.",
      },
      {
        title: "Outbound Training (OBT)",
        icon: trainning, // Factory/industry icon
        description:
          "Adventure-based learning programs conducted off-campus. Through team activities, problem-solving tasks, and survival scenarios, students build leadership, collaboration, time management, decision-making, and stress-handling skills.",
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
        description:
          "Post-internship presentations where students assess their host companies—structure, culture, strengths, and gaps. This peer-sharing activity reinforces learning, strengthens presentation skills, and prepares students for future interviews.",
      },
      {
        title: "Industry Internship Project",
        icon: internship, // Target/goal icon
        description:
          "A real-world corporate project undertaken during summer internships. Students also undertake a related academic extension to deepen understanding and bridge learning with their specialization areas.",
      },
      {
        title: "Certification Courses",
        icon: certification, // Upward trend chart
        description:
          "Students are encouraged to pursue relevant certifications (MOOCs, skill courses, or workshops) aligned with their career goals—enhancing technical know-how and strengthening their resumes with industry-recognized credentials.",
      },
      {
        title: "Specialisation Project",
        icon: project, // Target/goal icon
        description:
          "Research-based projects where students identify challenges or opportunities in their chosen domain (e.g., marketing, finance, HR), suggest solutions, and present their findings to an expert panel—fostering domain expertise and innovation.",
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
        description:
          "Students critically review and present published research articles. This cultivates research literacy, academic curiosity, and helps build a foundation for evidence-based decision-making and future scholarly contributions.",
      },
      {
        title: "Term-End Viva (Each Term)",
        icon: viva, // Upward trend chart
        description:
          "Each term ends with a viva conducted by industry professionals. These interactions serve as checkpoints to assess student learning, provide corporate feedback, and enhance professional grooming and confidence.",
      },
    ],
    differentiators: [
      {
        title: "AICTE Approved PGDM",
        description:
          "The program is part of SSIM's AICTE-approved PGDM portfolio in Hyderabad.",
      },
      {
        title: "Triple Specialization",
        description:
          "Students choose three functional areas across major, minor, and sectoral specialization options.",
      },
      {
        title: "Cross Functional Skills",
        description:
          "The framework develops cross-functional skills and multi-domain expertise for broader employability.",
      },
      {
        title: "Industry-Oriented Curriculum",
        description:
          "The pedagogy emphasizes industry-oriented curriculum, case-based learning, live projects, and certifications.",
      },
      {
        title: "Summer Internship Program",
        description:
          "Students gain workplace exposure through the summer internship program and applied learning components.",
      },
      {
        title: "Global Immersion Program",
        description:
          "The deck highlights global immersion, strong industry interface, excellent placement record, and alumni network as SSIM strengths.",
      },
    ],
    curriculum: [
      // {
      //   name: "PGDM Triple Specialisation",
      //   link: pgdmtps,
      // },
      // {
      //   name: "PGDM Triple Specialisation",
      //   link: pgdmtpse,
      // },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Human Resource Management",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Mgmt. Information System & Emerging Technologies",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Business Environment and Law",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Major - I",
            },
            {
              title: "Major - II",
            },
            {
              title: "Major - III",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Major - IV",
            },
            {
              title: "Major - V",
            },
            {
              title: "Major - VI",
            },
            {
              title: "Minor - I",
            },
            {
              title: "Minor - II",
            },
            {
              title: "Sectoral - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "International Business",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Minor - III",
            },
            {
              title: "Sectoral - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong academic background",
      "Leadership potential",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      placementRate: 100,
      facultyCount: {
        fullTime: "25+",
        visiting: "50+",
      },
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      experientialLearning: [
        "Corporate Interviews",
        "Industrial Visits",
        "NGO Visits",
        "Simulations",
        "Student Clubs",
        "Event Organization",
      ],
    },
    additionalSections: {
      programAdvantages: {
        id: "programAdvantages",
        title: "Triple Specialisation Framework",
        description:
          "The program is designed for students who want structured exposure across three functional areas instead of a single narrow specialization.",
        items: [
          {
            title: "Choose Three Functional Areas",
            description:
              "Students build a portfolio of major, minor, and sectoral learning choices across management domains.",
          },
          {
            title: "Multi-Domain Expertise",
            description:
              "The framework helps students understand business problems from more than one function and improve cross-functional readiness.",
          },
          {
            title: "Enhanced Employability",
            description:
              "Triple specialization improves role flexibility for careers in marketing, finance, HR, operations, business analytics, and allied sectors.",
          },
          {
            title: "Capstone Research Project",
            description:
              "The deck identifies a capstone research project as an important program highlight.",
          },
        ],
      },
      industryConnect: {
        id: "industryConnect",
        title: "Learning Methodology",
        description:
          "The deck highlights a practical pedagogy model that connects classroom learning with industry expectations.",
        items: [
          {
            title: "Industry-Oriented Curriculum",
            description:
              "Coursework is structured around current management and business requirements.",
          },
          {
            title: "Case-Based Learning",
            description:
              "Students learn through cases that connect theory with management decision-making.",
          },
          {
            title: "Live Projects and Certifications",
            description:
              "The program includes live projects and certifications to strengthen applied readiness.",
          },
          {
            title: "Strong Industry Interface",
            description:
              "SSIM's industry interface, placement record, and alumni network support student exposure beyond the classroom.",
          },
        ],
      },
      careerPathways: {
        id: "careerPathways",
        title: "Career Opportunities",
        description:
          "The Triple Specialisation deck maps the program to core management career outcomes across multiple functions.",
        groups: [
          {
            title: "Career Roles",
            items: [
              "Marketing Manager",
              "Financial Analyst",
              "HR Business Partner",
              "Business Analyst",
              "Operations Executive",
            ],
          },
          {
            title: "Core Course Focus",
            items: [
              "Advanced Excel for Managers",
              "Strategic Financial Management",
              "Project Management",
              "Innovation and Design Thinking",
              "Management Theory and Organizational Behaviour",
              "Business Environment and Law",
            ],
          },
        ],
      },
    },
    electives: {
      major: {
        title: "Major Electives",
        color: "bg-amber-50 border-amber-200",
        headerColor: "bg-amber-500",
        specializations: [
          {
            name: "Finance Management",
            courses: [
              "Investment Analysis and Portfolio Management",
              "Risk Management and Derivatives",
              "Management of Financial Services",
              "Fixed Income Securities",
              "Corporate Valuation",
              "Strategic Financial Management",
            ],
          },
          {
            name: "Agribusiness",
            courses: [
              "Basics of Agriculture",
              "Agri-Business Marketing and Sales",
              "Agri-Business Environment and Agri Tech",
              "Rural Banking and Micro Finance Institution",
              "Agri Ware Housing and Supply Chain Management",
              "Agri-Input Marketing/Post Harvest Mgmt./Procurement Mgmt. (Any 1)",
            ],
          },
          {
            name: "Marketing Management",
            courses: [
              "Consumer Behaviour",
              "Sales Management",
              "Services Marketing and CRM",
              "Integrated Marketing Communication",
              "Business to Business Marketing",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Service Operations Management",
              "Total Quality Management",
              "Logistic Management",
              "Lean Operations and Manufacturing",
              "Technology and Innovation in Operation",
            ],
          },
          {
            name: "Human Resource Management",
            courses: [
              "Human Resource Development",
              "Industrial Relations and Labor Laws",
              "Performance and Compensation Management",
              "Human Resource Information Systems",
              "HR Analytics",
              "Managing Diversity",
            ],
          },
        ],
      },
      minor: {
        title: "Minor Electives",
        color: "bg-purple-50 border-purple-200",
        headerColor: "bg-purple-600",
        specializations: [
          {
            name: "Finance Management",
            courses: [
              "Financial Products and Services",
              "Financial Planning & Wealth Management",
              "Financial Markets",
            ],
          },
          {
            name: "Marketing Management",
            courses: [
              "Sales Management",
              "Services Marketing and CRM",
              "Strategic Brand Management",
            ],
          },
          {
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Service Operations Management",
            ],
          },
          {
            name: "Human Resource Management",
            courses: [
              "Performance and Compensation Management",
              "Human Resource Development",
              "Managing Diversity",
            ],
          },
          {
            name: "Agribusiness",
            courses: [
              "Basics of Agriculture",
              "Agri-Business Marketing and Sales",
              "Agri Warehousing & Supply Chain Management",
            ],
          },
          {
            name: "Business Analytics",
            courses: [
              "Visual Analytics",
              "Machine Learning - I",
              "Machine Learning - II",
            ],
          },
        ],
      },
      sectoral: {
        title: "Sectoral Electives",
        color: "bg-yellow-50 border-yellow-200",
        headerColor: "bg-yellow-500",
        specializations: [
          {
            name: "Marketing Management",
            courses: [],
          },
          {
            name: "Finance Management",
            courses: [],
          },
          {
            name: "Human Resource Management",
            courses: [],
          },
          {
            name: "Operations Management",
            courses: [],
          },
          {
            name: "Agribusiness",
            courses: [],
          },
          {
            name: "Business Analytics",
            courses: ["Visual Analytics", "Predictive Analytics Using R"],
          },
          {
            name: "Digital Marketing",
            courses: [
              "Digital Marketing",
              "Social Media and Content Marketing",
            ],
          },
          {
            name: "Real Estate Management",
            courses: [
              "Strategic Real Estate Marketing",
              "Advance Real Estate Investment and Development",
            ],
          },
          {
            name: "Retail Management",
            courses: ["Retail Management", "Visual Merchandising"],
          },
          {
            name: "Pharmaceutical Management",
            courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
          },
        ],
      },
    },
    faqs: [
      {
        question: "What is the duration and key details of the PGDM Triple Specialisation program at SSIM Hyderabad?",
        answer: "PGDM Triple Specialisation at SSIM is a 2-year full-time on-campus Post Graduate Diploma in Management with 120 credits and a sanctioned intake of 180 students per batch. The program lets students choose three functional areas across Major, Minor, and Sectoral specialisation options.",
      },
      {
        question: "Why choose SSIM Hyderabad for PGDM Triple Specialisation?",
        answer: "SSIM's PGDM Triple Specialisation combines multi-domain expertise, cross-functional skill development, industry-oriented curriculum, case-based learning, summer internship, live projects, certifications, capstone research, global immersion, strong industry interface, and an active alumni network.",
      },
      {
        question: "What Major specialisations and electives are available in PGDM Triple Specialisation at SSIM Hyderabad?",
        answer: "Major specialisations in the client-approved framework include Marketing Management, Finance Management, Human Resource Management, Operations Management, and Agribusiness.",
      },
      {
        question: "What Minor specialisations can students choose in the PGDM Triple Specialisation program at SSIM?",
        answer: "Minor specialisations include Marketing Management, Finance Management, Human Resource Management, Operations Management, Agribusiness, and Business Analytics.",
      },
      {
        question: "What is the eligibility for PGDM admissions 2026?",
        answer: "Candidates must have a minimum 3-year bachelor's degree with 50% marks and valid scores in exams like CAT, MAT, XAT, CMAT, or ATMA.",
      },
      {
        question: "Which entrance exam is best for PGDM in Hyderabad and how should I prepare?",
        answer: "CAT and XAT are the top choices, but MAT, CMAT, and ATMA are equally good options depending on your preparation level and target colleges. For preparation, focus on Quantitative Aptitude, Logical Reasoning, Data Interpretation, and Verbal Ability — backed by regular mock tests and strong time management practice.",
      },
      {
        question: "What is the total fee structure for PGDM Triple Specialisation at SSIM Hyderabad for Batch 2026–28?",
        answer: "The total program fee is ₹8,40,000 payable in installments — Admission Fee (₹50,000) and Alumni Association Fee (₹10,000) at the time of admission, followed by 5 installments ranging from ₹1,24,000 to ₹1,86,000 spread across the two-year duration. A refundable caution deposit of ₹25,000 is also payable with the 1st installment.",
      },
      {
        question: "Are transportation facilities available for students?",
        answer: "Yes. Transportation services are available with charges depending on travel distance from the campus.",
      },
      {
        question: "Are there any additional charges apart from the PGDM tuition fee at SSIM?",
        answer: "Yes. Additional charges include Transportation (₹40,000–₹50,000 per annum based on distance) and Hostel fees ranging from ₹1,55,000 (Non-A/C Double) to ₹1,97,500 (A/C Single) per annum including food. Note that food charges increase by 15% every year.",
      },
      {
        question: "What is included in the PGDM fee at SSIM Hyderabad?",
        answer: "The PGDM fee covers Admission Fee, Course Fee, and Examination Fee. Additionally, the institute mandatorily provides every student a Laptop, Business Suit, and Textbooks as per the Book Bank Policy — at no extra cost.",
      },
    ],
  },
};
