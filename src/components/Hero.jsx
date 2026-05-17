import { Suspense, useState, useEffect } from 'react'

export default function Hero({ onOpenDemo }) {
  const slides = [
    { src: '/gallery/batch3.webp', label: 'Online Batch — Live Classes' },
    { src: '/gallery/batch2.webp', label: 'SAS Nagar Batch · Kharar' },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#0F1C3F]">
        <div className="text-white text-xl animate-pulse">
          Loading...
        </div>
      </div>
    }>
      <>
        {/* ── HERO ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1A237E 0%, #283593 60%, #1A237E 100%)', minHeight: '100vh', contain: 'layout' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, rgba(211,47,47,0.18) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

              {/* ── Left: Text ── */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-block mb-5">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border-2"
                    style={{ color: '#6ECFB5', borderColor: '#6ECFB5', letterSpacing: '0.15em' }}
                  >
                    SAS Nagar · Kharar · Punjab
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-white font-black leading-tight mb-4"
                  style={{
                    fontSize: 'clamp(1.75rem, 5vw, 3rem)',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 16px rgba(0,0,0,0.25)',
                  }}
                >
                  Achieve <span style={{ color: '#FFD54F' }}>CLB 7</span> in<br />
                  First Attempt.{' '}
                  <span style={{ color: '#6ECFB5' }}>Specialized TEF & TCF Canada<br className="hidden sm:block" /> French Coaching</span> for Students.
                </h1>

                {/* Sub-headline */}
                <p
                  className="text-white font-semibold mb-7"
                  style={{ fontSize: 'clamp(0.95rem, 2.4vw, 1.15rem)', opacity: 0.9, lineHeight: 1.65, maxWidth: 500 }}
                >
                  Online batches starting soon. Speak directly to our expert trainers today.
                </p>

                {/* Trust badges */}
                <ul className="flex flex-col gap-2 mb-8 text-left">
                  {[
                    '100% Focus on Canada PR',
                    'Flexible Online Classes',
                    'Proven Results in Punjab',
                  ].map((badge) => (
                    <li key={badge} className="flex items-center gap-2">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black"
                        style={{ backgroundColor: '#6ECFB5', color: '#1A237E' }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className="text-white font-semibold" style={{ fontSize: '0.98rem' }}>
                        {badge}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Group */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={onOpenDemo}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl font-black text-white px-8 py-5 transition-transform active:scale-95 hover:scale-105"
                    style={{
                      backgroundColor: '#FFD54F',
                      color: '#1A237E',
                      fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                      boxShadow: '0 8px 32px rgba(255,213,79,0.35)',
                    }}
                  >
                    <CalendarIcon />
                    Book Free Demo
                  </button>

                  <div className="flex flex-col items-center sm:items-start gap-1">
                    <a 
                      href="tel:+919501026457"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl transition-all"
                    >
                      📞 Call Now — 9501026457
                    </a>
                    <span className="text-xs text-white/85 font-medium sm:pl-2">
                      Available Mon-Sat, 9AM-7PM
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em' }}>
                  TEF Canada · TCF Canada · CLB 7 &amp; CLB 5
                </p>
              </div>

              {/* ── Right: Auto-playing Slideshow ── */}
              <div className="flex flex-col flex-1 w-full max-w-xl lg:max-w-none">
                <div
                  className="relative rounded-2xl overflow-hidden w-full"
                  style={{
                    boxShadow: '0 16px 56px rgba(0,0,0,0.45)',
                    border: '3px solid rgba(110,207,181,0.45)',
                    height: 380,
                  }}
                >
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                      style={{
                        opacity: idx === currentSlide ? 1 : 0,
                        pointerEvents: idx === currentSlide ? 'auto' : 'none',
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.label}
                        className="w-full h-full object-cover"
                        style={{ display: 'block' }}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      {/* Photo caption overlay */}
                      <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-3"
                        style={{
                          background: 'linear-gradient(to top, rgba(26,35,126,0.9) 0%, transparent 100%)',
                        }}
                      >
                        <p className="text-white text-sm font-bold">
                          {slide.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section className="py-12 md:py-16" style={{ backgroundColor: '#EEF0FA' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            {/* Section label */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-5"
              style={{ backgroundColor: '#6ECFB5', color: '#1A237E', letterSpacing: '0.13em' }}
            >
              About Us
            </span>

            <h2
              className="font-black mb-5"
              style={{ color: '#1A237E', fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', letterSpacing: '-0.01em' }}
            >
              Welcome to Unique French
            </h2>

            <p
              className="font-semibold leading-relaxed mb-6"
              style={{ color: '#333', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.8 }}
            >
              We train students for <strong style={{ color: '#1A237E' }}>TEF Canada</strong> and{' '}
              <strong style={{ color: '#1A237E' }}>TCF Canada</strong> exams. Our expertise lies in
              getting you <strong style={{ color: '#D32F2F' }}>CLB 7 or CLB 5</strong> — depending
              on your specific requirement. Whether it is a{' '}
              <strong>work permit extension</strong> or{' '}
              <strong>Permanent Residence (PR)</strong>, we cover it all.
            </p>

            <p
              className="font-medium leading-relaxed mb-8"
              style={{ color: '#555', fontSize: 'clamp(0.95rem, 2.2vw, 1.05rem)', lineHeight: 1.8 }}
            >
              Don't hesitate to book a <strong style={{ color: '#D32F2F' }}>free demo</strong> today.
              To check our results and our students' performance, you can call us and check for yourself.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['TEF Canada', 'TCF Canada', 'CLB 7 & CLB 5', 'Work Permit Extension', 'Permanent Residence', 'Free Demo'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-bold"
                    style={{ backgroundColor: '#fff', color: '#1A237E', border: '2px solid #C5CAE9' }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTA */}
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-3 rounded-xl font-black text-white px-8 py-4 transition-transform active:scale-95 hover:scale-105"
              style={{
                backgroundColor: '#D32F2F',
                fontSize: '1.15rem',
                boxShadow: '0 6px 24px rgba(211,47,47,0.35)',
              }}
              aria-label="Book a free demo"
            >
              <CalendarIcon />
              Book Free Demo
            </button>
          </div>
        </section>
      </>
    </Suspense>
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
