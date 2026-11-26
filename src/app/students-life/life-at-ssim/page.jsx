"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import WordPullUp from "@/components/ui/word-pull-up";
import { industryData } from "@/data/industryData";

const cn = (...classes) => classes.filter(Boolean).join(" ");

// Categories array
const categories = [
  {
    id: "64",
    label: "31st Snatak (Convocation)",
    icon: <Image />,
    heading: "31st Snatak (Convocation)",
    description:
      "The 31st Snatak celebrated the graduating class of Siva Sivani Institute of Management, recognising academic achievement and marking the beginning of a new professional journey for SSIM's graduates.",
  },
  {
    id: "67",
    label: "Session by Mr. Vishwanath Pillutla",
    icon: <Image />,
    heading: "Session by Mr. Vishwanath Pillutla, Founder-Director, T.I.M.E.",
    description:
      "SSIM organised a Guest Lecture on “Campus to Corporate” by Mr. Vishwanath Pillutla, Founder-Director of Triumphant Institute of Management Education Pvt. Ltd. (T.I.M.E.).",
  },
  {
    id: "66",
    label: "Badminton Tournament",
    icon: <Image />,
    heading: "Badminton Tournament",
    description:
      "SSIM Sports Club organised a badminton tournament with enthusiastic participation from students of both PGDM Batches 2025–27 and 2026–28. The tournament provided students with an opportunity to showcase their sporting talent, competitive spirit, and teamwork while promoting physical fitness, sportsmanship, and healthy interaction among the batches.",
  },
  {
    id: "65",
    label: "Bathukamma and Dandiya Celebrations",
    icon: <Image />,
    heading: "Bathukamma and Dandiya Celebrations",
    description:
      "SSIM Cultural Club organised vibrant Bathukamma and Dandiya celebrations on campus. Students from both PGDM Batches 2025–27 and 2026–28 actively participated, showcasing their cultural traditions through colourful festivities, music, and dance.",
  },
  {
    id: "57",
    label: "PGDM Programmes Inauguration 2026-28",
    icon: <Image />,
    heading: "PGDM Programmes Inauguration – Batch 2026–28",
    description:
      "On 16 July 2026, SSIM inaugurated the PGDM Programmes for the Batch 2026–28. Ms. Salini S. Pillai, Associate Director, Deloitte Consulting India Pvt. Ltd., joined as Chief Guest, and Mr. Ravi Tanniru, Founder & CEO, ProFintech (Finteract AI), attended as Guest of Honour. Presided over by Smt. Aarathy Sampathy, President & Chief Executive, SSGI, the programme marked the beginning of an enriching academic journey for the new batch.",
  },
  {
    id: "63",
    label: "Spandana-2026 (Freshers' Party)",
    icon: <Image />,
    heading: "Spandana-2026 (Freshers' Party) – PGDM Batch 2026–28",
    description: `Siva Sivani Institute of Management (SSIM) organized Fresher’s Day for the PGDM Batch 2026–28, welcoming the new students into the SSIM family with joy, enthusiasm, and vibrant celebrations.

The event was filled with fun, talent, laughter, and memorable moments, fostering friendship, togetherness, and a sense of belonging among the new batch.

SSIM extends a warm welcome to the PGDM Batch 2026–28 and wishes all students a successful, enriching, and exciting journey ahead!`,
  },
  {
    id: "62",
    label: "FinTech Certificate Award Ceremony",
    icon: <Image />,
    heading: "Certificate Award Ceremony for the Advanced Certificate Course on FinTech",
    description: `Siva Sivani Institute of Management (SSIM), in collaboration with the Institute of Cost Accountants of India (ICMAI), organised the Certificate Award Ceremony for the Advanced Certificate Course on FinTech.

The event was graced by eminent representatives from ICMAI, celebrating the achievement of 105 students and faculty members who successfully qualified for the certification.

The ceremony highlighted the evolving FinTech and BFSI landscape, emerging career opportunities, and the growing importance of integrating financial expertise with technology.`,
  },
  {
    id: "61",
    label: "From Classroom to Corporate",
    icon: <Image />,
    heading: "From Classroom to Corporate | Building Skills for a Successful Career",
    description: `Siva Sivani Institute of Management (SSIM) hosted an engaging session for the PGDM Batch 2026–27, led by Mr. Vinod Sharma, Chief Operating Officer, Education Services Pvt. Ltd., and SSIM alumnus, 3rd Batch (1996–98).

Drawing from his corporate journey and leadership experience, Mr. Sharma shared valuable perspectives on career readiness, professional skills, workplace expectations and the transition from campus to corporate life.`,
  },
  {
    id: "60",
    label: "SANMAAN - Teacher's Day",
    icon: <Image />,
    heading: "SANMAAN - TEACHER'S DAY",
    description: `Teachers' Day is celebrated every year on 5th September at SSIM. On this day SSIM felicitates a distinguished teacher with a citation highlighting the accomplishments and contributions made by the teacher. This sends a strong message to students about our tradition of respecting teachers, which is part of our culture and society.

As part of the celebrations, SSIM conferred the Dr. S. Radhakrishnan Memorial “Teacher of Teachers” Award on Prof. Abhirama Krishna, Director General, Badruka Group of Institutions, in recognition of his distinguished contribution to education. The students of SPS School presented a vibrant array of cultural programmes, adding colour and spirit to the celebrations.

On the occasion, the Management felicitated employees of the Siva Sivani Group of Institutions (SSGI) in appreciation of their dedicated service and contribution to the cause of education.`,
  },
  {
    id: "59",
    label: "SAMPARK 2026",
    icon: <Image />,
    heading: "SAMPARK 2026 | An Evening of Meaningful Connections & Conversations",
    description: `100+ HR Professionals | 6 Distinguished HR Leaders | One Powerful Platform

SSIM, in association with NHRD Network, organized SAMPARK 2026 on 28 August 2026 at T-Hub, Hyderabad, bringing together 100+ HR professionals, industry leaders, recruiters and academicians for an engaging evening of connections, conversations and collaboration.

The theme, “AI FOR HR: From Hype to Impact,” sparked insightful discussions on how Artificial Intelligence is transforming HR practices, talent, careers and the future of work.`,
  },
  {
    id: "58",
    label: "Hustle Smart: The New Rules of Business",
    icon: <Image />,
    heading: "On the occasion of World Entrepreneurs’ Day, SSIM hosted: Hustle Smart: The New Rules of Business",
    description: `On the occasion of World Entrepreneurs’ Day, SHURUAAT – Entrepreneurship & Innovation Cell, in collaboration with IIC – Institution’s Innovation Council, brought together inspiring entrepreneurs and industry leaders for an insightful panel discussion on entrepreneurship, innovation, and the future of business.

The conversation featured real experiences, fresh perspectives, and smart business lessons, offering valuable takeaways for aspiring entrepreneurs and future business leaders.`,
  },
  {
    id: "56",
    label: "Sanghosti 2026: Campus to Corporate",
    icon: <Image />,
    heading: "Sanghosti 2026 – Panel Discussion on Campus to Corporate",
    description:
      "On 30 July 2026, SSIM organized Sanghosti 2026, a panel discussion on Campus to Corporate, moderated by Dr. Ravi Dasari, Professor, SSIM. Industry leaders and SSIM alumni shared practical guidance on career readiness, communication, adaptability, leadership, teamwork, networking, and continuous learning, helping students bridge the gap between academics and professional life.",
  },
  {
    id: "55",
    label: "Outbound Training 2026",
    icon: <Image />,
    heading: "Outbound Training for PGDM Students",
    description:
      "On 31 July 2026, SSIM organized a two-day Outbound Training programme for PGDM students. Through activities including Toxic Waste, Battle Field, Mountain Trekking, Mission Impossible, and Shepherd and Pen, students developed leadership, coordination, teamwork, resilience, and the ability to accept criticism and handle negative feedback effectively.",
  },
  {
    id: "54",
    label: "Alumni Workshop: Seven Habits",
    icon: <Image />,
    heading: "Alumni Workshop: The Seven Habits of Highly Effective People",
    description:
      "As part of the Alumni Connect Series, SSIM held an interactive workshop on The Seven Habits of Highly Effective People on 16 May 2026. Dr. Ravi Dasari, President – HR, Jasper Industries Pvt. Ltd., shared practical insights on effective habits, leadership, and personal and professional success, inspiring students to build a positive mindset.",
  },
  {
    id: "52",
    label: "Industrial Visit to Mayora India",
    icon: <Image />,
    heading: "Industrial Visit to Mayora India Pvt. Ltd.",
    description:
      "From 17–18 March 2026, SSIM students of Batch 2025–27 visited the Mayora India Pvt. Ltd. manufacturing facility. The experiential learning visit offered insights into FMCG production, automation, quality control, supply-chain management, and the manufacturing and packaging of Kopiko coffee candies.",
  },
  {
    id: "51",
    label: "Sanghosti 2026: Classroom to Corporate",
    icon: <Image />,
    heading: "SANGHOSTI–2026 Panel Discussion: From Classroom to Corporate",
    description:
      "On 28 March 2026, SSIM successfully hosted Sanghosti–2026, a thought-provoking panel discussion on “Classroom to Corporate.” Distinguished alumni, including Rochit Abbi – National Vice President, FITIG Bharat (1992–1994), Ram Kandarpa – Sr. Delivery Manager, SAP, Technoval (1994–1996), Amar Pasapula – Vice President, Conneqt Business Solutions Ltd. (1996–1998), Prashanth Gubba – Founder & Design Head, Gubba Cold Infra (1998–2000), and Bala Nagendar Singh – Sr. Project Manager, xcubelabs (2013–2015), shared valuable insights from their professional journeys. The session highlighted perseverance, adaptability, networking, and continuous learning as key pillars for success in the corporate world. Students gained practical guidance and inspiration for their career journeys.",
  },

  {
    id: "50",
    label: "Sports Club Cricket Tournament",
    icon: <Image />,
    heading: "Sports Club Cricket Tournament",
    description:
      "The SSIM Sports Club organised a cricket tournament that brought students together through teamwork, healthy competition and sporting spirit.",
  },

  {
    id: "48",
    label: "Signature Day",
    icon: <Image />,
    heading: "Signature Day",
    description: "Celebration of signature day events at SSIM.",
  },

  {
    id: "46",
    label: "Marketing Club Activity – Corporate Walk 2026",
    icon: <Image />,
    heading: "Marketing Club Activity – Corporate Walk 2026",
    description:
      "SRIJAN – Marketing Club of SSIM organized Corporate Walk 2026, celebrating confidence, professionalism, and vibrant student energy.",
  },
  {
    id: "45",
    label: "Inauguration of Marketing Club",
    icon: <Image />,
    heading: "Inauguration of Marketing Club",
    description:
      "The inauguration of SRIJAN – Marketing Club of SSIM marked the beginning of a student-led platform for creative marketing activities, industry interaction and experiential learning.",
  },

  {
    id: "43",
    label: "HR Club Inauguration – Samriddhi",
    icon: <Image />,
    heading: "HR Club Inauguration – Samriddhi",
    description:
      "Samriddhi, the HR Club of SSIM, was inaugurated as a platform for students to explore people management, workplace practices and emerging HR trends.",
  },
  {
    id: "41",
    label: "Finance Club Inauguration",
    icon: <Image />,
    heading: "Finance Club Inauguration",
    description: "Inauguration ceremony of the Finance Club at SSIM.",
  },
  {
    id: "40",
    label: "Smriti 2026 – Farewell Celebration",
    icon: <Image />,
    heading: "Smriti 2026 – Farewell Celebration",
    description:
      "Smriti 2026 was SSIM's farewell celebration for the Batch 2024–26, bringing juniors and seniors together to celebrate friendships, memories and the graduating students' journey.",
  },
  {
    id: "39",
    label: "ESG Club Inauguration",
    icon: <Image />,
    heading: "ESG Club Inauguration",
    description: "Inauguration ceremony of the ESG Club at SSIM.",
  },
  {
    id: "38",
    label: "Business Analytics Club – Sukshmadarshi Inauguration",
    icon: <Image />,
    heading: "Business Analytics Club – Sukshmadarshi Inauguration",
    description:
      "Sukshmadarshi, the Business Analytics Club of SSIM, was inaugurated to encourage data-driven thinking, analytical problem-solving and collaborative learning.",
  },

  {
    id: "35",
    label: "Analytics Club Quiz Session",
    icon: <Image />,
    heading: "Analytics Club Quiz Session",
    description: "Quiz session organized by the Analytics Club.",
  },
  {
    id: "33",
    label: "Women's Week @SSIM",
    icon: <Image />,
    heading: "Women's Week @SSIM",
    description: `Siva Sivani Institute of Management celebrates Women and considers Women the power engine driving and propelling the growth of the institution. Headed by our Leader, Mrs. Aarathy Sampathy, President and Chief Executive, the institution celebrated a whole week dedicated to Women's day starting  March 2 to March 10, 2026.

On the occasion of Women's Week, SSIM Cultural Club in collaboration with SSIM ESG Club and Team Satakshi (Team of Women Employees), organized a Donation Drive inspired by this year's International Women's Day theme — "Give to Gain." The initiative witnessed enthusiastic participation from the SSIM community. Faculty members, staff, and students came forward generously to contribute towards this meaningful cause. The collected donations primarily included groceries and clothing items.

Adding to the spirit of giving, Non-Fire Cooking Challenge was conducted as part of the Women's Week celebrations. The participants of this challenge contributed the proceeds towards purchasing additional groceries for donations. Individual donations also supported this effort, enabling the team to extend greater assistance to those in need.

On March 10, 2026, the collected items were donated to the 'Integrated Welfare Society', an NGO for the Aged Mentally Sick Persons located at Quthubullapur, Hyderabad, bringing smiles and support to the beneficiaries.
`,
  },
  {
    id: "32",
    label: "Learning Beyond the Classroom!",
    icon: <Image />,
    heading: "Learning Beyond the Classroom!",
    description: `The first batch of PGDM students from Siva Sivani Institute of Management (SSIM) visited the Hetero Plant, Jeedimetla as part of an Industry Study Tour, gaining first-hand exposure to real-world pharmaceutical operations.

During the visit, Students explored key areas including warehouse operations, manufacturing processes, and QC/QA practices. They also had the opportunity to interact with plant operators and managers, understanding how large-scale pharma operations function on the ground.

As a part of their academic learning, students will now map the existing operational processes and identify opportunities for automation and improvement using Lean and TQM techniques.

Experiences like these bridge the gap between management concepts and industry practice, preparing our students to become future-ready professionals.`,
  },
  {
    id: "31",
    label: "SAMAROH 2026",
    icon: <Image />,
    heading: "SAMAROH 2026 – Annual International Conference",
    description: `Siva Sivani Institute of Management hosted SAMAROH 2026 on February 11–12, 2026, themed "Digital Dharma – Responsible AI for a Sustainable Future." The conference brought together academicians, researchers, industry experts, and students from across India to explore ethical and sustainable AI practices.
With 114 research submissions, multiple presentation tracks, international keynote sessions, and industry panel discussions, the event promoted impactful academic dialogue and collaboration.
SAMAROH 2026 recorded an Excellent NPS of +58.03 and a CSAT of 4.33/5, reflecting high participant satisfaction and strong academic engagement.`,
  },
  {
    id: "27",
    label: "Medical Camp",
    icon: <Image />,
    heading: "Medical Camp",
    description: "Health awareness and medical checkup camp organized at SSIM.",
  },
  {
    id: "28",
    label: "ICMAI MOU",
    icon: <Image />,
    heading: "ICMAI MOU",
    description: "Memorandum of Understanding signing ceremony with ICMAI.",
  },
  {
    id: "29",
    label: "MOU with IBM",
    icon: <Image />,
    heading: "MOU with IBM",
    description: "Memorandum of Understanding signing ceremony with IBM to enhance academic and industry collaboration.",
  },
  {
    id: "30",
    label: <>27<sup style={{ marginLeft: "-0.4rem" }}>th</sup> Samanvay</>,
    icon: <Image />,
    heading: <>27<sup style={{ marginLeft: "0.05em" }}>th</sup> Samanvay</>,
    description: "27th Samanvay - Inter Collegiate Management Students' Meet.",
  },
//   {
//     id: "2",
//     label: "Sanman-2025",
//     icon: "",
//     heading: "Sanman-2025: Teacher's Day Celebrations at SSIM",
//     description: `On September 4th, 2025, Siva Sivani Institute of Management (SSIM) celebrated Teacher's Day to honor the birth anniversary of Dr. Sarvepalli Radhakrishnan, the second President and first Vice President of India, and an eminent teacher-philosopher.

// As part of its tradition, SSIM confers the Dr. S. Radhakrishnan Memorial 'Teacher of Teachers Award' each year to recognize and celebrate the contributions of distinguished academicians. This year (2025), the award was presented to Dr. Prof. Ch. S. Durga Prasad, Executive Director, Association of Indian Management Schools (AIMS), for his outstanding service to the teaching fraternity.

// Adding to the significance of the occasion, the SSIM Placement Department released the Placement Brochure – Shreshta 2025, showcasing the institute's commitment to academic excellence and industry readiness.`,
//   },
  // {
  //   id: "4",
  //   label: "Leadership Talk",
  //   icon: "",
  //   heading: "Leadership Talk by Mr. Manish Muralidhar Conjeevaram",
  //   description: `on 9th September 2025, Siva Sivani Institute of Management (SSIM) organized an engaging Leadership Talk by Mr. Manish Muralidhar Conjeevaram, Partner – Audit & Assurance, Deloitte, Hyderabad, for the students of the 2024–26 batch. He shared his perspectives on the evolving role of finance and audit in today's business landscape, highlighting the importance of integrity, critical thinking, and adaptability for aspiring managers.`,
  // },
  {
    id: "5",
    label: "Ganesh Celebrations",
    icon: <Image />,
    heading: "Ganesh Celebrations",
    description: "Ganesh Chaturthi celebrations at SSIM campus.",
  },
  // {
  //   id: "6",
  //   label: "SMRITI – 2025",
  //   icon: <Image />,
  //   heading: "SMRITI – 2025 (Farewell Party)",
  //   description:
  //     "On 22nd March 2025, SSIM organized 'SMRITI-2025 (Farewell Party)' at Swagath Grand, Suchithra. Junior students gave a nice treat to their Seniors Batch 2023-25. The students had fun while participating in various cultural activities and games.",
  // },
  {
    id: "7",
    label: "Onam Festival",
    icon: <Image />,
    heading: "Onam Festival",
    description: "Onam celebration at SSIM with traditional activities and festivities.",
  },
  // {
  //   id: "8",
  //   label: "Leadership Talk",
  //   icon: <Image />,
  //   heading: "Leadership Talk by Mr. Gijo Mathew",
  //   description:
  //     "Mr. Gijo Mathew, Head of Learning & Development at Auro Group, addressed the students on 08th September 2025 for the Batch 2026–27. In his session, he emphasized the importance of developing leadership through a growth mindset, highlighting how cultivating resilience, adaptability, and continuous learning can shape future leaders.",
  // },
  // {
  //   id: "9",
  //   label: "Onam Festival",
  //   icon: <Image />,
  //   heading: "Onam Festival",
  //   description: "Onam celebration at SSIM with traditional activities and festivities.",
  // },
  {
    id: "11",
    label: "Raksha Bandhan 2025",
    icon: <Image />,
    heading: "Raksha Bandhan with Our Soldiers",
    description:
      "This Raksha Bandhan, Siva Sivani Institute of Management (SSIM) had the honor of celebrating with the brave soldiers at the Bollaram Army Campus. Tying rakhis was more than a tradition—it was a heartfelt tribute to the heroes who safeguard our nation. The warm interaction with officers and soldiers filled us with pride, gratitude, and inspiration",
  },
  {
    id: "12",
    label: "Tiranga Campaign",
    icon: <Image />,
    heading: "Selfie with Tiranga Campaign @ SSIM",
    description:
      "Siva Sivani Institute of Management (SSIM) organized the \"Selfie with Tiranga\" campaign on campus to celebrate India's Independence. The initiative aimed to encourage students and staff to bring the Tiranga home and proudly hoist it as a symbol of patriotism and unity. Both senior and junior students actively participated, capturing memorable moments with the national flag and showcasing their love and respect for the nation",
  },
  // {
  //   id: "14",
  //   label: "Outbound Training",
  //   icon: <Image />,
  //   heading: "Outbound Training for PGDM Students",
  //   description:
  //     "On 1st and 2nd August 2025, SSIM organized Outbound Training (OBT) for PGDM students. This training was organized to help the students learn practical lessons of Leadership, Coordination, and teamwork while accepting criticism and handling negative feedback effectively. Some of the training activities arranged for the students included Toxic Waste, Battle Field, Mountain Trekking, Mission Impossible, and Shepherd and Pen. This event was organized for two days and the students were divided into two batches.",
  // },
  // {
  //   id: "53",
  //   label: "Spandana",
  //   icon: "",
  //   heading: "SPANDANA - A SPONTANEOUS RESPONSE (FRESHERS' PARTY)",
  //   description:
  //     "The institute strongly believes in inter personnel relations and teamwork. In order to give a feeling of oneness to the freshers, the Seniors conduct 'Spandana' to warmly and formally welcome their Juniors into the family of Siva Sivani.",
  // },
  // {
  //   id: "15",
  //   label: "Sammelan",
  //   icon: "",
  //   heading: "SAMMELAN - AN INTRA COLLEGIATE MEET",
  //   description:
  //     "To bring out the innate talent of the students, various cultural activities, management games etc are conducted. One day in a term is earmarked for this activity.",
  // },
  // {
  //   id: "19",
  //   label: "Smriti",
  //   icon: "",
  //   heading: "SMRITI - A FOND REMEMBRANCE (FAREWELL PARTY)",
  //   description: `Meeting and parting is a way of life. After the completion of the course, it is certain that the Seniors part with the Juniors. In order to express their feelings and the unwritten bonding between the Seniors and the Juniors, the Juniors bid a grand Farewell to the seniors in the 6th trimester. Various activities are organised in order to further strengthen the relationship even after leaving the portals of the Institute. The Juniors present mementos as a fond memory to the seniors.`,
  // },
//   {
//     id: "16",
//     label: "Samaroh",
//     icon: <Image />,
//     heading: "SAMAROH - IT IS INTERNATIONAL RESEARCH CONFERENCE AT SSIM",
//     description: `The SAMAROH is conducted to commemorate the death anniversary of the founder of Siva Sivani Group of Institutions.
// Samaroh is an international conference which is aimed to offer a knowledge sharing platform for academicians, researchers and corporate professionals for exchange of new body of knowledge. This conference will also have key note address from renowned management experts and research paper presentations of conference participants.`,
//   },
//   {
//     id: "17",
//     label: "Samanvay",
//     icon: <Image />,
//     heading: "SAMANVAY - THE ESSENCE OF CO-ORDINATION",
//     description: `An Inter Collegiate Management Students' Meet organised by the students of Siva Sivani. This event brings together the students of various Business Schools across the state. They participate in various management related competitive events. This is an opportunity for the students of Siva Sivani to organise and show their leadership qualities in managing such a big event.

// Many business houses sponsor the events organised in Samanvay. This clearly manifests the Industry- Institute-Interaction of Siva Sivani Institute of Management.`,
//   },
//   {
//     id: "18",
//     label: "Sameeksha",
//     icon: <Image />,
//     heading: "SAMEEKSHA",
//     description: `The Students organise Club Activities under HR, Finance, Marketing and Systems Club to bring out the innate latent talent. Students make various presentations, conduct formal and informal activities such as acquiesces, group discussions, Management related games etc in order to develop and nourish the creativity that is abundantly available in every one of us.

// Experts from the industry may chair the club sessions conducted by the students who will share their experiences with the students. These activities help students acquire the knowledge on contemporary issues in their respective specializations, improve their oral and written communication skills and participate effectively in the competitions conducted by various Business Schools.`,
//   },
  // {
  //   id: "20",
  //   label: "Sneha",
  //   icon: <Image />,
  //   heading: "SNEHA - THE ALUMNI ASSOCIATION OF SSIM",
  //   description: `We at SSIM strongly believe that the Alumni Association has a great role to play in the developmental activities of the Institute. To strengthen our relationship with the Alumni, we conduct various activities and invite them to the campus. This gives a feeling to every student of SSIM that they are always a part of the Siva Sivani family.`,
  // },
  // {
  //   id: "21",
  //   label: "Sadhana",
  //   icon: <Image />,
  //   heading: "SADHANA - STUDENT RESEARCH CONFERENCE",
  //   description: `SADHANA is a Student Research Conference introduced in 2022. The aim of the conference is to bring Bachelor's / Master's research into spotlight and to increase the enthusiasm among students for academic research. This conference gives UG / PG students a unique opportunity to present their research among the learned audiences. Participating in this conference enables the students to experience academic practice.`,
  // },
  // {
  //   id: "22",
  //   label: "Snatak",
  //   icon: <Image />,
  //   heading: "SNATAK - CONVOCATION",
  //   description: `Snatak – Convocation of every batch will be held on 22nd October on every year to conform the degrees of the passed students.`,
  // },
];

