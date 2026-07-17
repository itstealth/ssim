const fs = require('fs');

const path = './src/data/facultyData.js';
let content = fs.readFileSync(path, 'utf8');

const updates = {
  "Dr. Balanji Reddy Mora": { name: "Dr. Balanji Reddy Mora", experience: 17, qualification: "Ph.D, MBA", linkedin: "https://www.linkedin.com/in/dr-balanji-reddy-mora-4823553b/" },
  "Dr. S.F. Chandra Sekhar": { name: "Dr. SREEPALLE FRANCIS CHANDRA SEKHAR", experience: 37, qualification: "Ph.D, MBA", linkedin: "https://in.linkedin.com/in/sfchyd" },
  "Dr. Grace Mani K.": { name: "Dr. K. Grace Mani", experience: 26, qualification: "Ph.D, MBA", linkedin: "https://tinyurl.com/te6uapy4" },
  "Dr. Shubhra Johri": { name: "Dr. Shubhra Johri", experience: 20, qualification: "Ph.D, MBA", linkedin: "https://www.linkedin.com/in/shubhra-johri-098075305/" },
  "Dr. K. Kiran Kumar": { name: "Dr. K Kiran Kumar", experience: 15, qualification: "PhD", linkedin: "https://www.linkedin.com/in/kiran-kumar-kema-a2328738/" },
  "Mr. M. Chaithanya": { name: "Mr. Muppavarapu Chaithanya", experience: 21, qualification: "PGDBA", linkedin: "https://www.linkedin.com/in/chaithanya-muppavarapu-1787b12b5" },
  "Dr. Pinjarla Gowri Kusuma": { name: "Dr. PINJARLA GOWRI KUSUMA", experience: 20, qualification: "PhD", linkedin: "https://www.linkedin.com/in/dr-gowri-kusuma-pinjarla-42372821/" },
  "Dr. Pavan Patel": { name: "Dr. Pavan Patel", experience: 32, qualification: "Ph.D, MIRPM", linkedin: "https://www.linkedin.com/feed/" },
  "Dr. Shambhavi Tamrakar": { name: "Dr. Shambhavi Tamrakar", experience: 14, qualification: "Ph.D, MBA, MA", linkedin: "https://www.linkedin.com/in/dr-shambhavi-tamrakar-7b4296257" },
  "Dr. Bipul Kumar": { name: "Dr. Bipul Kumar", experience: 6, qualification: "Ph.D, MBA, UGC-NET", linkedin: "https://www.linkedin.com/in/dr-bipul-kumar-367856116/" },
  "Mr. Subhash Tej Tumu": { name: "Mr. Subash Tej", experience: 23, qualification: "MCA, MBA, Certificate in Business Analytucs from HBSOnline, PG Diploma in Data Sciences from MIT", linkedin: "https://www.linkedin.com/in/subash-tej-ba899122/" },
  "Dr. Ravi Dasari": { name: "Dr. Ravi Dasari", experience: 30, qualification: "PhD", linkedin: "https://www.linkedin.com/in/dr-ravi-dasari-7495b213" },
  "Dr. Jada Kameshwari": { name: "Dr. Kameswari Jada", experience: 19, qualification: "Ph.D, MBA", linkedin: "https://www.linkedin.com/in/dr-kameswari-jada-00a0a2a4" },
  "Dr. K. Subba Rama Sarma": { name: "Dr. K. Subba Rama Sarma", experience: 23, qualification: "Ph.D, MBA", linkedin: "https://www.linkedin.com/in/dr-k-sr-sarma-3a8b68156/" },
  "Dr. T. Thirumal Reddy": { name: "Dr. Thirumal Reddy Thumukuntla", experience: 23, qualification: "Ph.D, PGDBA", linkedin: "https://www.linkedin.com/in/thirumal-reddy-thumukuntla-b82167371/" },
  "Dr. Pushpa Machani": { name: "Dr. Pushpa Machani", experience: 20, qualification: "Ph.D, MBA", linkedin: "https://www.linkedin.com/in/dr-pushpa-machani-b5815323/" },
  "Dr. Jayalakshmi Valluri": { name: "Dr. VALLURI JAYALAKSHMI", experience: 29, qualification: "Ph.D, M.Com", linkedin: "" },
  "Mr. T. Madhav Murthy": { name: "Mr. T Madhav Murthy", experience: 27, qualification: "MBA ( Finance & Marketing)", linkedin: "https://www.linkedin.com/in/t-madhav-murthy/" },
  "Ms. Samarpita Roy": { name: "Ms. Samarpita Roy", experience: "15+", qualification: "MBA", linkedin: "https://www.linkedin.com/in/samarpitamukherjee/" },
  "Mr. G. Murali Krishna Patnaik": { name: "Mr. G MURALI KRISHNA PATNAIK", experience: 22, qualification: "M.Sc", linkedin: "https://www.linkedin.com/in/murali-krishna-ab3068bb/" },
  "Ms. Kiranmayi Patel": { name: "Ms. KIRANMAYI PATEL", experience: 14, qualification: "MBA", linkedin: "" },
  "Dr. N.C. Rajyalakshmi": { name: "Dr. NC Rajyalakshmi", experience: 29, qualification: "Ph.D.", linkedin: "https://www.linkedin.com/in/dr-rajyalakshmi-nc-5796b715" },
  "Mr. Karanam Sreehari": { name: "Mr. karanam sreehari", experience: 36, qualification: "MCA, M.Tech, M.Sc.", linkedin: "https://www.linkedin.com/in/sreehari-karanam-aa25052b/" },
  "Dr. S.V. Ramana Rao": { name: "Dr. S.V.Ramana Rao", experience: 32, qualification: "PhD", linkedin: "https://www.linkedin.com/in/dr-s-v-ramana-rao-78a5a542/" },
  "Dr. Annapurna Valluripally": { name: "Dr. V.Annapurna", experience: 29, qualification: "Ph.D, MBA, M.Com", linkedin: "https://www.linkedin.com/in/annapurna-valluripally-60a7b144/" },
  "Dr. NRKS Chakravarthy": { name: "Dr. NRKS Chakravarthy", experience: 30, qualification: "Ph.D, MBA", linkedin: "" }
};

for (const [oldName, up] of Object.entries(updates)) {
  let startIdx = content.indexOf(`name: "${oldName}"`);
  if (startIdx === -1) startIdx = content.indexOf(`name: '${oldName}'`);
  if (startIdx === -1) {
    console.log(`Could not find ${oldName}`);
    continue;
  }
  
  let endIdx = content.indexOf(`}`, startIdx);
  let block = content.substring(startIdx, endIdx);
  
  block = block.replace(/name:\s*["'][^"']+["']/, `name: ${JSON.stringify(up.name)}`);
  block = block.replace(/experience:\s*[^,]+,/, `experience: ${typeof up.experience === 'string' ? JSON.stringify(up.experience) : up.experience},`);
  block = block.replace(/qualification:\s*["'][^"']*["']/, `qualification: ${JSON.stringify(up.qualification)}`);
  block = block.replace(/linkedin:\s*["'][^"']*["']/, `linkedin: ${JSON.stringify(up.linkedin)}`);
  
  content = content.substring(0, startIdx) + block + content.substring(endIdx);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete.');
