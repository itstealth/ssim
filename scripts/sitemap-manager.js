#!/usr/bin/env node

/**
 * Sitemap Management Script
 * 
 * Usage:
 *   node scripts/sitemap-manager.js status
 *   node scripts/sitemap-manager.js regenerate
 *   node scripts/sitemap-manager.js test
 */

import { config } from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
config();

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const apiUrl = `${baseUrl}/api/sitemap/regenerate`;

async function checkSitemapStatus() {
  try {
    console.log('🔍 Checking sitemap status...\n');
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Sitemap Status:');
      console.log(`   📄 Static Routes: ${data.staticRoutes}`);
      console.log(`   📝 Published Blogs: ${data.publishedBlogs}`);
      console.log(`   🔗 Total URLs: ${data.totalUrls}`);
      console.log(`   🌐 Sitemap URL: ${data.sitemapUrl}`);
      console.log(`   ⏰ Last Checked: ${data.lastChecked}`);
      console.log(`   💾 Cache Duration: ${data.cacheDuration}`);
      console.log(`   🔄 Next Regeneration: ${data.nextRegeneration}`);
    } else {
      console.error('❌ Error checking status:', data.message);
    }
  } catch (error) {
    console.error('❌ Failed to check status:', error.message);
  }
}

async function regenerateSitemap() {
  try {
    console.log('🔄 Regenerating sitemap...\n');
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Sitemap regenerated successfully!');
      console.log(`   📄 Static Routes: ${data.staticRoutes}`);
      console.log(`   📝 Blog Posts: ${data.blogPosts}`);
      console.log(`   🔗 Total URLs: ${data.urlCount}`);
      console.log(`   ⏰ Generated At: ${data.generatedAt}`);
      console.log(`   🌐 Sitemap URL: ${data.sitemapUrl}`);
    } else {
      console.error('❌ Error regenerating sitemap:', data.message);
    }
  } catch (error) {
    console.error('❌ Failed to regenerate sitemap:', error.message);
  }
}

async function testSitemap() {
  try {
    console.log('🧪 Testing sitemap...\n');
    
    const sitemapUrl = `${baseUrl}/sitemap.xml`;
    const response = await fetch(sitemapUrl);
    
    if (response.ok) {
      const xml = await response.text();
      
      // Basic XML validation
      if (xml.includes('<?xml') && xml.includes('<urlset')) {
        console.log('✅ Sitemap is valid XML');
        
        // Count URLs
        const urlMatches = xml.match(/<url>/g);
        const urlCount = urlMatches ? urlMatches.length : 0;
        
        console.log(`   📊 Total URLs found: ${urlCount}`);
        console.log(`   🌐 Sitemap URL: ${sitemapUrl}`);
        console.log(`   📏 Content Length: ${xml.length} characters`);
        
        // Check for common issues
        if (xml.includes('&amp;')) {
          console.log('   ⚠️  Found encoded ampersands (normal)');
        }
        
        if (xml.includes('&lt;') || xml.includes('&gt;')) {
          console.log('   ⚠️  Found encoded HTML entities (normal)');
        }
        
        console.log('\n✅ Sitemap test completed successfully!');
      } else {
        console.error('❌ Invalid XML format');
      }
    } else {
      console.error(`❌ HTTP Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ Failed to test sitemap:', error.message);
  }
}

async function showHelp() {
  console.log(`
🗺️  Sitemap Manager

Usage:
  node scripts/sitemap-manager.js <command>

Commands:
  status      Check sitemap status and statistics
  regenerate  Force regenerate sitemap (bypasses cache)
  test        Test sitemap XML validity and content
  help        Show this help message

Examples:
  node scripts/sitemap-manager.js status
  node scripts/sitemap-manager.js regenerate
  node scripts/sitemap-manager.js test

Environment:
  NEXT_PUBLIC_SITE_URL=${baseUrl}
  `);
}

// Main execution
const command = process.argv[2];

switch (command) {
  case 'status':
    await checkSitemapStatus();
    break;
  case 'regenerate':
    await regenerateSitemap();
    break;
  case 'test':
    await testSitemap();
    break;
  case 'help':
  case '--help':
  case '-h':
    await showHelp();
    break;
  default:
    console.log('❌ Unknown command. Use "help" to see available commands.');
    await showHelp();
    process.exit(1);
}
