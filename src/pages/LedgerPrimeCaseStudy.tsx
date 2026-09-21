import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink,
  Target,
  FileText,
  Binary,
  Cpu,
  Network,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  Wallet,
  Keyboard,
  Container,
  Database,
  Sparkles,
  Rocket
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function LedgerPrimeCaseStudy({ onBack }: CaseStudyProps) {
  return (
    <div className="space-y-32 py-12">
      
      {/* HUD Navigation */}
      <nav className="flex items-center justify-between border-b border-primary/10 pb-8 mb-12">
        <button 
          onClick={onBack} 
          className="group flex items-center gap-3 font-headline text-[10px] uppercase tracking-[0.3em] text-text-muted hover:text-primary transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Systems
        </button>
        <div className="flex items-center gap-6">
          <a 
            href="/assets/ledgerprime.pdf" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Open Desktop Instance
          </a>
          <div className="flex items-center gap-4 text-[9px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-6">
            <Activity className="w-3 h-3 animate-pulse" />
            Status: Production Ready
          </div>
        </div>
      </nav>

      {/* 1. HERO: REDEFINING ACCOUNTING */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-secondary pl-4 block">
              Flagship ERP // LedgerPrime
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.9]">
              REDEFINING ACCOUNTING: <br />
              <span className="text-primary italic font-light">SPEED OF TALLY, POWER OF WEB.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              LedgerPrime is a high-performance, keyboard-centric accounting ecosystem built for professional speed and financial precision, bridging the gap between legacy desktop stability and modern web flexibility.
            </p>
          </motion.div>
        </div>

        {/* System Characteristics Summary */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-primary uppercase tracking-widest font-bold">Performance</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">&lt;50ms Input Latency</div>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">Architecture</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Desktop-First (Electron)</div>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default">
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70">Scale</span>
            <div className="text-xs font-bold leading-relaxed">Multi-Company Management & SQLite Persistence</div>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & OBJECTIVE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-headline font-bold text-text-main uppercase tracking-tight flex items-center gap-4">
              <span className="w-8 h-px bg-primary"></span>
              The Problem
            </h2>
            <p className="text-sm text-text-muted font-medium leading-relaxed">
              Modern web-based accounting software often trades speed for aesthetics.
            </p>
            <ul className="space-y-4">
              {[
                "Mouse-heavy workflows slowing down data entry",
                "Input lag when processing hundreds of daily vouchers",
                "Lack of robust offline capabilities for sensitive financial data"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-xs text-text-muted group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-secondary/5 border-l-2 border-secondary/20">
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Analyst Friction</p>
              <p className="text-xs text-text-muted leading-relaxed italic opacity-80 underline underline-offset-4 decoration-secondary/10">Professional accountants are frustrated by inefficient workflows that don't match the speed of legacy tools.</p>
            </div>
          </div>
          <p className="text-sm font-headline font-bold text-text-main uppercase tracking-widest leading-loose">
            LedgerPrime was built for a specific purpose: <br />
            <span className="text-primary italic text-lg drop-shadow-[0_0_10px_rgba(244,157,181,0.2)]">professional speed meets technological precision.</span>
          </p>
        </div>
        
        <div className="lg:col-span-7 bg-bg-surface/40 glass-refraction p-12 ghost-border rounded-sm relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
            <Keyboard className="w-80 h-80 text-primary" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Target className="text-primary w-4 h-4" />
              <h3 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary font-black">Strategic Objective</h3>
            </div>
            <p className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight mb-8">
              To build a robust, "keyboard-first" ERP that mirrors the legendary efficiency of classic desktop tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-all">
                  <Zap className="text-primary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Input Velocity</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Optimized focus engines for rapid-fire data entry without mouse usage.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover/item:bg-secondary transition-all">
                  <BarChart3 className="text-secondary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Reporting Fidelity</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">High-fidelity PDF and Excel exports that meet professional standards.</p>
              </div>
            </div>
            <p className="text-[10px] text-text-muted/60 font-medium italic pt-4">
              "Focused on maintaining the speed of legacy desktop software while providing a pixel-perfect modern interface."
            </p>
          </div>
        </div>
      </section>

      {/* VIBE CODING CALLOUT */}
      <section className="relative px-8 py-20 glass-card bg-primary/5 border-dashed border-primary/20 overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <Sparkles className="w-64 h-64 text-primary" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-4">
            <Rocket className="text-secondary w-6 h-6 animate-bounce" />
            <h3 className="font-headline text-2xl font-bold text-text-main uppercase tracking-tighter">
              The "Vibe Coding" Philosophy
            </h3>
          </div>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
            As a <span className="text-primary font-black uppercase tracking-widest">non-coder</span>, I focus on the <span className="text-secondary italic">vision, idea, and strategic execution</span>. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-primary/10">
            <div className="space-y-4">
              <h4 className="font-headline text-[10px] uppercase tracking-widest text-primary font-black">System Orchestration</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                By leveraging <span className="text-text-main font-bold">Antigravity and Gemini AI</span>, I bridged the gap between complex business logic and high-performance desktop software. I didn't write every line of code myself—I orchestrated a system that delivered exactly what the client needed through precise AI-assisted engineering.
              </p>
            </div>
            <div className="space-y-4">
                <h4 className="font-headline text-[10px] uppercase tracking-widest text-secondary font-black">Result Driven</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  This approach allowed me to move from concept to a production-ready ERP in record time, proving that <span className="text-text-main font-bold">strategic execution</span> matters more than traditional syntax mastery.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* 3. THE PIPELINE: STEP-BY-STEP */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-headline text-[9px] uppercase tracking-[0.4em] text-primary font-bold">Development Roadmap</span>
          <h2 className="text-4xl font-headline font-bold text-text-main tracking-tighter">Process Pipeline</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: "01", 
              name: "Architecture", 
              desc: "Designing an ACID-compliant SQLite schema to handle complex relational data across books.",
              extra: "Structured persistence.",
              icon: <Database /> 
            },
            { 
              step: "02", 
              name: "Grid Engine", 
              desc: "Engineering a custom React data grid that supports hierarchical inventory selection.",
              extra: "3-Keystroke SKU Filter.",
              icon: <Binary /> 
            },
            { 
              step: "03", 
              name: "Taxation Logic", 
              desc: "Implementing a dynamic engine that auto-calculates GST based on ledger states.",
              extra: "Real-time compliance.",
              icon: <Cpu /> 
            },
            { 
              step: "04", 
              name: "Reporting Layer", 
              desc: "Developing a printing engine using jsPDF and ExcelJS for financial books.",
              extra: "Professional Exports.",
              icon: <FileText /> 
            }
          ].map((item, i) => (
            <div key={i} className="group relative glass-card p-10 ghost-border hover:bg-primary/5 transition-all duration-700">
              <div className="flex justify-between items-start mb-8">
                <div className="text-primary group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm font-headline text-xs font-black text-primary tracking-tighter shadow-[0_0_15px_rgba(244,157,181,0.1)]">
                  {item.step}
                </div>
              </div>
              <h4 className="font-headline text-lg font-bold text-text-main mb-4 tracking-tight">{item.name}</h4>
              <p className="text-[11px] text-text-muted leading-relaxed mb-6">{item.desc}</p>
              <div className="pt-6 border-t border-primary/5 mt-auto">
                <span className="px-3 py-1.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">{item.extra}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[9px] text-text-muted uppercase tracking-[0.5em] opacity-40">Engineering Speed // Financial Precision</p>
      </section>

      {/* 4. TECHNICAL DEEP DIVE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 glass-card p-12 bg-primary/5 border-dashed border-primary/20 hover:border-solid transition-all">
          <h3 className="font-headline text-2xl font-bold text-text-main mb-12 flex items-center gap-4">
            <ShieldCheck className="text-primary w-6 h-6" />
            Infrastructure Status
          </h3>
          <ul className="space-y-8">
            {[
              { label: "State Persistence", sys: "Better-SQLite3 for local data integrity", status: "Secure" },
              { label: "Application Engine", sys: "React 19 + TypeScript (Custom Hooks)", status: "Active" },
              { label: "Data Pipeline", sys: "IPC-bridge for automated .lpbackup system", status: "Enabled" },
              { label: "Desktop Shell", sys: "Electron Framework (Cross-platform)", status: "Live" },
              { label: "Deployment", sys: "Packaged Assets (Windows/macOS)", status: "Production" }
            ].map((item, i) => (
              <li key={i} className="flex justify-between items-center border-b border-primary/5 pb-6 last:border-none">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-text-muted font-bold">{item.label}</span>
                  <p className="text-sm font-bold text-text-main">{item.sys}</p>
                </div>
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest rounded-sm border border-primary/20">{item.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-text-main uppercase tracking-tight">Challenges & Interventions</h3>
            <p className="text-text-muted leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 text-sm">
              "Early versions faced input responsiveness issues when scaling to thousands of ledger entries."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: "Responsive Entry", 
                prob: "Standard React inputs felt 'mushy' for rapid Tally-style entry.", 
                sol: "Re-engineered focus logic with global KeyDown listeners for 'Enter-to-Next' flow." 
              },
              { 
                label: "Search Performance", 
                prob: "Managing 10k+ inventory items without search lag.", 
                sol: "Implemented a hierarchical filtering workflow that narrows results progressively." 
              },
              { 
                label: "Relational Gravity", 
                prob: "Cascading updates across vouchers and trial balance.", 
                sol: "Designed an event-driven ledger update system using SQLite transactions." 
              },
              { 
                label: "Print Accuracy", 
                prob: "HTML-to-PDF conversions were inconsistent across devices.", 
                sol: "Built a direct buffer-based PDF generation pipeline using custom templates." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/2 rounded-sm hover:translate-y-[-4px] transition-all duration-300">
                <span className="font-headline text-[9px] uppercase text-primary tracking-widest block mb-4 font-black">{item.label}</span>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-1 w-2 h-2 bg-secondary opacity-30 rounded-full" />
                    <h4 className="text-[10px] uppercase font-bold text-text-muted mb-1">Problem</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{item.prob}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-4 top-1 w-2 h-2 bg-primary opacity-30 rounded-full" />
                    <h4 className="text-[10px] uppercase font-bold text-primary mb-1">Intervention</h4>
                    <p className="text-xs text-text-main font-medium leading-relaxed">{item.sol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUMMARY: ENABLING FINANCIAL SPEED */}
      <section className="bg-bg-surface border-y border-primary/10 py-32 px-8 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none">
            ENGINEERING <span className="text-primary italic">PROFESSIONAL FINANCIAL TOOLS.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
            LedgerPrime brings modern stability and speed to the professional accountant's workflow, ensuring no compromise on performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left border-t border-primary/10 pt-16">
          <div className="space-y-8">
            <h4 className="font-headline text-[10px] uppercase tracking-widest text-primary font-black flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Capabilities // Enables
            </h4>
            <ul className="space-y-5">
              {[
                "Full ERP capabilities: Sales, Purchase, Contra, and Receipt/Payment",
                "Real-time Balance Sheets and Trial Balances",
                "Hierarchical inventory selection (Brand → Part → SKU)",
                "Offline-first performance with local SQLite encryption"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-xs text-text-main font-medium group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8 opacity-60">
            <h4 className="font-headline text-[10px] uppercase tracking-widest text-secondary font-black flex items-center gap-2">
              <AlertTriangle className="w-3 h-3" />
              Constraints // Non-Scope
            </h4>
            <ul className="space-y-5">
              {[
                "Desktop-bound (Local SQLite) by design for maximum privacy",
                "Optimized for keyboard input (less focus on mobile/touch)",
                "Requires local backup management (.lpbackup system)"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-xs text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-10 glass-card ghost-border bg-bg-surface/60 max-w-2xl w-full border-t-2 border-primary/20">
          <p className="text-sm font-headline uppercase tracking-[0.2em] text-text-main font-bold mb-4">Core Value Proposition:</p>
          <p className="text-2xl font-headline font-bold text-primary italic drop-shadow-[0_0_10px_rgba(244,157,181,0.15)]">"Building for speed, designed for precision."</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10 pt-12">
          <a 
            href="/assets/ledgerprime.pdf" 
            target="_blank" 
            className="px-12 py-5 bg-primary text-bg-dark font-headline font-black uppercase tracking-[0.2em] text-xs hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(255,193,208,0.3)] flex items-center gap-4 group"
          >
            Launch Case Study PDF
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}
