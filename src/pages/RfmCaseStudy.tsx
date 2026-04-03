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
  PieChart,
  Filter
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function RfmCaseStudy({ onBack }: CaseStudyProps) {
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
            href="/assets/rfm_revenue_intelligence_dashboard.pdf" 
            target="_blank" 
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all"
          >
            <FileText className="w-3 h-3" />
            View Full Analysis
          </a>
          <div className="flex items-center gap-4 text-[9px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-6">
            <Activity className="w-3 h-3 text-secondary" />
            Status: Analysis Complete
          </div>
        </div>
      </nav>

      {/* 1. HERO: CUSTOMER VALUE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-secondary pl-4 block">
              Data Analytics // Revenue Intelligence
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.9]">
              UNDERSTANDING CUSTOMER <br />
              <span className="text-primary italic font-light font-headline">VALUE THROUGH DATA.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              A customer-level revenue analysis system built using RFM (Recency, Frequency, Monetary) logic to identify high-value segments and revenue distribution patterns.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-primary uppercase tracking-widest font-bold">Segmentation Logic</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">RFM Scoring Model (1-5 scale) for precise user classification</div>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-white/5 transition-all duration-500">
            <span className="text-[9px] text-secondary uppercase tracking-widest font-bold">Tool Stack</span>
            <div className="text-xs font-medium text-text-main leading-relaxed">Python (Processing) // Power BI (Visualization)</div>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default">
            <span className="text-[9px] uppercase tracking-widest font-black opacity-70">Architecture</span>
            <div className="text-xs font-bold leading-relaxed">Raw Dataset → Python Cleaning → RFM Logic → Insights</div>
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
              Without segmentation, businesses struggle to <span className="text-text-main">optimize customer value.</span>
            </p>
            <ul className="space-y-4">
              {[
                "Zero visibility into individual customer contribution to total revenue",
                "Lack of data-driven segmentation to group customers effectively",
                "Difficulty identifying truly high-value customers versus one-time buyers",
                "Uneven revenue distribution hidden within aggregate metrics"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-xs text-text-muted group">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5 group-hover:scale-150 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 bg-secondary/5 border-l-2 border-secondary/20">
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Analytical Gap</p>
              <p className="text-xs text-text-muted leading-relaxed italic opacity-80 underline underline-offset-4 decoration-secondary/10">Ad-hoc analysis provides snapshots, but not consistent strategic direction.</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-7 bg-bg-surface/40 glass-refraction p-12 ghost-border rounded-sm relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
            <PieChart className="w-80 h-80 text-primary" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Target className="text-primary w-4 h-4" />
              <h3 className="font-headline text-[10px] uppercase tracking-[0.4em] text-primary font-black">Strategic Objective</h3>
            </div>
            <p className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight mb-8 uppercase tracking-widest">
              Segment customers using RFM logic to highlight revenue concentration and enable targeting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/item:bg-primary transition-all">
                  <Filter className="text-primary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">RFM Segmentation</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Applying Recency, Frequency, and Monetary scores to every customer.</p>
              </div>
              <div className="space-y-3 group/item">
                <div className="w-10 h-10 bg-secondary/5 rounded-full flex items-center justify-center group-hover/item:bg-secondary transition-all">
                  <BarChart3 className="text-secondary w-5 h-5 group-hover/item:text-bg-dark" />
                </div>
                <h4 className="text-[10px] uppercase tracking-widest font-black text-text-main">Value Discovery</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">Identifying high-value segments that drive disproportionate revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ANALYTICAL PIPELINE */}
      <section className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-headline text-[9px] uppercase tracking-[0.4em] text-primary font-bold">Data Lifecycle</span>
          <h2 className="text-4xl font-headline font-bold text-text-main tracking-tighter uppercase">Analytical Pipeline</h2>
          <div className="h-0.5 w-24 bg-primary mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { 
              step: "01", 
              name: "Input Layer", 
              desc: "Ingestion of raw transaction datasets, including dates, amounts, and unique customer identifiers.",
              extra: "Transaction Ingestion",
              icon: <Database /> 
            },
            { 
              step: "02", 
              name: "Processing", 
              desc: "Extensive data cleaning, feature extraction, and normalization using Python Pandas.",
              extra: "Cleaned Dataset",
              icon: <Cpu /> 
            },
            { 
              step: "03", 
              name: "Logic Layer", 
              desc: "Implementation of RFM scoring logic to categorize customers into behavioral segments.",
              extra: "Scoring Engine",
              icon: <Binary /> 
            },
            { 
              step: "04", 
              name: "Insights Visualization", 
              desc: "Final delivery via interactive Power BI dashboards for strategic decision support.",
              extra: "Strategic Dashboard",
              icon: <BarChart3 /> 
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
              { label: "Data Language", sys: "Python (Pandas / NumPy)", status: "Completed" },
              { label: "Model Type", sys: "RFM (Behavioral Segmentation)", status: "Validated" },
              { label: "BI Layer", sys: "Power BI Desktop / Services", status: "Active" },
              { label: "Data Pipeline", sys: "Direct Local-to-BI Connector", status: "Enabled" },
              { label: "Validation", sys: "Manual Statistical Cross-Check", status: "Verified" }
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
            <h3 className="font-headline text-2xl font-bold text-text-main uppercase tracking-tight">Analytical Interventions</h3>
            <p className="text-text-muted leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-primary/5 text-sm">
              "The challenge was not the mathematics of RFM, but ensuring the output was actually interpretable for business owners."
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: "Data Quality", 
                prob: "Unstructured raw transaction data with missing identifiers.", 
                sol: "Cleaned and standardized datasets using robust Python preprocessing." 
              },
              { 
                label: "Interpretation", 
                prob: "Static data tables were difficult for stakeholders to interpret.", 
                sol: "Added a dynamic Power BI visualization layer for clear segmentation." 
              },
              { 
                label: "Segmentation", 
                prob: "Default RFM scores were too rigid for the specific retail context.", 
                sol: "Customized scoring weights based on specific business transaction cycles." 
              },
              { 
                label: "Support AI", 
                prob: "Identifying complex clusters was time-consuming.", 
                sol: "Utilized AI-assisted support to optimize transformation logic and patterns." 
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

      {/* 5. SUMMARY: INTERPRETATION OVER DATA */}
      <section className="bg-bg-surface border-y border-primary/10 py-32 px-8 flex flex-col items-center text-center space-y-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse"></div>
        
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none uppercase">
            DATA ALONE <span className="text-primary italic font-headline">DOESN’T CREATE VALUE.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
            Value is created through interpretation. Visualization bridges the gap between raw analysis and strategic business decisions.
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
                "Clear, automated customer segmentation using RFM logic",
                "Deep understanding of revenue concentration patterns",
                "Significantly improved decision-making capability for marketing",
                "Standardized analytical framework for future sales cycles"
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
                "Visualization is the critical final step of any analysis",
                "Structured frameworks outperform ad-hoc analytical efforts",
                "Contextual scoring is more accurate than generic models"
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
          <p className="text-2xl font-headline font-bold text-primary italic drop-shadow-[0_0_10px_rgba(244,157,181,0.15)] uppercase">"Interpretation is the bridge between data and decisions."</p>
        </div>
      </section>

    </div>
  );
}
