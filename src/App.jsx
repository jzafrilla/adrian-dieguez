import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Circuits from './components/Circuits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { useGsapAnimations, useParallaxHero } from './hooks/useGsapAnimations';
import { useContent } from './hooks/useContent';

function App() {
  const { content, loading, error } = useContent();

  useGsapAnimations();
  useParallaxHero();

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header data={content.site} navigation={content.footer.navigation} />
      <main>
        <Hero data={content.hero} storeUrl={content.site.storeUrl} />
        <About data={content.about} />
        <Portfolio data={content.portfolio} storeUrl={content.site.storeUrl} />
        <Circuits data={content.circuits} storeUrl={content.site.storeUrl} />
        <CTA data={content.cta} storeUrl={content.site.storeUrl} />
      </main>
      <Footer data={content.footer} site={content.site} />
    </div>
  );
}

export default App;
