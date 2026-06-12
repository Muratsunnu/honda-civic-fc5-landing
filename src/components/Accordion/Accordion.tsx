import { useId, useState } from 'react'
import './Accordion.scss'

// Her bir soru-cevap çiftinin tipi
export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[] // soru-cevap listesi dışarıdan verilir
}

function Accordion({ items }: AccordionProps) {
  // STATE: hangi panelin açık olduğunu index ile tutuyoruz.
  // null = hepsi kapalı. Başlangıçta ilk soru (0) açık olsun.
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // id'lerin benzersiz olması için ortak bir önek üretiyoruz
  const baseId = useId()

  // Tıklanan panel zaten açıksa kapat (null yap), değilse o index'i aç.
  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const headerId = `${baseId}-header-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div className="accordion__item" key={index}>
            {/* Başlık bir <h3> içinde <button> — semantik + klavye desteği */}
            <h3 className="accordion__heading">
              <button
                type="button"
                id={headerId}
                className="accordion__trigger"
                aria-expanded={isOpen} // açık/kapalı durumu
                aria-controls={panelId} // hangi paneli kontrol ediyor
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                {/* + / − işareti; açıkken döner (CSS'te) */}
                <span className="accordion__icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>

            {/* Cevap paneli. Kapalıyken hidden → hem görünmez
                hem de ekran okuyucu/klavye atlamaz (erişilemez olur). */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              <p className="accordion__answer">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
