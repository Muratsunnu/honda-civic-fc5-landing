# ADR 0003 — Deploy ve CI: GitHub Pages + GitHub Actions

- **Durum:** Kabul edildi
- **Tarih:** 2026-06-13

## Bağlam

Canlı bir demo ve CI (lint/test) zorunlu. Proje statik bir SPA olduğundan sunucu tarafı gerektirmiyor.

## Karar

- **GitHub Pages** ile deploy: Repo ile aynı yerde, ücretsiz ve ek bir üçüncü parti servis gerektirmiyor.
- **GitHub Actions** ile iki workflow:
  - `ci.yml` — her push ve pull request'te `lint` + `build` çalıştırır.
  - `deploy.yml` — `main`'e push'ta build alıp Pages'e yayınlar.
- Pages projeyi `/<repo-adı>/` alt yolundan sunduğu için Vite `base` değeri yalnızca production build'de bu alt yola ayarlandı; geliştirmede kök (`/`) korunur.

## Sonuçlar

- `main`'e her birleştirme otomatik olarak canlıya yansır.
- CI, hatalı kodun fark edilmesini birleştirme öncesine taşır.
- Alternatif olarak değerlendirilen Vercel daha az yapılandırma isterdi; ancak Pages + Actions, CI gereksinimini de aynı çatı altında karşıladığı için tercih edildi.
