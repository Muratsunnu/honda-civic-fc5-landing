import type { HTMLAttributes, ReactNode } from 'react'
import './Card.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode // kartın içeriği — ne koyarsan o (composition)
  featured?: boolean // true ise vurgulu/öne çıkan stil (örn. popüler paket)
}

function Card({ children, featured = false, className = '', ...rest }: CardProps) {
  const classes = ['card', featured ? 'card--featured' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Card
