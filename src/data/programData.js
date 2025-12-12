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
  },
  fpm: {
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
  },
  efpm: {
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
  },
  "pgdm-ba": {
    name: "PGDM BA",
    about: `The Post Graduate Diploma in Management - Business Analytics (PGDM-BA) at Siva Sivani Institute of Management (SSIM) Hyderabad is a pioneering program in the Telugu-speaking states, designed to meet the growing demand for data analytics professionals in today's data-driven business landscape. This comprehensive two-year program uniquely combines Business Management, Analytical Mathematics, Statistics, and Computer Science to prepare professionals for the transformation from intuition-based to data-driven decision-making.

In an era where 2.5 quintillion bytes of data are generated daily, organizations across industries are increasingly relying on data analytics to gain competitive advantages, optimize operations, and drive strategic growth. SSIM's PGDM-BA program addresses this critical need by equipping students with the technical expertise, analytical thinking, and business acumen required to excel in the rapidly expanding field of business analytics.

The program is structured to provide students with a strong foundation in core management principles while simultaneously developing advanced analytical capabilities. Students learn to leverage cutting-edge tools and technologies including Python, SQL, Tableau, Machine Learning, and Big Data Analytics to extract meaningful insights from complex datasets. The curriculum emphasizes hands-on learning through real-world projects, case studies, and industry collaborations, ensuring that graduates are not just theoretically sound but also practically proficient.

One of the program's key differentiators is its integration with Harvard Business School Online Business Analytics certification, providing students with globally recognized credentials. Additionally, students gain exposure to a wide range of software, programming languages, and big data processing tools, making them versatile and industry-ready. The program also offers international exchange opportunities with Herzing University in Atlanta, USA, enabling students to gain global perspectives on analytics practices.

The PGDM-BA program at SSIM focuses on multiple analytical domains including Marketing Analytics, Financial Analytics, HR Analytics, and Operational Analytics. Students learn to apply analytical techniques to solve real business problems, make data-driven recommendations, and create value for organizations. With the demand for data analytics professionals projected to grow by 25% between 2020-2030, PGDM-BA graduates are exceptionally well-positioned for successful careers in this rapidly expanding field. The program's emphasis on experiential learning, industry exposure, and practical application ensures that students develop the skills and confidence needed to become leaders in the analytics domain.`,
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
        title: "Harvard Business School Certification",
        description:
          "Embedded with Harvard Business School Online Business Analytics certification",
      },
      {
        title: "Software Exposure",
        description:
          "Exposure to wide range of software, programming languages and big data processing tools",
      },
      {
        title: "Experiential Learning",
        description:
          "Learning through simulations, gamifications, and practical applications",
      },
      {
        title: "Expert Faculty",
        description:
          "Eminent faculty members with industry, academia and research experience",
      },
      {
        title: "International Exchange",
        description:
          "Exchange programs for students with Herzing University, Atlanta (USA)",
      },
      {
        title: "Paid Internships",
        description: "Earn-while-you-learn through paid summer internships",
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
    electives: {
      minor: {
        title: "Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
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
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    about: `The Post Graduate Diploma in Management - Banking, Insurance and Financial Services (PGDM-BIFS) at Siva Sivani Institute of Management (SSIM) Hyderabad is a specialized program designed to create industry-ready professionals for the dynamic and evolving BFSI (Banking, Financial Services, and Insurance) sector. This comprehensive two-year program provides students with in-depth knowledge and practical skills required to excel in banking operations, insurance management, and financial services.

The Indian BFSI sector has been experiencing rapid transformation driven by digitalization, regulatory changes, and evolving customer expectations. SSIM's PGDM-BIFS program is strategically designed to prepare students for these challenges by providing them with a strong foundation in banking principles, insurance practices, and financial services management. The program is accredited by the Insurance Institute of India (III), ensuring that students receive industry-recognized education that meets the highest professional standards.

The curriculum covers a wide spectrum of topics including retail banking, digital banking, wealth management, life and general insurance, risk management, investment banking, fintech, and financial analytics. Students gain hands-on experience through advanced labs including NSE Assisted Finance Lab, Equity Levers Certification, and CESIM Simulations, which provide practical exposure to real-world financial scenarios and decision-making processes.

One of the program's unique features is its three specialized streams: Banking Stream, Insurance Stream, and Analytical Stream. Students can choose their specialization based on their career interests, allowing them to develop deep expertise in their chosen domain. The Banking Stream focuses on retail banking, digital banking, and risk and treasury management. The Insurance Stream covers insure-tech, fraud risk management, and reinsurance management. The Analytical Stream emphasizes fraud risk analytics, financial analytics, and algorithmic trading with Python.

The program emphasizes experiential learning through corporate interviews, industrial visits, NGO visits, and simulations. Students also benefit from international exchange programs with Herzing University in Atlanta, USA, providing them with global exposure and cross-cultural learning experiences. The outcome-based education approach ensures that students develop practical skills and industry readiness, making them highly sought after by leading BFSI organizations. With 100% placement support and strong industry connections, PGDM-BIFS graduates are well-positioned for successful careers in banks, insurance companies, fintech firms, and other financial services organizations.`,
    keyInfo: {
      duration: "2 years",
      credits: "120",
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
          "Program is accredited by Insurance Institute of India (III)",
      },
      {
        title: "Advanced Labs",
        description:
          "NSE Assisted Finance Lab, Equity Levers Certification, CESIM Simulations",
      },
      {
        title: "Experiential Learning",
        description:
          "Corporate interviews, Industrial Visits, NGO Visits, and Simulations",
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
      },
      {
        title: "Industry Integration",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "Outcome Based Education",
        description: "Focus on practical skills and industry readiness",
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
    electives: {
      minor: {
        title: "Minor Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
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
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    about: `The Post Graduate Diploma in Management with Triple Specialisation at Siva Sivani Institute of Management (SSIM) Hyderabad is an innovative and comprehensive program that offers students the unique opportunity to develop expertise in three distinct business domains simultaneously. This two-year on-campus program is designed to create versatile, multi-skilled managers who can navigate the complexities of modern business environments with confidence and competence.

The program's unique structure allows students to choose a Major specialization, a Minor specialization, and a Sectoral specialization, providing them with a 3-in-1 skill set that significantly enhances their career prospects and professional versatility. This approach recognizes that contemporary business challenges often require cross-functional knowledge and the ability to integrate insights from multiple domains. By specializing in three areas, students develop a holistic understanding of business operations and become valuable assets to organizations seeking well-rounded management professionals.

The Major specializations available include Finance, Marketing, Human Resource, Operations Management, Business Analytics, Digital Marketing, Banking & Insurance, Retail Management, Entrepreneurship, Agribusiness Management, Technology Management, and Pharma Management. Students can choose their Minor from a diverse range of options, and select Sectoral specializations that align with emerging industry trends and career opportunities. This flexibility ensures that each student can tailor their education to match their career aspirations and interests.

The program is accredited by NBA (National Board of Accreditation) and NAAC (National Assessment and Accreditation Council), reflecting its commitment to quality education and continuous improvement. The curriculum emphasizes experiential learning through corporate interviews, industrial visits, NGO visits, simulations, and real-world projects. Students also benefit from simulation labs including StratX simulations for Marketing, Equity Levers for Finance Lab, and CESIM Simulations, providing hands-on experience with industry-standard tools and practices.

One of the program's standout features is the Global Immersion Program, which provides international learning experiences that expose participants to global cultures, business practices, and management philosophies. This international exposure helps students develop a global mindset and prepares them for leadership roles in multinational organizations. The program's emphasis on cross-functional skills, entrepreneurial focus, and practical application ensures that graduates are not just job-ready but also equipped to drive innovation and create value in their chosen fields. With 100% placement support and strong industry connections, PGDM Triple Specialisation graduates are highly sought after by leading organizations across various sectors.`,
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
        title: "NBA & NAAC Accreditation",
        description: "Program is accredited by NBA and NAAC",
      },
      {
        title: "Triple Specialization",
        description:
          "Unique opportunity to specialize in three different areas",
      },
      {
        title: "Cross Functional Skills",
        description: "Develop skills across multiple business domains",
      },
      {
        title: "Entrepreneurial Focus",
        description: "Greater scope to develop entrepreneurial skills",
      },
      {
        title: "Simulation Labs",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "Global Immersion Program (International Exposure)",
        description:
          "International learning experience that expose participants to global cultures, business and practices.",
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
    electives: {
      major: {
        title: "Major Electives",
        color: "bg-amber-50 border-amber-200",
        headerColor: "bg-amber-500",
        specializations: [
          {
            name: "Finance",
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
            name: "Agri-Business Management",
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
            name: "Marketing",
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
            name: "Human Resource",
            courses: [
              "Human Resource Development",
              "Industrial Relations and Labor Laws",
              "Performance and Compensation Management",
              "Human Resource Information Systems",
              "HR Analytics",
              "Managing Diversity",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Managing Technological Innovation",
              "Software Project and Quality Management",
              "IT Project Management",
              "Data Mining and Business Intelligence",
              "Database Management Systems with SQL",
              "E-Business Technologies and Digital Transformation",
            ],
          },
        ],
      },
      minor: {
        title: "Minor Electives",
        color: "bg-blue-50 border-blue-200",
        headerColor: "bg-blue-600",
        specializations: [
          {
            name: "Finance",
            courses: [
              "Financial Products and Services",
              "Financial Planning & Wealth Management",
              "Financial Markets",
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
            name: "Operations Management",
            courses: [
              "Supply Chain Management",
              "Total Quality Management",
              "Service Operations Management",
            ],
          },
          {
            name: "Technology Management",
            courses: [
              "Software Project and Quality Management",
              "IT Project Management",
              "E-Business Technologies and Digital Transformation",
            ],
          },
          {
            name: "Human Resource",
            courses: [
              "Performance and Compensation Management",
              "Human Resource Development",
              "Managing Diversity",
            ],
          },
          {
            name: "Banking",
            courses: ["Retail Banking", "Digital Banking"],
          },
          {
            name: "Agri-Business Management",
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
            name: "Digital Marketing",
            courses: [
              "Digital Marketing",
              "Social Media and Content Marketing",
            ],
          },
          {
            name: "Entrepreneurship",
            courses: [
              "Innovation Management and Entrepreneurship",
              "Family, Small and Social Entrepreneur",
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
            name: "Hospitality and Tourism Management",
            courses: ["Hospitality Management", "Tourism Marketing"],
          },
          {
            name: "Insurance Management",
            courses: [
              "Insurance and Risk Management",
              "Principles and Practice of Life and General Insurance",
            ],
          },
          {
            name: "Business Analytics",
            courses: ["Visual Analytics", "Predictive Analytics Using R"],
          },
          {
            name: "Pharmaceutical Management",
            courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
          },
          {
            name: "Banking",
            courses: [
              "Principles and Practices of Banking",
              "Bank Credit Management",
            ],
          },
        ],
      },
    },
  },
};
