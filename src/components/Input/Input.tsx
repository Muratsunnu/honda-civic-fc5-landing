import type { InputHTMLAttributes } from 'react'
import { useId } from 'react'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

function Input({ label, error, id, className = '', ...rest }: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const errorId = `${inputId}-error`

  const classes = ['input__field', error ? 'input__field--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="input">
      <label className="input__label" htmlFor={inputId}>
        {label}
      </label>

      <input
        id={inputId}
        className={classes}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />

      {error && (
        <span id={errorId} className="input__error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
