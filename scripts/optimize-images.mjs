// Görsel optimizasyon script'i.
// Kaynak (yüksek çözünürlüklü) görselleri alıp, farklı genişliklerde
// sıkıştırılmış WebP sürümleri üretir. Çalıştırmak için: npm run optimize:images
//
// Not: Kaynak .jpg dosyaları koda import EDİLMEDİĞİ için Vite tarafından
// pakete dahil edilmez; yalnızca burada üretilen .webp'leri import ederiz.

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '..', 'src', 'assets')

// İşlenecek görseller ve üretilecek genişlikler
const images = [{ src: 'civic-hero.jpg', base: 'civic-hero', widths: [640, 1280] }]

for (const image of images) {
  const input = path.join(assetsDir, image.src)
  const meta = await sharp(input).metadata()
  console.log(`Kaynak ${image.src}: ${meta.width}x${meta.height}`)

  for (const width of image.widths) {
    const output = path.join(assetsDir, `${image.base}-${width}.webp`)
    const info = await sharp(input)
      .resize({ width, withoutEnlargement: true }) // büyütme yapma
      .webp({ quality: 72 })
      .toFile(output)
    const kb = Math.round(info.size / 1024)
    console.log(`  -> ${image.base}-${width}.webp (${info.width}x${info.height}, ${kb} KB)`)
  }
}

console.log('Görsel optimizasyonu tamamlandı.')
