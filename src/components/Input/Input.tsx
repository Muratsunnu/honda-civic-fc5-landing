import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import './Input.scss'

// Native <input>'un tüm özelliklerini (value, onChange, type, placeholder...)
// miras alıyoruz, üstüne kendi label ve error props'umuzu ekliyoruz.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string // etiket metni (zorunlu — her input'un etiketi olmalı, a11y)
  error?: string // hata mesajı (opsiyonel, validation'da dolacak)
}

function Input({ label, error, id, className = '', ...rest }: InputProps) {
  // useId(): React'in ürettiği benzersiz kimlik.
  // Aynı input bileşeni sayfada 5 kez kullanılsa bile her birinin
  // id'si farklı olur → label/input eşleşmesi karışmaz.
  // Dışarıdan id verilmişse onu kullan, yoksa otomatik üret.
  const autoId = useId()
  const inputId = id ?? autoId
  const errorId = `${inputId}-error`

  const classes = ['input__field', error ? 'input__field--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="input">
      {/* htmlFor = inputId → label'a tıklayınca input odaklanır */}
      <label className="input__label" htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        className={classes}
        // Hata varsa ekran okuyucuya bildir:
        aria-invalid={error ? true : undefined}
        // Hata mesajının id'sini bağla → okuyucu mesajı okur
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />

      {/* Hata mesajı sadece error varsa görünür.
          role="alert" → ekran okuyucu mesajı anında seslendirir. */}
      {error && (
        <span id={errorId} className="input__error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
