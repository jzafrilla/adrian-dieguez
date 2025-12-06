const Circuits = ({ data, storeUrl }) => {
  return (
    <section id="circuitos" className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e63946]/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#e63946', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            {data.label}
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginTop: '1rem' }}>
            {data.title}
          </h2>
          <p style={{ color: '#9ca3af', marginTop: '1.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.8' }}>
            {data.description}
          </p>
        </div>

        {/* Circuits Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2.5rem' }}>
          {data.items.map((circuit, index) => (
            <a
              key={index}
              href={circuit.link || storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl card-hover block"
            >
              {/* Background Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={circuit.image}
                  alt={circuit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 text-[#00d4ff] text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {circuit.location}
                    </span>
                    <h3 className="racing-title text-2xl md:text-3xl text-white">
                      {circuit.name}
                    </h3>
                    <p className="text-gray-400 mt-2 max-w-md">
                      {circuit.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="w-12 h-12 rounded-full bg-[#e63946] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e63946] via-[#00d4ff] to-[#e63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Number indicator */}
              <div className="absolute top-6 left-6 racing-title text-6xl text-white/10 group-hover:text-[#e63946]/30 transition-colors duration-300">
                0{index + 1}
              </div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
          {data.stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p className="racing-title gradient-text" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>{stat.value}</p>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.75rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Circuits;
