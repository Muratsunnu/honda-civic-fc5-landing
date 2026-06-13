# Changelog

Bu projedeki önemli değişiklikler bu dosyada tutulur. Biçim
[Keep a Changelog](https://keepachangelog.com/) temel alınır.

## [1.0.0] - 2026-06-13

### Eklendi

- Vite + React + TypeScript temel kurulumu, SCSS desteği
- Yeniden kullanılabilir UI bileşenleri: Button, Input, Card, Accordion, Modal
- Light/Dark tema desteği (`useTheme` hook'u, CSS custom property)
- Sayfa bölümleri: Hero, Özellikler, Donanım Paketleri, SSS, İletişim
- İletişim formunda alan ve e-posta doğrulaması (yalın JS) + başarı modalı
- Mobil öncelikli responsive yerleşim (3 kırılım)
- Hero görseli için WebP optimizasyonu ve `srcset` ile responsive görsel
- ESLint + Prettier yapılandırması
- GitHub Actions ile CI (lint + build) ve GitHub Pages deploy
- README, mimari karar kayıtları (ADR) ve Lighthouse raporu
