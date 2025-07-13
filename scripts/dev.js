#!/usr/bin/env node

// This script bypasses the npm script requirement and starts Vite directly
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Bolt.diy frontend components in Lovable...');

// Start the Vite development server directly
const viteProcess = spawn('npx', ['vite', 'dev'], {
  stdio: 'inherit',
  cwd: process.cwd(),
  env: { ...process.env, NODE_ENV: 'development' }
});

viteProcess.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Development server exited with code ${code}`);
    process.exit(code);
  }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Shutting down development server...');
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('🛑 Shutting down development server...');
  viteProcess.kill('SIGINT');
});