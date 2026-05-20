const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#1A237E" strokeWidth="2" />
        <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 6l1.5 1.5L22 5" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: 'Experienced & Certified Tutors',
    body: 'Our lead trainer is a certified French language expert with 8+ years experience in TEF TCF Canada preparation. 500+ students trained.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" stroke="#1A237E" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" fill="#D32F2F" fillOpacity="0.12" />
      </svg>
    ),
    heading: 'Specialized PR Score Focus',
    body: 'We train specifically around Canada PR requirements — CLB 7 for Express Entry and CLB 5 for dependent applicants.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" stroke="#1A237E" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" fill="#D32F2F" />
      </svg>
    ),
    heading: 'Conveniently Located in Kharar',
    body: 'Our institute is situated in Sunny Enclave, Sector 125, SAS Nagar, Kharar — easily accessible from Mohali and Chandigarh.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1A237E" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14h1m3 0h1m3 0h1M8 18h1m3 0h1" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    heading: 'Flexible Batch Timings',
    body: 'Morning, afternoon, and evening batches to suit students, working professionals, and homemakers alike.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M9 11l3 3 8-8" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3c1.36 0 2.65.3 3.8.84" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    heading: 'Proven Track Record',
    body: 'Hundreds of successful students who achieved their target CLB scores and secured their Canada PR.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 6h16M4 10h16M4 14h10" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="17" r="3" fill="#D32F2F" />
      </svg>
    ),
    heading: 'Comprehensive Study Material',
    body: 'Curated notes, past papers, audio samples, and writing task templates for both TEF Canada and TCF Canada exams.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: '#F5F6FA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="font-black mb-3"
            style={{ color: '#1A237E', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.01em' }}
          >
            Why Choose Unique French?
          </h2>
          <p className="font-semibold" style={{ color: '#555', fontSize: '1.05rem' }}>
            The #1 choice for Canada PR aspirants in the Kharar–Mohali region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.heading}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
              style={{ boxShadow: '0 2px 16px rgba(26,35,126,0.07)', border: '2px solid #E8EAF6' }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#EEF0FA' }}
              >
                {f.icon}
              </div>
              <div>
                <h3
                  className="font-black mb-1"
                  style={{ color: '#1A237E', fontSize: '1.05rem', lineHeight: 1.3 }}
                >
                  {f.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center mt-12">
          <p className="font-bold mb-4 text-lg" style={{ color: '#1A237E' }}>
            Ready to start your journey to Canada?
          </p>
          <a
            href="tel:9501026457"
            className="inline-flex items-center gap-3 rounded-xl font-black text-white shadow-xl px-8 py-4 transition-transform active:scale-95 hover:scale-105"
            style={{ backgroundColor: '#D32F2F', fontSize: '1.2rem', boxShadow: '0 6px 24px rgba(211,47,47,0.35)' }}
            aria-label="Call Unique French at 9501026457"
          >
            <PhoneIcon />
            Call Now: 9501026457
          </a>
          <p className="mt-3 text-sm font-medium" style={{ color: '#777' }}>
            Mon–Sat, 9 AM – 7 PM
          </p>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.19z" />
    </svg>
  )
}
