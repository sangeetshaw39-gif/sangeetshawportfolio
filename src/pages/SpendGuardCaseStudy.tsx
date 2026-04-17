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
  Rocket,
  Sparkles
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function SpendGuardCaseStudy({ onBack }: CaseStudyProps) {
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
            href="https://spendguardai.vercel.app/" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all"
          >
            <ExternalLink className="w-3 h-3" />
            Launch Live Instance
          </a>
          <div className="flex items-center gap-4 text-[9px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-6">
            <Activity className="w-3 h-3 animate-pulse" />
            Status: Operational
          </div>
        </div>
      </nav>

      {/* 1. HERO: CHAOS TO CLARITY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-secondary pl-4 block">
              Flagship Implementation // SpendGuard AI
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.9]">
              STRUCTURING CHAOS <br />
              <span className="text-primary italic font-light">INTO FINANCIAL CLARITY.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              SpendGuardAI is a practical financial intelligence system designed to process inconsistent business expense data and convert it into structured, decision-ready insights using a hybrid pipeline of deterministic logic and AI-assisted interpretation.
            </p>
          </motion.div>
        </div>

        {/* System Characteristics Summary */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-primary uppercase tracking-widest font-bold">Input Flexibility</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Accepts non-standardized CSV/Excel files with inconsistent schemas</div>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">Processing Approach</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Hybrid pipeline (rule-based validation + AI-assisted enrichment)</div>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default">
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70">Architecture Stack</span>
            <div className="text-xs font-bold leading-relaxed">Frontend → Supabase (Auth) → FastAPI → AI Layer</div>
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
              In most small and mid-sized businesses, financial data exists — <span className="text-text-main">but not in a usable form.</span>
            </p>
            <ul className="space-y-4">
              {[
                "Spread across Excel exports, Tally reports, and manual logs",
                "Structurally inconsistent across files",
                "Missing key fields or standardized naming"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-xs text-text-muted group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-secondary/5 border-l-2 border-secondary/20">
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Impact Failure</p>
              <p className="text-xs text-text-muted leading-relaxed italic opacity-80 underline underline-offset-4 decoration-secondary/10">Analysis becomes manual, anomalies go unnoticed, and decisions are based on partial visibility.</p>
            </div>
          </div>
          <p className="text-sm font-headline font-bold text-text-main uppercase tracking-widest leading-loose">
            SpendGuardAI was built to address a specific gap: <br />
            <span className="text-primary italic text-lg drop-shadow-[0_0_10px_rgba(244,157,181,0.2)]">not data collection — but data usability.</span>
          </p>
        </div>
        
        <div className="lg:col-span-7 bg-bg-surface/40 glass-refraction p-12 ghost-border rounded-sm relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
            <Binary className="w-80 h-80 text-primary" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Target className="text-primary w-4 h-4" />
              <h3 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary font-black">Strategic Objective</h3>
            </div>
            <p className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight mb-8">
              Transform raw, inconsistent expense data into a structured analytical layer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-all">
                  <Zap className="text-primary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Abnormal Detection</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Identification of abnormal spending patterns and clusters.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover/item:bg-secondary transition-all">
                  <BarChart3 className="text-secondary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Support Insights</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Generation of interpretable, decision-support insights automatically.</p>
              </div>
            </div>
            <p className="text-[10px] text-text-muted/60 font-medium italic pt-4">
              "This is achieved without enforcing rigid input formats, making the system adaptable to real-world business data conditions."
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
            Beyond the technical stack, SpendGuardAI is a product of <span className="text-primary font-black uppercase tracking-widest">Vibe Coding</span>—the art of using AI orchestration to deliver production-ready systems at the speed of thought.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-primary/10">
            <div className="space-y-4">
              <h4 className="font-headline text-[10px] uppercase tracking-widest text-primary font-black">AI Orchestration</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Using <span className="text-text-main font-bold">Antigravity and Gemini</span>, I was able to bridge the massive gap between raw business ideas and a functional, scalable AI pipeline. As a non-coder, I focused on the logic and the "vibe" of the solution, while AI handled the syntax.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-[10px] uppercase tracking-widest text-secondary font-black">Client-Centric Execution</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                This methodology allowed me to prototype, iterate, and ship a complex financial tool that solved the client's problem exactly as envisioned, proving that <span className="text-text-main font-bold">intent and execution</span> are the new universal languages of development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PIPELINE: STEP-BY-STEP */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-headline text-[9px] uppercase tracking-[0.4em] text-primary font-bold">Transmission Flow</span>
          <h2 className="text-4xl font-headline font-bold text-text-main tracking-tighter">Analysis Pipeline</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: "01", 
              name: "Ingestion", 
              desc: "Supports direct upload of CSV and Excel files without requiring predefined templates.",
              extra: "Flexible schema entry.",
              icon: <Database /> 
            },
            { 
              step: "02", 
              name: "Standardization", 
              desc: "Dynamic mapping, field normalization (date, amount, vendor), and malformed entry handling.",
              extra: "Safe defaults injection.",
              icon: <Cpu /> 
            },
            { 
              step: "03", 
              name: "Pattern Detection", 
              desc: "Two-layer detection using statistical logic (Mean/StdDev) and AI categorization.",
              extra: "LLM-assisted fallback.",
              icon: <Network /> 
            },
            { 
              step: "04", 
              name: "Insight Delivery", 
              desc: "Outputs deterministic summaries and AI-generated observations on concern areas.",
              extra: "Actionable summaries.",
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
              <h4 className="font-headline text-lg font-bold text-text-main mb-4 tracking-tight">{item.name}</h4>
              <p className="text-[11px] text-text-muted leading-relaxed mb-6">{item.desc}</p>
              <div className="pt-6 border-t border-primary/5 mt-auto">
                <span className="px-3 py-1.5 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-widest rounded-full whitespace-nowrap">{item.extra}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[9px] text-text-muted uppercase tracking-[0.5em] opacity-40">Directional Insights // Not Predictive Forecasting</p>
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
              { label: "State Persistence", sys: "Supabase Auth + Hybrid Analytics Storage", status: "Secure" },
              { label: "Decision Engine", sys: "Google Gemini (categorization & insights)", status: "Active" },
              { label: "Data Pipeline", sys: "FastAPI / Python Orchestration Layer", status: "Enabled" },
              { label: "Frontend", sys: "Lightweight Chat Interface (React 19)", status: "Live" },
              { label: "Deployment", sys: "Backend: Render | Frontend: Vercel", status: "Production" }
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
              "Early versions of the system were unstable due to unpredictable input formats and over-reliance on AI outputs."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: "Input Variability", 
                prob: "Every dataset followed a different structure, breaking the pipeline repeatedly.", 
                sol: "Designed a flexible column-mapping engine using pattern recognition." 
              },
              { 
                label: "AI Reliability", 
                prob: "AI responses were inconsistent (failures, rate limits).", 
                sol: "Implemented validation layers and added fallback categorization logic." 
              },
              { 
                label: "Data Integrity", 
                prob: "Missing fields and invalid entries caused cascade failures.", 
                sol: "Introduced defensive preprocessing and default value injection." 
              },
              { 
                label: "Pipeline Stability", 
                prob: "Errors cascaded across stages causing full crash.", 
                sol: "Isolated failure points and designed a graceful degradation system." 
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

      {/* 5. SUMMARY: ENABLING FINANCIAL INTELLIGENCE */}
      <section className="bg-bg-surface border-y border-primary/10 py-32 px-8 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none">
            ENGINEERING <span className="text-primary italic">USABLE FINANCIAL INTELLIGENCE.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
            SpendGuardAI does not attempt to replace financial expertise. It focuses on making existing data interpretable and actionable.
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
                "Converts unstructured expense data into structured datasets",
                "Highlights unusual spending behavior using simple statistical logic",
                "Provides interpretable AI-assisted observations",
                "Reduces manual effort required for initial financial analysis"
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
                "Does not predict future financial outcomes",
                "Does not replace accounting systems (e.g. Tally)",
                "Does not guarantee decision accuracy"
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
          <p className="text-2xl font-headline font-bold text-primary italic drop-shadow-[0_0_10px_rgba(244,157,181,0.15)]">"It reduces the gap between 'having data' and 'understanding it'."</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10 pt-12">
          <a 
            href="https://spendguardai.vercel.app/" 
            target="_blank" 
            className="px-12 py-5 bg-primary text-bg-dark font-headline font-black uppercase tracking-[0.2em] text-xs hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(255,193,208,0.3)] flex items-center gap-4 group"
          >
            Explore Live Implementation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1_YxmQXA2LhvWGa9bb-fTXuhPswnqR35a" 
            target="_blank" 
            className="px-12 py-5 border border-primary/30 text-primary font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all flex items-center gap-4 group"
          >
            View Technical Architecture
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}
