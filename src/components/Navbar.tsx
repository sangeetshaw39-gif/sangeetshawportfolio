import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isInternalPage?: boolean;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeTab, setActiveTab, isInternalPage }: NavbarProps) {
  const handleTabClick = (tabId: string) => {
    if (isInternalPage) {
      setActiveTab('home'); // Logic to go back home from internal page
      return;
    }
    setActiveTab(tabId);
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1.5 bg-bg-surface/60 backdrop-blur-2xl border border-glass-stroke rounded-full shadow-2xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "relative px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full group",
              activeTab === tab.id ? "text-accent-pink" : "text-text-muted hover:text-text-main"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-accent-pink/10 rounded-full border border-accent-pink/20"
                transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
