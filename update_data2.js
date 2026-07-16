const fs = require('fs');

const path = './src/data/facultyData.js';
let content = fs.readFileSync(path, 'utf8');

const shortDescs = {
  "Dr. S.V. Ramana Rao": "Expert in Corporate Finance with decades of teaching and administrative experience in India and abroad.",
  "Dr. NRKS Chakravarthy": "Specializes in strategic marketing and market research. Brings decades of industry experience to academic teaching.",
  "Dr. Pavan Patel": "Expert in human resource development and strategic planning. Passionate about training programs and organizational development.",
  "Dr. S.F. Chandra Sekhar": "Specializes in organizational behavior and strategic management. Focuses on employee development and creating effective workplace cultures.",
  "Dr. K.S. Harish": "Pioneering researcher in machine learning and artificial intelligence. Leads innovative projects in predictive analytics and data mining.",
  "Mr. Karanam Sreehari": "Experienced in big data analytics and programming. Focuses on developing practical solutions for complex computational problems.",
  "Dr. Annapurna Valluripally": "Expert in financial risk management and banking. Conducts research on emerging trends in global financial markets.",
  "Dr. Jayalakshmi Valluri": "Specializes in investment analysis and portfolio management. Passionate about teaching financial planning and wealth management.",
  "Dr. T. Thirumal Reddy": "Specializes in brand management and marketing analytics. Focuses on developing innovative marketing strategies for digital platforms.",
  "Mr. Rahul Jain": "Specializes in talent management and organizational development. Focuses on employee engagement and leadership development programs.",
  "Ms. Damandeep Johar": "Expert in change management and organizational behavior. Researches workplace dynamics and employee motivation strategies.",
  "Dr. Grace Mani K.": "Specializes in marketing research and consumer psychology. Conducts studies on customer experience and service marketing.",
  "Mr. Subhash Tej Tumu": "Expert in data analytics and business intelligence. Develops innovative solutions for data-driven decision making.",
  "Ms. Kiranmayi Patel": "Specializes in statistical analysis and data visualization. Focuses on making complex data insights accessible and actionable.",
  "Dr. Balanji Reddy Mora": "Expert in financial modeling and risk assessment. Conducts research on emerging trends in corporate finance.",
  "Dr. Pushpa Machani": "Expert in startup ecosystems and innovation management. Mentors students in developing entrepreneurial mindsets and business plans.",
  "Mr. M. Chaithanya": "Specializes in digital marketing and market research. Brings practical industry experience to marketing strategy development.",
  "Dr. K. Subba Rama Sarma": "Expert in advanced analytics and machine learning. Conducts research on artificial intelligence applications in business.",
  "Ms. Samarpita Roy": "Specializes in professional communication and soft skills development. Focuses on enhancing student employability and confidence.",
  "Dr. Shubhra Johri": "Expert in international finance and financial markets. Researches global economic trends and monetary policies.",
  "Dr. Pinjarla Gowri Kusuma": "Specializes in strategic human resource management. Focuses on organizational development and employee performance management.",
  "Dr. Shambhavi Tamrakar": "Expert in marketing analytics and consumer research. Conducts studies on digital consumer behavior patterns.",
  "Dr. Bipul Kumar": "Specializes in marketing strategy and brand management. Brings fresh perspective to traditional marketing concepts.",
  "Mr. T. Madhav Murthy": "Expert in financial planning and investment analysis. Focuses on practical applications of financial theories.",
  "Dr. N.C. Rajyalakshmi": "Specializes in corporate finance and financial management. Conducts research on emerging financial technologies and markets.",
  "Dr. Jada Kameshwari": "Expert in statistical analysis and data modeling. Conducts research on predictive analytics and machine learning.",
  "Dr. K. Kiran Kumar": "Expert in advanced analytics and machine learning. Conducts research on artificial intelligence applications in business.",
  "Mr. G. Murali Krishna Patnaik": "Expert in quantitative aptitude and logical reasoning. Helps students develop critical thinking and problem-solving skills.",
  "Dr. Ravi Dasari": "Expert in Human Resource Management with extensive experience in leadership development and organizational excellence."
};

// We will use regex to find each object in rawTeamMembers and inject shortDescription based on name
// A safe way is to split the content, or just replace each name block

for (const [name, desc] of Object.entries(shortDescs)) {
  // Find the block for this name
  const namePattern = new RegExp(`(name:\\s*["']${name}["'][\\s\\S]*?)(description:\\s*["'])`, 'g');
  content = content.replace(namePattern, `$1shortDescription: ${JSON.stringify(desc)},\n    $2`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete.');
