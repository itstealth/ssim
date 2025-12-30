import { NextResponse } from 'next/server';
import { dbPool, initializePool } from '@/lib/db';

/**
 * Database Connection Diagnostic Endpoint
 * 
 * This endpoint helps diagnose database connection issues by:
 * - Checking if environment variables are set
 * - Attempting to initialize the database pool
 * - Testing the connection
 * 
 * Usage: http://localhost:3000/api/debug/db
 */

export async function GET(request) {
  try {
    const diagnostics = {
      timestamp: new Date().toISOString(),
      environment: {
        NODE_ENV: process.env.NODE_ENV || 'NOT SET',
      },
      databaseVariables: {
        DB_HOST: process.env.DB_HOST ? '[SET]' : '[NOT SET] ❌',
        DB_USER: process.env.DB_USER ? '[SET]' : '[NOT SET] ❌',
        DB_PASSWORD: process.env.DB_PASSWORD ? '[SET]' : '[NOT SET] ❌',
        DB_DATABASE: process.env.DB_DATABASE ? '[SET]' : '[NOT SET] ❌',
      },
      poolStatus: {
        initialized: dbPool !== null,
        canInitialize: false,
        connectionTest: null,
      },
      recommendations: [],
    };

    // Check which variables are missing
    const requiredVars = ['DB_HOST', 'DB_USER', 'DB_DATABASE'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
      diagnostics.recommendations.push(
        `❌ Missing required environment variables: ${missingVars.join(', ')}`,
        '',
        '📝 To fix this:',
        '1. Create a .env file in your project root (same level as package.json)',
        '2. Add the following variables:',
        '   DB_HOST=your-database-host',
        '   DB_USER=your-database-user',
        '   DB_PASSWORD=your-database-password',
        '   DB_DATABASE=your-database-name',
        '3. Restart your development server',
        '',
        '💡 Example .env file:',
        '   DB_HOST=localhost',
        '   DB_USER=root',
        '   DB_PASSWORD=yourpassword',
        '   DB_DATABASE=ssim_db'
      );
    } else {
      diagnostics.recommendations.push('✅ All required environment variables are set');
      
      // Try to initialize the pool
      const pool = dbPool || initializePool();
      diagnostics.poolStatus.canInitialize = pool !== null;

      if (pool) {
        diagnostics.recommendations.push('✅ Database pool can be initialized');
        
        // Test the connection
        try {
          const connection = await pool.getConnection();
          await connection.ping();
          connection.release();
          diagnostics.poolStatus.connectionTest = 'SUCCESS ✅';
          diagnostics.recommendations.push('✅ Database connection test: SUCCESS');
        } catch (error) {
          diagnostics.poolStatus.connectionTest = `FAILED ❌: ${error.message}`;
          diagnostics.recommendations.push(`❌ Database connection test failed: ${error.message}`);
          diagnostics.recommendations.push('   Check your database credentials and ensure the database server is running');
        }
      } else {
        diagnostics.recommendations.push('❌ Database pool could not be initialized');
      }
    }

    return NextResponse.json(diagnostics, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });

  } catch (error) {
    console.error('[DB Debug API Error]:', error);
    
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

