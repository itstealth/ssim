import { NextResponse } from "next/server";

export async function GET(request) {
  console.log('=== TEST ERROR ENDPOINT ===');
  console.log('This endpoint will throw an error to test error handling');
  
  try {
    // Simulate different types of errors based on query parameter
    const { searchParams } = new URL(request.url);
    const errorType = searchParams.get('type') || 'generic';
    
    console.log('Error type requested:', errorType);
    
    switch (errorType) {
      case 'database':
        const dbError = new Error('Database connection timeout');
        dbError.code = 'ETIMEDOUT';
        dbError.errno = -110;
        dbError.sqlState = 'HY000';
        dbError.sqlMessage = 'Connection timeout after 30000ms';
        throw dbError;
        
      case 'azure':
        const azureError = new Error('Azure Storage authentication failed');
        azureError.code = 'AuthenticationFailed';
        azureError.statusCode = 403;
        throw azureError;
        
      case 'validation':
        return NextResponse.json(
          { message: 'Validation error: Missing required fields' },
          { status: 400 }
        );
        
      default:
        throw new Error('This is a test error with full stack trace');
    }
  } catch (error) {
    console.log('=== ERROR CAUGHT ===');
    console.log('Error name:', error.name);
    console.log('Error message:', error.message);
    console.log('Error code:', error.code);
    console.log('Error stack:', error.stack);
    
    return NextResponse.json(
      {
        message: 'Test Error',
        error: {
          name: error.name,
          message: error.message,
          code: error.code,
          stack: error.stack
        }
      },
      { status: 500 }
    );
  }
}

