import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, Target, Share2, Video, Code2, Bot, Layers } from 'lucide-react';

interface HomeProps {
  onViewProjects: () => void;
  onContact: () => void;
  onAbout: () => void;
  onWhatIDo?: () => void;
}

export default function Home({ onViewProjects, onContact, onAbout, onWhatIDo }: HomeProps) {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center px-4 overflow-hidden">
      {/* Background Hero Glow */}
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
              PORTFOLIO // DIGITAL MARKETING • CONTENT • SYSTEMS
            </span>
            
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.85] mb-6 text-text-main text-glow">
              SANGEET <br />
              <span className="text-secondary italic font-light drop-shadow-[0_0_15px_rgba(244,157,181,0.3)]">
                SHAW.
              </span>
            </h1>

            <p className="font-headline text-[10px] md:text-xs uppercase tracking-[0.35em] text-primary font-black mb-8">
              DIGITAL MARKETING. CONTENT. PRODUCTS. BUILT WITH AI.
            </p>

            <div className="space-y-4 max-w-xl mb-10">
              <p className="text-lg text-text-muted font-body leading-relaxed">
                I work at the intersection of <span className="text-text-main font-semibold">digital marketing, social media, content creation</span> and <span className="text-text-main font-semibold">AI-assisted product development</span> — helping businesses build their digital presence and the systems behind it.
              </p>
              <p className="text-sm text-text-muted/80 font-medium leading-relaxed border-l border-primary/20 pl-6 italic">
                I don't only launch campaigns. I understand the business problem, craft the marketing & video content, engineer the digital workflow or web application, and track conversions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={onViewProjects}
                className="bg-primary text-on-primary px-8 py-4 font-bold tracking-tight rounded-sm hover:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,208,0.3)] flex items-center gap-3"
              >
                View Flagship Work
                <ArrowRight className="w-4 h-4" />
              </button>
              
              {onWhatIDo && (
                <button 
                  onClick={onWhatIDo}
                  className="ghost-border text-primary px-8 py-4 font-bold tracking-tight hover:bg-primary/5 transition-colors rounded-sm"
                >
                  What I Do
                </button>
              )}

              <button 
                onClick={onAbout}
                className="text-text-muted hover:text-text-main px-4 py-4 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                About Me
              </button>

              <a 
                href="/assets/sangeetshawresume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-bold text-xs tracking-widest uppercase border-b border-primary/20 pb-1 ml-auto md:ml-0"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            <div className="glass-card p-5 ghost-border space-y-3 group hover:bg-primary/5 transition-all">
              <div className="w-9 h-9 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-primary font-black mb-1">01 — Marketing</div>
                <div className="text-[11px] text-text-muted leading-tight">Meta Ads, CAPI, lead funnels & conversion tracking</div>
              </div>
            </div>

            <div className="glass-card p-5 ghost-border space-y-3 group hover:bg-secondary/5 transition-all">
              <div className="w-9 h-9 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-secondary font-black mb-1">02 — Content</div>
                <div className="text-[11px] text-text-muted leading-tight">Short-form Reels, video editing & high-retention carousels</div>
              </div>
            </div>

            <div className="glass-card p-5 ghost-border space-y-3 group hover:bg-primary/5 transition-all">
              <div className="w-9 h-9 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-primary font-black mb-1">03 — Products</div>
                <div className="text-[11px] text-text-muted leading-tight">Full-stack web apps, CashALL recommerce & ERP systems</div>
              </div>
            </div>

            <div className="glass-card p-5 ghost-border space-y-3 group hover:bg-secondary/5 transition-all">
              <div className="w-9 h-9 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-secondary font-black mb-1">04 — AI Building</div>
                <div className="text-[11px] text-text-muted leading-tight">Rapid prototyping, Antigravity & automated workflows</div>
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
                  <span className="font-headline text-[9px] uppercase tracking-widest text-primary font-black">Identity</span>
                  <p className="text-[10px] text-text-main font-bold leading-tight">Marketer • Content Creator • System Builder</p>
                  <p className="text-[8px] text-text-muted font-medium opacity-80">Open to brand campaigns, social growth & digital systems</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}