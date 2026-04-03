import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  ExternalLink,
  Target,
  FileText,
  Binary,
  Cpu,
  Network,
  Activity,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Receipt,
  Users
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function BillCaseStudy({ onBack }: CaseStudyProps) {
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
            href="https://drive.google.com/drive/folders/1ElkFZjWs34ARfNYrkRNAxK2hpKPXhI1e" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            View Documentation
          </a>
          <div className="flex items-center gap-4 text-[9px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-6">
            <Activity className="w-3 h-3 text-secondary" />
            Status: Fully Operational
          </div>
        </div>
      </nav>

      {/* 1. HERO: REDUCING FRICTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-secondary pl-4 block">
              Financial System // Billing Automation
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.9]">
              REDUCING FRICTION <br />
              <span className="text-primary italic font-light font-headline">IN BILLING WORKFLOWS.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              An automated billing system designed to streamline GST invoice generation by integrating customer records, product lookup, and structured record management.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-primary uppercase tracking-widest font-bold">Workflow Efficiency</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Reduces manual entry errors by over 90% via structured lookups</div>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">Automation Core</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Integrated Google Apps Script + Transaction Logging</div>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default">
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70">Architecture</span>
            <div className="text-xs font-bold leading-relaxed">Input Ingestion → GST Engine → Auto-Generated Invoices</div>
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
              Manual billing led to <span className="text-text-main">repetitive work</span> and high error potential.
            </p>
            <ul className="space-y-4">
              {[
                "Repetitive entry of customer details for every bill",
                "Product price inconsistencies across manual records",
                "Lack of centralized, searchable customer and transaction records",
                "Significant risk of human error during GST calculations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-xs text-text-muted group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-secondary/5 border-l-2 border-secondary/20">
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Impact Failure</p>
              <p className="text-xs text-text-muted leading-relaxed italic opacity-80 underline underline-offset-4 decoration-secondary/10">Inconsistent billing leads to accounting chaos and poor customer trust.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 bg-bg-surface/40 glass-refraction p-12 ghost-border rounded-sm relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
            <Receipt className="w-80 h-80 text-primary" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Target className="text-primary w-4 h-4" />
              <h3 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary font-black">Strategic Objective</h3>
            </div>
            <p className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight mb-8 uppercase tracking-widest italic">
              Automate the entire billing chain while maintaining a structured record of every transaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-all">
                  <Users className="text-primary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Centralized Records</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Integration of searchable customer databases to eliminate re-entry.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover/item:bg-secondary transition-all">
                  <TrendingDown className="w-4 h-4 text-secondary group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Friction Reduction</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Standardization of the billing flow to minimize human decision points.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PIPELINE */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-headline text-[9px] uppercase tracking-[0.4em] text-primary font-bold">Automation Flow</span>
          <h2 className="text-4xl font-headline font-bold text-text-main tracking-tighter uppercase">Billing Chain Pipeline</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: "01", 
              name: "Input Layer", 
              desc: "Dynamic customer selection and product lookup using a standardized relational database.",
              extra: "Searchable Lookup",
              icon: <Database /> 
            },
            { 
              step: "02", 
              name: "Logic Engine", 
              desc: "Automated GST calculation and pricing mapping based on item categories.",
              extra: "Calculated Logic",
              icon: <Binary /> 
            },
            { 
              step: "03", 
              name: "Generation", 
              desc: "Scripted filling of professional invoice templates and automated save-to-archive functionality.",
              extra: "Scripted Invoicing",
              icon: <Cpu /> 
            },
            { 
              step: "04", 
              name: "Output Layer", 
              desc: "Structured record management and automated sales logs for future analytical ingestion.",
              extra: "Structured Records",
              icon: <Activity /> 
            }
          ].map((item, i) => (
            <div key={i} className="group relative glass-card p-10 ghost-border hover:bg-primary/5 transition-all duration-700">
              <div className="flex justify-between items-start mb-8">
                <div className="text-primary group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm font-headline text-xs font-black text-primary tracking-tighter shadow-[0_0_15px_rgba(244,157,181,0.1)]">
                  {item.step}
                </div>
              </div>
              <h4 className="font-headline text-lg font-bold text-text-main mb-4 tracking-tight uppercase">{item.name}</h4>
              <p className="text-[11px] text-text-muted leading-relaxed mb-6">{item.desc}</p>
              <div className="pt-6 border-t border-primary/5 mt-auto">
                <span className="px-3 py-1.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">{item.extra}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL DETAILS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 glass-card p-12 bg-primary/5 border-dashed border-primary/20 hover:border-solid transition-all">
          <h3 className="font-headline text-2xl font-bold text-text-main mb-12 flex items-center gap-4 uppercase tracking-tight">
            <ShieldCheck className="text-primary w-6 h-6" />
            Infrastructure Status
          </h3>
          <ul className="space-y-8">
            {[
              { label: "Core Registry", sys: "Customer Database Table", status: "Secure" },
              { label: "Logic Hub", sys: "GST Pricing Logic (Scripted)", status: "Active" },
              { label: "Workflow", sys: "Google Sheets Triggered Automation", status: "Operational" },
              { label: "Archive Layer", sys: "PDF Invoice Vault (Automated)", status: "Enabled" },
              { label: "Compliance", sys: "Standardized Calculation Rules", status: "Active" }
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
            <h3 className="font-headline text-2xl font-bold text-text-main uppercase tracking-tight">Challenges & Adaptations</h3>
            <p className="text-text-muted leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 text-sm">
              "The technical hurdle wasn't just generating a bill—it was ensuring that every bill correctly updated a central ledger for future analysis."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: "Data Integrity", 
                prob: "Entry duplication led to inconsistent customer records.", 
                sol: "Implemented a standardized identification logic for new/existing customers." 
              },
              { 
                label: "Validation", 
                prob: "Incorrect item entry caused invoice calculation failures.", 
                sol: "Added hard validation rules and product lookup constraints." 
              },
              { 
                label: "Workflow Stability", 
                prob: "Manual record overrides broke the automation chain.", 
                sol: "Moving to a strictly script-driven ingestion model to maintain state." 
              },
              { 
                label: "Optimization", 
                prob: "Early generation logic was slow during high-volume periods.", 
                sol: "Optimized sheet-side formula dependencies with Apps Script." 
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

      {/* 5. SUMMARY: REAL-WORLD USABILITY */}
      <section className="bg-bg-surface border-y border-primary/10 py-32 px-8 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none uppercase">
            AUTOMATION SHOULD <span className="text-primary italic font-headline">SIMPLIFY, NOT COMPLICATE.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Data structure is the non-negotiable backbone of any workflow. This system proves that impactful change starts with organized execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left border-t border-primary/10 pt-16">
          <div className="space-y-8">
            <h4 className="font-headline text-[10px] uppercase tracking-widest text-primary font-black flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Outcome Summary
            </h4>
            <ul className="space-y-5">
              {[
                "Faster billing process with zero manual calculation",
                "Significant reduction in repetitive administrative tasks",
                "Cleaner data organization for year-end calculations",
                "Improved customer trust via professional invoicing"
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
              <Lightbulb className="w-3 h-3" />
              Key Learnings
            </h4>
            <ul className="space-y-5">
              {[
                "Real-world usability is far more valuable than feature richness",
                "Standardization is the only way to scale small operations",
                "Clean data logs are the starting point for business growth"
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
          <p className="text-sm font-headline uppercase tracking-[0.2em] text-text-main font-bold mb-4">Final Verdict:</p>
          <p className="text-2xl font-headline font-bold text-primary italic drop-shadow-[0_0_10px_rgba(244,157,181,0.15)] uppercase">"Standardized logic converts chaos into structured growth."</p>
        </div>
      </section>

    </div>
  );
}
