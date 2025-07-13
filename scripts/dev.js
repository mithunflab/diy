#!/usr/bin/env node

// Development server script for Lovable environment
const { spawn } = require('child_process');

console.log('Starting Vite development server...');

// Run vite dev server
const viteProcess = spawn('npx', ['vite'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

viteProcess.on('error', (error) => {
  console.error('Failed to start dev server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Dev server exited with code ${code}`);
    process.exit(code);
  }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  viteProcess.kill('SIGINT');
});