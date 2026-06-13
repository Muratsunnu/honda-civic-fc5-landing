import Accordion from '../../components/Accordion/Accordion'
import type { AccordionItem } from '../../components/Accordion/Accordion'
import './FAQ.scss'

const faqItems: AccordionItem[] = [
  {
    question: 'i-VTEC sistemi ne işe yarar?',
    answer:
      "1.6 litrelik i-VTEC motor, subap zamanlamasını devire göre ayarlayarak hem düşük devirde verim hem de yüksek devirde daha iyi performans sunar. Böylece 125 beygir güç dengeli biçimde kullanılabilir.",
  },
  {
    question: 'Yakıt tüketimi nasıl, LPG avantajı nedir?',
    answer:
      'Benzinle ortalama 6-7 litre/100km değerlerine ulaşılabilir. Fabrika çıkışı benzin & LPG sistemi sayesinde, LPG kullanımıyla kilometre maliyeti belirgin şekilde düşer; bu da şehir içi yoğun kullanımda büyük tasarruf sağlar.',
  },
  {
    question: 'Bagaj hacmi günlük kullanım için yeterli mi?',
    answer:
      'Sedan gövde tipinde 519 litrelik bagaj, sınıfının en geniş hacimlerinden biridir. Aile kullanımı, alışveriş veya seyahat valizleri için fazlasıyla yeterlidir.',
  },
  {
    question: 'Otomatik vites şehir içinde konforlu mu?',
    answer:
      'Otomatik şanzıman, özellikle dur-kalk trafiğinde sürücüyü yormayan akıcı bir sürüş sağlar. Önden çekiş ile birlikte şehir içinde kolay ve dengeli bir kullanım sunar.',
  },
  {
    question: 'LPG sistemli kullanım güvenli midir?',
    answer:
      'Periyodik bakımları yapılmış, sızdırmazlık kontrolleri düzenli yapılan bir LPG sistemi güvenle kullanılır. Tüpün muayene tarihine ve enjeksiyon ayarlarına dikkat etmek yeterlidir.',
  },
]

function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner">
        <header className="faq__head">
          <h2 id="faq-title" className="faq__title">
            Sıkça Sorulan Sorular
          </h2>
          <p className="faq__subtitle">
            FC5 hakkında en çok merak edilenleri sizin için yanıtladık.
          </p>
        </header>

        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

export default FAQ
