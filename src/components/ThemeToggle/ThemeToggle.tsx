import { useTheme } from '../../hooks/useTheme'
import './ThemeToggle.scss'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      // Ekran okuyucuya ne yapacağını söyle (ikon tek başına yetersiz)
      aria-label={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
      // aria-pressed: bu bir aç/kapa düğmesi, şu an basılı mı
      aria-pressed={isDark}
    >
      {/* aria-hidden: ikon dekoratif, okuyucu atlamalı (anlamı aria-label'da) */}
      <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}

export default ThemeToggle
