export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '3px solid #E8EAF6' }}>
      {/* Google Ads Verification Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Logo mark */}
        <div className="flex justify-center mb-5">
          <svg width="52" height="52" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="14" cy="14" r="10" fill="#6ECFB5" />
            <circle cx="14" cy="38" r="10" fill="#6ECFB5" />
            <circle cx="38" cy="38" r="10" fill="#6ECFB5" />
            <polygon
              points="38,10 40.4,17.3 48,17.3 42,21.7 44.4,29 38,24.6 31.6,29 34,21.7 28,17.3 35.6,17.3"
              fill="#6ECFB5"
            />
            <line x1="52" y1="4" x2="52" y2="52" stroke="#1A237E" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Business Name */}
        <h2
          className="font-black mb-2"
          style={{ color: '#1A237E', fontSize: 'clamp(1.5rem, 4vw, 2rem)', letterSpacing: '-0.01em' }}
        >
          Unique French
        </h2>

        {/* Tagline */}
        <p className="font-semibold mb-6" style={{ color: '#777', fontSize: '0.95rem' }}>
          learn like never before
        </p>

        {/* Registered Address */}
        <div
          className="inline-block rounded-xl px-6 py-4 mb-7"
          style={{ backgroundColor: '#F5F6FA', border: '2px solid #E8EAF6' }}
        >
          <p className="font-bold mb-1 text-sm uppercase tracking-widest" style={{ color: '#1A237E', letterSpacing: '0.1em' }}>
            Registered Address
          </p>
          <address
            className="not-italic font-semibold leading-relaxed"
            style={{ color: '#333', fontSize: '1rem' }}
          >
            First Floor, Sunny Enclave, 2488,<br />
            Sector 125, SAS Nagar, Kharar,<br />
            Punjab – 140301
          </address>
        </div>

        {/* Phone & Hours */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:9501026457"
            className="flex items-center gap-2 rounded-lg font-black px-6 py-3 text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#D32F2F', fontSize: '1.15rem' }}
            aria-label="Call Unique French at 9501026457"
          >
            <PhoneIcon />
            9501026457
          </a>
          <div
            className="flex items-center gap-2 font-semibold"
            style={{ color: '#555', fontSize: '0.95rem' }}
          >
            <ClockIcon />
            Mon – Sat, 9 AM – 7 PM
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#E0E0E0', margin: '0 auto 20px', maxWidth: '320px' }} />

        {/* Micro footer */}
        <p className="text-xs font-medium" style={{ color: '#AAA' }}>
          © {new Date().getFullYear()} Unique French · SAS Nagar, Kharar, Punjab
        </p>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.19z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#555" strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
