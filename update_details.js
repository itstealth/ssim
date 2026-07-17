const fs = require('fs');

const path = './src/data/facultyData.js';
let content = fs.readFileSync(path, 'utf8');

const newData = {
  "Dr. Balanji Reddy Mora": {
    designation: "Assistant. Professor",
    department: "Accounting, Finance & Economics",
    email: "balanji@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-balanji-reddy-mora-4823553b/"
  },
  "Dr. S.F. Chandra Sekhar": {
    designation: "Professor and Area Chair- Human Resource",
    department: "HR & Strategy",
    email: "chandra@ssim.ac.in",
    memberships: "NHRD",
    awards: "1.Life time achievement award by Mainstay consulting Pvt.Ltd.2018. 2.6. Academic Excellence Award by Sneha- Alumni Association, Siva Sivani Institute of Management, 2009.",
    linkedin: "https://in.linkedin.com/in/sfchyd"
  },
  "Dr. Grace Mani K.": {
    designation: "Associate Professor",
    department: "Marketing Management",
    email: "grace@ssim.ac.in",
    memberships: "Indian Academy of Management (INDAM)",
    awards: "",
    linkedin: "https://tinyurl.com/te6uapy4"
  },
  "Dr. Shubhra Johri": {
    designation: "Assistant. Professor",
    department: "Accounting, Finance & Economics",
    email: "shubhra@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/shubhra-johri-098075305/"
  },
  "Mr. M. Chaithanya": {
    designation: "Assistant. Professor and PGP Co-Chair",
    department: "Marketing Management",
    email: "mchaithanya@ssim.ac.in",
    memberships: "",
    awards: "\"Distinguished Alumni Award\" from SSIM Alumni Association",
    linkedin: "https://www.linkedin.com/in/chaithanya-muppavarapu-1787b12b5"
  },
  "Dr. Pinjarla Gowri Kusuma": {
    designation: "Assistant. Professor",
    department: "HR & Strategy",
    email: "gowri@ssim.ac.in",
    memberships: "NA",
    awards: "• Excellence in Teaching (MBA – HR) Award by Indian Society for Training and Development (ISTD) Hyderabad on 9th May 2025. • Best Presentation award for the paper titled “Bakey’s Edible Cutlery – A journey of innovation and impact – Connecting the dots” presented at ICSSR sponsored two day National Seminar (29th – 30th Aug 2024), organized by Kurukshetra University • Best Paper Award for the paper titled “Adaptive Clothing is really adaptive? – A lens view of awareness towards adaptive clothing in Hyderabad. Paper presented at 4th International Conference on Advances in Engineering, Technology and Business Management (24th – 25th May 2024) , NMIET Pune • Topper in ‘Advances in Strategic Human Resource Management’ (April 2023) course offered by IIT Bombay through SWAYAM NPTEL • Best Paper Award for the paper titled – ‘Emotional Labor and Engagement of Nurses’ presented at 2 day International Conference on Business Management and Social Innovation organized by Siva Sivani Institute of Management, Hyderabad (11th -12th Feb 2023) • One of the Top 100 participants (out of 6000) at Women Startup Programme, 2018 conducted by NSRCEL, Indian Institute of Management - Bangalore • “Top Performer” at AICTE approved Four Week Faculty Development Programme, on ‘Use of ICT in Education for Online and Blended Learning’, conducted by IIT Bombay (May-July 2016) • “Best Paper” with cash prize of Rs. 4,000/- for the paper titled “Employee Engagement” – A strategic Approach to sustain in the VUCA environment, at National Conference by SNIST (2016) • “Best Paper” award with a cash prize of Rs. 10,000/- for the paper titled “Role of Leader’s Behavior in building TGIM attitude”, at Two Day National Conference organized by DY Patil Institute of Management Studies, Pune on 5th- 6th February 2016. • “Best HR Research Paper” award with a cash prize of Rs.1,00,000/- at NHRD HR Showcase (Bengaluru) 2015, for the paper titled “An Exploratory study on Employee Engagement and Thank God It’s Monday” – 11th September 2015. • Adjudged ‘Best paper’ for the paper “Employee Engagement initiatives at Great Places to Work” at the National Conference by SNIST, Hyderabad – 2014",
    linkedin: "https://www.linkedin.com/in/dr-gowri-kusuma-pinjarla-42372821/"
  },
  "Dr. Pavan Patel": {
    designation: "Professor and Program Chair- PGDM",
    department: "HR & Strategy",
    email: "pavanpatel@ssim.ac.in",
    memberships: "NHRD,NIPM",
    awards: "",
    linkedin: "https://www.linkedin.com/feed/"
  },
  "Dr. Shambhavi Tamrakar": {
    designation: "Assistant. Professor",
    department: "Marketing Management",
    email: "shambhavi@ssim.ac.in",
    memberships: "NA",
    awards: "Received Best Paper award : \"Visual Merchandising and its Interplay with Product Attributes, Brand Reputation, and Service Quality: An SEM-Based Analysis of Customer Behaviour in Retail Apparel\", presented and published in two day International conference on : Emerging trends and technological advancements towards innovation and sustainability for societal and business progress,(IMMRC 2025 ) at Institute of Marketing Management New Delhi 17th and 18th JANUARY, 2025. NPTEL Topper Retail Marketing strategy organised by - IIT Roorkee, Sept 2025 Scored 71% in Integrated Marketing Communication Swayam MOOC Course conducted by NPTEL Online Certification 12 week Course- Elite Band(Jan – April 2024) Advance level certification- in Innovation Ambassador(IA) Training by MoE’s Innovation cell and AICTE during IIC calendar year 2024.",
    linkedin: "https://www.linkedin.com/in/dr-shambhavi-tamrakar-7b4296257"
  },
  "Dr. Bipul Kumar": {
    designation: "Assistant. Professor",
    department: "Marketing Management",
    email: "bipul@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-bipul-kumar-367856116/"
  },
  "Mr. Subhash Tej Tumu": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "subash@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/subash-tej-ba899122/"
  },
  "Dr. K. Kiran Kumar": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "kirankumar@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-kema-a2328738/"
  },
  "Dr. Ravi Dasari": {
    designation: "Professor",
    department: "HR & Strategy",
    email: "ravi.dasari@ssim.ac.in",
    memberships: "National HRD Network, Secretary of Hyderabad Chapter and National Board Member",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-ravi-dasari-7495b213"
  },
  "Dr. Jada Kameshwari": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "kameswari@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-kameswari-jada-00a0a2a4"
  },
  "Dr. K. Subba Rama Sarma": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "sarmaramam@ssim.ac.in",
    memberships: "NO",
    awards: "INSPIRING TEACHER AWARD- TEACHERS' ACADEMY, OSMANIA UNIVERSITY",
    linkedin: "https://www.linkedin.com/in/dr-k-sr-sarma-3a8b68156/"
  },
  "Dr. T. Thirumal Reddy": {
    designation: "Associate Professor",
    department: "Marketing Management",
    email: "thirumalreddyt@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/thirumal-reddy-thumukuntla-b82167371/"
  },
  "Dr. Pushpa Machani": {
    designation: "Assistant. Professor and Coordinator - Entrepreneurship Cell",
    department: "HR & Strategy",
    email: "pushpa@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-pushpa-machani-b5815323/"
  },
  "Dr. Jayalakshmi Valluri": {
    designation: "Professor",
    department: "Accounting, Finance & Economics",
    email: "jayalakshmi@ssim.ac.in",
    memberships: "Life Members in Indian Accounting Association (IAA), Life Member in Indian Commerce Association (ICA), Life Member in Insurance Institute of India, MUmbai.",
    awards: "Awarded as Best teacher by Lioness Association in Hyderabad in 2023",
    linkedin: "https://www.linkedin.com/in/dr-jayalakshmi-valluri-b1a13426/" // From context/default since table says 'Not active', I'll just keep whatever is in table or skip
  },
  "Mr. T. Madhav Murthy": {
    designation: "Associate Professor",
    department: "Accounting, Finance & Economics",
    email: "madhav@ssim.ac.in",
    memberships: "CAMS, JAIIB, CAIIB",
    awards: "",
    linkedin: "https://www.linkedin.com/in/t-madhav-murthy/"
  },
  "Ms. Samarpita Roy": {
    designation: "Assistant. Professor",
    department: "HR & Strategy",
    email: "samarpitaroy@ssim.ac.in",
    memberships: "NA",
    awards: "NA",
    linkedin: "https://www.linkedin.com/in/samarpitamukherjee/"
  },
  "Mr. G. Murali Krishna Patnaik": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "patnaik@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/murali-krishna-ab3068bb/"
  },
  "Ms. Kiranmayi Patel": {
    designation: "Assistant. Professor",
    department: "Data Science & Information Systems",
    email: "kiranmayip@ssim.ac.in",
    memberships: "Member in EdTech Society",
    awards: "",
    linkedin: ""
  },
  "Dr. N.C. Rajyalakshmi": {
    designation: "Professor and PGP Chair",
    department: "Accounting, Finance & Economics",
    email: "rajyalakshmi@ssim.ac.in",
    memberships: "No",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-rajyalakshmi-nc-5796b715"
  },
  "Mr. Karanam Sreehari": {
    designation: "Associate Professor and Alumni Incharge",
    department: "Data Science & Information Systems",
    email: "sreehari@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: "https://www.linkedin.com/in/sreehari-karanam-aa25052b/"
  },
  "Dr. S.V. Ramana Rao": {
    designation: "Director",
    department: "Accounting, Finance & Economics",
    email: "director@ssim.ac.in",
    memberships: "ISTD",
    awards: "",
    linkedin: "https://www.linkedin.com/in/dr-s-v-ramana-rao-78a5a542/"
  },
  "Dr. Annapurna Valluripally": {
    designation: "Professor and Coordinator - FPM (Fellowship Program in Management)",
    department: "Accounting, Finance & Economics",
    email: "annapurna@ssim.ac.in",
    memberships: "Commerce and Management Association of India (CMAOI),Indian Accounting Association (IAA), COWE",
    awards: "",
    linkedin: "https://www.linkedin.com/in/annapurna-valluripally-60a7b144/"
  },
  "Dr. NRKS Chakravarthy": {
    designation: "Professor & Dy. Director",
    department: "Data Science & Information Systems",
    email: "ramakrishna@ssim.ac.in",
    memberships: "",
    awards: "",
    linkedin: ""
  }
};

for (const [name, info] of Object.entries(newData)) {
  const namePattern = new RegExp(`(name:\\s*["']${name}["'][\\s\\S]*?)(description:\\s*["'])`, 'g');
  
  // Format the new fields
  const fields = `designation: ${JSON.stringify(info.designation)},
    department: ${JSON.stringify(info.department)},
    email: ${JSON.stringify(info.email)},
    memberships: ${JSON.stringify(info.memberships)},
    awards: ${JSON.stringify(info.awards)},
    `;

  content = content.replace(namePattern, `$1${fields}$2`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update details complete.');
