import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(indexPath)) {
  console.log('Build successful - dist/index.html exists');
  process.exit(0);
} else {
  console.error('Build failed - dist/index.html not found');
  process.exit(1);
}