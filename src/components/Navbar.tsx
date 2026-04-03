import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X, Rocket, Database, Briefcase, Mail, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isInternalPage?: boolean;
}

const tabs = [
  { id: 'projects', label: 'Projects', icon: <LayoutGrid className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'blog', label: 'Blog', icon: <Database className="w-4 h-4" /> },
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
      <header className="fixed top-0 w-full z-50 bg-[#1a1d23]/40 backdrop-blur-xl border-b border-primary/10 transition-all duration-300 hover:backdrop-brightness-125">
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          <div 
            onClick={() => handleTabClick('home')}
            className="text-2xl font-bold tracking-tighter text-[#ffc1d0] font-headline cursor-pointer hover:scale-105 transition-transform uppercase"
          >
            HOME
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "relative text-xs uppercase tracking-widest font-bold transition-all duration-300",
                  activeTab === tab.id 
                    ? "text-primary border-b border-primary/40 pb-1" 
                    : "text-text-muted hover:text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleTabClick('contact')}
              className="hidden sm:block px-6 py-2 bg-primary text-on-primary font-bold text-sm tracking-tight hover:scale-95 transition-all active:scale-90"
            >
              Work With Me
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary p-2"
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
          className="fixed inset-y-0 right-0 w-64 bg-bg-dark/95 backdrop-blur-2xl z-[60] border-l border-primary/20 md:hidden p-8 flex flex-col gap-8 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-primary font-headline font-bold uppercase tracking-widest text-xs">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-primary"><X /></button>
          </div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex items-center gap-4 text-xl font-headline font-bold tracking-tighter text-left transition-colors",
                activeTab === tab.id ? "text-primary" : "text-text-muted hover:text-primary"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          <button 
            onClick={() => handleTabClick('contact')}
            className="mt-auto px-8 py-4 bg-primary text-on-primary font-bold tracking-widest uppercase text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all"
          >
            Launch Project
          </button>
        </motion.div>
      </header>


      {/* Mobile Center Navigation Pill (The HUD) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 glass-refraction ghost-border p-2 px-6 flex justify-around items-center z-[50] rounded-full gap-8 shadow-[0_0_40px_rgba(244,157,181,0.2)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all",
              activeTab === tab.id ? "text-primary scale-110" : "text-text-muted hover:text-primary"
            )}
          >
            {tab.icon}
          </button>
        ))}
      </nav>
    </>
  );
}
