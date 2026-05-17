import { useEffect } from 'react'

export default function VideoTestimonials() {
  // Optional client-side script re-trigger in case script doesn't execute on dynamic transitions
  useEffect(() => {
    if (window.Wistia) {
      // Force Wistia to scan the DOM for new players
      window.Wistia.scan && window.Wistia.scan()
    }
  }, [])

  return (
    <section className="bg-white" style={{ padding: '56px 0' }}>
      {/* React 19 hoisted script tags */}
      <script src="https://fast.wistia.com/player.js" async></script>
      <script src="https://fast.wistia.com/embed/q1tdy7o32x.js" async type="module"></script>

      {/* Scoped CSS for the Wistia player placeholder */}
      <style>{`
        wistia-player[media-id='q1tdy7o32x']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/q1tdy7o32x/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 179.72%;
        }
      `}</style>

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
            {/* Wistia Player element */}
            <wistia-player
              media-id="q1tdy7o32x"
              aspect="0.5564142194744977"
              style={{ display: 'block', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
            ></wistia-player>
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
