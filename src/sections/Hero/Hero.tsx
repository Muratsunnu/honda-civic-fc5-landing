import Button from '../../components/Button/Button'
import heroImg from '../../assets/civic-hero.jpg'
import './Hero.scss'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        {/* Sol sütun: metin ve eylem butonları */}
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

        {/* Sağ sütun: araç görseli.
            Hero görseli sayfanın ilk görünen (above-the-fold) öğesi olduğu
            için lazy-load YAPMIYORUZ; aksine öncelikli yüklenmeli. */}
        <div className="hero__media">
          <img
            src={heroImg}
            alt="Sisli bir yolda duran gri Honda Civic FC5"
            className="hero__image"
            width={1500}
            height={844}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
