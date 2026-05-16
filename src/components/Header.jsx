export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" aria-label="Unique French Home">
          <div className="flex items-center gap-3">
            {/* SVG Logo replication from provided logo */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Four circles + star arrangement */}
              <circle cx="14" cy="14" r="10" fill="#6ECFB5" />
              <circle cx="14" cy="38" r="10" fill="#6ECFB5" />
              <circle cx="38" cy="38" r="10" fill="#6ECFB5" />
              {/* Star in top-right circle position */}
              <polygon
                points="38,10 40.4,17.3 48,17.3 42,21.7 44.4,29 38,24.6 31.6,29 34,21.7 28,17.3 35.6,17.3"
                fill="#6ECFB5"
              />
              {/* Vertical divider */}
              <line x1="52" y1="4" x2="52" y2="52" stroke="#1A237E" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <div className="text-2xl font-black tracking-tight" style={{ color: '#1A237E', lineHeight: 1.1 }}>
                unique
              </div>
              <div className="text-2xl font-black tracking-tight" style={{ color: '#1A237E', lineHeight: 1.1 }}>
                french
              </div>
              <div className="text-xs font-medium tracking-wide" style={{ color: '#1A237E', opacity: 0.6 }}>
                learn like never before
              </div>
            </div>
          </div>
        </a>

        {/* Call Now Button */}
        <a
          href="tel:9501026457"
          className="flex items-center gap-2 rounded-lg font-black text-white px-5 py-3 text-base md:text-lg transition-transform active:scale-95 hover:opacity-90"
          style={{ backgroundColor: '#D32F2F', letterSpacing: '0.01em' }}
          aria-label="Call Unique French now at 9501026457"
        >
          <PhoneIcon />
          <span className="hidden sm:inline">Call Now: </span>
          <span>9501026457</span>
        </a>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.19z" />
    </svg>
  )
}
