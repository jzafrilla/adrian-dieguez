const Footer = ({ data, site }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Main Footer Content */}
        <div style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Brand */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src={site.logo} alt={site.title} style={{ height: '3rem', width: 'auto' }} />
              <span className="racing-title" style={{ fontSize: '1.5rem', color: 'white' }}>{site.title.toUpperCase()}</span>
            </div>
            <p style={{ color: '#9ca3af', maxWidth: '28rem', margin: '0 auto 1.5rem', fontSize: '1rem', lineHeight: '1.8' }}>
              {data.description}
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              {data.social.instagram && (
                <a
                  href={data.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', transition: 'all 0.3s' }}
                  aria-label="Instagram"
                >
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', transition: 'all 0.3s' }}
                  aria-label="Facebook"
                >
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {data.social.youtube && (
                <a
                  href={data.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', transition: 'all 0.3s' }}
                  aria-label="YouTube"
                >
                  <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Links and Contact Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', textAlign: 'center' }}>
            {/* Quick Links */}
            <div>
              <h4 className="section-title" style={{ color: 'white', fontSize: '1.125rem', marginBottom: '1.25rem' }}>NAVEGACIÓN</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {data.navigation.map((link) => (
                  <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={link.href}
                      style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '1rem', lineHeight: '1.8' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={site.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#e63946', textDecoration: 'none', fontWeight: '500', fontSize: '1rem' }}
                  >
                    Tienda Online →
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="section-title" style={{ color: 'white', fontSize: '1.125rem', marginBottom: '1.25rem' }}>CONTACTO</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.75rem' }}>
                  <a href={`mailto:${data.contact.email}`} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '1rem', lineHeight: '1.8' }}>
                    {data.contact.email}
                  </a>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <span style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: '1.8' }}>
                    {data.contact.location}
                  </span>
                </li>
                <li style={{ marginBottom: '0.75rem' }}>
                  <span style={{ color: '#00d4ff', fontSize: '1rem', lineHeight: '1.8' }}>
                    {data.contact.availability}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ padding: '1.5rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            © {currentYear} {site.title}. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.875rem' }}>
              Política de Privacidad
            </a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.875rem' }}>
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
