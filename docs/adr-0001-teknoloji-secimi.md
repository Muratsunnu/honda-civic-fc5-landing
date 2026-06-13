# ADR 0001 — Teknoloji Seçimi: Vite + React + TypeScript

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-13

## Bağlam

Challenge; Vite tabanında Vanilla TS, React veya Angular seçeneklerinden birini serbest bırakıyor. Tek sayfalık, birkaç etkileşimli bileşen (modal, accordion, form) içeren bir landing page geliştirilecek.

## Karar

**Vite + React + TypeScript** kullanıldı.

- **React:** Bileşen tabanlı yapı, challenge'ın istediği "yeniden kullanılabilir UI bileşenleri" gereksinimiyle doğrudan örtüşüyor. State ve etkileşim (accordion, modal, form) deklaratif şekilde yönetiliyor.
- **TypeScript:** Props'ların tipini sözleşme olarak tanımlamak, yanlış kullanımları derleme aşamasında yakalıyor.
- **Vite:** Hızlı geliştirme sunucusu, sade yapılandırma ve yerleşik SCSS desteği.

## Sonuçlar

- Bileşenler net props arayüzleriyle yapılandırılabilir hale geldi.
- Angular'a göre daha düşük giriş maliyeti, Vanilla TS'e göre daha az tekrar.
- React çalışma zamanı (~60 KB gzip) eklenir; bu boyut, görsel optimizasyonu sayesinde performans hedefini etkilemedi.
