import sharp from 'sharp';
import fs from 'fs';

const files = [
  'public/images/logo-full.png',
  'public/images/logo-full-light.png',
  'public/images/logo-mark.png',
  'public/images/logo-icon-512.png',
  'public/Open_Graph_metadata.png',
  'public/Open_Graph_metadata.jpg',
  'src/app/icon.png',
  'src/app/apple-icon.png',
  'src/app/favicon.ico',
];

for (const f of files) {
  try {
    const st = fs.statSync(f);
    const meta = await sharp(f).metadata();
    console.log(f, st.size, `${meta.width || '?'}x${meta.height || '?'}`);
  } catch (e) {
    console.log(f, e.message);
  }
}
