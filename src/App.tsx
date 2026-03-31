import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import GlassPanel from './components/GlassPanel';
import Home from './sections/Home';
import Projects from './sections/Projects';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import SpendGuardCaseStudy from './pages/SpendGuardCaseStudy';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} onAbout={() => setActiveTab('about')} />;
      case 'projects':
        return <Projects onViewCaseStudy={() => setActiveTab('case-study-spendguardai')} />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'case-study-spendguardai':
        return <SpendGuardCaseStudy onBack={() => setActiveTab('projects')} />;
      default:
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} onAbout={() => setActiveTab('about')} />;
    }
  };

  const isCaseStudy = activeTab.startsWith('case-study');

  return (
    <div className="min-h-screen bg-bg-dark text-text-main selection:bg-accent-pink/30 selection:text-white relative overflow-hidden">
      {/* GLOBAL HERO GLOW */}
      <div className="fixed inset-0 hero-glow -z-10 pointer-events-none opacity-50" />
      
      <ParticleBackground />
      
      <Navbar 
        activeTab={isCaseStudy ? '' : activeTab} 
        setActiveTab={setActiveTab} 
        isInternalPage={isCaseStudy} 
      />

      <main className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden">
        <AnimatePresence mode="wait">
          <GlassPanel key={activeTab}>
            {renderSection()}
          </GlassPanel>
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-medium text-text-muted/40 pointer-events-none whitespace-nowrap z-50">
        Sangeet Shaw • AI & Business Analytics Consultant • 2026
      </footer>
    </div>
  );
}

