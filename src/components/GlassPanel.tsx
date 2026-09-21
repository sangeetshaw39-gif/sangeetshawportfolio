import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  noCard?: boolean;
}

export default function GlassPanel({ children, className, noCard }: GlassPanelProps) {
  if (noCard) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative z-10 w-full", className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full max-w-7xl mx-auto",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
