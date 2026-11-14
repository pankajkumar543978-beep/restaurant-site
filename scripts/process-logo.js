const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/hp/.gemini/antigravity/brain/7555a2cd-1c71-46a2-a170-3e832979ba6b/.user_uploaded/media_1794685195679_c3508003.png';

async function processLogo() {
  const cx = 285;
  const cy = 245;
  const radius = 208;
  const size = radius * 2; // 416x416
  const left = cx - radius; // 77
  const top = cy - radius; // 37

  // First extract the 416x416 square centered on circle
  const extracted = await sharp(srcPath)
    .extract({ left, top, width: size, height: size })
    .toBuffer();

  // Create circular SVG mask with anti-aliasing right on the outer boundary
  const circleMask = Buffer.from(
    '<svg width="' + size + '" height="' + size + '"><circle cx="' + radius + '" cy="' + radius + '" r="' + (radius - 0.5) + '" fill="white" /></svg>'
  );

  // Apply mask: inside is badge, outside is transparent!
  const circularBadge = await sharp(extracted)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Resize to standard sizes:
  // 1. High-res logo 512x512
  await sharp(circularBadge)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile('public/images/johns-logo.png');
  console.log('Created public/images/johns-logo.png');

  // Also copy original intact
  fs.copyFileSync(srcPath, 'public/images/johns-logo-original.png');
  console.log('Copied original to public/images/johns-logo-original.png');

  // 2. Favicon sizes
  // 48x48 for src/app/icon.png
  await sharp(circularBadge)
    .resize(48, 48)
    .toFile('src/app/icon.png');
  console.log('Created src/app/icon.png (48x48)');

  // 180x180 for src/app/apple-icon.png
  await sharp(circularBadge)
    .resize(180, 180)
    .toFile('src/app/apple-icon.png');
  console.log('Created src/app/apple-icon.png (180x180)');

  // Also put favicon in public/
  await sharp(circularBadge)
    .resize(32, 32)
    .toFile('public/favicon.ico');
  console.log('Created public/favicon.ico (32x32)');

  await sharp(circularBadge)
    .resize(180, 180)
    .toFile('public/apple-touch-icon.png');
  console.log('Created public/apple-touch-icon.png');
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
