#!/usr/bin/env node

/**
 * Local log inspection script
 * Run this script to inspect logs and error dumps locally
 */

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(process.cwd(), 'logs');
const ERROR_DUMP_DIR = path.join(LOG_DIR, 'error-dumps');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatDate(date) {
  return new Date(date).toLocaleString();
}

function listFiles(dir, extension = '') {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return [];
  }

  return fs.readdirSync(dir)
    .filter(file => !extension || file.endsWith(extension))
    .map(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        path: filePath,
        size: stats.size,
        modified: stats.mtime,
        isFile: stats.isFile(),
      };
    })
    .sort((a, b) => b.modified - a.modified);
}

function displayOverview() {
  console.log('\n📊 LOG FILES OVERVIEW');
  console.log('='.repeat(50));

  const logFiles = listFiles(LOG_DIR, '.log');
  const errorDumps = listFiles(ERROR_DUMP_DIR, '.json');

  if (logFiles.length === 0 && errorDumps.length === 0) {
    console.log('No log files or error dumps found.');
    return;
  }

  console.log(`\n📁 Log Files (${logFiles.length}):`);
  if (logFiles.length > 0) {
    logFiles.slice(0, 5).forEach((file, index) => {
      console.log(`  ${index + 1}. ${file.name}`);
      console.log(`     Size: ${formatBytes(file.size)} | Modified: ${formatDate(file.modified)}`);
    });

    if (logFiles.length > 5) {
      console.log(`  ... and ${logFiles.length - 5} more files`);
    }
  }

  console.log(`\n🚨 Error Dumps (${errorDumps.length}):`);
  if (errorDumps.length > 0) {
    errorDumps.slice(0, 5).forEach((file, index) => {
      console.log(`  ${index + 1}. ${file.name}`);
      console.log(`     Size: ${formatBytes(file.size)} | Modified: ${formatDate(file.modified)}`);

      // Try to read and display basic error info
      try {
        const content = fs.readFileSync(file.path, 'utf8');
        const data = JSON.parse(content);
        console.log(`     Error: ${data.error?.message || 'Unknown error'}`);
        console.log(`     Request: ${data.context?.method || 'Unknown'} ${data.context?.url || 'Unknown'}`);
      } catch (error) {
        console.log(`     [Corrupted file]`);
      }
    });

    if (errorDumps.length > 5) {
      console.log(`  ... and ${errorDumps.length - 5} more dumps`);
    }
  }

  const totalSize = logFiles.reduce((sum, file) => sum + file.size, 0) +
                   errorDumps.reduce((sum, file) => sum + file.size, 0);

  console.log(`\n💾 Total Size: ${formatBytes(totalSize)}`);
}

function displayErrorDump(errorId) {
  const filePath = path.join(ERROR_DUMP_DIR, `${errorId}.json`);

  if (!fs.existsSync(filePath)) {
    console.log(`Error dump '${errorId}' not found.`);
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    console.log(`\n🚨 ERROR DUMP: ${errorId}`);
    console.log('='.repeat(60));
    console.log(`Timestamp: ${data.timestamp}`);
    console.log(`Error: ${data.error?.name}: ${data.error?.message}`);
    console.log(`Request ID: ${data.requestId}`);
    console.log(`URL: ${data.context?.method} ${data.context?.url}`);
    console.log(`User Agent: ${data.context?.userAgent || 'Unknown'}`);
    console.log(`IP: ${data.context?.ip || 'Unknown'}`);

    if (data.context?.body) {
      console.log(`\n📝 Request Body:`);
      console.log(JSON.stringify(data.context.body, null, 2));
    }

    if (data.error?.stack) {
      console.log(`\n🔍 Stack Trace:`);
      console.log(data.error.stack);
    }

    if (data.environment) {
      console.log(`\n🖥️  Environment:`);
      console.log(`Node Version: ${data.environment.nodeVersion}`);
      console.log(`Platform: ${data.environment.platform}`);
      console.log(`Memory Usage: ${formatBytes(data.environment.memoryUsage?.heapUsed || 0)}`);
      console.log(`Uptime: ${Math.round(data.environment.uptime || 0)}s`);
    }

  } catch (error) {
    console.log(`Error reading dump file: ${error.message}`);
  }
}

