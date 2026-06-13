import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Hero from './sections/Hero/Hero'

function App() {
  return (
    <>
      {/* Sayfa başlığı (header) — logo + tema değiştirici */}
      <header className="site-header">
        <div className="site-header__inner">
          <span className="site-header__logo">CIVIC · FC5</span>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
