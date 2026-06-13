import Button from '../../components/Button/Button'
import heroSmall from '../../assets/civic-hero-640.webp'
import heroLarge from '../../assets/civic-hero-1280.webp'
import './Hero.scss'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Honda Civic FC5</p>
          <h1 className="hero__title">
            Yolların sportif <span className="hero__accent">karakteri</span>
          </h1>
          <p className="hero__subtitle">
            1.6 litre i-VTEC motoru, otomatik vitesi ve ekonomik benzin & LPG
            kullanımıyla FC5; şehir içinde konforu ve verimi bir araya getirir.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">
              Test Sürüşü Al
            </Button>
            <Button variant="outline" size="lg">
              Özellikleri Keşfet
            </Button>
          </div>
        </div>

        <div className="hero__media">
          <img
            src={heroLarge}
            srcSet={`${heroSmall} 640w, ${heroLarge} 1280w`}
            sizes="(min-width: 1025px) 600px, 100vw"
            alt="Sisli bir yolda duran gri Honda Civic FC5"
            className="hero__image"
            width={1280}
            height={720}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
