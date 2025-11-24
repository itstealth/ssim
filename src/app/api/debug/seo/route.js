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
      azureDetection: {
        WEBSITE_HOSTNAME: process.env.WEBSITE_HOSTNAME || 'NOT SET',
        APPSETTING_WEBSITE_HOSTNAME: process.env.APPSETTING_WEBSITE_HOSTNAME || 'NOT SET',
        WEBSITE_SITE_NAME: process.env.WEBSITE_SITE_NAME || 'NOT SET',
        detectedAzureUrl: process.env.WEBSITE_HOSTNAME 
          ? `https://${process.env.WEBSITE_HOSTNAME}` 
          : 'Azure not detected',
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
    let detectionMethod;
    
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/test-slug`;
      detectionMethod = 'NEXT_PUBLIC_BASE_URL (PREFERRED) ✅';
    } else if (process.env.NEXT_PUBLIC_SITE_URL) {
      apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/test-slug`;
      detectionMethod = 'NEXT_PUBLIC_SITE_URL (fallback)';
    } else {
      const azureWebsiteName = process.env.WEBSITE_HOSTNAME || process.env.APPSETTING_WEBSITE_HOSTNAME;
      const vercelUrl = process.env.VERCEL_URL;
      
      if (azureWebsiteName) {
        apiUrl = `https://${azureWebsiteName}/api/blogs/test-slug`;
        detectionMethod = 'Azure WEBSITE_HOSTNAME (auto-detected) ⚠️';
      } else if (vercelUrl) {
        apiUrl = `https://${vercelUrl}/api/blogs/test-slug`;
        detectionMethod = 'Vercel URL (auto-detected)';
      } else if (process.env.NODE_ENV === 'production') {
        apiUrl = `/api/blogs/test-slug`;
        detectionMethod = 'Relative URL (last resort) ⚠️';
      } else {
        apiUrl = `http://localhost:3000/api/blogs/test-slug`;
        detectionMethod = 'localhost (development)';
      }
    }
    
    envInfo.constructedUrls.method = detectionMethod;
    envInfo.constructedUrls.result = apiUrl;

    // Check if required variables are set
    const hasPreferredVars = !!process.env.NEXT_PUBLIC_BASE_URL;
    const hasFallbackVars = !!process.env.NEXT_PUBLIC_SITE_URL;
    const hasAzureDetection = !!(process.env.WEBSITE_HOSTNAME || process.env.APPSETTING_WEBSITE_HOSTNAME);
    const hasAnyConfig = hasPreferredVars || hasFallbackVars || hasAzureDetection;
    
    // Determine status
    let status;
    if (hasPreferredVars) {
      status = 'HEALTHY ✅';
    } else if (hasFallbackVars || hasAzureDetection) {
      status = 'WORKING (with fallbacks) ⚠️';
    } else {
      status = 'MISSING CONFIGURATION ❌';
    }

    // Recommendations
    const recommendations = [];
    
    if (!process.env.NEXT_PUBLIC_BASE_URL && !process.env.NEXT_PUBLIC_SITE_URL) {
      recommendations.push('⚠️ CRITICAL: Set NEXT_PUBLIC_BASE_URL in Azure App Service → Configuration → Application settings');
      recommendations.push('Example: NEXT_PUBLIC_BASE_URL = https://yourdomain.com');
      if (hasAzureDetection) {
        recommendations.push(`✅ Auto-detected Azure URL: ${envInfo.azureDetection.detectedAzureUrl}`);
        recommendations.push('However, setting NEXT_PUBLIC_BASE_URL explicitly is recommended for reliability');
      }
    } else if (!process.env.NEXT_PUBLIC_BASE_URL) {
      recommendations.push('⚠️ Set NEXT_PUBLIC_BASE_URL for best results (currently using fallback)');
    }
    
    if (!process.env.NEXT_PUBLIC_SITE_NAME) {
      recommendations.push('📝 Optional: Set NEXT_PUBLIC_SITE_NAME for better branding in meta tags');
    }
    
    if (!process.env.NEXT_PUBLIC_TWITTER_HANDLE) {
      recommendations.push('📝 Optional: Set NEXT_PUBLIC_TWITTER_HANDLE for Twitter cards (e.g., @YourHandle)');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('🎉 All required environment variables are set!');
      recommendations.push('✅ Your SEO configuration is optimal');
      recommendations.push('⚠️ Remember to delete this debug endpoint before going live');
    }
    
    // Add deployment instructions
    if (!hasPreferredVars) {
      recommendations.push('');
      recommendations.push('📋 To set environment variables in Azure:');
      recommendations.push('1. Go to Azure Portal → Your App Service');
      recommendations.push('2. Click Configuration → Application settings');
      recommendations.push('3. Click + New application setting');
      recommendations.push('4. Add: Name = NEXT_PUBLIC_BASE_URL, Value = https://yourdomain.com');
      recommendations.push('5. Click Save, then Restart the app');
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

