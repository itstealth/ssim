const fs = require('fs');

const path = 'src/app/blog/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// Add Suspense and useSearchParams imports
content = content.replace(
  'import { useState, useEffect, useMemo } from "react";',
  'import { useState, useEffect, useMemo, Suspense } from "react";\nimport { useSearchParams } from "next/navigation";'
);

// Update fetchBlogPosts map to include categories and tags
content = content.replace(
  /const categories = \(terms\[0\] \|\| \[\]\)\.map\(t => t\.name\);/,
  'const categories = (terms[0] || []).map(t => t.name);\n    const tags = (terms[1] || []).map(t => t.name);'
);

content = content.replace(
  /category: categories\.length > 0 \? categories\[0\] : 'Uncategorized',/,
  'category: categories.length > 0 ? categories[0] : \'Uncategorized\',\n      categories,\n      tags,'
);

// Replace default export with the wrapper and inner component
content = content.replace(
  'export default function BlogSection() {',
  `function BlogContent() {
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get('category');
  const filterTag = searchParams.get('tag');`
);

// Add the wrapper at the very end
content += `

export default function BlogSection() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mainBlue"></div></div>}>
      <BlogContent />
    </Suspense>
  );
}
`;

// Now update the pagination to use filteredPosts instead of allPosts
content = content.replace(
  /const totalPosts = allPosts\?\.length \|\| 0;/,
  `const filteredPosts = useMemo(() => {
    if (!allPosts) return [];
    return allPosts.filter(post => {
      if (filterCategory && !post.categories.includes(filterCategory)) return false;
      if (filterTag && !post.tags.includes(filterTag)) return false;
      return true;
    });
  }, [allPosts, filterCategory, filterTag]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, filterTag]);

  const totalPosts = filteredPosts?.length || 0;`
);

content = content.replace(
  /const currentPosts = allPosts\?\.slice\(/,
  'const currentPosts = filteredPosts?.slice('
);

// Add a heading for the active filter if any
content = content.replace(
  /Our recent blogs\n\s*<\/h2>/,
  `{filterCategory ? \`Category: \${filterCategory}\` : filterTag ? \`Tag: \${filterTag}\` : 'Our recent blogs'}
            </h2>`
);

content = content.replace(
  /Discover insights and knowledge from our expert contributors on\n\s*topics that matter to you./,
  `{filterCategory || filterTag ? \`Showing all articles related to \${filterCategory || filterTag}\` : 'Discover insights and knowledge from our expert contributors on topics that matter to you.'}`
);

fs.writeFileSync(path, content);
