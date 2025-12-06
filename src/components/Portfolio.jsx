import { useState } from 'react';

const Portfolio = ({ data, storeUrl }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? data.images
    : data.images.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#111] relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem' }} className="relative">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#00d4ff', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            {data.label}
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginTop: '1rem' }}>
            {data.title}
          </h2>
          <p style={{ color: '#9ca3af', marginTop: '1.5rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.8' }}>
            {data.description}
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.875rem 2rem',
                borderRadius: '9999px',
                fontWeight: '500',
                transition: 'all 0.3s',
                backgroundColor: activeCategory === cat.id ? '#e63946' : '#1a1a1a',
                color: activeCategory === cat.id ? 'white' : '#9ca3af',
                border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group card-hover"
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.75rem', cursor: 'pointer' }}
              onClick={() => setSelectedImage(image)}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
                  className="group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="group-hover:opacity-100" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.2), transparent)', opacity: 0, transition: 'opacity 0.3s' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <span style={{ color: '#00d4ff', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {image.category}
                  </span>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600', marginTop: '0.25rem' }}>
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Corner accent */}
              <div className="group-hover:opacity-100" style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2rem', height: '2rem', borderTop: '2px solid #e63946', borderRight: '2px solid #e63946', opacity: 0, transition: 'opacity 0.3s' }} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', borderRadius: '0.5rem', color: '#00d4ff', fontWeight: '600' }}
          >
            {data.ctaText}
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <span className="text-[#00d4ff] text-sm uppercase tracking-wider">
              {selectedImage.category}
            </span>
            <h3 className="text-white text-2xl font-semibold mt-1">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
