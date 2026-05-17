export default function StudentResults() {
  const results = [
    {
      id: 1,
      image: '/gallery/result1.webp',
      name: 'Rajveer Singh',
      exam: 'TCF Canada · April 2026',
      scores: 'Listening C1 | Reading C2 | Speaking B2 | Writing B2',
      badge: '⭐ Top Scorer — C2 Reading',
      isHot: true,
      borderColor: '#D32F2F',
    },
    {
      id: 2,
      image: '/gallery/result2.webp',
      name: 'Kamalpreet Kaur',
      exam: 'TCF Canada · February 2026',
      scores: 'Listening B2 | Reading B2 | Speaking B2 | Writing B1',
      borderColor: '#1A237E',
    },
    {
      id: 3,
      image: '/gallery/result3.webp',
      name: 'Meenu',
      exam: 'TCF Canada · February 2026',
      scores: 'Listening B2 | Reading B2 | Speaking B1 | Writing B2',
      borderColor: '#1A237E',
    },
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F6FA' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#E8EAF6', color: '#1A237E', letterSpacing: '0.12em' }}
          >
            Student Success
          </span>
          <h2
            className="font-black mb-4"
            style={{ color: '#1A237E', fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
          >
            Our Students' TCF Canada Scores
          </h2>
          <p
            className="font-semibold text-gray-500 uppercase tracking-wider text-xs md:text-sm"
            style={{ letterSpacing: '0.08em' }}
          >
            Official France Éducation International verified results
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {results.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              style={{
                boxShadow: '0 12px 32px rgba(26,35,126,0.06), 0 4px 12px rgba(0,0,0,0.02)',
                border: `2.5px solid ${card.borderColor}`,
              }}
            >
              {/* Image Header */}
              <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
                <img
                  src={card.image}
                  alt={`TCF Canada certificate for ${card.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {card.badge && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-black text-white shadow-md uppercase tracking-wider"
                    style={{ backgroundColor: '#D32F2F', letterSpacing: '0.05em' }}
                  >
                    {card.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-black text-xl mb-1"
                    style={{ color: '#1A237E' }}
                  >
                    {card.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    {card.exam}
                  </p>

                  <div
                    className="p-4 rounded-xl mb-6"
                    style={{ backgroundColor: '#F8F9FD', border: '1px solid #E3E8F0' }}
                  >
                    <p
                      className="font-black text-center text-sm md:text-xs lg:text-sm"
                      style={{ color: '#1A237E', lineHeight: 1.6 }}
                    >
                      {card.scores}
                    </p>
                  </div>
                </div>

                {/* Footer Stamp */}
                <div
                  className="pt-4 flex items-center justify-center gap-2 border-t text-sm font-bold"
                  style={{ borderColor: '#EDF2F7', color: '#2E7D32' }}
                >
                  <span>✅ Verified Certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