const studentAchievementCategories = industryData.map((achievement) => ({
  id: `achievement-${achievement.id}`,
  label: achievement.title,
  icon: <Image />,
  heading: achievement.title,
  description: achievement.description,
  contentType: "achievement",
}));

const allCategories = [...categories, ...studentAchievementCategories];

const lifeAtSsimTabs = [
  {
    id: "events",
    label: "Events & Celebrations",
    categoryIds: new Set([
      "64", "63", "62", "60", "58", "48", "40", "31", "30",
    ]),
  },
  {
    id: "induction",
    label: "Induction Programmes & Classroom Activities",
    categoryIds: new Set(["57", "55"]),
  },
  {
    id: "talks",
    label: "Guest Lectures / Industry Interaction / Industry Collaborations",
    categoryIds: new Set(["67", "59", "28", "29"]),
  },
  {
    id: "alumni",
    label: "Alumni Interactions / Alumni Workshops",
    categoryIds: new Set(["61", "56", "54", "51"]),
  },
  {
    id: "clubs",
    label: "Student Club Activities",
    categoryIds: new Set([
      "66", "65", "7", "5", "33", "27", "35", "11", "50", "46", "45", "43",
      "41", "38", "39", "12",
    ]),
  },
  {
    id: "achievements",
    label: "Student Achievements",
    categoryIds: new Set(
      studentAchievementCategories.map((achievement) => achievement.id)
    ),
  },
  {
    id: "industrial-visits",
    label: "Industrial Visit",
    categoryIds: new Set(["52", "32"]),
  },
];

