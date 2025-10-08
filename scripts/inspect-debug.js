#!/usr/bin/env node

/**
 * Production debug inspection script
 * Run this script to inspect debug files and error details
 */

const fs = require('fs');
const path = require('path');

const DEBUG_DIR = path.join(process.cwd(), 'debug-logs');

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

function listDebugFiles() {
  if (!fs.existsSync(DEBUG_DIR)) {
    console.log(`Debug directory ${DEBUG_DIR} does not exist`);
    return [];
  }

  return fs.readdirSync(DEBUG_DIR)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(DEBUG_DIR, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        path: filePath,
        size: stats.size,
        modified: stats.mtime,
      };
    })
    .sort((a, b) => b.modified - a.modified);
}

function displayOverview() {
  console.log('\n🔍 PRODUCTION DEBUG FILES OVERVIEW');
  console.log('='.repeat(60));

  const debugFiles = listDebugFiles();

  if (debugFiles.length === 0) {
    console.log('No debug files found.');
    return;
  }

  console.log(`\n📁 Debug Files (${debugFiles.length}):`);
  debugFiles.slice(0, 10).forEach((file, index) => {
    console.log(`  ${index + 1}. ${file.name}`);
    console.log(`     Size: ${formatBytes(file.size)} | Modified: ${formatDate(file.modified)}`);

    // Try to read and display basic error info
    try {
      const content = fs.readFileSync(file.path, 'utf8');
      const data = JSON.parse(content);
      console.log(`     Error: ${data.error?.name || 'Unknown'}: ${data.error?.message || 'Unknown error'}`);
      console.log(`     Function: ${data.context?.functionName || 'Unknown'}`);
      console.log(`     Duration: ${data.context?.duration || 'Unknown'}`);
    } catch (error) {
      console.log(`     [Corrupted file]`);
    }
    console.log('');
  });

  if (debugFiles.length > 10) {
    console.log(`  ... and ${debugFiles.length - 10} more files`);
  }

  const totalSize = debugFiles.reduce((sum, file) => sum + file.size, 0);
  console.log(`\n💾 Total Size: ${formatBytes(totalSize)}`);
}

function displayDebugFile(fileName) {
  const filePath = path.join(DEBUG_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    console.log(`Debug file '${fileName}' not found.`);
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    console.log(`\n🔍 DEBUG FILE: ${fileName}`);
    console.log('='.repeat(80));
    console.log(`ID: ${data.id}`);
    console.log(`Timestamp: ${data.timestamp}`);
    console.log(`Error: ${data.error?.name}: ${data.error?.message}`);
    console.log(`Function: ${data.context?.functionName || 'Unknown'}`);
    console.log(`Duration: ${data.context?.duration || 'Unknown'}`);

    if (data.error?.stack) {
      console.log(`\n📚 Stack Trace:`);
      console.log(data.error.stack);
    }

    if (data.context?.args) {
      console.log(`\n📝 Function Arguments:`);
      console.log(JSON.stringify(data.context.args, null, 2));
    }

    if (data.context?.environment) {
      console.log(`\n🖥️  Environment:`);
      console.log(`Node Version: ${data.context.environment.NODE_VERSION}`);
      console.log(`Platform: ${data.context.environment.PLATFORM}`);
      console.log(`Memory Usage: ${formatBytes(data.context.environment.MEMORY_USAGE?.heapUsed || 0)}`);
      console.log(`Uptime: ${Math.round(data.context.environment.UPTIME || 0)}s`);
    }

    if (data.context?.envVars) {
      console.log(`\n🔧 Environment Variables:`);
      const envVars = data.context.envVars;
      Object.keys(envVars).slice(0, 20).forEach(key => {
        console.log(`  ${key}: ${envVars[key]}`);
      });
      if (Object.keys(envVars).length > 20) {
        console.log(`  ... and ${Object.keys(envVars).length - 20} more`);
      }
    }

    if (data.context?.loadedModules) {
      console.log(`\n📦 Loaded Modules (${data.context.loadedModules.length}):`);
      data.context.loadedModules.slice(0, 10).forEach(module => {
        console.log(`  ${module}`);
      });
      if (data.context.loadedModules.length > 10) {
        console.log(`  ... and ${data.context.loadedModules.length - 10} more`);
      }
    }

  } catch (error) {
    console.log(`Error reading debug file: ${error.message}`);
  }
}

function showHelp() {
  console.log(`
🔍 PRODUCTION DEBUG INSPECTION TOOL

Usage: node scripts/inspect-debug.js [command] [options]

Commands:
  overview                    Show overview of all debug files
  file <filename>            Display detailed debug file content
  clear                      Clear all debug files
  latest                     Show the most recent debug file

Examples:
  node scripts/inspect-debug.js overview
  node scripts/inspect-debug.js file debug_1640995200000_abc123.json
  node scripts/inspect-debug.js latest
  node scripts/inspect-debug.js clear
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

  case 'file':
    if (args.length < 2) {
      console.log('Please specify a debug file name');
      process.exit(1);
    }
    displayDebugFile(args[1]);
    break;

  case 'latest':
    const debugFiles = listDebugFiles();
    if (debugFiles.length === 0) {
      console.log('No debug files found.');
    } else {
      displayDebugFile(debugFiles[0].name);
    }
    break;

  case 'clear':
    console.log('Clearing all debug files...');
    try {
      if (fs.existsSync(DEBUG_DIR)) {
        const files = fs.readdirSync(DEBUG_DIR);
        files.forEach(file => {
          fs.unlinkSync(path.join(DEBUG_DIR, file));
        });
        console.log(`Cleared ${files.length} debug files`);
      }
      console.log('All debug files cleared successfully!');
    } catch (error) {
      console.log(`Error clearing debug files: ${error.message}`);
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
