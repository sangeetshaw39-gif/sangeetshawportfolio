import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X, Briefcase, Mail, LayoutGrid, Download, Sparkles, Video, FileText } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isInternalPage?: boolean;
}

const tabs = [
  { id: 'about', label: 'About', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'what-i-do', label: 'What I Do', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'projects', label: 'Work', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: 'content', label: 'Content', icon: <Video className="w-4 h-4" /> },
  { id: 'blog', label: 'Blog', icon: <FileText className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
];

export default function Navbar({ activeTab, setActiveTab, isInternalPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#1a1d23]/50 backdrop-blur-xl border-b border-primary/10 transition-all duration-300">
        <nav className="flex justify-between items-center px-6 md:px-8 py-4 w-full max-w-7xl mx-auto">
          <div 
            onClick={() => handleTabClick('home')}
            className="text-xl md:text-2xl font-bold tracking-tighter text-[#ffc1d0] font-headline cursor-pointer hover:scale-105 transition-transform uppercase flex items-center gap-2"
          >
            <span>SANGEET</span>
            <span className="text-secondary font-light italic">SHAW</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-7 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "relative text-xs uppercase tracking-widest font-bold transition-all duration-300 py-1",
                  activeTab === tab.id 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-text-muted hover:text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
            <a 
              href="/assets/sangeetshawresume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-text-muted hover:text-primary transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleTabClick('contact')}
              className="hidden sm:block px-5 py-2.5 bg-primary text-on-primary font-headline font-bold text-xs uppercase tracking-wider hover:scale-95 transition-all active:scale-90 rounded-sm shadow-[0_0_20px_rgba(255,193,208,0.2)]"
            >
              Work With Me
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-primary p-2"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? '0%' : '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-y-0 right-0 w-72 bg-bg-dark/95 backdrop-blur-2xl z-[60] border-l border-primary/20 lg:hidden p-8 flex flex-col gap-6 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs">Navigation</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-primary"><X /></button>
          </div>
          
          <button
            onClick={() => handleTabClick('home')}
            className={cn(
              "flex items-center gap-4 text-lg font-headline font-bold tracking-tight text-left transition-colors",
              activeTab === 'home' ? "text-primary" : "text-text-muted hover:text-primary"
            )}
          >
            Home
          </button>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex items-center gap-4 text-lg font-headline font-bold tracking-tight text-left transition-colors",
                activeTab === tab.id ? "text-primary" : "text-text-muted hover:text-primary"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          
          <a 
            href="/assets/sangeetshawresume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg font-headline font-bold tracking-tight text-text-muted hover:text-primary transition-colors"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>

          <button 
            onClick={() => handleTabClick('contact')}
            className="mt-auto px-6 py-3.5 bg-primary text-on-primary font-headline font-black tracking-widest uppercase text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all text-center"
          >
            Let's Build It
          </button>
        </motion.div>
      </header>

      {/* Mobile Center Navigation Pill (The HUD) */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 glass-refraction ghost-border py-2 px-5 flex justify-around items-center z-[50] rounded-full gap-5 shadow-[0_0_35px_rgba(244,157,181,0.25)] bg-[#1a1d23]/80">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all p-1",
              activeTab === tab.id ? "text-primary scale-110" : "text-text-muted hover:text-primary"
            )}
            title={tab.label}
          >
            {tab.icon}
          </button>
        ))}
      </nav>
    </>
  );
}
