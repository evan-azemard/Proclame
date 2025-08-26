import { promises as fs } from 'node:fs';
import path from 'node:path';

// Dossier des SVG
const iconsDir = path.resolve('./src/components/atoms/Icon/icons');

// Regex : attributs fill="#xxxxxx" (3 ou 6 hex) qu'on remplace par currentColor
const fillRegex = /fill="#([0-9a-fA-F]{3,6})"/g;

async function processFile(filePath) {
  const original = await fs.readFile(filePath, 'utf8');
  let replacements = 0;
  const updated = original.replace(fillRegex, () => {
    replacements++;
    return 'fill="currentColor"';
  });
  if (replacements > 0) {
    await fs.writeFile(filePath, updated, 'utf8');
  }
  return { filePath, changed: replacements > 0, replacements };
}

async function run() {
  const entries = await fs.readdir(iconsDir);
  const svgFiles = entries.filter(f => f.endsWith('.svg'));
  const results = await Promise.all(svgFiles.map(f => processFile(path.join(iconsDir, f))));
  const summary = results.reduce((acc, r) => {
    acc.total++;
    if (r.changed) acc.changed++;
    acc.replacements += r.replacements || 0;
    return acc;
  }, { total: 0, changed: 0, replacements: 0 });
  console.log(`SVG traités: ${summary.total}, modifiés: ${summary.changed}, remplacements: ${summary.replacements}`);
  if (summary.changed === 0) console.log('Aucun remplissage hex trouvé (déjà normalisés ou SVG vides).');
}

run().catch(e => { console.error(e); process.exit(1); });
