import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

// Başlangıç temasını belirle:
// 1) Daha önce kaydedilmiş bir tercih varsa onu kullan
// 2) Yoksa işletim sisteminin tercihine (prefers-color-scheme) bak
function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

// Custom hook: tema state'ini yönetir, HTML'e uygular ve kaydeder.
export function useTheme() {
  // useState'e fonksiyon vermek ("lazy init"): getInitialTheme yalnızca
  // ilk render'da bir kez çalışır, her render'da değil. Performans için.
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // theme her değiştiğinde: HTML etiketine işle + localStorage'a kaydet
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  // light <-> dark arasında geçiş
  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}
