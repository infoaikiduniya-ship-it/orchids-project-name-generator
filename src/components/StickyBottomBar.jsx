export default function StickyBottomBar({ onOpenDemo }) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 md:hidden"
      style={{ zIndex: 9999 }}
      role="navigation"
      aria-label="Quick contact bar"
    >
      {/* Thin accent line on top */}
      <div style={{ height: 3, background: 'linear-gradient(90deg, #1A237E 0%, #6ECFB5 50%, #D32F2F 100%)' }} />

      <div
        className="flex"
        style={{ backgroundColor: '#0F172A' }}
      >
        {/* ── Call Now ── */}
        <a
          href="tel:+919501026457"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 font-black text-white active:opacity-80 transition-opacity"
          style={{
            background: 'linear-gradient(135deg, #1565C0 0%, #1A237E 100%)',
            borderRight: '1px solid rgba(255,255,255,0.12)',
          }}
          aria-label="Call Unique French now"
        >
          <PhoneIcon />
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.04em' }}>CALL NOW</span>
        </a>

        {/* ── Book Free Demo ── */}
        <button
          onClick={onOpenDemo}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 font-black text-white active:opacity-80 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #C62828 0%, #D32F2F 100%)' }}
          aria-label="Book a free demo"
        >
          <CalendarIcon />
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.04em' }}>BOOK FREE DEMO</span>
        </button>
      </div>

      {/* Safe-area spacer for iOS home indicator */}
      <div style={{ backgroundColor: '#0F172A', height: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.19z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
