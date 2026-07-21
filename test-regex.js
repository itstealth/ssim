const fs = require('fs');

async function run() {
  const response = await fetch(`http://localhost:3000/wp-json/wp/v2/posts?slug=how-b-school-students-can-build-meaningful-connections&_embed`);
  const posts = await response.json();
  const html = posts[0].content.rendered;
  
  const startStr = '<div id="ez-toc-container"';
  const startIdx = html.indexOf(startStr);
  console.log("startIdx:", startIdx);

  if (startIdx !== -1) {
    let divCount = 0;
    let endIdx = -1;
    const tagRegex = /<\/?div[^>]*>/gi;
    tagRegex.lastIndex = startIdx;
    
    let match;
    while ((match = tagRegex.exec(html)) !== null) {
      if (match[0].toLowerCase().startsWith('</div')) {
        divCount--;
        if (divCount === 0) {
          endIdx = match.index + match[0].length;
          break;
        }
      } else if (match[0].toLowerCase().startsWith('<div')) {
        divCount++;
      }
    }
    console.log("endIdx:", endIdx);
    if (endIdx !== -1) {
      console.log("TOC Length:", endIdx - startIdx);
    }
  }
}
run();
