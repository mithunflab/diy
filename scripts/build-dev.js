#!/usr/bin/env node

// Build script for Lovable development mode
const { execSync } = require('child_process');

try {
  console.log('Building for development mode...');
  execSync('vite build --mode development', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}