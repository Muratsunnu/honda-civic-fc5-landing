import { useId, useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import './Contact.scss'

interface FormValues {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const EMPTY_FORM: FormValues = { name: '', email: '', message: '' }

function isValidEmail(email: string): boolean {
  return /^\S+@\S+\.\S+$/.test(email)
}

function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const messageId = useId()
  const messageErrorId = `${messageId}-error`

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!values.name.trim()) {
      next.name = 'Lütfen adınızı girin.'
    }
    if (!values.email.trim()) {
      next.email = 'Lütfen e-posta adresinizi girin.'
    } else if (!isValidEmail(values.email)) {
      next.email = 'Geçerli bir e-posta adresi girin.'
    }
    if (!values.message.trim()) {
      next.message = 'Lütfen mesajınızı yazın.'
    }
    return next
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setIsModalOpen(true)
      setValues(EMPTY_FORM)
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <header className="contact__head">
          <h2 id="contact-title" className="contact__title">
            Test Sürüşü & İletişim
          </h2>
          <p className="contact__subtitle">
            Formu doldurun, en kısa sürede sizinle iletişime geçelim.
          </p>
        </header>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Ad Soyad"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Adınız ve soyadınız"
          />

          <Input
            label="E-posta"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="ornek@mail.com"
          />

          <div className="contact__field">
            <label className="contact__label" htmlFor={messageId}>
              Mesajınız
            </label>
            <textarea
              id={messageId}
              name="message"
              className={`contact__textarea${errors.message ? ' contact__textarea--error' : ''}`}
              value={values.message}
              onChange={handleChange}
              rows={4}
              placeholder="Hangi paketle ilgileniyorsunuz?"
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? messageErrorId : undefined}
            />
            {errors.message && (
              <span id={messageErrorId} className="contact__error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg">
            Gönder
          </Button>
        </form>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Talebiniz Alındı ✓"
      >
        <p>
          Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime
          geçeceğiz. Teşekkürler!
        </p>
      </Modal>
    </section>
  )
}

export default Contact
