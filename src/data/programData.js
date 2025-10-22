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

export const programData = {
  "fpm/efpm": {
    name: "FPM/EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "FPM - 45, EFPM - 36",
      "Sanctioned Intake": "20",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM) / Executive Fellow Program in Management (EFPM)",
    },
    specializations: [
      // {
      //   title: "Accounting & Finance",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/5410839.png",
      // },
      // {
      //   title: "Organizational Behavior / Human Resource",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/human-resource.png",
      // },
      // {
      //   title: "Marketing",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/marketing.png",
      // },
      // {
      //   title: "Economics",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/economics.png",
      // },
      // {
      //   title: "Operations Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/OM.png",
      // },
      // {
      //   title: "General Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/GM.png",
      // },
      // {
      //   title: "Strategic Management",
      //   icon: "https://ssim.ac.in/wp-content/uploads/2022/12/SM.png",
      // },
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
  "pgdm-ba": {
    name: "PGDM BA",
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
              title: "Banking Law and Operations",
            },
            {
              title: "Insurance and Risk Management",
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
              title: "InternationalBusiness",
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
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
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