// Image arrays for current Life at SSIM stories
const snatak31stImages = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/snatak-2026/${filename}`,
  category: "64",
  alt: `31st Snatak convocation image ${i + 1}`,
}));

const bathukammaDandiyaImages = ["1.webp", "2.webp"].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/bathukamma-dandiya/${filename}`,
  category: "65",
  alt: `Bathukamma and Dandiya celebrations image ${i + 1}`,
}));

const badmintonTournamentImages = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/badminton-tournament/${filename}`,
  category: "66",
  alt: `Badminton tournament image ${i + 1}`,
}));

const campusToCorporateTimeImages = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/campus-to-corporate-time/${filename}`,
  category: "67",
  alt: `Campus to Corporate guest lecture image ${i + 1}`,
}));

const analyticsClubQuizImages = [
  "7.webp",
  "10.webp",
  "8.webp",
  "2.webp",
  "4.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/analytics-club-quiz-session/${filename}`,
  category: "35",
  alt: `analytics club quiz image ${i + 1}`,
}));




const dataScienceClubImages = [
  "1.webp",
  "3.webp",
  "2.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/data-science-club-inaguration/${filename}`,
  category: "38",
  alt: `data science club image ${i + 1}`,
}));

const esgClubImages = [
  "2.webp",
  "1.webp",
  "3.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/esg-club-inaguration/${filename}`,
  category: "39",
  alt: `esg club image ${i + 1}`,
}));

