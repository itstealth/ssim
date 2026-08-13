export const navlinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    dropdown: [

      {
        name: "Accreditations & Rankings",
        path: "/about/accreditations-rankings",
      },
      {
        name: "Board of Governors",
        path: "/about/board-of-governors",
      },
      {
        name: "Board of Studies",
        path: "/about/board-of-studies",
      },
      // {
      //   name: "Core Values",
      //   path: "/about/core-values",
      // },
      {
        name: "Message from Leaders",
        path: "/about/message-from-leaders",
        // subDropdown: [
        //   { name: "Director's Message", path: "/about/directors-message" },
        //   { name: "Founder's Message", path: "/about/leadership" },
        //   { name: "President's Message", path: "/about/presidents-message" },
        //   {
        //     name: "Vice-President's Message",
        //     path: "/about/vice-presidents-message",
        //   },
        // ],
      },
      // {
      //   name: "Milestones",
      //   path: "/about/milestones",
      // },
      {
        name: "Vision & Mission",
        path: "/about/vision-mission",
      },
    ],
  },
  {
    name: "Programs",
    dropdown: [
      {
        name: "PGDM",
        subDropdown: [
          {
            name: "PGDM Triple Specialisation",
            path: "/programs/pgdm-triple-specialisation",
          },
          { name: "PGDM BIFS", path: "/programs/pgdm-bifs" },
          { name: "PGDM BA", path: "/programs/pgdm-ba" },  
        ],
      },
      {
        name: "FPM/EFPM",
        path: "/programs/fpm-efpm",
      },
    ],
  },
  {
    name: "Admissions",
    dropdown: [
      // { name: "Admission Process", path: "/admissions/process" },
      // { name: "Apply Now", path: "/admissions/apply" },
      { name: "PGDM Triple Specialisation", path: "/admissions/pgdm-triple-specialisation" },
      { name: "PGDM BIFS", path: "/admissions/pgdm-bifs" },
      { name: "PGDM BA", path: "/admissions/pgdm-ba" },
      { name: "FPM/EFPM", path: "/admissions/fpm-efpm" },
    ],
  },
  {
    name: "Alumni",
    dropdown: [
      { name: "Alumni", path: "/alumni" },
      { name: "Alumni Guidance", path: "/alumni-guidance" },
      { name: "Success Stories", path: "/success-stories" },
    ],
  },
  {
    name: "Faculty & Research",
    dropdown: [
      {
        name: "Faculty",
        path: "/faculty",
      },
      {
        name: "Research",
        path: "/research",
      },
    ],
  },
  {
    name: "International Relations",
    path: "/international-relations",
  },
  {
    name: "Placements",
    dropdown: [
      { name: "Placement", path: "/placement/records" },
      { name: "Placement Team", path: "/placement/team" },
    ],
  },
  {
    name: "Corporate Connect",
    dropdown: [
      { name: "Internships", path: "/placement/internships" },
      { name: "Guest lectures", path: "/placement/guest-lectures" },
    ],
  },
  {
    name: "Student's Life",
    dropdown: [
      // { name: "Activities", path: "/students-life/activities" },
      // { name: "Campus Life", path: "/students-life/campus" },
      {
        name: "Buzz About Us",
        subDropdown: [
          {
            name: "News",
            path: "/students-life/news",
          },
          {
            name: "Student's Achievements",
            path: "/students-life/students-achievements",
          },
        ],
      },
      { name: "Life at SSIM", path: "/students-life/life-at-ssim" },
      // { name: "Students Feedback", path: "/students-life/students-feedback" },
    ],
  },
  {
    name: "Virtual Tour",
    path: "/virtual-tour",
  },
  { name: "Contact Us", path: "/contact-us" }, // Added Contact Us link
];