function displayLogContent(fileName, options = {}) {
  const { lines = 20, level = null } = options;
  const filePath = path.join(LOG_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.log(`Log file '${fileName}' not found.`);
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linesArray = content.trim().split('\n');

    console.log(`\n📄 LOG FILE: ${fileName}`);
    console.log('='.repeat(60));
    console.log(`Total lines: ${linesArray.length}`);

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
      console.log(`Filtered lines (${level}): ${filteredLines.length}`);
    }

    // Get recent lines
    const recentLines = filteredLines.slice(-lines);

    console.log(`\nLast ${recentLines.length} lines:`);
    console.log('-'.repeat(60));

    recentLines.forEach((line, index) => {
      try {
        const logEntry = JSON.parse(line);
        const timestamp = new Date(logEntry.timestamp).toLocaleTimeString();
        console.log(`[${timestamp}] ${logEntry.level}: ${logEntry.message}`);

        if (logEntry.error && logEntry.level === 'ERROR') {
          console.log(`  Error: ${logEntry.error.message}`);
        }
      } catch {
        console.log(`[INVALID JSON]: ${line.substring(0, 100)}...`);
      }
    });

  } catch (error) {
    console.log(`Error reading log file: ${error.message}`);
  }
}

function showHelp() {
  console.log(`
🔍 LOG INSPECTION TOOL

Usage: node scripts/inspect-logs.js [command] [options]

Commands:
  overview                    Show overview of all logs and error dumps
  logs <file> [options]       Display content of a specific log file
  errors [limit]              Show recent error dumps (default: 10)
  error <id>                  Show detailed error dump
  clear                       Clear all logs and error dumps

Log file options:
  --lines <n>                 Number of lines to show (default: 20)
  --level <ERROR|WARN|INFO|DEBUG>  Filter by log level

Examples:
  node scripts/inspect-logs.js overview
  node scripts/inspect-logs.js logs app-2025-01-08.log --lines 50 --level ERROR
  node scripts/inspect-logs.js errors 5
  node scripts/inspect-logs.js error error_1640995200000_abc123
  node scripts/inspect-logs.js clear
`);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  displayOverview();
  process.exit(0);
}

const command = args[0];

switch (command) {
  case 'overview':
    displayOverview();
    break;

  case 'logs':
    if (args.length < 2) {
      console.log('Please specify a log file name');
      process.exit(1);
    }

    const fileName = args[1];
    const logOptions = {};

    // Parse options
    for (let i = 2; i < args.length; i += 2) {
      const option = args[i];
      const value = args[i + 1];

      if (option === '--lines') {
        logOptions.lines = parseInt(value);
      } else if (option === '--level') {
        logOptions.level = value;
      }
    }

    displayLogContent(fileName, logOptions);
    break;

  case 'errors':
    const errorLimit = args[1] ? parseInt(args[1]) : 10;
    const errorDumps = listFiles(ERROR_DUMP_DIR, '.json').slice(0, errorLimit);

    console.log(`\n🚨 RECENT ERROR DUMPS (${errorDumps.length}):`);
    console.log('='.repeat(50));

    errorDumps.forEach((dump, index) => {
      console.log(`${index + 1}. ${dump.name}`);
      console.log(`   Modified: ${formatDate(dump.modified)} | Size: ${formatBytes(dump.size)}`);

      try {
        const content = fs.readFileSync(dump.path, 'utf8');
        const data = JSON.parse(content);
        console.log(`   Error: ${data.error?.message || 'Unknown'}`);
        console.log(`   Request: ${data.context?.method || 'Unknown'} ${data.context?.url || 'Unknown'}`);
      } catch {
        console.log(`   [Corrupted file]`);
      }
      console.log('');
    });
    break;

  case 'error':
    if (args.length < 2) {
      console.log('Please specify an error ID');
      process.exit(1);
    }
    displayErrorDump(args[1]);
    break;

  case 'clear':
    console.log('Clearing all logs and error dumps...');
    try {
      if (fs.existsSync(LOG_DIR)) {
        const logFiles = listFiles(LOG_DIR, '.log');
        logFiles.forEach(file => fs.unlinkSync(file.path));
        console.log(`Cleared ${logFiles.length} log files`);
      }

      if (fs.existsSync(ERROR_DUMP_DIR)) {
        const errorFiles = listFiles(ERROR_DUMP_DIR, '.json');
        errorFiles.forEach(file => fs.unlinkSync(file.path));
        console.log(`Cleared ${errorFiles.length} error dumps`);
      }
      console.log('All logs cleared successfully!');
    } catch (error) {
      console.log(`Error clearing logs: ${error.message}`);
    }
    break;

  case '--help':
  case '-h':
    showHelp();
    break;

  default:
    console.log(`Unknown command: ${command}`);
    showHelp();
    process.exit(1);
}
