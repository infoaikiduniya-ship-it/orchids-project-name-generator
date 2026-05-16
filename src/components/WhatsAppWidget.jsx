import { useEffect, useState } from 'react'

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false)

  // Fade in after 1.5 s so it doesn't compete with first-load attention
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  const waLink =
    'https://wa.me/919501026457?text=Hi%2C%20I%20want%20details%20about%20TEF%20%26%20TCF%20Canada%20French%20coaching%20classes.'

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.65); }
          60%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes wa-fadein {
          from { opacity: 0; transform: scale(0.7) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .wa-btn {
          animation: wa-pulse 2.2s ease-out infinite,
                     wa-fadein 0.45s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        .wa-btn:hover {
          animation: wa-fadein 0s forwards; /* stop pulse on hover for clean feel */
          transform: scale(1.1) !important;
          transition: transform 0.18s ease;
        }
      `}</style>

      {visible && (
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn fixed flex items-center justify-center rounded-full shadow-2xl"
          style={{
            width: 58,
            height: 58,
            backgroundColor: '#25D366',
            /* sits above sticky bar on mobile (z 9998), right corner */
            bottom: 'calc(env(safe-area-inset-bottom, 0px) + 74px)',
            right: 18,
            zIndex: 9998,
          }}
          aria-label="Chat on WhatsApp about TEF Canada classes"
        >
          <WhatsAppIcon />
          {/* Tooltip — desktop only */}
          <span
            className="hidden md:block absolute right-full mr-3 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold pointer-events-none"
            style={{
              backgroundColor: '#075E54',
              color: '#fff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Chat on WhatsApp
          </span>
        </a>
      )}
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2.933C8.832 2.933 3.2 8.566 3.2 15.733c0 2.31.614 4.477 1.685 6.347L3.2 29.067l7.227-1.653A12.71 12.71 0 0 0 16 28.533c7.168 0 12.8-5.632 12.8-12.8S23.168 2.933 16 2.933zm6.4 17.067c-.267.747-1.6 1.44-2.187 1.493-.56.054-1.093.267-3.68-.747-3.094-1.226-5.04-4.373-5.2-4.586-.16-.214-1.28-1.707-1.28-3.254 0-1.546.8-2.293 1.093-2.613.267-.32.587-.4.8-.4h.573c.187 0 .427-.053.667.507l.96 2.293c.08.187.133.4.027.613l-.374.72-.373.453c.427.72 1.44 2.08 2.8 2.774 1.36.72 2.16.88 2.48.72l.533-.587c.16-.187.4-.293.64-.187l2.133.96c.24.107.427.32.427.56v.56c0 .267-.107.773-.64 1.44z" />
    </svg>
  )
}
