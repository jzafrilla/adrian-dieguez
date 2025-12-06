import { useState, useEffect } from 'react';

const Hero = ({ data, storeUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.images.length]);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 hero-parallax">
        {data.images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={`Racing photography ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0a0a]" />
          </div>
        ))}
      </div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <p className="text-[#00d4ff] font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base animate-pulse-glow">
            {data.subtitle}
          </p>

          {/* Main Title */}
          <h1 className="racing-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-8">
            {data.titleLine1}
            <br />
            <span className="gradient-text">{data.titleLine2}</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#portfolio"
              className="btn-primary rounded-lg text-white font-semibold text-lg tracking-wide"
            >
              {data.ctaPrimary}
            </a>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary rounded-lg text-[#00d4ff] font-semibold text-lg tracking-wide"
            >
              {data.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Outside content div */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {data.images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-10 bg-[#e63946]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-10 z-20 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest rotate-90 origin-center translate-y-8">
            SCROLL
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent mt-12" />
        </div>
      </div>

      {/* Speed Lines Decoration */}
      <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-[#e63946] to-transparent transform -rotate-12 opacity-60" />
      <div className="absolute top-1/3 left-0 w-24 h-0.5 bg-gradient-to-r from-[#00d4ff] to-transparent transform -rotate-6 opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-32 h-1 bg-gradient-to-l from-[#e63946] to-transparent transform rotate-12 opacity-60" />
      <div className="absolute bottom-1/3 right-0 w-24 h-0.5 bg-gradient-to-l from-[#00d4ff] to-transparent transform rotate-6 opacity-40" />
    </section>
  );
};

export default Hero;
