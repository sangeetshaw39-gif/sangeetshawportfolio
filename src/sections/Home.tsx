import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, LayoutGrid, Zap, Database } from 'lucide-react';

interface HomeProps {
  onViewProjects: () => void;
  onContact: () => void;
  onAbout: () => void;
}

export default function Home({ onViewProjects, onContact, onAbout }: HomeProps) {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center px-4 overflow-hidden">
      {/* Background Hero Glow - Fixed and Optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse duration-5000"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-secondary mb-6 block border-l-2 border-primary pl-4">
              PORTFOLIO
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mb-4 text-text-main text-glow">
              SANGEET <br />
              <span className="text-secondary italic font-light drop-shadow-[0_0_15px_rgba(244,157,181,0.3)]">SHAW.</span>
            </h1>
            <p className="font-headline text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-primary font-black mb-10">
              BUILDING SYSTEMS THAT MAKE DATA USABLE.
            </p>
            <div className="space-y-6 max-w-xl mb-10">
              <p className="text-lg text-text-muted font-body leading-relaxed">
                Designing and building data-driven systems that clean, structure, and analyze messy business data — turning it into usable insights for real-world decision-making.
              </p>
              <p className="text-sm text-text-muted/80 font-medium leading-relaxed border-l border-white/10 pl-6 italic">
                Focused on financial analysis, automation, and practical AI applications across MSMEs and business workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <button 
                onClick={onViewProjects}
                className="bg-primary text-on-primary px-10 py-4 font-bold tracking-tight rounded-sm hover:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,208,0.3)] flex items-center gap-3"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={onAbout}
                className="ghost-border text-primary px-10 py-4 font-bold tracking-tight hover:bg-primary/5 transition-colors rounded-sm"
              >
                How I Build
              </button>
            </div>
          </motion.div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="glass-card p-6 ghost-border space-y-4 group hover:bg-primary/5 transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-primary font-black mb-1">System Design</div>
                <div className="text-xs text-text-muted leading-relaxed">Builds end-to-end data pipelines from ingestion to insight generation</div>
              </div>
            </div>
            <div className="glass-card p-6 ghost-border space-y-4 group hover:bg-secondary/5 transition-all">
              <div className="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-secondary font-black mb-1">Automation</div>
                <div className="text-xs text-text-muted leading-relaxed">Reduces manual workflows using scripts, structured logic, and integrations</div>
              </div>
            </div>
            <div className="glass-card p-6 ghost-border space-y-4 group hover:bg-primary/5 transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-primary font-black mb-1">Data Analysis</div>
                <div className="text-xs text-text-muted leading-relaxed">Transforms raw datasets into interpretable business insights</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Portrait Image with Refined Glow */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm aspect-square group cursor-pointer"
            onClick={onAbout}
          >
            {/* Multi-layered Glass Borders */}
            <div className="absolute inset-0 border-[0.5pt] border-primary/20 rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute inset-0 border-[0.5pt] border-secondary/20 -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>
            
            {/* The Main Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
            
            <div className="w-full h-full glass-card overflow-hidden ghost-border relative z-10 transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(244,157,181,0.25)]">
              <img 
                src="/assets/sangeet.png" 
                alt="Portrait of Sangeet Shaw" 
                className="w-full h-full object-cover md:grayscale md:brightness-90 md:contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-bg-dark/80 md:bg-bg-dark/60 backdrop-blur-xl px-4 py-3 ghost-border opacity-100 translate-y-0 md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                <div className="space-y-1">
                  <span className="font-headline text-[9px] uppercase tracking-widest text-primary font-black">Working Style</span>
                  <p className="text-[10px] text-text-main font-bold leading-tight">Independent • System-focused • Problem-driven</p>
                  <p className="text-[8px] text-text-muted font-medium opacity-80">Open to projects and real-world problem solving</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}