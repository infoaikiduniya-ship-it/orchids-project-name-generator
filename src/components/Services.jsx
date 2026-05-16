const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1A237E" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 8h10M7 11h6" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'TEF Canada Coaching',
    tag: 'Most Popular',
    tagColor: '#D32F2F',
    bullets: [
      'Special batches for all levels',
      'Comprehensive exam preparation',
      'Mock tests & timed practice',
      'All 4 components: speaking, writing, reading, listening',
    ],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="#D32F2F" fillOpacity="0.15" stroke="#1A237E" strokeWidth="2"/>
        <path d="M8 9l8 3-8 3V9z" stroke="#D32F2F" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'TCF Canada Coaching',
    tag: 'Work Permit & PR',
    tagColor: '#00695C',
    bullets: [
      'Specialized TCF Canada preparation',
      'CLB 5 & CLB 7 target training',
      'Work permit extension focus',
      'All 4 components covered',
    ],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#1A237E" strokeWidth="2" />
        <path d="M12 3C12 3 9 7 9 12s3 9 3 9" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 12h18" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'French for Canada PR',
    tag: 'CLB 7 / CLB 5 Focus',
    tagColor: '#1A237E',
    bullets: [
      'Targeted CLB 7 score strategy',
      'CLB 5 preparation included',
      'Express Entry & PNP aligned',
      'Score improvement guaranteed',
    ],
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#1A237E" strokeWidth="2" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Beginner French Classes',
    tag: 'Start from Zero',
    tagColor: '#6ECFB5',
    bullets: [
      'Basic vocabulary & grammar',
      'Conversational French focus',
      'Small batch sizes',
      'Flexible timings available',
    ],
  },
]

export default function Services() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-black mb-3"
            style={{ color: '#1A237E', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.01em' }}
          >
            Our Core Programmes
          </h2>
          <p className="font-semibold" style={{ color: '#555', fontSize: '1.05rem' }}>
            Structured coaching designed around your Canada PR goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{ border: '2.5px solid #E0E0E0', boxShadow: '0 4px 24px rgba(26,35,126,0.07)' }}
            >
              {/* Card Header */}
              <div className="px-6 pt-7 pb-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  {s.icon}
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: s.tagColor, letterSpacing: '0.04em' }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="font-black"
                  style={{ color: '#1A237E', fontSize: '1.25rem', lineHeight: 1.2 }}
                >
                  {s.title}
                </h3>
              </div>

              {/* Divider */}
              <div style={{ height: '2px', background: '#F0F0F0', margin: '0 24px' }} />

              {/* Bullets */}
              <ul className="px-6 py-4 flex-1 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm font-medium" style={{ color: '#333' }}>
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="px-6 pb-6 mt-auto">
                <a
                  href="tel:9501026457"
                  className="block w-full text-center rounded-lg font-bold py-3 text-white transition-opacity hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#1A237E', fontSize: '1rem' }}
                  aria-label={`Call for details about ${s.title}`}
                >
                  Call for Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#6ECFB5" />
      <path d="M6 10.5l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
