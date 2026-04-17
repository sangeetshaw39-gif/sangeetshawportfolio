import { useState, useEffect, Suspense } from 'react';
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
import FifoCaseStudy from './pages/FifoCaseStudy';
import BillCaseStudy from './pages/BillCaseStudy';
import RfmCaseStudy from './pages/RfmCaseStudy';
import LedgerPrimeCaseStudy from './pages/LedgerPrimeCaseStudy';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [interactionState, setInteractionState] = useState<'idle' | 'active' | 'success'>('idle');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} onAbout={() => setActiveTab('about')} />;
      case 'projects':
        return <Projects onViewCaseStudy={(route) => setActiveTab(route)} onContact={() => setActiveTab('contact')} />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact setInteractionState={setInteractionState} />;
      case 'case-study-spendguardai':
        return <SpendGuardCaseStudy onBack={() => setActiveTab('projects')} />;
      case 'case-study-fifo':
        return <FifoCaseStudy onBack={() => setActiveTab('projects')} />;
      case 'case-study-bill':
        return <BillCaseStudy onBack={() => setActiveTab('projects')} />;
      case 'case-study-rfm':
        return <RfmCaseStudy onBack={() => setActiveTab('projects')} />;
      case 'case-study-ledgerprime':
        return <LedgerPrimeCaseStudy onBack={() => setActiveTab('projects')} />;
      default:
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} onAbout={() => setActiveTab('about')} />;
    }
  };

  const isCaseStudy = activeTab.startsWith('case-study');

  return (
    <div className="min-h-screen bg-bg-dark text-text-main selection:bg-primary/30 selection:text-white relative overflow-hidden transition-colors duration-1000">
      
      {/* Background Layer */}
      <Suspense fallback={<div className="fixed inset-0 bg-bg-dark" />}>
        <ParticleBackground activeTab={activeTab} interactionState={interactionState} />
      </Suspense>
      
      <Navbar 
        activeTab={isCaseStudy ? '' : activeTab} 
        setActiveTab={setActiveTab} 
        isInternalPage={isCaseStudy} 
      />

      <main className={cn(
        "relative transition-all duration-1000",
        "pt-32 md:pt-40",
        "pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-visible"
      )}>
        <AnimatePresence mode="wait">
          <GlassPanel key={activeTab}>
            {renderSection()}
          </GlassPanel>
        </AnimatePresence>
      </main>

    </div>
  );
}
