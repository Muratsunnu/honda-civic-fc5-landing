import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.scss'

// Button'ın alabileceği görsel stiller ve boyutlar.
// Bunları "type" olarak ayırınca hem okunabilir olur hem de
// yanlış bir değer (örn. variant="mavi") yazınca TypeScript uyarır.
type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

// Props arayüzü: Button'a dışarıdan verilebilecek tüm ayarlar.
// ButtonHTMLAttributes'tan miras alıyoruz → onClick, disabled, type
// gibi standart <button> özellikleri otomatik gelir, tekrar yazmayız.
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant // ? = opsiyonel, verilmezse varsayılan kullanılır
  size?: ButtonSize
  children: ReactNode // butonun içindeki yazı/ikon (zorunlu)
}

function Button({
  variant = 'primary', // varsayılan değerler
  size = 'md',
  children,
  className = '',
  ...rest // geri kalan tüm props (onClick, disabled, type...) buraya toplanır
}: ButtonProps) {
  // BEM mantığıyla CSS class'larını birleştiriyoruz:
  //   btn  btn--primary  btn--md
  const classes = ['btn', `btn--${variant}`, `btn--${size}`, className]
    .filter(Boolean) // boş string varsa (className verilmemişse) çıkar
    .join(' ')

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
