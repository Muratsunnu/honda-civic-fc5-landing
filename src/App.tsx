import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Hero from './sections/Hero/Hero'
import Features from './sections/Features/Features'
import Pricing from './sections/Pricing/Pricing'
import FAQ from './sections/FAQ/FAQ'

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
        <Features />
        <Pricing />
        <FAQ />
      </main>
    </>
  )
}

export default App
