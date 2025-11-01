const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = './public';
const OUTPUT_DIR = './public/optimized';
const QUALITY = 80; // 0-100, higher is better quality but larger file

// Image size configurations
const SIZES = {
  hero: { width: 1920, height: 1080 },
  section: { width: 1600, height: 900 },
  gallery: { width: 1200, height: 800 },
  thumbnail: { width: 600, height: 400 },
  mobile: { width: 800, height: 600 }
};

async function getAllImages(dir) {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory() && item.name !== 'optimized' && item.name !== 'node_modules') {
      files.push(...await getAllImages(fullPath));
    } else if (item.isFile() && /\.(jpg|jpeg|png)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(inputPath) {
  try {
    // Get relative path from public folder
    const relativePath = path.relative(INPUT_DIR, inputPath);
    const parsedPath = path.parse(relativePath);

    // Create output directory structure
    const outputSubDir = path.join(OUTPUT_DIR, parsedPath.dir);
    await fs.mkdir(outputSubDir, { recursive: true });

    const baseName = parsedPath.name;
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;

    console.log(`\n📸 Processing: ${relativePath}`);
    console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

    // Get image metadata
    const metadata = await sharp(inputPath).metadata();

    // Determine which size to use based on original dimensions
    let targetSize;
    if (metadata.width >= 1800) {
      targetSize = SIZES.hero;
    } else if (metadata.width >= 1400) {
      targetSize = SIZES.section;
    } else if (metadata.width >= 1000) {
      targetSize = SIZES.gallery;
    } else if (metadata.width >= 500) {
      targetSize = SIZES.thumbnail;
    } else {
      targetSize = SIZES.mobile;
    }

    // Optimize and convert to WebP
    const webpOutput = path.join(outputSubDir, `${baseName}.webp`);
    await sharp(inputPath)
      .resize(targetSize.width, targetSize.height, {
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(webpOutput);

    // Also create an optimized JPG as fallback
    const jpgOutput = path.join(outputSubDir, `${baseName}.jpg`);
    await sharp(inputPath)
      .resize(targetSize.width, targetSize.height, {
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(jpgOutput);

    // Get optimized sizes
    const webpStats = await fs.stat(webpOutput);
    const jpgStats = await fs.stat(jpgOutput);

    console.log(`   ✅ WebP: ${(webpStats.size / 1024).toFixed(2)} KB (${((1 - webpStats.size / originalSize) * 100).toFixed(1)}% smaller)`);
    console.log(`   ✅ JPG:  ${(jpgStats.size / 1024).toFixed(2)} KB (${((1 - jpgStats.size / originalSize) * 100).toFixed(1)}% smaller)`);

    return {
      original: originalSize,
      webp: webpStats.size,
      jpg: jpgStats.size
    };
  } catch (error) {
    console.error(`   ❌ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('=====================================');

  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Get all images
  const images = await getAllImages(INPUT_DIR);
  console.log(`\nFound ${images.length} images to optimize\n`);

  // Process all images
  let totalOriginal = 0;
  let totalWebp = 0;
  let totalJpg = 0;
  let processed = 0;

  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    if (result) {
      totalOriginal += result.original;
      totalWebp += result.webp;
      totalJpg += result.jpg;
      processed++;
    }
  }

  // Print summary
  console.log('\n\n=====================================');
  console.log('✨ OPTIMIZATION COMPLETE!\n');
  console.log(`📊 Summary:`);
  console.log(`   Images processed: ${processed}/${images.length}`);
  console.log(`   Original total size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   WebP total size: ${(totalWebp / 1024 / 1024).toFixed(2)} MB (${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log(`   JPG total size: ${(totalJpg / 1024 / 1024).toFixed(2)} MB (${((1 - totalJpg / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log('\n📁 Optimized images saved to: ./public/optimized/');
  console.log('\n💡 Next steps:');
  console.log('   1. Review the optimized images');
  console.log('   2. Update your components to use OptimizedImage');
  console.log('   3. Replace old image paths with optimized versions');
  console.log('   4. Test on different devices and connections');
  console.log('=====================================\n');
}

main().catch(console.error);
