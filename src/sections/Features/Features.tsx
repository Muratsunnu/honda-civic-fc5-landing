import Card from '../../components/Card/Card'
import './Features.scss'

// Özellik verisi: görünümden ayrı tutuyoruz.
// İçerik değişince sadece bu diziyi düzenlemek yeterli.
const features = [
  {
    icon: '⚡',
    title: '1.6L i-VTEC',
    text: '1597 cc atmosferik motordan 125 beygir güç; günlük sürüşte dengeli ve yeterli performans.',
  },
  {
    icon: '⛽',
    title: 'Benzin & LPG',
    text: 'Çift yakıt sistemiyle düşük kilometre maliyeti ve uzun menzil avantajı.',
  },
  {
    icon: '⚙️',
    title: 'Otomatik Vites',
    text: 'Şehir trafiğinde yormayan, akıcı ve konforlu otomatik şanzıman.',
  },
  {
    icon: '📦',
    title: '519L Bagaj',
    text: 'Sınıfının en geniş bagajlarından biri; sedan gövdeyle bol iç hacim.',
  },
]

function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="features__inner">
        <header className="features__head">
          <h2 id="features-title" className="features__title">
            Öne Çıkan Özellikler
          </h2>
          <p className="features__subtitle">
            FC5'i günlük kullanımda keyifli kılan başlıca detaylar.
          </p>
        </header>

        <div className="features__grid">
          {features.map((feature) => (
            <Card key={feature.title} className="features__card">
              <span className="features__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-text">{feature.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
