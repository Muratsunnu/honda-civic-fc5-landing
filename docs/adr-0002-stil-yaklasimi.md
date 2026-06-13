# ADR 0002 — Stil Yaklaşımı: SCSS + BEM, Harici UI Kütüphanesi Yok

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-13

## Bağlam

Challenge SCSS kullanımını zorunlu kılıyor ve harici UI kütüphanelerini yasaklıyor. Tema (light/dark) ve üç kırılımlı responsive davranış gerekiyor.

## Karar

- **SCSS + BEM:** Her bileşen kendi `.scss` dosyasıyla gelir; sınıflar BEM (`block__element--modifier`) biçiminde adlandırılır. Bu, global çakışmaları önler ve sınıf adlarını öngörülebilir kılar.
- **CSS custom property ile tema:** Renkler `:root` ve `[data-theme="dark"]` altında değişken olarak tanımlanır. Tema değişimi tek bir `data-theme` özniteliğiyle yapılır; tüm bileşenler aynı değişkenleri kullandığından otomatik uyum sağlar.
- **Mixin tabanlı kırılımlar:** `tablet` ve `desktop` mixin'leri breakpoint değerlerini tek noktada tutar.

## Sonuçlar

- Bileşenler tema bilmeden çalışır; sadece `var(--color-*)` kullanır.
- Tasarım belirteçlerini (renk, boşluk) değiştirmek tek dosyadan yapılır.
- Hazır bir kütüphane olmadığından her bileşenin erişilebilirliği elle ve bilinçli kuruldu.
