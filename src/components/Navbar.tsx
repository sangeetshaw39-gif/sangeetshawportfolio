import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
              activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
