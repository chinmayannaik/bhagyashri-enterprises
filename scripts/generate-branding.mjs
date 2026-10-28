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

// Icon-only crop: B in orange circle (exclude baked-in BHAGYASHRI wordmark below).
const markWidth = 520;
const markHeight = 360;
const markLeft = Math.round((width - markWidth) / 2);
const markTop = 18;

/** B-crane mark only, white background knocked out for dark header. */
async function squareMarkBuffer(targetSize) {
  const rgb = await sharp(source)
    .extract({ left: markLeft, top: markTop, width: markWidth, height: markHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const mask = await sharp(source)
    .extract({ left: markLeft, top: markTop, width: markWidth, height: markHeight })
    .greyscale()
    .threshold(250)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rgba = Buffer.alloc(rgb.data.length);
  for (let i = 0, j = 0; i < rgb.data.length; i += 4, j += 1) {
    rgba[i] = rgb.data[i];
    rgba[i + 1] = rgb.data[i + 1];
    rgba[i + 2] = rgb.data[i + 2];
    rgba[i + 3] = 255 - mask.data[j];
  }

  return sharp(rgba, {
    raw: { width: markWidth, height: markHeight, channels: 4 },
  })
    .resize(targetSize, targetSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// 1. Full wordmark (navy/orange on white/transparent) — used as the default full logo.
await sharp(source)
  .resize(900, 900, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(path.join(imagesDir, 'logo-full.png'));
console.log('Created logo-full.png');

// 2. Light-surface variant: source already has dark text suitable for light backgrounds.
fs.copyFileSync(path.join(imagesDir, 'logo-full.png'), path.join(imagesDir, 'logo-full-light.png'));
console.log('Created logo-full-light.png');

// 3. Header mark: isolated B-crane icon only.
await sharp(await squareMarkBuffer(720))
  .png({ compressionLevel: 9 })
  .toFile(path.join(imagesDir, 'logo-mark.png'));
console.log('Created logo-mark.png');

// 4. PWA/JSON-LD 512x512 icon.
await sharp(await squareMarkBuffer(512))
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
await sharp(await squareMarkBuffer(192))
  .png({ compressionLevel: 9 })
  .toFile(path.join(appDir, 'icon.png'));
console.log('Created src/app/icon.png');

// 8. Apple touch icon (180x180).
await sharp(await squareMarkBuffer(180))
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
      .toBuffer(),
  ),
);
const icoBuffer = icoEndec.encode(faviconBuffers);
fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
console.log('Created src/app/favicon.ico');

console.log('Branding assets regenerated from logo-source-user.png');
