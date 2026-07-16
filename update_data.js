const fs = require('fs');
const path = './src/data/facultyData.js';

let content = fs.readFileSync(path, 'utf8');

const newData = `const rawTeamMembers = [
  {
    name: "Dr. S.V. Ramana Rao",
    area: "Finance",
    qualification: "Ph.D / MBA",
    experience: 32,
    image: ramana,
    description: "Dr. S. V. Ramana Rao is a Director at Siva Sivani Institute of Management, Secunderabad . He is a Post Graduate in Management and stood 8th in Sri Krishnadevaraya University, Anantapur, Andhra Pradesh and subsequently completed M.Phil from Alagappa University, Karaikudi, Tamilnadu. Dr.Rao obtained his Ph.D. from Centre for Economic and Social Studies (CESS) in the area Financial Derivatives. He worked in various colleges and institutes over a period of 30 + years both India and Abroad.\\nPrior to coming to academics he worked as a Marketing executive in few companies for a brief stint. Dr. Rao’s teaching career started with PB Siddhartha College, Vijayawada. Later moved to RVR and JC College of engineering, Guntur and from there landed in TAPai Management Institute, Manipal. In the year 2007, he moved to Hyderabad and started working for Siva Sivani Institute of management till date. During 2008-11 for a period of three years he moved to Oman on lien to work as a Faculty Member in Business studies department at Shinas College of Technology, Oman and rose to the level of Head of the Department. After working in a foreign land for 3 years he joined back with SSIM as a Professor and Head of the Department–Finance. His areas of interest include Corporate Finance, Capital Markets, Investment Management, International Finance and Financial Derivatives.\\nHe is an active member in research and published around 30 articles both at National and International journals having Scopus indexed. He presented papers in various conferences organized by colleges and Institutions including India’s Premium Institutions like Indian School of Business(ISB), Indian Institute of Management, Lucknow and Indore (IIMs). In the year 2017 and 2018, his papers received Best Paper Award at ICBM’s 2nd and 3rd National Conference on Management Research – Contemporary Perspectives conducted by ICBM business school, Hyderabad. Dr.Rao had also written cases and presented at various case competitions organized by Institutions. He is also guiding the students for their Doctoral Degree and recently one of his students received a Ph.D. from Krishna University, Machilipatnam. Dr.Rao’s research articles have number of citations, h-Index and i10-index scores. He has conducted National and International seminars and given invited talks. He is invited by various institutions to deliver lecturers, talks including TV shows. He is one of the qualified GST trainers and acted as a resource person in various GST training programs. Dr. Rao also conducted a training program to executives and managers of corporations like NTPC, SCCL, Lloyds Technology center, Hetro Drugs etc. He is also a resource person to various FDP’s.\\nAWARDS RECEIVED\\n• Received AIMS-RCM Best B-School Director Award during 32 AIMS Annual Management Education Convention held during 26th to 28th August 2021\\n• Recipient of AMP Academic Excellence Award in the year 2018.\\nBOARD MEMBER IN ACADEMIC INSTITUTIONS\\n • Member in Academic Board at St Joseph’s PGDM college, Hyderabad\\n • Member in Board of Studies at Bhavan’s Vevekanda College, Hyderabad\\n\\nMAJOR CONTRIBUTIONS AS A DIRECTOR :\\nAccreditations to SSIM : National - NBA, NAAC and International Accreditation SAQS and AIU Certifications.",
    linkedin: "https://www.linkedin.com/in/dr-s-v-ramana-rao-78a5a542/"
  },
  {
    name: "Dr. NRKS Chakravarthy",
    area: "Decision Science and Information System",
    qualification: "Ph.D / MBA",
    experience: 29,
    image: NRKS,
    description: "Dr. N.R.K.S. Chakravarthy is a distinguished academic leader, corporate professional, and management trainer with nearly 30 years of rich experience spanning business excellence, leadership development, customer experience, consulting, project management, organizational transformation, and higher education. As the Deputy Director, he plays a strategic role in strengthening academic excellence, industry engagement, corporate relations, executive learning initiatives, and outcome-based management education.\\n\\nBefore transitioning into academia, Dr. Chakravarthy held several senior leadership positions with globally recognized organizations, contributing extensively to large-scale business transformation and operational excellence initiatives. He has been associated with leading organizations including Reliance Jio, Tata Docomo, Sistema Group (Russia), Ford Academy (MSXI), MTS India, Bharti Airtel, Amway India, Allergan, and Glaxo Pharmaceuticals.\\n\\nDuring his corporate journey, Dr. Chakravarthy has been a key member of the top management teams involved in launching and scaling major organizations and business initiatives, including Reliance Jio, Tata DoCoMo, Uninor (Telenor), MTS India, and Allergan. His expertise in business transformation, project management, and organizational excellence has enabled successful execution of complex, high-impact initiatives across diverse industries.\\n\\nHis notable leadership roles include:\\n\\nReliance Jio – Vice President & National Head – Service Excellence, where he contributed to building customer-centric service excellence frameworks and transformation initiatives during one of India’s largest digital telecom launches.\\nTata Docomo – National Head – Business Excellence, driving process improvement, quality frameworks, operational excellence, and strategic performance initiatives.\\nSistema Group (Russia) – Director – Business Excellence, Strategy & Project Management Office, leading strategic transformation, project governance, and enterprise excellence initiatives.\\nFord Academy (MSXI) – Learning & Development Head – Asia Pacific, Middle East & Africa (APMEA) Regions, managing capability-building and leadership development initiatives across multiple geographies.\\n\\nA passionate mentor, executive coach, and corporate trainer, Dr. Chakravarthy has delivered high-impact leadership and capability-building programs for leading organizations such as Hetero, Larsen & Toubro (L&T), Godrej, and several other reputed enterprises. His training interventions focus on developing leadership capability, business agility, operational excellence, and future-ready managerial competencies.\\n\\nDr. Chakravarthy is a Six Sigma Master Black Belt, PMI Certified Project Management Professional (PMP), TBEM Assessor, and a certified professional in Quality and Organizational Excellence. He has extensive experience in applying global frameworks such as Six Sigma, Business Excellence Models, Project Management methodologies, and continuous improvement practices to enhance organizational performance.\\n\\nHis areas of expertise include:\\n\\nBusiness Excellence & Organizational Transformation\\nLeadership Development & Executive Coaching\\nCustomer Experience Management\\nLearning & Development Strategy\\nBusiness Analytics & Performance Management\\nDigital Transformation\\nProject & Program Management\\nOperational Excellence & Six Sigma\\nQuality Management & Continuous Improvement\\nStrategic Planning and Change Management\\n\\nRecognized for his ability to integrate industry best practices with academic learning, Dr. Chakravarthy focuses on creating industry-ready professionals through experiential learning, corporate interactions, applied research, and outcome-driven pedagogy.\\n\\nWith a unique blend of corporate leadership experience, strategic transformation expertise, and academic vision, Dr. N.R.K.S. Chakravarthy continues to bridge the gap between management education and industry expectations, empowering students and professionals to become effective business leaders in a rapidly evolving global environment.",
    linkedin: ""
  },
  {
    name: "Dr. Pavan Patel",
    area: "HR & Strategy",
    qualification: "Ph.D, MIRPM",
    experience: 32,
    image: DrPAV,
    description: "Dr. Pavan Patel \\nProfessor- HR& SM.\\nPGDM-TPS- Program Chairperson.\\nHe holds Ph.D in the area of Strategic Human Resources Management. He holds Master’s Degree in Industrial Relation in Personnel Management, LLB, Post Graduate Certificate in Corporate Strategy from IIT, Bombay. A self-motivated academic Professional, management trainer, researcher, consultant and administrator with over 32 years of experience. His interest in handling subject’s Organizational behavior, Human resources management, Organizational Change and Organizational Development, Labour Codes of India, Employee Relations, HR Analytics, Performance Management, Strategic management, Workforce and Talent Analytics, Innovation Management. Conducted Training and Development programs in the area of OB, OC&OD, HRM, SM, Leadership etc around 80 companies in both Public Sector and Private sector. Published 63 research articles and 17 case studies in National and International repute journals. Supervised 2 Ph. Ds and one M.Phil. 6 patent publications Two Edited books and Two textbooks are published.",
    linkedin: "https://www.linkedin.com/feed/"
  },
  {
    name: "Dr. S.F. Chandra Sekhar",
    area: "HR & Strategy",
    qualification: "Ph.D, MBA",
    experience: 37,
    image: chandra,
    description: "Dr. S.F. Chandra Sekhar is Professor of HR and Strategy at Siva Sivani Institute of Management with 37 years of combined corporate and academic experience. He previously worked in hospitals and conducted research in hospital management. His PhD focused on work systems interdependence and quality of work experiences in large hospitals. A first-class triple postgraduate, he holds MSW, M.Div., and MBA degrees. His academic interests include services management, HR and OB, healthcare systems, HR research, data analytics, performance management, high-performance work systems, and workplace spirituality.\\n\\nUnder his guidance, 29 PhDs and one M.Phil. have been awarded. He has authored 19 books, including Transforming Rural Lives, Teens of Tomorrow, Mastering Research Methodology, NextGen Entrepreneurship, and Cases in HRM. He has published over 100 peer-reviewed papers and submitted seven project reports to the Government of India and three to corporate bodies. He has also presented 40+ papers at national and international seminars and served as a resource person for FDPs and MDPs in India and abroad. For the past 15 years, he has actively shared lectures online through podcasts.",
    linkedin: "https://in.linkedin.com/in/sfchyd"
  },
  {
    name: "Dr. K.S. Harish",
    area: "Data Science",
    qualification: "Ph.D, M.Sc.",
    experience: 32,
    image: DrHari,
    description: "Pioneering researcher in machine learning and artificial intelligence. Leads innovative projects in predictive analytics and data mining.",
    linkedin: ""
  },
  {
    name: "Mr. Karanam Sreehari",
    area: "Data Science",
    qualification: "MCA, M.Tech, M.Sc.",
    experience: 35,
    image: SREEHARI,
    description: "Experienced in big data analytics and programming. Focuses on developing practical solutions for complex computational problems.",
    linkedin: "https://www.linkedin.com/in/sreehari-karanam-aa25052b/"
  },
  {
    name: "Dr. Annapurna Valluripally",
    area: "Finance",
    qualification: "Ph.D, MBA, M.Com",
    experience: 28,
    image: ANNA,
    description: "Dr. V. Annapurna is a Professor and Program Chair for the Fellow Program in Management (FPM) at Siva Sivani Institute of Management (SSIM), possessing over 29 years of distinguished teaching experience in finance and accounting. Holding an M.Com, MBA, and Ph.D., she is recognized for employing differentiated teaching methods to address various learning styles. At SSIM, she serves as the Chairperson of the FPM Research Committee and has played a pivotal role in coordinating institutional accreditation activities for the NBA, NAAC, and SAQS. She is the Single Point of Contact (SPOC) for the National Institute of Securities Market (NISM) and has been nominated as an NISM faculty ambassador. A prolific researcher, Dr. Annapurna has published extensively in Scopus and ABDC-indexed journals and has authored several textbooks and modules on insurance and business valuation. Beyond her academic roles, she is an accomplished corporate trainer, serving as a lead facilitator for professional development initiatives designed to drive impactful organizational growth",
    linkedin: "https://www.linkedin.com/in/annapurna-valluripally-60a7b144/"
  },
  {
    name: "Dr. Jayalakshmi Valluri",
    area: "Finance",
    qualification: "Ph.D, M.Com",
    experience: 29,
    image: DrJaya,
    description: "Dr. V. Jayalakshmi is a Professor, Area Chair – Accounting and Finance, and Program Chair for the PGDM (Banking, Insurance & Financial Services) at Siva Sivani Institute of Management (SSIM), Hyderabad. She brings nearly 30 years of experience in teaching, research, academic leadership, and executive education. She holds a Ph.D. in Commerce from Osmania University with specialization in Health Insurance, along with an M.Phil., M.Com., LL.B., and is a Fellow of the Insurance Institute of India (FIII). Her academic and research interests include Insurance, Risk Management, Health Insurance, Banking, Financial Services, Financial Planning, and FinTech. She has published extensively in peer-reviewed journals, presented research papers at national and international conferences, and developed e-learning content for professional education. At SSIM, she has contributed significantly to curriculum innovation, Outcome-Based Education (OBE), NBA accreditation initiatives, and industry–academia collaboration. She is committed to fostering experiential learning, integrating emerging technologies into management education, and equipping students with the competencies required for successful careers in the BFSI sector.",
    linkedin: "https://www.linkedin.com/feed/"
  },
  {
    name: "Dr. T. Thirumal Reddy",
    area: "Marketing",
    qualification: "Ph.D, PGDBA",
    experience: 22,
    image: Thirumal,
    description: "Dr Thirumal Reddy Thumukuntla is an accomplished academician and professional with over 23 years of rich experience spanning both industry and academia. He currently serves as an Area Chair and Associate Professor in Marketing and the Coordinator of the Internal Quality Assurance Cell (IQAC) at Siva Sivani Institute of Management.\\n\\nHe holds a Ph.D. from Vignan’s Foundation for Science, Technology and Research, and a Post Graduate Diploma in Business Administration (PGDBA) with a specialization in Marketing from Siva Sivani Institute of Management.\\n\\nDr. Thirumal began his career in the corporate sector, where he gained five years of valuable experience in sales, business development, and channel management. For the past 18 years, he has been engaged in teaching at the postgraduate level, imparting knowledge in various domains of marketing and management.\\n\\nHe is a certified SAP consultant with specialized expertise in Sales and Customer Relationship Management (CRM). His industry-relevant skills have enabled him to design and deliver impactful Outbound Training (OBT) programs for numerous corporate clients.\\nDr. Thirumal has been an active participant in national and international seminars, conferences, webinars, and training programs. He has presented several research papers at reputed academic and professional platforms.\\n\\nHe has conducted corporate training programs for leading organizations such as Tirumala Music Center, Godrej Jersey Dairy Pvt. Ltd., ECIL, and ICICI Bank. His training sessions have addressed a diverse range of topics, including Business Acumen, Customer Relationship Management, Teamwork, Leadership Skills, Change Management, Analytical Thinking, Supply Chain Management, Quality Management, and Root Cause Analysis, catering to both senior and middle management professionals.\\n\\nDr Thirumal Reddy continues to contribute significantly to academia and industry through his expertise, research, and training initiatives.",
    linkedin: "https://www.linkedin.com/in/thirumal-reddy-thumukuntla-b82167371/"
  },
  {
    name: "Mr. Rahul Jain",
    area: "HR & Strategy",
    qualification: "PGDBA",
    experience: 22,
    image: rahul,
    description: "Specializes in talent management and organizational development. Focuses on employee engagement and leadership development programs.",
    linkedin: ""
  },
  {
    name: "Ms. Damandeep Johar",
    area: "HR & Strategy",
    qualification: "PGDBA, (Ph.D)",
    experience: 17,
    image: Damandeep,
    description: "Expert in change management and organizational behavior. Researches workplace dynamics and employee motivation strategies.",
    linkedin: ""
  },
  {
    name: "Dr. Grace Mani K.",
    area: "Marketing",
    qualification: "Ph.D, MBA",
    experience: 26,
    image: Gracena,
    description: "Dr. K. Grace Mani, has a rich blend of practical corporate experience and academic prowess. With a Ph.D. in Management and Master’s degree in Business Administration, her expertise lies in Marketing, with a primary focus on consumer behaviour and marketing communications. Her contributions to academics for the past 15 years include curriculum development, innovative pedagogy and research.\\nHaving 11.5 years of work experience in client services, she demonstrates expertise in managing client relationships, ensuring customer satisfaction, and delivering high-quality service solutions. Certified by Carlton Advanced Management Institute as a Certified Trainer and Facilitator, she is adept at designing interactive and engaging training sessions to foster professional development and delivering training programs tailored to bridge skill gaps and enhance operational efficiency.\\nAlong with an ardent interest in history, Dr. Grace exhibits commitment to excellence and continuous learning ensuring that she remains at the forefront of marketing education, personality development and practice.",
    linkedin: "https://tinyurl.com/te6uapy4"
  },
  {
    name: "Mr. Subhash Tej Tumu",
    area: "Data Science",
    qualification: "MCA, MBA",
    experience: 22,
    image: Subhash,
    description: "Subash Tej is an accomplished academician with over 22 years of teaching experience and one year of industry experience. He is currently serving as an Assistant Professor in the Department of Data Sciences at Siva Sivani Institute of Management (SSIM), Secunderabad.\\nHe holds a Master of Computer Applications (MCA) from Andhra University and a Master of Business Administration (MBA) from Osmania University. He completed the Business Analytics Certificate Program from Harvard Business School Online (HBS Online) and a Post Graduate Program in Data Science from MIT.\\nThroughout his academic career, Mr. Tej has been actively involved in academic administration, strategic planning, curriculum development, and IT operations. He has extensive experience teaching postgraduate students and conducting executive training programs for corporate professionals.\\nHis areas of expertise include Management Information Systems, Information Technology for Managers, Advanced Excel, Power BI, SQL, Operations Research, Project Management, Data Visualization, Business Analytics, and Decision Support Systems. He is proficient in data analysis and visualization tools such as Power BI and Tableau, and his teaching approach effectively integrates technical concepts with managerial applications to create industry-relevant learning experiences.\\nMr. Tej has previously served at ICFAI University and Guru Nanak Business School, Hyderabad, where he played a significant role in academic development, faculty training, and institutional initiatives. He is a sought-after resource person for Faculty Development Programs (FDPs), Staff Development Programs (SDPs), management development programs, and workshops on emerging technologies, business analytics, and data-driven decision-making.\\nHe has delivered numerous guest lectures on management education, career development, and analytics, and has contributed to academic literature by authoring eight book chapters published by ICFAI University Press. An active participant in national and international conferences, Mr. Tej continues to contribute to academic excellence through teaching, research, curriculum innovation, and professional development initiatives.",
    linkedin: "https://www.linkedin.com/in/subash-tej-ba899122/"
  },
  {
    name: "Ms. Kiranmayi Patel",
    area: "Data Science",
    qualification: "MBA",
    experience: 12,
    image: Kommu,
    description: "Kiranmayi Patel is Assistant Professor at Siva Sivani Institute of Management, Hyderabad. She has over eight years of experience in postgraduate management education. Her teaching areas include Business Analytics, Machine Learning, Visual Analytics, Research Methodology, Operations Research, and Statistics for Managers.\\nHer work lies at the intersection of quantitative methods, analytics, and management education. She is interested in the application of data-driven approaches to managerial decision-making, curriculum design, and technology-enabled learning. She brings industry experience into her teaching through applied classroom discussions, case-based instruction, and project-oriented learning.\\nKiranmayi Patel has published 14 research papers and has presented papers at national and international conferences. Her academic interests also include student skill development, assessment design, and the integration of analytical tools into management education.\\nAt SSIM, she contributes to teaching and curriculum development in areas related to analytics, quantitative techniques, and business decision-making",
    linkedin: ""
  },
  {
    name: "Dr. Balanji Reddy Mora",
    area: "Finance",
    qualification: "Ph.D, MBA",
    experience: 16,
    image: Balani,
    description: "Dr. Balanji Reddy Mora is a distinguished academician, researcher, and mentor with over 17 years of experience spanning teaching, research, and industry exposure. Currently serving as an Assistant Professor in Finance at Siva Sivani Institute of Management, he has consistently contributed to shaping young minds through his engaging teaching style, practical insights, and student-centric approach to learning.\\nDr. Mora holds a Ph.D. in Finance from Acharya Nagarjuna University, along with an MBA in Finance and Marketing and a bachelor’s degree in commerce. In addition, his academic journey is complemented by a degree in Law (LL.B.), which enhances his multidisciplinary perspective on business, finance, and decision-making. His diverse educational background enables him to connect theoretical concepts with real-world applications, making his sessions highly relevant and impactful.\\nOver the years, Dr. Mora has taught a wide range of subjects including Investment Analysis, Portfolio Management, Corporate Finance, Financial Markets, and Financial Accounting. His teaching philosophy emphasizes clarity of concepts, analytical thinking, and the practical applicability of knowledge. Before entering academia, he gained valuable industry experience working in financial services and the corporate sector, which adds depth and real-world context to his academic engagements.\\nAn active researcher, Dr. Mora has presented more than 40 research papers at national and international conferences and has published several articles in reputed peer-reviewed and ABDC-indexed journals. His research interests primarily lie in finance, investment strategies, and econometric analysis. He has also organized Faculty Development Programs and academic events, contributing to the professional growth of both faculty and students.\\nBeyond academics, Dr. Mora has played a key role in coordinating student development initiatives, including national-level fests, outbound training programs, and institutional social responsibility activities. His commitment to holistic education reflects in his continuous efforts to nurture not only academic excellence but also leadership, ethics, and social awareness among students.",
    linkedin: "https://www.linkedin.com/in/dr-balanji-reddy-mora-4823553b/"
  },
  {
    name: "Dr. Pushpa Machani",
    area: "HR & Strategy",
    qualification: "Ph.D, MBA",
    experience: 17,
    image: Pushpa,
    description: "Dr. Pushpa Machani is an extensive researcher in the area of entrepreneurship thus awarded a doctorate in the same stream with the title “The Impact of Critical Success Factors on Entrepreneurs Success: Special Reference to MSMEs in Telangana State”. Dr. Pushpa aims to disseminate her knowledge and experience into education and teaching, thus transforming students into entrepreneurs with her research experience. Dr. Pushpa is an academician with 18 years of experience and 2 years in corporates. She worked with many prestigious institutions in Bangalore and Hyderabad. Currently, she is working as an Assistant Professor and Coordinator, Entrepreneurship Development Cell at Siva Sivani Institute of Management, Secunderabad. With her expertise in entrepreneurship and Human Resource Management, she published various articles both at the national and international level. Her articles were published in Scopus, Web Of Science journals and ABDC category journals. She is implementing the STEM (Skill to Enterprise Model) program, aimed at empowering the rural population by transforming semi-illiterate individuals into self-employed entrepreneurs. This initiative is funded by SIDBI (Small Industries Bank of India), with a budget of Rs. 60 Lakh.",
    linkedin: "https://www.linkedin.com/in/dr-pushpa-machani-b5815323/"
  },
  {
    name: "Mr. M. Chaithanya",
    area: "Marketing",
    qualification: "PGDBA",
    experience: 21,
    image: Chaitha,
    description: "Mr. Muppavarapu Chaithanya is a distinguished management educator, corporate trainer, and learning strategist with over two decades of experience spanning industry, entrepreneurship, executive development, and management education. As Assistant Professor and PGP Co-Chair at Siva Sivani Institute of Management (SSIM), he is recognized for creating experiential learning environments that effectively connect academic concepts with real-world business challenges.\\n\\nHaving worked with leading organizations such as ICICI Bank, Sun Microsystems, and Dream Tekis Software Pvt. Ltd., he brings rich industry perspectives into the classroom. His expertise includes Marketing, Business Development, Sales Management, Strategic Operations, Customer Relationship Management, Leadership Development, Business Communication, Career Readiness and Organizational Behaviour. He has trained, mentored, and inspired a diverse cohort of students, managers and professionals through executive development programs, outbound learning interventions and high-impact workshops.\\n\\nA strong advocate of experiential and story-based learning, he integrates contemporary business practices, behavioural science, and leadership principles to develop future-ready professionals. His doctoral research on career preparedness, social media usage and psychological well-being reflects his commitment to understanding the evolving aspirations of young professionals and empowering them to build meaningful careers, lead with confidence, and create lasting organizational impact.",
    linkedin: "https://www.linkedin.com/in/chaithanya-muppavarapu-1787b12b5"
  },
  {
    name: "Dr. K. Subba Rama Sarma",
    area: "Data Science",
    qualification: "Ph.D, MBA",
    experience: 23,
    image: subba,
    description: "Dr. K. Subba Rama Sarma\\nAssistant Professor & Coordinator – Research & Publications\\nSiva Sivani Institute of Management, Hyderabad\\nDr. K. Subba Rama Sarma is a highly accomplished academician and corporate trainer with over 23 years of experience in business management education. He holds a Ph.D. in Supply Chain Management alongside MBAs in both Marketing and Human Resources. Currently serving as an Assistant Professor and the Coordinator for Research & Publications at SSIM, he also serves as the Editor for the peer-reviewed in-house journal, Sugyaan. \\nDr. Sarma’s teaching and research expertise spans critical domains, including Supply Chain Analytics, Operations Management, Statistics, and Lean Manufacturing & Six Sigma. An avid researcher, he has published extensively in prestigious SCOPUS, ABDC and UGC-CARE indexed journals, exploring sustainable logistics, Humanitarian supply chain, green HRM, and organizational agility. \\nIn addition to his academic contributions, Dr. Sarma is an impactful corporate trainer who has designed and delivered impactful training programs on Agile Decision-Making and Quality Management for industry leaders. Known for implementing innovative, technology-driven curriculum delivery and experiential assessment tools, he remains deeply committed to fostering long-term academic and professional success for his students.",
    linkedin: "https://www.linkedin.com/in/dr-k-sr-sarma-3a8b68156/"
  },
  {
    name: "Ms. Samarpita Roy",
    area: "HR & Strategy",
    qualification: "MBA",
    experience: 15,
    image: Smarpita,
    description: "Ms. Samarpita Roy is an Assistant Professor of Communication at Siva Sivani Institute of\\nManagement, India, and a researcher specialising in aspects like corporate communication, personality development, persuasive communication, crisis communication, managerial communication, mentoring and counselling among others. She holds a Masters in Business Administration, an MA in Mass Communication, and a PG Diploma in Public Relations. She has a total work experience of more than 15 years and has worked with organisations such as Indian Institute of Management, Ahmedabad; Evalueserve.com Private Limited; Hindustan Times Media Limited, among others.\\n\\nWhile working with Siva Sivani Institute of Management, Hyderabad, Telangana, India since\\n2022, she has been teaching different aspects of communication to the students and helps\\nthem with Personality Development lessons as well. She is also actively involved in\\ncoordinating the Student Clubs including the club working for developing language competencies among students from varied backgrounds. \\n\\nApart from these, she has also been writing various marketing collaterals, campaigns, SEO-based articles and other marketing materials apart from working on advertising and packaging materials for more than ten years. She has also been involved in publishing cases, writing articles, and working on book chapters since the last few years.",
    linkedin: "https://www.linkedin.com/in/samarpitamukherjee/"
  },
  {
    name: "Dr. Shubhra Johri",
    area: "Finance",
    qualification: "Ph.D, MBA",
    experience: 20,
    image: Shubhra,
    description: "Dr. Shubhra Johri\\nTeaching Experience: 20 years (MBA)\\nQualifications: PhD, UGC Net, MBA (Gold Medalist), B.Tech\\nDr. Shubhra Johri is an academician and researcher specializing in Finance at SSIM with a rich experience of around two decades at UG and PG level. She has been associated with a number of B-Schools of national repute in Delhi /NCR. She holds a Doctorate Degree in Management, UGC Net Qualification, B.Tech (E&TC) and an MBA. She has been accorded with Shri Anant Pandey Memorial Gold Medal and Dr. Krishna Sahai Chaudhary Gold Medal for her outstanding performance in Academics at the university Level. She has authored 2 e-books on Economy and Services and Fundamentals of Management - Tata Mc Graw Hill Education and has handled several curriculum development and OLC projects for Tata Mc Graw Hill Education.\\nShe has got a plethora of research papers indexed in Scopus Journals, UGC Care list and several national and International refereed journals to her credit. She has been actively involved in organizing National and International Conferences. Her areas of interest include corporate finance, financial Institutions and markets, financial analytics and Managerial Economics.",
    linkedin: "https://www.linkedin.com/in/shubhra-johri-098075305/"
  },
  {
    name: "Dr. Pinjarla Gowri Kusuma",
    area: "HR & Strategy",
    qualification: "Ph.D",
    experience: 18,
    image: Gowri,
    description: "Dr.P.Gowri Kusuma\\nMBA, PhD, M.Com, PGDPMIR, UGCNET, APSET\\n\\nAcademician and certified Dale Carnegie Behavioural Trainer. 20 years of expertise in facilitating OB and HR courses, nurturing young talent and delivering effective training programs to senior management. Skilled in designing the training programs as per client requirements. Strong focus on team collaboration, adaptability, and achieving results. Known for reliability, flexibility, and fostering positive learning environment.\\n\\nAwarded – ‘Excellence in Teaching for MBA (HR)’ by Indian Society for Training and Development (ISTD), Hyderabad – 2025.\\n\\nReceived 7 Best Paper awards\\n\\nTopper at NPTEL-SWAYAM courses\\n\\nPublished research papers in ABDC, Scopus, Sage and other indexed journals \\nPresented papers at IITs, IIMs, James Cook University - Singapore and many other institutes of repute.\\n\\nOrganized and participated in various FDPs.\\n\\nAreas of Research includes Leadership, Employee Engagement and contemporary HR areas\\n\\nConducted Training Programs for NCL Industries Ltd, Hetero Labs, Annora Pharma, Gaja Engineering Pvt.Ltd, Auro Infra, APL Apollo Tubes Limited.\\n\\nHave a niche for Outbound Training Programs.\\n\\nDelivered Expert sessions at niMSME and NSTI \\n\\nResource Person at Mahatma Gandhi National Council for Rural Education (MGNCRE, MoE, GoI)",
    linkedin: "https://www.linkedin.com/in/dr-gowri-kusuma-pinjarla-42372821/"
  },
  {
    name: "Dr. Shambhavi Tamrakar",
    area: "Marketing",
    qualification: "Ph.D, MBA, MA",
    experience: 14,
    image: Shambhavi,
    description: "Dr. Shambhavi Tamrakar is a dedicated academician and marketing professional with 14 years of experience in teaching, research, training, and institutional development. Specializing in Marketing Management, Retail Management, Sales Management, CRM, and International Business, she is currently serving as Assistant Professor at Siva Sivani Institute of Management. She has contributed extensively to academic research through international publications, conference presentations, case studies, and faculty development programs. An active innovation ambassador and startup mentor, she is passionate about bridging industry practices with academic learning while fostering research, entrepreneurship, and student development.",
    linkedin: "https://www.linkedin.com/in/dr-shambhavi-tamrakar-7b4296257"
  },
  {
    name: "Dr. Bipul Kumar",
    area: "Marketing",
    qualification: "Ph.D, MBA, UGC-NET",
    experience: 6,
    image: BinalK,
    description: "Dr. Bipul Kumar is a faculty member in the Marketing area at SSIM Hyderabad. He holds a Ph.D. in Marketing from Pondicherry University, with his research focused on determinants of customer engagement on social media. An MBA in Marketing and UGC-NET qualified professional, before joining SSIM, he served as an Assistant Professor at Pranveer Singh Institute of Technology, Kanpur. Bipul brings a rich blend of 4+ years of academic experience and 1.5 years of industry exposure with Kotak Mahindra Bank. He has presented his research paper at prestigious forums, including IIM Kozhikode, IIM Bodh Gaya, and IIM Shillong, and other universities. His teaching and research interests include Digital & Social Media Marketing, Strategic Brand Management, Services Marketing, Customer Relationship Management, Consumer Behaviour, and Marketing Analytics.",
    linkedin: "https://www.linkedin.com/in/dr-bipul-kumar-367856116/"
  },
  {
    name: "Mr. T. Madhav Murthy",
    area: "Finance",
    qualification: "MBA",
    experience: 23,
    image: MrMa,
    description: "A seasoned banker with 22 years of experience in Private Banks under the Retail and Corporate banking domain. Has wide experience in the Front and Back office of Banks, with exposure to all verticals of Banking. Certified Anti money laundering specialist (CAMS) and Associate of Indian Institute of Bankers. Having high competence in the areas of Banking laws, Compliance, Operations, Credit, Forex and Audit. Four years of experience in Academics. Passionate about teaching and mentoring students to face the rigours of corporate life. Has conducted training programs for employees working in banks and financial institutions. Teaching students in the fields of Banking, Investment analysis and Portfolio Management, Corporate Finance, Risk and Treasury Management, Global Financial Markets, Fintech, International Business , Economics for Managers & Corporate Governance",
    linkedin: "https://www.linkedin.com/in/t-madhav-murthy/"
  },
  {
    name: "Dr. N.C. Rajyalakshmi",
    area: "Finance",
    qualification: "Ph.D",
    experience: 30,
    image: DrRaj,
    description: "NC Rajyalakshmi is an MBA in Finance with Ph.D. in banking. She is having 29 years of academic experience. During these 29 years she served at SRTMU Nanded for 5 and half years, Badruka College PG Centre for 6 and half years, SSIM for 17 years, XIME Chennai for one year. She has worked under various capacities at SSIM as an administrator. \\nHer fortay is in the areas of Fianncial Accounting, Corporate Finance, Management Accounting, Financial Services etc. She has contributed her might as an academcian at various institutions and also at various organisations as a resource person.",
    linkedin: "https://www.linkedin.com/in/dr-rajyalakshmi-nc-5796b715"
  },
  {
    name: "Dr. Jada Kameshwari",
    area: "Data Science",
    qualification: "Ph.D, MBA",
    experience: 19,
    image: JKame,
    description: "Dr. Kameswari Jada\\nDr. Kameswari Jada is an accomplished academician and analytics practitioner serving as Assistant Professor in the Department of Decisional Sciences, where she channels over 19 years of cross-domain expertise into research-driven teaching. Her scholarship spans 12 rigorous publications in ABDC- and Scopus-indexed journals, and she has presented her research at some of India's most prestigious platforms — IIM Ahmedabad, IIM Kozhikode, IIM Bangalore, and NIT Calicut.\\nDr. Jada holds a Doctor of Business Administration in Business Analytics from the Swiss School of Business and Management(SSBM), Geneva, and is a Certified HR Analyst from IIM Rohtak. She is presently advancing her expertise in Agentic AI at IIT Guwahati. Her eight years as a Technical Analyst at ICICI Bank, combined with more than ten years in academia, give her a rare dual fluency in both the boardroom and the classroom.\\nHer technical expertise spans Python, Machine Learning, Deep Learning, Generative AI, and Agentic AI, complemented by strong proficiency in Tableau, Microsoft Power BI, and Microsoft Fabric. Driven by a singular mission to translate real-world industry practice into meaningful academic learning, she is deeply committed to fostering research excellence and nurturing the next generation of analytical thinkers.",
    linkedin: "https://www.linkedin.com/in/dr-kameswari-jada-00a0a2a4"
  },
  {
    name: "Dr. K. Kiran Kumar",
    area: "Data Science",
    qualification: "Ph.D, MBA",
    experience: 16,
    image: KiranK,
    description: "Dr. K. Kiran Kumar is an Assistant Professor in the Department of Data Sciences at Siva Sivani Institute of Management (SSIM), Hyderabad. He holds a B.Tech in Electronics and Communication Engineering, an MBA, and a Ph.D. from Osmania University. He has also qualified the UGC-NET and APSET examinations.\\nDr. Kiran Kumar has over a decade of experience in teaching, research, and academic administration. Before entering academia, he gained valuable industry experience in the insurance sector. His teaching interests include Statistics, Research Methodology, Marketing Analytics, Operations Research, and Data-Driven Decision Making.\\nHis research focuses on digital transformation, financial inclusion, marketing analytics, customer behavior, healthcare operations, and emerging technologies such as Artificial Intelligence. He has presented research papers at national and international conferences and has published in reputed journals. He actively guides student research projects and encourages the application of analytical tools to solve real-world business problems.",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-kema-a2328738/"
  },
  {
    name: "Mr. G. Murali Krishna Patnaik",
    area: "HR & Strategy",
    qualification: "M.Sc.",
    experience: 19,
    image: Murali,
    description: "Highly accomplished Test Prep Quant Faculty and Aptitude trainer with over 22 years of experience specializing in GMAT, GRE, SAT, and ACT math preparation. Proven track record in academic leadership, curriculum development, and center operations. Recognized for driving significant student score improvements and managing high-performing academic teams across premier coaching institutions.",
    linkedin: "https://www.linkedin.com/in/murali-krishna-ab3068bb/"
  },
  {
    name: "Dr. Ravi Dasari",
    area: "HR & Strategy",
    qualification: "Ph.D, MBA",
    experience: 30,
    image: RaviDasari,
    description: "Profile – Ravi Dasari\\n\\nRavi Dasari holds a PhD in the area of Human Resource Management with a special focus on HR issues in Indian IT Industry. He has secured University First Rank in Personnel Management and Industrial Relations. \\n\\n He has worked with progressive business organizations like Nagarjuna Construction Company Ltd, IDBI Ltd, Lanco and business schools for more than 30 years in various capacities. He has worked he has President and Group Head-HR of Jasper Industries (P) Ltd before joining SSIM. \\n\\nRavi Dasari has been a passionate student of Human Behavior and a TEDX Speaker. He was Consulting Editor of HRM Review and published more than thirty research papers in national and international journals.\\n\\nRavi Dasari has conducted training and leadership development programmes for IIM-Kozikode, IIM Indore, ASCI, IDBI Bank, ESCI, National HRD Network, Deloitte, NFL, CII, NIA, GITAM, SBI, Andhra Bank etc.\\n\\n His areas of interest includes Leadership Development, Sustainable Development, Emotional Intelligence, Organizational Culture, Management of Knowledge Workers and People Management practices in IT Industry. He has been actively associated with National HRD Network and organized various programs on behalf of National HRD Network Hyderabad. He is a National Board Member of National HRD Network.\\n\\n Ravi Dasari has a distinction of assessing 10 large organizations in the capacity of an Assessor and Senior Assessor for CII Business Excellence Award based on European Foundation of Quality Management (EFQM). He is also a certified Executive Coach by Marshall Goldsmith Stakeholder Centered Coaching and ICF.",
    linkedin: "https://www.linkedin.com/in/dr-ravi-dasari-7495b213"
  }
];`;

content = content.replace(/const rawTeamMembers = \[[\s\S]*?\];/, newData);
fs.writeFileSync(path, content, 'utf8');
console.log('Update complete.');
