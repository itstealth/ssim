const fs = require('fs');

const path = './src/data/facultyData.js';
let content = fs.readFileSync(path, 'utf8');

// Replace exact area strings
content = content.replace(/area:\s*"Data Science"/g, 'area: "Data Science & Information Systems"');
content = content.replace(/area:\s*"Decision Science and Information System"/g, 'area: "Data Science & Information Systems"');

fs.writeFileSync(path, content, 'utf8');
console.log('Update areas complete.');
