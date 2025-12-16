const fs = require('fs');
const path = require('path');

// Simple deployment script
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexPath)) {
  console.log('Build successful - dist/index.html exists');
  process.exit(0);
} else {
  console.error('Build failed - dist/index.html not found');
  process.exit(1);
}