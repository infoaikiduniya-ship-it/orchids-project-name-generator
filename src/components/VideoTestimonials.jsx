import { useState, useEffect } from 'react'

export default function VideoTestimonials() {
  const [playClicked, setPlayClicked] = useState(false)

  // Dynamically load Wistia script files only when play is clicked
  useEffect(() => {
    if (playClicked) {
      const script1 = document.createElement('script')
      script1.src = 'https://fast.wistia.com/player.js'
      script1.async = true
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.src = 'https://fast.wistia.com/embed/q1tdy7o32x.js'
      script2.async = true
      script2.type = 'module'
      document.head.appendChild(script2)
    }
  }, [playClicked])

  useEffect(() => {
    if (playClicked && window.Wistia) {
      window.Wistia.scan && window.Wistia.scan()
    }
  }, [playClicked])

  return (
    <section className="bg-white" style={{ padding: '56px 0' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Small Orange Pill Badge */}
        <span
          className="inline-block text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{
            backgroundColor: '#FFF3E0',
            color: '#E65100',
            letterSpacing: '0.12em',
          }}
        >
          Student Testimonials
        </span>

        {/* Main Heading */}
        <h2
          className="font-black mb-3"
          style={{
            color: '#1A237E',
            fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          What Our Students Say
        </h2>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-10"
        >
          Real experiences from students who achieved their Canada PR goals with Unique French.
        </p>

        {/* Centered Video Player Container */}
        <div className="flex flex-col items-center justify-center">
          <div
            className="w-full max-w-[360px] overflow-hidden rounded-2xl bg-black p-1.5"
            style={{
              border: '3px solid rgba(26,35,126,0.15)',
              boxShadow: '0 16px 48px rgba(26,35,126,0.12), 0 4px 12px rgba(0,0,0,0.03)',
            }}
          >
            {!playClicked ? (
              <div 
                onClick={() => setPlayClicked(true)}
                className="relative w-full rounded-xl overflow-hidden cursor-pointer group"
                style={{
                  paddingTop: '179.72%', // Matches portrait Wistia video aspect ratio perfectly
                  backgroundColor: '#1A237E',
                  backgroundImage: 'url("https://fast.wistia.com/embed/medias/q1tdy7o32x/swatch")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Visual Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                  {/* Glowing Animated Play Button */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl group-hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(8px)',
                      border: '2px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 0 24px rgba(255, 255, 255, 0.3), inset 0 0 12px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* SVG Play Triangle */}
                    <svg 
                      className="w-6 h-6 text-white translate-x-0.5 fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span 
                    className="inline-block px-3.5 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-wider shadow-lg"
                    style={{
                      background: 'rgba(26, 35, 126, 0.85)',
                      backdropFilter: 'blur(6px)',
                      letterSpacing: '0.08em'
                    }}
                  >
                    ▶️ Click to Watch Review
                  </span>
                </div>
              </div>
            ) : (
              <wistia-player
                media-id="q1tdy7o32x"
                aspect="0.5564142194744977"
                autoPlay="true"
                style={{ display: 'block', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
              ></wistia-player>
            )}
          </div>

          {/* Caption */}
          <p
            className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center justify-center gap-1.5"
            style={{ letterSpacing: '0.05em' }}
          >
            <span>🎥 Verified student review · Unique French, Kharar</span>
          </p>
        </div>
      </div>
    </section>
  )
}
