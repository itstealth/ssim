import { NextResponse } from 'next/server';

/**
 * SEO Debug Endpoint
 * 
 * This endpoint helps verify that SEO-related environment variables
 * are correctly set in production (Azure).
 * 
 * IMPORTANT: Delete or secure this endpoint before going live!
 * It exposes environment configuration which could be sensitive.
 * 
 * Usage:
 * - Development: http://localhost:3000/api/debug/seo
 * - Production: https://yourdomain.com/api/debug/seo
 */

export async function GET(request) {
  try {
    // Get the current URL to determine the environment
    const url = new URL(request.url);
    const isProduction = process.env.NODE_ENV === 'production';

    // Gather environment information
    const envInfo = {
      environment: {
        NODE_ENV: process.env.NODE_ENV || 'NOT SET',
        isProduction: isProduction,
      },
      urls: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'NOT SET ❌',
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'NOT SET ❌',
        currentRequestUrl: url.origin,
      },
      siteInfo: {
        NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'NOT SET',
        NEXT_PUBLIC_TWITTER_HANDLE: process.env.NEXT_PUBLIC_TWITTER_HANDLE || 'NOT SET',
      },
      serverInfo: {
        platform: process.platform,
        nodeVersion: process.version,
        architecture: process.arch,
      },
      // Test URL construction logic (same as in generateMetadata)
      constructedUrls: {
        method: 'auto-detection',
        result: '',
      },
    };

    // Test the same URL construction logic used in generateMetadata
    let apiUrl;
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/test-slug`;
      envInfo.constructedUrls.method = 'NEXT_PUBLIC_BASE_URL';
    } else {
      const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
      const host = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_SITE_URL || 'localhost:3000';
      apiUrl = `${protocol}://${host}/api/blogs/test-slug`;
      envInfo.constructedUrls.method = 'fallback (protocol + host detection)';
    }
    envInfo.constructedUrls.result = apiUrl;

    // Check if required variables are set
    const hasRequiredVars = !!(process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL);
    
    // Determine status
    const status = hasRequiredVars ? 'HEALTHY ✅' : 'MISSING CONFIGURATION ❌';

    // Recommendations
    const recommendations = [];
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      recommendations.push('Set NEXT_PUBLIC_BASE_URL in Azure App Service Configuration');
    }
    if (!process.env.NEXT_PUBLIC_SITE_URL) {
      recommendations.push('Set NEXT_PUBLIC_SITE_URL in Azure App Service Configuration');
    }
    if (!process.env.NEXT_PUBLIC_SITE_NAME) {
      recommendations.push('Set NEXT_PUBLIC_SITE_NAME for better branding');
    }
    if (recommendations.length === 0) {
      recommendations.push('All required environment variables are set! 🎉');
      recommendations.push('Remember to delete this debug endpoint before going live.');
    }

    return NextResponse.json({
      status: status,
      timestamp: new Date().toISOString(),
      environment: envInfo.environment,
      urls: envInfo.urls,
      siteInfo: envInfo.siteInfo,
      serverInfo: envInfo.serverInfo,
      constructedUrls: envInfo.constructedUrls,
      recommendations: recommendations,
      warning: '⚠️  DELETE THIS ENDPOINT BEFORE PRODUCTION! It exposes environment configuration.',
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });

  } catch (error) {
    console.error('[SEO Debug API Error]:', error);
    
    return NextResponse.json({
      status: 'ERROR ❌',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    }, {
      status: 500,
    });
  }
}

