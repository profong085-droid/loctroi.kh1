import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputPath = path.join(process.cwd(), "public/photo/banner 3.jpg");
const outputPath = path.join(process.cwd(), "public/photo/banner-new.jpg");

console.log("កំពុងចាប់ផ្តើមបង្រួមទំហំរូបភាព... សូមរង់ចាំបន្តិច!");

try {
  if (fs.existsSync(inputPath)) {
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true }) // Resize to max 1920px width
      .jpeg({ quality: 80, progressive: true }) // Compress quality
      .toFile(outputPath);
      
    const oldSize = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
    const newSize = (fs.statSync(outputPath).size / (1024 * 1024)).toFixed(2);
    
    console.log(`✅ ជោគជ័យ!`);
    console.log(`📉 ទំហំចាស់: ${oldSize} MB`);
    console.log(`✨ ទំហំថ្មី: ${newSize} MB`);
    
    // Replace old with new
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    
    console.log("រូបភាពត្រូវបានផ្លាស់ប្តូរដោយស្វ័យប្រវត្តិ។ អ្នកអាចលុបឯកសារ optimize.mjs នេះចោលបានឥឡូវនេះ។");
  } else {
    console.log("រកមិនឃើញឯកសារ 'banner 3.jpg' ទេ! សូមពិនិត្យមើលឈ្មោះ និងទីតាំងរបស់វាឡើងវិញ។");
  }
} catch (error) {
  console.error("មានបញ្ហាក្នុងការបង្រួមរូបភាព:", error.message);
}
