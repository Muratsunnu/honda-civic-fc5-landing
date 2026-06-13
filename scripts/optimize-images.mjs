// Kaynak görselleri farklı genişliklerde sıkıştırılmış WebP'ye dönüştürür.
// Kullanım: npm run optimize:images

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '..', 'src', 'assets')

const images = [{ src: 'civic-hero.jpg', base: 'civic-hero', widths: [640, 1280] }]

for (const image of images) {
  const input = path.join(assetsDir, image.src)
  const meta = await sharp(input).metadata()
  console.log(`Kaynak ${image.src}: ${meta.width}x${meta.height}`)

  for (const width of image.widths) {
    const output = path.join(assetsDir, `${image.base}-${width}.webp`)
    const info = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(output)
    const kb = Math.round(info.size / 1024)
    console.log(`  -> ${image.base}-${width}.webp (${info.width}x${info.height}, ${kb} KB)`)
  }
}

console.log('Görsel optimizasyonu tamamlandı.')