const farewell2026Images = [
  "10.webp",
  "7.webp",
  "5.webp",
  "6.webp",
  "13.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/farewell-2026/${filename}`,
  category: "40",
  alt: `farewell 2026 image ${i + 1}`,
}));

const financeClubImages = [
  "5.webp",
  "3.webp",
  "6.webp",
  "4.webp",
  "1.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/finance-club-inaguration/${filename}`,
  category: "41",
  alt: `finance club image ${i + 1}`,
}));


const hrClubImages = [
  "1.webp",
  "3.webp",
  "2.webp",
  "5.webp",
  "4.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/hr-club-inaguration/${filename}`,
  category: "43",
  alt: `hr club image ${i + 1}`,
}));



const marketingClub2025Images = [
  "11.webp",
  "8.webp",
  "7.webp",
  "1.webp",
  "2.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/marketing-club-2025-26/${filename}`,
  category: "45",
  alt: `marketing club 2025-26 image ${i + 1}`,
}));

const marketingClubActivityImages = [
  "2.webp",
  "1.webp",
  "3.webp",
  "5.webp",
  "4.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/marketing-club-activity/${filename}`,
  category: "46",
  alt: `marketing club activity image ${i + 1}`,
}));



const sagnatureDayImages = [
  "2.webp",
  "7.webp",
  "4.webp",
  "3.webp",
  "1.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sagnature-day/${filename}`,
  category: "48",
  alt: `sagnature day image ${i + 1}`,
}));



