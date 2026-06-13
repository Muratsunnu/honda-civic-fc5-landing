import type { HTMLAttributes, ReactNode } from 'react'
import './Card.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  featured?: boolean
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
