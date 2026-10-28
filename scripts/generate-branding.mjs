import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import icoEndec from 'ico-endec';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const source = path.join(root, 'public', 'images', 'logo-source-user.png');
const imagesDir = path.join(root, 'public', 'images');
const appDir = path.join(root, 'src', 'app');

const meta = await sharp(source).metadata();
const { width, height } = meta;
console.log('Source dimensions:', width, 'x', height);

// The circular B-crane mark is roughly 540px wide and 440px tall, centered near the top.
// Extract that rectangle, then pad to a square so icon variants contain only the mark.
const markWidth = 540;
const markHeight = 440;
const markLeft = Math.round((width - markWidth) / 2);
const markTop = 0;

// 1. Full wordmark (navy/orange on white/transparent) — used as the default full logo.
await sharp(source)
  .resize(900, 900, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(imagesDir, 'logo-full.png'));
console.log('Created logo-full.png');

// 2. Light-surface variant: source already has dark text suitable for light backgrounds.
fs.copyFileSync(path.join(imagesDir, 'logo-full.png'), path.join(imagesDir, 'logo-full-light.png'));
console.log('Created logo-full-light.png');

// 3. Header mark: square crop of the B-crane icon, resized to a header-friendly size.
await sharp(source)
  .extract({ left: markLeft, top: markTop, width: markSize, height: markSize })
  .resize(720, 720, { fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(imagesDir, 'logo-mark.png'));
console.log('Created logo-mark.png');

// 4. PWA/JSON-LD 512x512 icon.
await sharp(source)
  .extract({ left: markLeft, top: markTop, width: markSize, height: markSize })
  .resize(512, 512)
  .png({ compressionLevel: 9 })
  .toFile(path.join(imagesDir, 'logo-icon-512.png'));
console.log('Created logo-icon-512.png');

// 5. Open Graph share card: 1200x630 with the full logo centered.
const ogWidth = 1200;
const ogHeight = 630;
const ogLogo = await sharp(source)
  .resize(1100, 550, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },
  },
})
  .composite([{ input: ogLogo, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'public', 'Open_Graph_metadata.png'));
console.log('Created Open_Graph_metadata.png');

// 6. JPEG version for smaller social-share payload.
await sharp(path.join(root, 'public', 'Open_Graph_metadata.png'))
  .jpeg({ quality: 90, progressive: true })
  .toFile(path.join(root, 'public', 'Open_Graph_metadata.jpg'));
console.log('Created Open_Graph_metadata.jpg');

// 7. App router icon.png (192x192).
await sharp(source)
  .extract({ left: markLeft, top: markTop, width: markSize, height: markSize })
  .resize(192, 192)
  .png({ compressionLevel: 9 })
  .toFile(path.join(appDir, 'icon.png'));
console.log('Created src/app/icon.png');

// 8. Apple touch icon (180x180).
await sharp(source)
  .extract({ left: markLeft, top: markTop, width: markSize, height: markSize })
  .resize(180, 180)
  .png({ compressionLevel: 9 })
  .toFile(path.join(appDir, 'apple-icon.png'));
console.log('Created src/app/apple-icon.png');

// 9. favicon.ico with multiple embedded PNG sizes.
const faviconSizes = [16, 32, 48];
const faviconBuffers = await Promise.all(
  faviconSizes.map(async (size) =>
    sharp(path.join(appDir, 'icon.png'))
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer()
  )
);
const icoBuffer = icoEndec.encode(faviconBuffers);
fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
console.log('Created src/app/favicon.ico');

console.log('Branding assets regenerated from logo-source-user.png');