const studentClubTournamentImages = [
  "4.webp",
  "1.webp",
  "2.webp",
  "3.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/student-club-tournamnet/${filename}`,
  category: "50",
  alt: `student club tournament image ${i + 1}`,
}));



// Existing image arrays


const ganeshCelebrationsImages = [
  "Ganesh Celebrations (4).webp",
  "Ganesh Celebrations (6).webp",
  "Ganesh Celebrations (2).webp",
  "Ganesh Celebrations (8).webp",
  "Ganesh Celebrations (7).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/ganesh-celebrations/${filename}`,
  category: "5",
  alt: `ganesh celebrations image ${i + 1}`,
}));

const spandana2026Images = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/spandana-2026/spandana-2026-0${i + 1}.webp`,
  category: "63",
  alt: `Spandana 2026 freshers' party image ${i + 1}`,
}));

const fintechCertificateImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/fintech-certificate-ceremony/fintech-0${i + 1}.webp`,
  category: "62",
  alt: `FinTech certificate ceremony image ${i + 1}`,
}));

const classroomToCorporateCareerImages = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/classroom-to-corporate-career/classroom-corporate-0${i + 1}.webp`,
  category: "61",
  alt: `From Classroom to Corporate session image ${i + 1}`,
}));

const visarjanImages = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/visarjan/visarjan-0${i + 1}.webp`,
  category: "5",
  alt: `Ganesh visarjan image ${i + 1}`,
}));

const sanmaan2026Images = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sanmaan-2026/sanmaan-0${i + 1}.webp`,
  category: "60",
  alt: `Sanmaan 2026 Teachers' Day image ${i + 1}`,
}));

