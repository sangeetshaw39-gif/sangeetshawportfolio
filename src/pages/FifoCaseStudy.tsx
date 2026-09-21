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
  Layers,
  History
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function FifoCaseStudy({ onBack }: CaseStudyProps) {
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
            href="https://drive.google.com/drive/folders/13k2bVpFxBIr728i9hX_AqnsMJ-iWg4a_" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            View Documentation
          </a>
          <div className="flex items-center gap-4 text-[9px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-6">
            <Activity className="w-3 h-3 text-secondary" />
            Status: Logic Validated
          </div>
        </div>
      </nav>

      {/* 1. HERO: STRUCTURING FLOW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-secondary pl-4 block">
              Flagship Implementation // FIFO Inventory System
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.9]">
              STRUCTURING INVENTORY <br />
              <span className="text-primary italic font-light font-headline">FLOW THROUGH LOGIC.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              A structured inventory tracking system designed to enforce FIFO (First-In-First-Out) logic within a traditionally manual workflow using Google Sheets and Apps Script.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-primary uppercase tracking-widest font-bold">Logic Enforcement</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Automatically maps outgoing stock to oldest available batches</div>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">System Core</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Google Apps Script // JavaScript-based logic automation</div>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default">
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70">Architecture</span>
            <div className="text-xs font-bold leading-relaxed">Structured Entry → Apps Script Logic → State Management</div>
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
              The existing trading workflow was <span className="text-text-main">traditionally manual</span>, leading to critical visibility gaps.
            </p>
            <ul className="space-y-4">
              {[
                "No consistent FIFO enforcement across stock categories",
                "Manual stock updates led to repetitive recording errors",
                "Zero visibility into batch-level movement and depletion",
                "Difficulty identifying exact stock aging and expiration risks"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-xs text-text-muted group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-secondary/5 border-l-2 border-secondary/20">
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Operational Risk</p>
              <p className="text-xs text-text-muted leading-relaxed italic opacity-80 underline underline-offset-4 decoration-secondary/10">Inconsistent tracking leads to financial dead-stock and untraceable supply chains.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 bg-bg-surface/40 glass-refraction p-12 ghost-border rounded-sm relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
            <Layers className="w-80 h-80 text-primary" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Target className="text-primary w-4 h-4" />
              <h3 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary font-black">Strategic Objective</h3>
            </div>
            <p className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight mb-8 uppercase tracking-widest">
              Design a system that enforces FIFO logic automatically while maintaining real-world simplicity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-all">
                  <Zap className="text-primary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Automated Tracking</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Reduction of manual recording dependencies via scripted flow.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover/item:bg-secondary transition-all">
                  <History className="w-4 h-4 text-secondary group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Batch Traceability</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Complete visibility into when a specific stock batch was depleted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PIPELINE */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-headline text-[9px] uppercase tracking-[0.4em] text-primary font-bold">Logic Framework</span>
          <h2 className="text-4xl font-headline font-bold text-text-main tracking-tighter uppercase">Inventory Flow Pipeline</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: "01", 
              name: "Ingestion Layer", 
              desc: "Captures stock entries and sales records in a strictly structured format to prevent logic failure.",
              extra: "Structured Data Entry",
              icon: <Database /> 
            },
            { 
              step: "02", 
              name: "FIFO Allocation", 
              desc: "Scripted mechanism identifies oldest available batches for incoming deduction requests.",
              extra: "Logical Mapping",
              icon: <Binary /> 
            },
            { 
              step: "03", 
              name: "Batch Processing", 
              desc: "Executes automated stock reduction across multiple batches if necessary for a single sale.",
              extra: "Sequential Deduction",
              icon: <Cpu /> 
            },
            { 
              step: "04", 
              name: "State Output", 
              desc: "Reflects updated inventory state and movement logs for end-to-end traceability.",
              extra: "Traceable Logs",
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
            System Implementation
          </h3>
          <ul className="space-y-8">
            {[
              { label: "Platform", sys: "Google Sheets Core", status: "Operational" },
              { label: "Automation", sys: "Google Apps Script (ES6+)", status: "Active" },
              { label: "Logic Type", sys: "Sequential Batch Mapping (FIFO)", status: "Verified" },
              { label: "Data Quality", sys: "In-cell Validation & Entry Forms", status: "Enabled" },
              { label: "Scalability", sys: "Optimized for MSME scale operations", status: "Production" }
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
            <h3 className="font-headline text-2xl font-bold text-text-main uppercase tracking-tight">Interventions & Fixes</h3>
            <p className="text-text-muted leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 text-sm">
              "The challenge was not the FIFO algorithm itself, but creating a system that wouldn't break under real-world manual input conditions."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: "Data Sanitization", 
                prob: "Inconsistent input formats (dates/units) broke the logic script.", 
                sol: "Standardized all entry templates with hard validation constraints." 
              },
              { 
                label: "Allocation Errors", 
                prob: "Incorrect stock mapping during initial multi-batch deductions.", 
                sol: "Refined recursive FIFO allocation rules for split-batch orders." 
              },
              { 
                label: "System Fragility", 
                prob: "Manual cell overrides were corrupting historical traceability.", 
                sol: "Added protecting scripting and automated log-appending." 
              },
              { 
                label: "Debugging", 
                prob: "Edge cases in inventory depletion were difficult to trace.", 
                sol: "Implemented AI-assisted simulation to stress-test logic patterns." 
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

      {/* 5. SUMMARY: LOGIC OVER TOOLS */}
      <section className="bg-bg-surface border-y border-primary/10 py-32 px-8 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none uppercase">
            SIMPLICITY IS <span className="text-primary italic">STRUCTURED LOGIC.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Systems fail more due to poor inputs than poor logic. This implementation focuses on the bridge between manual work and digital structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl text-left border-t border-primary/10 pt-16">
          <div className="space-y-8">
            <h4 className="font-headline text-[10px] uppercase tracking-widest text-primary font-black flex items-center gap-2">
              <Zap className="w-3 h-3" />
              Impact Summary
            </h4>
            <ul className="space-y-5">
              {[
                "Improved consistency in inventory tracking and audits",
                "Significant reduction in manual recording hours",
                "Full visibility of stock aging and depletion logic",
                "Standardized operational reporting for stakeholders"
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
                "Structured thinking matters more than the specific tools used",
                "User adoption relies on maintaining existing familiarity of UI",
                "Data structure is the non-negotiable backbone of automation"
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
          <p className="text-2xl font-headline font-bold text-primary italic drop-shadow-[0_0_10px_rgba(244,157,181,0.15)] uppercase">"Brings enterprise logic to small-scale operational data."</p>
        </div>
      </section>

    </div>
  );
}
