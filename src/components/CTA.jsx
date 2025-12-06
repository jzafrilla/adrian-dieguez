const CTA = ({ data, storeUrl }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.backgroundImage}
          alt="Racing background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e63946] via-[#00d4ff] to-[#e63946]" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] via-[#e63946] to-[#00d4ff]" />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center' }}>
          {/* Badge */}
          <span style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(230, 57, 70, 0.2)',
            border: '1px solid rgba(230, 57, 70, 0.3)',
            borderRadius: '9999px',
            color: '#e63946',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem'
          }}>
            {data.badge}
          </span>

          {/* Main Heading */}
          <h2 className="racing-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            {data.titleLine1}
            <span className="gradient-text" style={{ display: 'block' }}>{data.titleLine2}</span>
            {data.titleLine3}
          </h2>

          {/* Description */}
          <p style={{ color: '#d1d5db', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '42rem', margin: '0 auto 3rem', fontWeight: '300', lineHeight: '1.8' }}>
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ borderRadius: '0.75rem', color: 'white', fontWeight: '700', fontSize: '1.125rem', letterSpacing: '0.025em', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {data.ctaPrimary}
              <svg
                style={{ width: '1.25rem', height: '1.25rem' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contacto"
              style={{ padding: '1rem 2.5rem', borderRadius: '0.75rem', color: 'white', fontWeight: '600', fontSize: '1.125rem', letterSpacing: '0.025em', border: '2px solid rgba(255,255,255,0.3)', backgroundColor: 'transparent', textDecoration: 'none' }}
            >
              {data.ctaSecondary}
            </a>
          </div>

          {/* Trust indicators */}
          <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', color: '#d1d5db' }}>
            {data.features.map((feature, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span style={{ fontSize: '1rem' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