const sampark2026Images = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sampark-2026/sampark-0${i + 1}.webp`,
  category: "59",
  alt: `Sampark 2026 image ${i + 1}`,
}));

const hustleSmartImages = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/hustle-smart/hustle-smart-0${i + 1}.webp`,
  category: "58",
  alt: `Hustle Smart entrepreneurship panel image ${i + 1}`,
}));

const smriti2025Images = [
  "smriti 2025 (6).jpg",
  "smriti 2025 (15).jpg",
  "smriti 2025 (10).jpg",
  "smriti 2025 (14).jpg",
  "smriti 2025 (23).jpg"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/smriti-2025/${filename}`,
  category: "6",
  alt: `smriti 2025 image ${i + 1}`,
}));

const onamFestivalImages = [
  "Onam Celebrations (2).webp",
  "Onam Celebrations (1).webp",
  "Onam Celebrations (3).webp",
  "Onam Celebrations (4).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/onam-celebrations/${filename}`,
  category: "7",
  alt: `onam festival image ${i + 1}`,
}));


const rakshaBandhanImages = [
  "raksha-bandhan (4).jpg",
  "raksha-bandhan (7).jpg",
  "raksha-bandhan (6).jpg",
  "raksha-bandhan (8).jpg",
  "raksha-bandhan (1).jpg"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/raksha-bandhan/${filename}`,
  category: "11",
  alt: `raksha bandhan image ${i + 1}`,
}));

const tirangaCampaignImages = [
  "independence (11).webp",
  "independence (4).webp",
  "independence (3).webp",
  "independence (5).webp",
  "independence (6).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/independence/${filename}`,
  category: "12",
  alt: `tiranga campaign image ${i + 1}`,
}));


const outboundTrainingImages = [
  "outbound (5).webp",
  "outbound (7).webp",
  "outbound (3).webp",
  "outbound (6).webp",
  "outbound (4).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/outbound/${filename}`,
  category: "14",
  alt: `outbound training image ${i + 1}`,
}));

const sangosti2026ClassroomToCorporateImages = [
  "sangosti-2026-classroom-to-corporate (16).webp",
  "sangosti-2026-classroom-to-corporate (17).webp",
  "sangosti-2026-classroom-to-corporate (8).webp",
  "sangosti-2026-classroom-to-corporate (3).webp",
  "sangosti-2026-classroom-to-corporate (4).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sangosti-2026-classroom-to-corporate/${filename}`,
  category: "51",
  alt: `Sangosti 2026 classroom to corporate image ${i + 1}`,
}));

const mayoraIndustrialVisitImages = [
  "industrial-visit-mayora-2026 (4).webp",
  "industrial-visit-mayora-2026 (1).webp",
  "industrial-visit-mayora-2026 (15).webp",
  "industrial-visit-mayora-2026 (14).webp",
  "industrial-visit-mayora-2026 (3).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/industrial-visit-mayora-2026/${filename}`,
  category: "52",
  alt: `Mayora industrial visit image ${i + 1}`,
}));

const alumniSevenHabitsWorkshopImages = [
  "alumni-workshop-seven-habits-2026 (29).webp",
  "alumni-workshop-seven-habits-2026 (1).webp",
  "alumni-workshop-seven-habits-2026 (6).webp",
  "alumni-workshop-seven-habits-2026 (4).webp",
  "alumni-workshop-seven-habits-2026 (21).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/alumni-workshop-seven-habits-2026/${filename}`,
  category: "54",
  alt: `Seven Habits alumni workshop image ${i + 1}`,
}));

const outboundTraining2026Images = [
  "outbound-training-2026 (31).webp",
  "outbound-training-2026 (22).webp",
  "outbound-training-2026 (30).webp",
  "outbound-training-2026 (3).webp",
  "outbound-training-2026 (5).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/outbound-training-2026/${filename}`,
  category: "55",
  alt: `Outbound training 2026 image ${i + 1}`,
}));

const sanghosti2026CampusToCorporateImages = [
  "sanghosti-2026-campus-to-corporate (4).webp",
  "sanghosti-2026-campus-to-corporate (3).webp",
  "sanghosti-2026-campus-to-corporate (10).webp",
  "sanghosti-2026-campus-to-corporate (5).webp",
  "sanghosti-2026-campus-to-corporate (6).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sanghosti-2026-campus-to-corporate/${filename}`,
  category: "56",
  alt: `Sanghosti 2026 campus to corporate image ${i + 1}`,
}));

const pgdmInauguration202628Images = [
  "pgdm-inauguration-2026-28 (3).webp",
  "pgdm-inauguration-2026-28 (1).webp",
  "pgdm-inauguration-2026-28 (5).webp",
  "pgdm-inauguration-2026-28 (2).webp",
  "pgdm-inauguration-2026-28 (6).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/pgdm-inauguration-2026-28/${filename}`,
  category: "57",
  alt: `PGDM Batch 2026–28 inauguration image ${i + 1}`,
}));

const leadershipTalkImages = [
  "Leadership Talk (1).webp",
  "Leadership Talk (2).webp",
  "Leadership Talk (4).webp",
  "Leadership Talk (3).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/leadership-talk/${filename}`,
  category: "8",
  alt: `leadership talk image ${i + 1}`,
}));

const samarohImages = [
  "samaroh (12).webp",
  "samaroh (5).webp",
  "samaroh (15).webp",
  "samaroh (4).webp",
  "samaroh (6).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/samaroh/${filename}`,
  category: "16",
  alt: `samaroh image ${i + 1}`,
}));

const samanvayImages = [
  "samanvay (12).webp",
  "samanvay (8).webp",
  "samanvay (9).webp",
  "samanvay (11).webp",
  "samanvay (3).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/samanvay/${filename}`,
  category: "17",
  alt: `samanvay image ${i + 1}`,
}));

