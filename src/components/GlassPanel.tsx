import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative w-full max-w-5xl mx-auto p-10 rounded-[2rem]",
        "bg-bg-surface/30 backdrop-blur-3xl border border-glass-stroke shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]",
        "overflow-hidden",
        className
      )}
    >
      {/* SUBTLE INNER GLOW */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-pink/20 to-transparent pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
