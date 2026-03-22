/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import GlassPanel from './components/GlassPanel';
import Home from './sections/Home';
import Projects from './sections/Projects';
import About from './sections/About';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onViewProjects={() => setActiveTab('projects')} onContact={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-indigo-500/30">
      <ParticleBackground />
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="relative pt-32 pb-20 px-6 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <GlassPanel key={activeTab}>
            {renderSection()}
          </GlassPanel>
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/20 pointer-events-none">
        © 2026 Sangeet Shaw • AI & Business Analytics Consultant
      </footer>
    </div>
  );
}

