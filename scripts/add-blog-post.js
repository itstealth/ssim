#!/usr/bin/env node

/**
 * Script to add a new blog post directly to the database
 * Usage: node scripts/add-blog-post.js
 * 
 * Make sure to set your database environment variables in .env file:
 * DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE
 */

import mysql from "mysql2/promise";
import sanitizeHtml from "sanitize-html";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
function loadEnvFile() {
  try {
    const envPath = join(__dirname, "..", ".env");
    const envFile = readFileSync(envPath, "utf-8");
    const envVars = {};
    
    envFile.split("\n").forEach((line) => {
      line = line.trim();
      if (line && !line.startsWith("#") && line.includes("=")) {
        const [key, ...valueParts] = line.split("=");
        const value = valueParts.join("=").trim();
        // Remove quotes if present
        const cleanValue = value.replace(/^["']|["']$/g, "");
        if (key && cleanValue) {
          envVars[key.trim()] = cleanValue;
        }
      }
    });
    
    // Set environment variables
    Object.assign(process.env, envVars);
    if (Object.keys(envVars).length > 0) {
      console.log("✅ Loaded environment variables from .env file");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn("⚠️  .env file not found in project root.");
      console.warn("   Using system environment variables (if set).");
    } else {
      console.warn("⚠️  Could not load .env file:", error.message);
    }
  }
}

// Load environment variables
loadEnvFile();

// Database configuration from environment variables
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.NODE_ENV === "production" ? {
    rejectUnauthorized: false
  } : undefined,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Slugify function
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// Blog post data - This will be inserted as the newest blog post
const blogData = {
  title: "PGDM Business Analytics Course in Hyderabad with Career-Focused Insights",
  content: `<h1>PGDM Business Analytics Course in Hyderabad with Career-Focused Insights</h1>

<p>If you are someone who strongly wishes to make a career in Data-driven decision-making/analytics/AI-enabled Business, an MBA in Business Analytics Hyderabad will be one of the best decisions you make in 2025. Hyderabad is now the analytics and technology capital of India, owing to its large number of Multinational Companies (MNCs), highly developed data-driven Industries, and top-tier Business Schools that offer industry-relevant analytics programs.</p>

<h2>What is a PGDM in Business Analytics?</h2>
<p>The PGDM in Business Analytics is a 2-year postgraduate program. This program trains you to extract business insights from raw data, utilising data analysis tools, statistical techniques, predictive modelling techniques, and decision-making frameworks incorporated by businesses to solve their real-world business problems.</p>
<p>To put it in simple words, this program will equip you with the skills to utilise the information derived from data in helping businesses achieve their goals for Optimisation and Innovative Growth.</p>

<h2>Why Choose a PGDM Business Analytics Course in Hyderabad?</h2>
<p>The city of Hyderabad is the most dynamic and diverse analytics region in India, which makes it a perfect place for those who want to start their careers in this field.</p>
<p><strong>Here's why:</strong></p>
<ul>
  <li>Microsoft, Google, Amazon, Deloitte, Accenture, HSBC, E&Y, and many others are large analytics companies.</li>
  <li>An impressive AI powered by excellent staff trained in data engineering, cloud computing, and machine learning.</li>
  <li>Internships as well as analytics jobs in Hyderabad are easily accessible and in large numbers, thousands ahead of most Indian cities.</li>
  <li>Ultimate level of teaching through analytics activities like attending industry projects, hackathons, and data lab programs.</li>
</ul>
<p>Thus, each PGDM in Business Analytics course in Hyderabad is very relevant to today's marketplace.</p>

<h2>What You Learn in a PGDM Business Analytics Program (Career Skills)?</h2>
<p>The majority of business schools that offer an MBA in Business Analytics Program in Hyderabad have a curriculum that is aligned with industry needs.</p>
<p><strong>You get to learn:</strong></p>

<h3>Core Analytics Skills:</h3>
<ul>
  <li>Statistical Methods for Decision-Making</li>
  <li>Predictive Analytics</li>
  <li>Introduction to Machine Learning</li>
  <li>Data Mining</li>
  <li>Business Forecasting</li>
  <li>Optimization Methods</li>
</ul>

<h3>Technical Skills:</h3>
<ul>
  <li>Python Language</li>
  <li>SQL</li>
  <li>R Language</li>
  <li>Tableau or Power BI</li>
  <li>Advanced Excel</li>
  <li>Big Data Tools (Hadoop/Spark as per the Institute)</li>
</ul>

<h3>Business & Domain Skills:</h3>
<ul>
  <li>Marketing Analytics</li>
  <li>Financial Analytics</li>
  <li>HR Analytics</li>
  <li>Supply Chain Analytics</li>
  <li>Risk Analytics</li>
</ul>

<h3>Soft Skills:</h3>
<ul>
  <li>Problem-Solving Skills</li>
  <li>Communication Skills</li>
  <li>Storytelling through Data</li>
  <li>Decision-Making Skills</li>
</ul>

<h2>Who Should Choose This Course?</h2>
<p>This program is ideal for:</p>
<ul>
  <li>Graduates interested in data, numbers, and business</li>
  <li>Students who want tech + management roles</li>
  <li>Freshers looking for high-demand, high-paying roles</li>
  <li>Working professionals switching to analytics</li>
</ul>
<p>Obviously, you don't need a technical background, but you must be comfortable learning new tools.</p>

<h2>Best Colleges in Hyderabad for PGDM / MBA Business Analytics</h2>

<h3>Tier 1 Colleges</h3>
<p>These institutes usually possess great brand value, modernised curriculum, good exposure to analytics, and placements that are comparatively stronger.</p>

<h4>Woxsen University, Hyderabad</h4>
<p>This is renowned for MBA and analytics-led areas of specialisation with strong collaborations with leading industries to provide quality exposure to students.</p>

<h4>GITAM Hyderabad Business School (GHBS)</h4>
<p>It is known for its management programs driven by data, analytics electives, and corporate exposure.</p>

<h3>Tier 2 Colleges</h3>
<p>These institutes are categorised by constant interaction with the industry, practical analytics curriculum, high ROI, and stable placement results.</p>

<h4>Siva Sivani Institute of Management (SSIM), Hyderabad</h4>
<p>It delivers AICTE-approved PGDM courses with a major in Business Analytics, along with professional training in data tools.</p>

<h4>Institute of Public Enterprise (IPE), Hyderabad</h4>
<p>It is recognised for PGDM studies, which offer majors in business analytics, quantitative methods, and decision sciences.</p>

<h4>Vignana Jyothi Institute of Management (VJIM), Hyderabad</h4>
<p>It provides PGDM with subjects related to analytics and a market-oriented approach to data.</p>

<h3>Tier 3 Colleges</h3>
<p>These colleges present PGDM/MBA programs with analytics components, a reasonable curriculum, and a medium ROI.</p>

<h4>Aurora's Business School, Hyderabad</h4>
<p>It has the business analytics curriculum in its PGDM and MBA programs.</p>

<h4>MANAGE (National Institute of Agricultural Extension Management)</h4>
<p>Industry-oriented PGDM with analytics and quantitative modules that equip the graduates with data-intensive roles in agriculture, rural business, and related sectors.</p>

<h2>Career Opportunities After PGDM Business Analytics in Hyderabad</h2>
<p>Studying in Hyderabad gives you access to some of the best analytics-driven companies. This city offers some of the best analytics salaries in India due to its strong tech ecosystems.</p>

<h3>Major Job Roles You Can Get:</h3>
<ul>
  <li>Business Analyst</li>
  <li>Data Analyst</li>
  <li>Marketing Analyst</li>
  <li>Financial Analyst</li>
  <li>Product Analyst</li>
  <li>Risk Analyst</li>
  <li>Data Visualisation Specialist</li>
  <li>Operations Analyst</li>
  <li>Associate Consultant – Analytics</li>
  <li>Business Intelligence (BI) Analyst</li>
</ul>

<h3>Industry Areas Hiring Analytics Graduates:</h3>
<ul>
  <li>IT & Tech</li>
  <li>Banking, Financial Services, Insurance (BFSI)</li>
  <li>E-commerce</li>
  <li>Healthcare</li>
  <li>Retail</li>
  <li>Telecom</li>
  <li>Pharma & Life Sciences</li>
  <li>Consulting Firms</li>
</ul>

<h3>Salary Expectations in Hyderabad</h3>
<ul>
  <li>Freshers: ₹6–10 LPA</li>
  <li>With Prior Experience: ₹10–18 LPA</li>
  <li>Top roles in consulting/tech: ₹15–25 LPA</li>
</ul>

<h2>Why Does Business Analytics Have a Strong Future?</h2>
<p>Data analysis in business has already started to be considered as one of the most necessary components in the corporate world today. No matter what type of industry a business belongs to, whether it is in technology, finance, health, medicine, retail, or production, data is the only way to realise the smartest decisions. However, data is not of any help if no one can comprehend, unveil, and convert it into action.</p>
<p><strong>Areas with potential for future growth are as follows:</strong></p>
<ul>
  <li>Analytic powered by AI</li>
  <li>Instant data analysis</li>
  <li>Prediction of trends</li>
  <li>Machine Learning</li>
  <li>Data narrative</li>
  <li>Cloud computing for analytics</li>
</ul>
<p>Hence, every year, the requirement for PGDM Business Analytics graduates is increasing</p>

<h2>How to Choose the Best PGDM Business Analytics Course in Hyderabad?</h2>
<p>While selecting a college, look for:</p>
<ul>
  <li>AI & analytics-focused curriculum</li>
  <li>Strong recruiters from tech, consulting, and BFSI</li>
  <li>Certifications (Python, Tableau, Power BI, SQL)</li>
  <li>Live projects</li>
  <li>Placement record in analytics</li>
  <li>Experienced faculty from the industry</li>
</ul>
<p>This ensures better learning and better career outcomes.</p>

<h2>FAQ</h2>

<h3>1. Is Hyderabad a good place to study PGDM in Business Analytics?</h3>
<p>Without a doubt, the answer is yes. Hyderabad isn't just second, but first among the strongest analytical cities in India, where Amazon, Google, Microsoft, Deloitte, and Accenture have set base. You will, hence, do your studies in a city where analytics careers, internships, and projects with industries are in full swing.</p>

<h3>2. What exactly do you learn in a PGDM Business Analytics program?</h3>
<p>You learn to make decisions based on data. The program consists of Python, SQL, Tableau, Power BI, statistics, predictive analytics, the basics of machine learning, and solving real business problems.</p>

<h3>3. Do I need a technical background for PGDM Business Analytics?</h3>
<p>No. Technical background is an advantage, but it is not necessary. The program begins with the basics, and gradually, your skills are developed. Just be knowledgeable about numbers and inquisitive about business processes.</p>

<h3>4. What are the career options after PGDM Business Analytics in Hyderabad?</h3>
<p>You may take up positions such as the Business Analyst, Data Analyst, Product Analyst, Financial Analyst, Marketing Analyst, BI Analyst, or in roles related to consulting and strategy. The job market in Hyderabad is enormous; there are openings for freshers in IT, BFSI, retail, e-commerce, and even startups.</p>

<h3>5. How much salary can I expect after completing this course in Hyderabad?</h3>
<p>The freshers' salaries usually are in the range of ₹6–10 LPA, and it is dependent on your skills, the tools, and the institute that you choose. Experienced candidates in analytics will get salaries of about ₹12–20 LPA in tech-based companies, and more in case they are in the right place.</p>

<h3>6. What skills make me job-ready in Business Analytics?</h3>
<p>The firms today are looking for skilled professionals in Python, SQL, Excel, and Tableau/Power BI, and in addition, have already in place a set of employees handling problem-solving and data storytelling. If you can do an excellent job in conveying insights, you are already one step ahead of the majority of applicants.</p>

<h3>7. Which entrance exams are required for PGDM Business Analytics?</h3>
<p>The majority of institutions consider CAT, MAT, XAT, CMAT, GMAT, or their own conducted tests for intake. Entrance scores might not be high, but still, many colleges with good analytics programs have reasonable cutoffs.</p>

<h3>8. What makes Hyderabad different from other cities for analytics education?</h3>
<p>Hyderabad is the city that can combine technology + management + analytics in one go. In addition to being part of the global tech companies' landscape and working on real industry data projects, the giant analytics job market is also available to you all together.</p>

<h3>9. Is PGDM in Business Analytics, Hyderabad better than a general PGDM?</h3>
<p>If you want a future-proof data career, the answer is clear: YES. General PGDM teaches business only, whereas the PGDM in analytics equips a student with skills in business + data + tech, which is what companies today are hiring.</p>

<h3>10. How do I choose the best college for PGDM Business Analytics in Hyderabad?</h3>
<p>You must look for:</p>
<ul>
  <li>AICTE/NBA/NAAC accreditation</li>
  <li>Tools taught (Python, SQL, Tableau, Power BI)</li>
  <li>Industry projects</li>
  <li>Record of placement in analytics</li>
  <li>Faculty experience</li>
  <li>Fees vs. ROI</li>
</ul>
<p>Once a college meets these criteria, it is considered a secure and solid option.</p>

<h3>11. What is the difference between MBA Business Analytics and PGDM Business Analytics?</h3>
<p>Each program covers the same analytics; however, PGDM has the advantage of being more contemporary and aligned with the needs of the industry. MBA follows the course set by the university, while PGDM institutes have the flexibility of modifying the courses very rapidly in response to industry demand.</p>`,
  slug: "pgdm-business-analytics-course-in-hyderabad-with-career-focused-insights",
  imageUrl: "/blog/blognew.jpeg", // Using the new blog image from public/blog/blognew.jpeg
  imageAlt: "PGDM Business Analytics Course in Hyderabad - Career Opportunities and Insights",
  authorName: "SSIM",
  publishDate: new Date().toISOString().slice(0, 19).replace("T", " "), // Current date/time - will appear first (newest)
  metaTitle: "PGDM Business Analytics Course in Hyderabad with Career-Focused Insights",
  metaDescription: "Explore a PGDM Business Analytics Course in Hyderabad with career-focused insights, industry exposure and strong opportunities in PGDM Business Analytics in Hyderabad.",
  keywords: "PGDM Business Analytics, MBA Business Analytics Hyderabad, Business Analytics Course, Data Analytics, Hyderabad B-Schools, Analytics Career, SSIM",
  tags: ["Business Analytics", "PGDM", "Hyderabad", "Career Guidance", "Data Analytics", "MBA"],
  categories: ["Business Analytics", "Career Guidance", "Education"],
  canonicalUrl: "https://ssim.ac.in/blog/pgdm-business-analytics-course-in-hyderabad-with-career-focused-insights"
};

async function addBlogPost() {
  let connection;
  
  // Validate environment variables before attempting connection
  const requiredVars = ['DB_HOST', 'DB_USER', 'DB_DATABASE'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error("❌ Missing required environment variables:", missingVars.join(', '));
    console.error("\n📝 Please create a .env file in your project root with:");
    console.error("   DB_HOST=your_database_host");
    console.error("   DB_USER=your_database_user");
    console.error("   DB_PASSWORD=your_database_password");
    console.error("   DB_DATABASE=your_database_name");
    console.error("\n💡 Example .env file:");
    console.error("   DB_HOST=localhost");
    console.error("   DB_USER=root");
    console.error("   DB_PASSWORD=mypassword");
    console.error("   DB_DATABASE=ssim_db");
    process.exit(1);
  }
  
  try {
    console.log("Connecting to database...");
    console.log(`   Host: ${process.env.DB_HOST}`);
    console.log(`   Database: ${process.env.DB_DATABASE}`);
    console.log(`   User: ${process.env.DB_USER}`);
    
    connection = await mysql.createConnection(dbConfig);
    console.log("✅ Connected to database successfully!");

    // Sanitize HTML content
    const sanitizedContent = sanitizeHtml(blogData.content, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ]),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        '*': ['class', 'style'],
        'a': ['href', 'name', 'target'],
        'img': ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading']
      }
    });

    // Prepare SQL query
    const sql = `
      INSERT INTO blogs (
        title, slug, content, imageUrl, imageAlt, authorName, publishDate,
        metaTitle, metaDescription, keywords, tags, categories, canonicalUrl
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      blogData.title,
      blogData.slug,
      sanitizedContent,
      blogData.imageUrl,
      blogData.imageAlt,
      blogData.authorName,
      blogData.publishDate,
      blogData.metaTitle,
      blogData.metaDescription,
      blogData.keywords,
      JSON.stringify(blogData.tags),
      JSON.stringify(blogData.categories),
      blogData.canonicalUrl
    ];

    console.log("Inserting blog post...");
    console.log(`   Title: ${blogData.title.substring(0, 60)}...`);
    console.log(`   Publish Date: ${blogData.publishDate} (will appear first in blog list)`);
    console.log(`   Image: ${blogData.imageUrl}`);
    
    const [result] = await connection.query(sql, values);
    console.log(`\n✅ Blog post created successfully with ID: ${result.insertId}`);
    console.log(`📝 Slug: ${blogData.slug}`);
    console.log(`🔗 URL: ${blogData.canonicalUrl}`);
    console.log(`📅 This post will appear at the top of the blog list (newest first)`);

  } catch (error) {
    console.error("\n❌ Error adding blog post:");
    console.error("   Message:", error.message);
    
    if (error.code === "ER_DUP_ENTRY") {
      console.error("\n⚠️  A blog post with this slug already exists!");
      console.error("   Slug:", blogData.slug);
      console.error("   You may need to use a different slug or delete the existing post.");
    } else if (error.code === "ECONNREFUSED") {
      console.error("\n⚠️  Could not connect to database server.");
      console.error("   Please check:");
      console.error("   - Is your database server running?");
      console.error("   - Is DB_HOST correct?", process.env.DB_HOST);
      console.error("   - Is the port correct? (default: 3306)");
    } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
      console.error("\n⚠️  Database access denied.");
      console.error("   Please check your DB_USER and DB_PASSWORD credentials.");
    } else if (error.code === "ER_BAD_DB_ERROR") {
      console.error("\n⚠️  Database does not exist.");
      console.error("   Please check your DB_DATABASE name:", process.env.DB_DATABASE);
    } else {
      console.error("   Code:", error.code);
      console.error("   Stack:", error.stack);
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log("Database connection closed.");
    }
  }
}

// Run the script
addBlogPost();

