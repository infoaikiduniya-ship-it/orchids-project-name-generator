const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/YOUR_LINK_HERE' // ← replace with your share link

const reviews = [
  {
    name: 'Aman Singh',
    avatar: 'AS',
    avatarBg: '#1A237E',
    text: 'Best TEF coaching in Chandigarh. Got my CLB 7 in just 3 months! The structured approach and mock tests made all the difference.',
    date: 'March 2024',
  },
  {
    name: 'Preeti Kaur',
    avatar: 'PK',
    avatarBg: '#00695C',
    text: 'The online classes are very flexible and the trainers are true experts. I could balance my job and studies without any stress.',
    date: 'January 2024',
  },
  {
    name: 'Rahul Sharma',
    avatar: 'RS',
    avatarBg: '#6A1B9A',
    text: 'Highly recommended for Canada PR aspirants. Unique French is simply the best institute in Punjab for TEF Canada preparation.',
    date: 'April 2024',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F9A825" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.15 0 5.63 1.08 7.7 2.85l5.74-5.74C33.82 3.54 29.24 1.5 24 1.5 14.89 1.5 7.28 7.08 4.1 14.86l6.69 5.2C12.44 14.1 17.73 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.15 24.5c0-1.57-.14-3.08-.4-4.55H24v8.6h12.44c-.54 2.9-2.17 5.36-4.62 7.02l7.17 5.57C43.27 37.3 46.15 31.37 46.15 24.5z"/>
      <path fill="#FBBC05" d="M10.79 28.94A14.5 14.5 0 0 1 9.5 24c0-1.72.3-3.38.79-4.94l-6.69-5.2A22.44 22.44 0 0 0 1.5 24c0 3.6.87 7.02 2.4 10.03l6.89-5.09z"/>
      <path fill="#34A853" d="M24 46.5c5.24 0 9.65-1.73 12.87-4.7l-7.17-5.57c-1.79 1.2-4.07 1.91-5.7 1.91-6.27 0-11.56-4.6-13.21-10.2l-6.89 5.09C7.28 40.92 14.89 46.5 24 46.5z"/>
    </svg>
  )
}

export default function TrustSection() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
            style={{ backgroundColor: '#FFF8E1', color: '#F57F17', border: '1.5px solid #FFE082' }}
          >
            Student Reviews
          </span>
          <h2
            className="font-black mb-3"
            style={{ color: '#1A237E', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', letterSpacing: '-0.01em' }}
          >
            Trusted by Students Across<br className="hidden sm:block" /> Punjab &amp; Chandigarh
          </h2>
          <p className="font-semibold" style={{ color: '#666', fontSize: '1rem' }}>
            Real results from real students. Check for yourself.
          </p>
        </div>

        {/* ── Review Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-4 rounded-2xl p-6"
              style={{
                border: '2px solid #F0F0F0',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                background: '#FAFAFA',
              }}
            >
              {/* Top row: avatar + name + Google logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-black text-white flex-shrink-0"
                    style={{ backgroundColor: r.avatarBg, fontSize: '0.9rem', letterSpacing: '0.03em' }}
                    aria-hidden="true"
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-black text-sm leading-tight" style={{ color: '#1A237E' }}>{r.name}</p>
                    <p className="text-xs font-medium" style={{ color: '#999' }}>{r.date}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Stars */}
              <Stars />

              {/* Review text */}
              <p className="text-sm leading-relaxed font-medium flex-1" style={{ color: '#333' }}>
                "{r.text}"
              </p>

              {/* Verified tag */}
              <div className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 20 20" fill="#43A047" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#E8F5E9"/>
                  <path d="M6 10.5l2.5 2.5 5-5" stroke="#43A047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-semibold" style={{ color: '#43A047' }}>Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Verified Badge ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl px-6 py-5 mb-8 mx-auto max-w-xl"
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #F8F9FF 100%)',
            border: '2.5px solid #E8EAF6',
            boxShadow: '0 4px 20px rgba(26,35,126,0.08)',
          }}
        >
          <div className="flex items-center gap-3">
            <GoogleLogo />
            <div>
              <p className="font-black text-lg leading-tight" style={{ color: '#1A237E' }}>
                4.9 / 5
                <span className="ml-2 text-yellow-400">★★★★★</span>
              </p>
              <p className="text-sm font-semibold" style={{ color: '#555' }}>
                Based on <strong>50+ Google Reviews</strong>
              </p>
            </div>
          </div>
          <div
            className="h-px sm:h-10 sm:w-px w-full"
            style={{ backgroundColor: '#E0E0E0' }}
            aria-hidden="true"
          />
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#888', letterSpacing: '0.1em' }}>
              Google My Business
            </p>
            <p className="text-sm font-semibold" style={{ color: '#333' }}>
              Verified &amp; Active Listing
            </p>
          </div>
        </div>

        {/* ── Google Maps CTA ── */}
        <div className="text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl font-black text-white px-8 py-4 transition-transform active:scale-95 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #1565C0 0%, #1A237E 100%)',
              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
              boxShadow: '0 6px 28px rgba(26,35,126,0.3)',
              letterSpacing: '0.01em',
            }}
            aria-label="Open Unique French on Google Maps to verify reviews"
          >
            <MapPinIcon />
            Verify Our Reviews on Google Maps
            <ExternalIcon />
          </a>
          <p className="mt-3 text-xs font-medium" style={{ color: '#aaa' }}>
            Opens in a new tab · Google Maps listing
          </p>
        </div>

      </div>
    </section>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
