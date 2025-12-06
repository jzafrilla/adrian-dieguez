const About = ({ data }) => {
  const getColorClass = (color) => {
    switch (color) {
      case 'red': return 'text-[#e63946]';
      case 'blue': return 'text-[#00d4ff]';
      default: return 'text-white';
    }
  };

  return (
    <section id="servicios" className="bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e63946]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Image Side */}
          <div className="relative">
            <div className="relative">
              <img
                src={data.image}
                alt="Adrián Diéguez - Fotógrafo y Mecánico"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent rounded-2xl" />

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#111] p-6 rounded-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{data.floatingCard.value}</p>
                    <p className="text-sm text-gray-400">{data.floatingCard.label}</p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-[#00d4ff] rounded-tl-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-[#e63946] font-semibold tracking-wider uppercase text-sm">
              {data.label}
            </span>
            <h2 className="section-title text-4xl md:text-5xl text-white mt-4 mb-10">
              {data.titleLine1}
              <br />
              <span className="gradient-text">{data.titleLine2}</span>
            </h2>

            <div className="space-y-8 text-gray-300">
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={index === 0 ? 'text-lg leading-loose' : 'leading-loose'}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className={`racing-title text-3xl md:text-5xl ${getColorClass(stat.color)}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-3">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Services quick list */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              {data.services.map((service) => (
                <span
                  key={service}
                  className="inline-block px-6 py-3 bg-[#1a1a1a] rounded-full text-sm text-gray-300 border border-white/10"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
