import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalSavedBytes = 0;
  let processedCount = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const { savedBytes, count } = await processDirectory(fullPath);
      totalSavedBytes += savedBytes;
      processedCount += count;
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const stats = fs.statSync(fullPath);
        // Only process files larger than 80 KB
        if (stats.size > 80 * 1024) {
          const originalSize = stats.size;
          try {
            const tempPath = fullPath + '.tmp';
            let pipeline = sharp(fullPath);
            const metadata = await pipeline.metadata();

            // Resize overly large dimensions (e.g. > 1600px width/height for inline photos/logos)
            if (metadata.width && metadata.width > 1600) {
              pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
            }

            if (ext === '.png') {
              await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
            } else if (ext === '.jpg' || ext === '.jpeg') {
              await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
            } else if (ext === '.webp') {
              await pipeline.webp({ quality: 80 }).toFile(tempPath);
            }

            const newStats = fs.statSync(tempPath);
            if (newStats.size < originalSize) {
              fs.renameSync(tempPath, fullPath);
              const saved = originalSize - newStats.size;
              totalSavedBytes += saved;
              processedCount++;
              console.log(`Optimized: ${entry.name} (${(originalSize / 1024).toFixed(1)} KB -> ${(newStats.size / 1024).toFixed(1)} KB)`);
            } else {
              fs.unlinkSync(tempPath);
            }
          } catch (err) {
            console.error(`Error processing ${entry.name}:`, err.message);
          }
        }
      }
    }
  }

  return { savedBytes: totalSavedBytes, count: processedCount };
}

console.log('Starting image optimization across public/ ...');
const startTime = Date.now();
processDirectory(path.join(process.cwd(), 'public')).then(({ savedBytes, count }) => {
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log(`\nImage optimization complete!`);
  console.log(`Processed ${count} files.`);
  console.log(`Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB in ${elapsed}s`);
});
