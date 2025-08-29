#!/usr/bin/env node
import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

async function run() {
  const [,, input, outDir = 'public/converted'] = process.argv;
  if (!input) {
    console.error('Usage: node scripts/svg-to-png.mjs <path/to/icon.svg> [outputDir]');
    process.exit(1);
  }
  const abs = path.resolve(process.cwd(), input);
  const svg = await fs.readFile(abs);
  const baseName = path.basename(abs, path.extname(abs));
  const targetDir = path.resolve(process.cwd(), outDir);
  await fs.mkdir(targetDir, { recursive: true });

  const sizes = [32, 64, 128, 256, 512];
  for (const size of sizes) {
    const pngPath = path.join(targetDir, `${baseName}-${size}.png`);
    await sharp(svg).resize(size, size, { fit: 'contain' }).png({ compressionLevel: 9 }).toFile(pngPath);
    console.log('Generated', pngPath);
  }
  console.log('OK');
}
run().catch(e => { console.error(e); process.exit(1); });
