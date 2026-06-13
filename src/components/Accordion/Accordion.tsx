import { useId, useState } from 'react'
import './Accordion.scss'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

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
            <h3 className="accordion__heading">
              <button
                type="button"
                id={headerId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="accordion__icon" aria-hidden="true">
                  +
                </span>
              </button>
            </h3>

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
