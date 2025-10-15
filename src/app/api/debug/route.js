/**
 * Debug API endpoint for production debugging
 * Allows inspection of logs and error dumps from filesystem
 */

import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { fileLogger } from '@/lib/file-logger';
import { logger } from '@/lib/logger';
import { productionDebugger } from '@/lib/production-debug';

// Simple authentication - in production, you should use proper auth
const DEBUG_PASSWORD = process.env.DEBUG_PASSWORD || 'debug123';

function authenticate(req) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.substring(7);
  return token === DEBUG_PASSWORD;
}

export async function GET(request) {
  try {
    // Basic authentication
    if (!authenticate(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action') || 'overview';

    logger.info('Debug API accessed', {
      action,
      ip: request.ip || request.headers.get('x-forwarded-for'),
    });

    switch (action) {
      case 'logs':
        return await getLogs(request);
      case 'error-dumps':
        return await getErrorDumps(request);
      case 'error-dump':
        return await getErrorDump(request);
      case 'system-info':
        return await getSystemInfo();
      case 'clear-logs':
        return await clearLogs(request);
      case 'health':
        return await getHealth();
      case 'debug-files':
        return await getDebugFiles(request);
      case 'debug-file':
        return await getDebugFile(request);
      default:
        return await getOverview();
    }
  } catch (error) {
    logger.error('Debug API error', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

async function getOverview() {
  const logDir = path.join(process.cwd(), 'logs');
  const errorDumpDir = path.join(logDir, 'error-dumps');

  let logFiles = [];
  let errorDumps = [];
  let totalSize = 0;

  try {
    if (fs.existsSync(logDir)) {
      logFiles = fs.readdirSync(logDir)
        .filter(file => file.endsWith('.log'))
        .map(file => {
          const filePath = path.join(logDir, file);
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
          return {
            name: file,
            size: stats.size,
            modified: stats.mtime,
          };
        });
    }

    if (fs.existsSync(errorDumpDir)) {
      errorDumps = fs.readdirSync(errorDumpDir)
        .filter(file => file.endsWith('.json'))
        .map(file => {
          const filePath = path.join(errorDumpDir, file);
          const stats = fs.statSync(filePath);
          return {
            name: file,
            size: stats.size,
            modified: stats.mtime,
          };
        });
    }
  } catch (error) {
    logger.error('Error reading overview data', error);
  }

  return NextResponse.json({
    overview: {
      logDirectory: logDir,
      errorDumpDirectory: errorDumpDir,
      totalLogFiles: logFiles.length,
      totalErrorDumps: errorDumps.length,
      totalSizeBytes: totalSize,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
    },
    logFiles: logFiles.slice(0, 10), // Last 10 files
    errorDumps: errorDumps.slice(0, 10), // Last 10 dumps
    timestamp: new Date().toISOString(),
  });
}

async function getLogs(request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file');
  const lines = parseInt(searchParams.get('lines')) || 50;
  const level = searchParams.get('level'); // ERROR, WARN, INFO, DEBUG

  if (!fileName) {
    return NextResponse.json(
      { error: 'File name is required' },
      { status: 400 }
    );
  }

  const filePath = path.join(process.cwd(), 'logs', fileName);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: 'Log file not found' },
      { status: 404 }
    );
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linesArray = content.trim().split('\n');

    // Filter by level if specified
    let filteredLines = linesArray;
    if (level) {
      filteredLines = linesArray.filter(line => {
        try {
          const logEntry = JSON.parse(line);
          return logEntry.level === level;
        } catch {
          return false;
        }
      });
    }

    // Get last N lines
    const recentLines = filteredLines.slice(-lines);

    return NextResponse.json({
      file: fileName,
      totalLines: linesArray.length,
      filteredLines: filteredLines.length,
      returnedLines: recentLines.length,
      level: level || 'all',
      logs: recentLines.map(line => {
        try {
          return JSON.parse(line);
        } catch {
          return { raw: line, error: 'Invalid JSON' };
        }
      }),
    });
  } catch (error) {
    logger.error('Error reading log file', error, { fileName });
    return NextResponse.json(
      {
        error: 'Failed to read log file',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

async function getErrorDumps(request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit')) || 20;

  const errorDumps = fileLogger.getErrorDumps();

  return NextResponse.json({
    total: errorDumps.length,
    limit,
    errorDumps: errorDumps.slice(0, limit),
  });
}

async function getErrorDump(request) {
  const { searchParams } = new URL(request.url);
  const errorId = searchParams.get('id');

  if (!errorId) {
    return NextResponse.json(
      { error: 'Error ID is required' },
      { status: 400 }
    );
  }

  const errorDump = fileLogger.getErrorDump(errorId);

  if (!errorDump) {
    return NextResponse.json(
      { error: 'Error dump not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(errorDump);
}

async function getSystemInfo() {
  const systemInfo = {
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      cwd: process.cwd(),
    },
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    cpuUsage: process.cpuUsage(),
    versions: process.versions,
    environmentVariables: Object.keys(process.env).filter(key =>
      !key.includes('SECRET') &&
      !key.includes('PASSWORD') &&
      !key.includes('TOKEN') &&
      !key.includes('KEY')
    ).reduce((acc, key) => {
      acc[key] = process.env[key] ? '[SET]' : '[NOT SET]';
      return acc;
    }, {}),
  };

  return NextResponse.json(systemInfo);
}

async function clearLogs(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type'); // 'logs', 'error-dumps', or 'all'

  try {
    const logDir = path.join(process.cwd(), 'logs');

    if (type === 'logs' || type === 'all') {
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
        logFiles.forEach(file => {
          fs.unlinkSync(path.join(logDir, file));
        });
      }
    }

    if (type === 'error-dumps' || type === 'all') {
      const errorDumpDir = path.join(logDir, 'error-dumps');
      if (fs.existsSync(errorDumpDir)) {
        const errorFiles = fs.readdirSync(errorDumpDir).filter(file => file.endsWith('.json'));
        errorFiles.forEach(file => {
          fs.unlinkSync(path.join(errorDumpDir, file));
        });
      }
    }

    logger.info('Logs cleared', { type });

    return NextResponse.json({
      message: `${type || 'all'} logs cleared successfully`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    logger.error('Failed to clear logs', error);
    return NextResponse.json(
      {
        error: 'Failed to clear logs',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

async function getHealth() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      filesystem: checkFilesystem(),
      memory: checkMemory(),
      database: await checkDatabase(),
      azure: await checkAzure(),
    },
  };

  const unhealthyServices = Object.entries(health.services)
    .filter(([_, status]) => status !== 'healthy')
    .map(([service, _]) => service);

  if (unhealthyServices.length > 0) {
    health.status = 'unhealthy';
    health.issues = unhealthyServices;
  }

  return NextResponse.json(health);
}

function checkFilesystem() {
  try {
    const logDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    return 'healthy';
  } catch {
    return 'unhealthy';
  }
}

function checkMemory() {
  const memUsage = process.memoryUsage();
  const memUsageMB = memUsage.heapUsed / 1024 / 1024;

  if (memUsageMB > 100) { // More than 100MB
    return 'warning';
  }
  return 'healthy';
}

async function checkDatabase() {
  try {
    const { dbPool } = await import('@/lib/db');
    const connection = await dbPool.getConnection();
    await connection.ping();
    connection.release();
    return 'healthy';
  } catch {
    return 'unhealthy';
  }
}

async function checkAzure() {
  try {
    const { checkAzureStorageHealth } = await import('@/lib/azure-blob-storage');
    const health = await checkAzureStorageHealth();
    return health.status === 'healthy' ? 'healthy' : 'unhealthy';
  } catch {
    return 'unhealthy';
  }
}

async function getDebugFiles(request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit')) || 20;

  const debugFiles = productionDebugger.getAllDebugFiles();

  return NextResponse.json({
    total: debugFiles.length,
    limit,
    debugFiles: debugFiles.slice(0, limit),
  });
}

async function getDebugFile(request) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file');

  if (!fileName) {
    return NextResponse.json(
      { error: 'File name is required' },
      { status: 400 }
    );
  }

  const debugFile = productionDebugger.getDebugFile(fileName);

  if (!debugFile) {
    return NextResponse.json(
      { error: 'Debug file not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(debugFile);
}
