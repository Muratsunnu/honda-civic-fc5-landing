import type { ReactNode } from 'react'
import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

interface ModalProps {
  isOpen: boolean // modal açık mı (state'i dışarıda tutuyoruz)
  onClose: () => void // kapatma isteğinde çağrılacak fonksiyon
  title: string // modal başlığı (a11y için zorunlu)
  children: ReactNode // modal içeriği
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const titleId = useId()

  // Escape tuşunu dinle + modal açıkken arka plan kaymasını engelle
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    // Modal açıkken sayfa arkada kaymasın
    document.body.style.overflow = 'hidden'

    // Temizlik: dinleyiciyi kaldır + scroll'u geri aç
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Kapalıysa hiçbir şey render etme
  if (!isOpen) return null

  // createPortal: bu JSX'i document.body'nin sonuna ışınla
  return createPortal(
    // Overlay: koyu yarı saydam arka plan. Tıklanınca kapanır.
    <div className="modal-overlay" onClick={onClose}>
      {/* Kutunun kendisi. stopPropagation → kutuya tıklayınca
          overlay'in onClose'u tetiklenmesin (sadece dışına tıklayınca kapansın) */}
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2 id={titleId} className="modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="modal__close"
            aria-label="Kapat"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal
