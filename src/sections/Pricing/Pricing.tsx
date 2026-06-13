import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import './Pricing.scss'

// Donanım paketleri verisi (gerçek FC5 trim sıralaması).
// featured: true olan kart öne çıkar.
const plans = [
  {
    name: 'Elegance',
    tagline: 'Sade ve dengeli başlangıç',
    features: [
      '1.6L i-VTEC motor',
      'Manuel klima',
      '16" jant',
      'Bluetooth ses sistemi',
    ],
    featured: false,
  },
  {
    name: 'Eco Elegance',
    tagline: 'En çok tercih edilen denge',
    features: [
      'Otomatik vites',
      'Benzin & LPG sistemi',
      'Çoklu dokunmatik ekran',
      'Geri görüş kamerası',
    ],
    featured: true,
  },
  {
    name: 'Executive',
    tagline: 'Konfor odaklı üst donanım',
    features: [
      'Deri döşeme',
      'Sunroof',
      'LED farlar',
      '17" alaşım jant',
    ],
    featured: false,
  },
  {
    name: 'Eco Executive',
    tagline: 'Tam donanım, eksiksiz konfor',
    features: [
      'Tüm Executive donanımı',
      'Honda Sensing güvenlik',
      'Isıtmalı ön koltuklar',
      'Akıllı anahtar',
    ],
    featured: false,
  },
]

function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing__inner">
        <header className="pricing__head">
          <h2 id="pricing-title" className="pricing__title">
            Donanım Paketleri
          </h2>
          <p className="pricing__subtitle">
            İhtiyacınıza uygun donanım seviyesini seçin, gerisini biz halledelim.
          </p>
        </header>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <Card key={plan.name} featured={plan.featured} className="pricing__card">
              {plan.featured && (
                <span className="pricing__badge">Popüler</span>
              )}

              <h3 className="pricing__plan-name">{plan.name}</h3>
              <p className="pricing__plan-tagline">{plan.tagline}</p>

              <ul className="pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <span className="pricing__check" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'primary' : 'outline'}
                className="pricing__cta"
              >
                Fiyat için iletişim
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
