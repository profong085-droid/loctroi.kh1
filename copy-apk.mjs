import fs from 'fs';
import path from 'path';

const source = path.join(process.cwd(), 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
const target = path.join(process.cwd(), 'public', 'loctroi.apk');

if (fs.existsSync(source)) {
  const stats = fs.statSync(source);
  console.log(`Found app-debug.apk (${(stats.size / (1024 * 1024)).toFixed(2)} MB). Copying to public/loctroi.apk...`);
  fs.copyFileSync(source, target);
  const targetStats = fs.statSync(target);
  console.log(`Successfully copied! public/loctroi.apk is now ${(targetStats.size / (1024 * 1024)).toFixed(2)} MB.`);
} else {
  console.error('Source APK not found at:', source);
}
