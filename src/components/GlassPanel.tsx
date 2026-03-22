import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "relative w-full max-w-4xl mx-auto p-8 rounded-2xl",
        "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl",
        "overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
