// GTM Custom Event: 'whatsapp_conversion' fires on form submit
// Update GTM trigger to: Custom Event → event name: whatsapp_conversion
import { useState, useEffect, useRef } from 'react'

export default function DemoPopup({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [shake, setShake] = useState(false)
  const nameRef = useRef(null)

  // Focus first field when popup opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 80)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !city.trim() || !phone.trim()) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    // GTM Push
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'whatsapp_conversion',
      event_category: 'Lead Generation',
      event_label: 'Book Demo Submission',
      user_name: name.trim(),
      user_city: city.trim(),
      user_phone: phone.trim(),
    })

    const encodedMsg = encodeURIComponent(
      `Hi Unique French, I want to book a Free Demo. My Name is ${name.trim()} from ${city.trim()}. My WhatsApp number is ${phone.trim()}. Please share batch details.`
    )

    setTimeout(() => {
      window.open(`https://wa.me/919501026457?text=${encodedMsg}`, '_blank', 'noopener,noreferrer')
    }, 300)

    // Reset & close (kept outside setTimeout as per instructions)
    setName('')
    setCity('')
    setPhone('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <style>{`
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%      { transform: translateX(-6px); }
          40%      { transform: translateX(6px); }
          60%      { transform: translateX(-4px); }
          80%      { transform: translateX(4px); }
        }
        .popup-card  { animation: popup-in 0.3s cubic-bezier(.34,1.4,.64,1) forwards; }
        .popup-shake { animation: shake 0.45s ease; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center px-4"
        style={{ zIndex: 99999, backgroundColor: 'rgba(10,14,30,0.72)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Card */}
        <div
          className={`popup-card w-full max-w-md rounded-2xl overflow-hidden ${shake ? 'popup-shake' : ''}`}
          style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.45)', background: '#fff' }}
        >
          {/* Header */}
          <div
            className="relative px-6 pt-6 pb-5 text-white"
            style={{ background: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)' }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/20"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              aria-label="Close popup"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* WhatsApp chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-xs font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
              <WaIcon size={13} />
              Connects via WhatsApp
            </div>

            <h2 id="popup-title" className="font-black text-xl leading-snug mb-1">
              Book Your Free Demo
            </h2>
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Fill in your details — we'll reach out instantly.
            </p>
          </div>

          {/* Form body */}
          <form onSubmit={handleSubmit} noValidate className="px-6 py-6 flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="demo-name" className="text-sm font-bold" style={{ color: '#1A237E' }}>
                Your Name <span style={{ color: '#D32F2F' }}>*</span>
              </label>
              <input
                id="demo-name"
                ref={nameRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aman Singh"
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
                style={{
                  border: '2px solid #E0E0E0',
                  color: '#1A237E',
                  backgroundColor: '#F8F9FF',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#1A237E')}
                onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
                autoComplete="name"
                required
              />
            </div>

            {/* City */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="demo-city" className="text-sm font-bold" style={{ color: '#1A237E' }}>
                Your City <span style={{ color: '#D32F2F' }}>*</span>
              </label>
              <input
                id="demo-city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Chandigarh"
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
                style={{
                  border: '2px solid #E0E0E0',
                  color: '#1A237E',
                  backgroundColor: '#F8F9FF',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#1A237E')}
                onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
                autoComplete="address-level2"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="demo-phone" className="text-sm font-bold" style={{ color: '#1A237E' }}>
                WhatsApp Number <span style={{ color: '#D32F2F' }}>*</span>
              </label>
              <input
                id="demo-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-all"
                style={{
                  border: '2px solid #E0E0E0',
                  color: '#1A237E',
                  backgroundColor: '#F8F9FF',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#1A237E')}
                onBlur={(e) => (e.target.style.borderColor = '#E0E0E0')}
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                required
              />
            </div>

            {/* Preview of message */}
            {(name.trim() || city.trim() || phone.trim()) && (
              <div
                className="rounded-xl px-4 py-3 text-xs font-medium leading-relaxed"
                style={{ backgroundColor: '#F1F8F4', border: '1.5px solid #C8E6C9', color: '#2E7D32' }}
              >
                <span className="font-bold">Message preview: </span>
                "Hi Unique French, I want to book a Free Demo. My Name is{' '}
                <strong>{name.trim() || '[Name]'}</strong> from{' '}
                <strong>{city.trim() || '[City]'}</strong>. My WhatsApp number is{' '}
                <strong>{phone.trim() || '[Phone]'}</strong>. Please share batch details."
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 rounded-xl font-black text-white py-4 transition-transform active:scale-95 hover:opacity-95 mt-1"
              style={{
                background: 'linear-gradient(135deg, #1DB954 0%, #25D366 100%)',
                fontSize: '1.05rem',
                boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
              }}
            >
              <WaIcon size={22} />
              Submit &amp; Message on WhatsApp
            </button>

            <p className="text-center text-xs font-medium" style={{ color: '#aaa' }}>
              Opens WhatsApp · No spam · 100% free
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

function WaIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2.933C8.832 2.933 3.2 8.566 3.2 15.733c0 2.31.614 4.477 1.685 6.347L3.2 29.067l7.227-1.653A12.71 12.71 0 0 0 16 28.533c7.168 0 12.8-5.632 12.8-12.8S23.168 2.933 16 2.933zm6.4 17.067c-.267.747-1.6 1.44-2.187 1.493-.56.054-1.093.267-3.68-.747-3.094-1.226-5.04-4.373-5.2-4.586-.16-.214-1.28-1.707-1.28-3.254 0-1.546.8-2.293 1.093-2.613.267-.32.587-.4.8-.4h.573c.187 0 .427-.053.667.507l.96 2.293c.08.187.133.4.027.613l-.374.72-.373.453c.427.72 1.44 2.08 2.8 2.774 1.36.72 2.16.88 2.48.72l.533-.587c.16-.187.4-.293.64-.187l2.133.96c.24.107.427.32.427.56v.56c0 .267-.107.773-.64 1.44z" />
    </svg>
  )
}