const sameekshaImages = [
  "sameeksha (9).webp",
  "sameeksha (6).webp",
  "sameeksha (8).webp",
  "sameeksha (5).webp",
  "sameeksha (7).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sameeksha/${filename}`,
  category: "18",
  alt: `sameeksha image ${i + 1}`,
}));

const snehaImages = [
  "sneha (10).webp",
  "sneha (9).webp",
  "sneha (14).webp",
  "sneha (32).webp",
  "sneha (11).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sneha/${filename}`,
  category: "20",
  alt: `sneha image ${i + 1}`,
}));

const sadhanaImages = [
  "sadhana (13).webp",
  "sadhana (6).webp",
  "sadhana (7).webp",
  "sadhana (5).webp",
  "sadhana (14).webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/sadhana/${filename}`,
  category: "21",
  alt: `sadhana image ${i + 1}`,
}));

const medicalCampImages = [
  "DSC_9072.webp",
  "DSC_9013.webp",
  "DSC_9029.webp",
  "DSC_9068.webp",
  "DSC_9101.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/Medical Camp/${filename}`,
  category: "27",
  alt: `medical camp image ${i + 1}`,
}));

const icmaiMouImages = [
  "DSC_9274.webp",
  "DSC_9356.webp",
  "DSC_9458.webp",
  "DSC_9371.webp",
  "DSC_9439.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/ICMAI MOU/${filename}`,
  category: "28",
  alt: `ICMAI MOU image ${i + 1}`,
}));

const mouWithIbmImages = [
  "DSC_8865_2_2026_14_2026.webp",
  "DSC_8767_8_2026_10_2026.webp",
  "DSC_8919_7_2026_12_2026.webp",
  "DSC_8912_6_2026_18_2026.webp",
  "DSC_8903_4_2026_16_2026.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/MOU with  IBM/${filename}`,
  category: "29",
  alt: `MOU with IBM image ${i + 1}`,
}));

const samanvayEventPicsImages = [
  "Other college Winners (5).webp",
  "DSC_6629.webp",
  "DSC_6299.webp",
  "Other college Winners (6).webp",
  "DSC_8255.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/Samanvay Event Pics/${filename}`,
  category: "30",
  alt: `27th Samanvay image ${i + 1}`,
}));

const classroomImages = [
  "Classroom1.jpeg",
  "Classroom3.jpeg",
  "Classroom2.jpeg"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/Classroom/${filename}`,
  category: "32",
  alt: `Classroom image ${i + 1}`,
}));

const womensWeekImages = [
  "image6.jpeg",
  "image3.jpeg",
  "image2.jpeg",
  "image4.jpeg",
  "image8.jpeg"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/Women'sWeek/${filename}`,
  category: "33",
  alt: `Women'sWeek image ${i + 1}`,
}));

const samaroh2026Images = [
  "9.webp",
  "1.webp",
  "12.webp",
  "5.webp",
  "3.webp"
].map((filename, i) => ({
  id: i + 1,
  src: `/studentslife/life-at-ssim/samaroh-2026/${filename}`,
  category: "31",
  alt: `samaroh 2026 image ${i + 1}`,
}));

const studentAchievementImages = industryData.flatMap((achievement) => {
  const images =
    achievement.gallery && achievement.gallery.length > 0
      ? achievement.gallery
      : [achievement.image];

  return images.filter(Boolean).map((src, index) => ({
    id: index + 1,
    src,
    category: `achievement-${achievement.id}`,
    alt: `${achievement.title} image ${index + 1}`,
  }));
});

// Combined gallery items
const galleryItems = [
  ...snatak31stImages,
  ...bathukammaDandiyaImages,
  ...badmintonTournamentImages,
  ...campusToCorporateTimeImages,
  ...studentClubTournamentImages,
  ...sagnatureDayImages,
  ...marketingClubActivityImages,
  ...marketingClub2025Images,
  ...hrClubImages,
  ...financeClubImages,
  ...farewell2026Images,
  ...esgClubImages,
  ...dataScienceClubImages,
  ...analyticsClubQuizImages,
  ...womensWeekImages,
  ...classroomImages,
  ...samaroh2026Images,
  ...medicalCampImages,
  ...icmaiMouImages,
  ...mouWithIbmImages,
  ...samanvayEventPicsImages,
  ...ganeshCelebrationsImages,
  ...smriti2025Images,
  ...onamFestivalImages,
  ...rakshaBandhanImages,
  ...tirangaCampaignImages,
  ...leadershipTalkImages,
  ...outboundTrainingImages,
  ...sangosti2026ClassroomToCorporateImages,
  ...mayoraIndustrialVisitImages,
  ...alumniSevenHabitsWorkshopImages,
  ...outboundTraining2026Images,
  ...sanghosti2026CampusToCorporateImages,
  ...pgdmInauguration202628Images,
  ...spandana2026Images,
  ...fintechCertificateImages,
  ...classroomToCorporateCareerImages,
  ...sanmaan2026Images,
  ...sampark2026Images,
  ...hustleSmartImages,
  ...samarohImages,
  ...samanvayImages,
  ...sameekshaImages,
  ...snehaImages,
  ...sadhanaImages,
  ...visarjanImages,
  ...studentAchievementImages,
];

const ImageDialog = ({ isOpen, onOpenChange, currentCategory, currentImage, onPrevious, onNext, hasImages }) => {
  if (!currentCategory) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white rounded-xl shadow-2xl border-none [&>button]:hidden">
        <DialogDescription className="sr-only">
          Image gallery viewer showing {currentCategory.heading}
        </DialogDescription>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-[60] h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="flex flex-col w-full max-h-[90vh]">
          {/* Image Section — only rendered when images exist */}
          {hasImages && currentImage ? (
            <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 rounded-full hover:bg-white/90 bg-white/70 text-black shadow-md backdrop-blur-sm transition-all"
                onClick={onPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <img
                src={currentImage.src}
                alt={currentImage.alt || currentCategory.heading}
                loading="lazy"
                className="w-full h-full object-contain"
              />

              <Button
                size="icon"
                className="absolute right-4 z-50 rounded-full hover:bg-white/90 bg-white/70 text-black shadow-md backdrop-blur-sm transition-all"
                onClick={onNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          ) : !hasImages ? (
            /* Text-only placeholder banner */
            <div className="w-full aspect-video bg-gradient-to-br from-[#1a1a5e] to-[#4239c4] flex flex-col items-center justify-center">
              <span className="text-white/30 text-[72px] font-bold select-none leading-none">SSIM</span>
              <span className="text-white/60 text-sm mt-2 tracking-widest uppercase">Life at SSIM</span>
            </div>
          ) : null}
          
          {/* Text Content Section */}
          <div className="p-6 md:p-8 bg-white overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              {currentCategory.heading}
            </h2>
            {currentCategory.description && (
              <div className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                {currentCategory.description}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function LifeAtSsim() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState(lifeAtSsimTabs[0].id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const selectedTab =
    lifeAtSsimTabs.find((tab) => tab.id === activeTab) || lifeAtSsimTabs[0];
  const validCategories = allCategories.filter((category) =>
    selectedTab.categoryIds.has(category.id)
  );
  const cardTypeLabel =
    activeTab === "achievements"
      ? "Achievement"
      : activeTab === "industrial-visits"
        ? "Industrial Visit"
        : "Event";

  const categoryImages = activeCategory ? galleryItems.filter(item => item.category === activeCategory.id) : [];

  const handlePrevious = useCallback(() => {
    if (!categoryImages.length) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + categoryImages.length) % categoryImages.length);
  }, [categoryImages]);

  const handleNext = useCallback(() => {
    if (!categoryImages.length) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
  }, [categoryImages]);

  const handleKeyPress = useCallback(
    (e) => {
      if (isDialogOpen) {
        if (e.key === "ArrowLeft") handlePrevious();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") setIsDialogOpen(false);
      }
    },
    [isDialogOpen, handlePrevious, handleNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const openDialogForCategory = (category) => {
    setActiveCategory(category);
    setCurrentImageIndex(0); // Start with the first image
    setIsDialogOpen(true);
  };

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[90vw] px-4 py-8 sm:pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <WordPullUp
            words="Explore Life at SSIM"
            className="text-4xl md:text-5xl text-left sm:text-center font-bold tracking-tight text-mainBlue mt-8 mb-4 md:mb-6"
          />
          <p className="text-base text-center max-w-4xl mx-auto text-gray-600">
            Siva Sivani strongly believes in motivating the students to become leaders by giving them ample
            opportunities to explore the talent within them. In order to provide such opportunities SSIM has
            designed various Extra Curricular Activities to enable the students to understand the importance of
            co-ordination, teamwork, group dynamics, oneness etc. To give a structure to these, SSIM has named
            these activities uniquely starting the first letter of every activity with an 'S' as in 'Siva Sivani'.
          </p>
        </motion.div>

        <div
          className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm"
          role="tablist"
          aria-label="Life at SSIM categories"
        >
          {lifeAtSsimTabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="life-at-ssim-panel"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#4239c4] focus:ring-offset-2",
                  isActive
                    ? "bg-[#171b5b] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-[#ecebff] hover:text-[#4239c4]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 text-center text-sm text-slate-500" aria-live="polite">
          Showing {validCategories.length} {validCategories.length === 1 ? "story" : "stories"} in {selectedTab.label}
        </div>

        <motion.div
          id="life-at-ssim-panel"
          role="tabpanel"
          layout
          className="grid mx-auto max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10"
        >
          <AnimatePresence>
            {isLoading
              ? Array.from({ length: 9 }, (_, i) => (
                  <motion.div key={`skeleton-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Skeleton className="w-full aspect-[4/3] rounded-2xl mb-4" />
                    <Skeleton className="w-3/4 h-6 mb-2" />
                    <Skeleton className="w-1/2 h-4" />
                  </motion.div>
                ))
              : validCategories.map((category, index) => {
                  const coverImage = galleryItems.find(img => img.category === category.id);
                  const hasImages = galleryItems.some(img => img.category === category.id);
                  
                  return (
                    <motion.div
                      key={`${category.id}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(index * 0.05, 0.5) }}
                      className="group flex flex-col cursor-pointer overflow-visible mb-10"
                      onClick={() => openDialogForCategory(category)}
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[3/2] w-full mb-6 z-10">
                        <div className="absolute inset-0 bg-gray-100 rounded-[24px] overflow-hidden">
                          {coverImage ? (
                            <img
                              src={coverImage.src}
                              alt={category.heading}
                              loading="lazy"
                              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <Image className="w-12 h-12 opacity-50" />
                            </div>
                          )}
                        </div>
                        
                        {/* Cutout style Tag/Label at bottom-left */}
                        <div className="absolute bottom-0 left-0 bg-white rounded-tr-3xl pt-3.5 pr-7 pl-6 pb-2 z-20">
                          {/* Top-left inverted corner */}
                          <svg width="24" height="24" className="absolute left-0 bottom-full text-white fill-current" viewBox="0 0 24 24">
                            <path d="M 0,24 L 0,0 C 0,13.25 10.75,24 24,24 Z" />
                          </svg>

                          {/* Bottom-right inverted corner */}
                          <svg width="24" height="24" className="absolute left-full bottom-0 text-white fill-current" viewBox="0 0 24 24">
                            <path d="M 0,0 L 0,24 L 24,24 C 10.75,24 0,13.25 0,0 Z" />
                          </svg>

                          <div className="flex items-center text-[14px] font-medium text-gray-700 bg-white">
                            <span className="tracking-wide">{cardTypeLabel}</span>
                            <span className="mx-4 w-[1px] h-3.5 bg-gray-300"></span>
                            <span className="tracking-wide">SSIM</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content - Title and View More */}
                      <div className="flex flex-col flex-grow px-2">
                        <h3 className="text-[19px] md:text-[21px] font-medium text-[#2d2b52] group-hover:text-[#4239c4] transition-colors leading-[1.4]">
                          {category.heading}
                        </h3>
                        
                        <Button 
                          variant="ghost" 
                          className="w-fit p-0 h-auto text-gray-400 hover:text-[#4239c4] hover:bg-transparent font-medium group/btn flex items-center mt-3 text-sm transition-colors"
                        >
                          View More 
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
          </AnimatePresence>
        </motion.div>

        <ImageDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          currentCategory={activeCategory}
          currentImage={categoryImages[currentImageIndex]}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasImages={categoryImages.length > 0}
        />
      </div>
    </main>
  );
}
