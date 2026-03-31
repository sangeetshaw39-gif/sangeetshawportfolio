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
  AlertCircle
} from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function SpendGuardCaseStudy({ onBack }: CaseStudyProps) {

  return (
    <div className="space-y-32 py-12">
      
      {/* BREADCRUMB */}
      <nav className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/60 mb-12">
        <button onClick={onBack} className="hover:text-accent-pink transition-colors">Projects</button>
        <ChevronRight className="w-3 h-3 text-accent-pink/20" />
        <span className="text-accent-pink">SpendGuardAI CASE STUDY</span>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-accent-pink/10 border border-accent-pink/20 rounded-full text-[10px] font-black uppercase tracking-widest text-accent-pink">
            <Target className="w-3 h-3" />
            Flagship Implementation
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-text-main leading-none">
            SPEND <span className="text-accent-pink">GUARD</span> AI
          </h1>
          <p className="text-2xl md:text-3xl text-text-muted font-medium max-w-3xl leading-snug">
            AI-powered financial analysis system for business decision-making.
          </p>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-12 xl:col-span-5">
          <h2 className="text-4xl font-black tracking-tight text-text-main mb-6 uppercase">The Problem</h2>
          <div className="w-20 h-1 bg-accent-pink/30 mb-8" />
        </div>
        <div className="lg:col-span-12 xl:col-span-7">
          <p className="text-xl text-text-muted font-medium leading-relaxed">
            Many small-to-medium businesses operate with <span className="text-text-main">blind spots</span> in their financial data. Spending patterns are often buried in fragmented reports, and inefficiencies (like subscription creep or duplicate billing) go undetected for months, leading to thousands in wasted capital.
          </p>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="glass-card p-12 md:p-20 space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-black tracking-tight text-text-main uppercase">The Solution</h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-4xl">
            SpendGuardAI was built to bridge the gap between <span className="text-accent-pink italic font-bold">Raw Data</span> and <span className="text-text-main font-bold">Actionable Strategy</span>. We developed a robust pipeline that consumes financial exports, cleans them with high precision, and uses AI to generate strategic recommendations.
          </p>
        </div>

        {/* 4. WORKFLOW VISUALIZER */}
        <div className="pt-12 border-t border-glass-stroke">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-pink/60 mb-12 text-center">System Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "Upload", icon: <FileText className="w-5 h-5" />, desc: "CSV/Excel Data" },
              { step: "Clean", icon: <ShieldCheck className="w-5 h-5" />, desc: "De-duplication" },
              { step: "Analyze", icon: <Zap className="w-5 h-5" />, desc: "AI Engine" },
              { step: "Insights", icon: <BarChart3 className="w-5 h-5" />, desc: "Risk Detection" },
              { step: "Decisions", icon: <Target className="w-5 h-5" />, desc: "Action Plan" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-bg-surface border border-glass-stroke flex items-center justify-center text-accent-pink shadow-xl">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-text-main uppercase text-xs">{item.step}</h4>
                  <p className="text-[10px] text-text-muted/60 font-bold uppercase">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Automated Data Cleaning",
            desc: "Custom algorithms that parse fragmented vendor names and consolidate historical data into a structured schema.",
            icon: <Database />
          },
          {
            title: "Smart Categorization",
            desc: "Leverages GPT-4 with local fallback logic to categorize expenses across custom business verticals with 98% accuracy.",
            icon: <Zap />
          },
          {
            title: "Insight Generation",
            desc: "Identifies subscription redundancies, vendor overcharges, and seasonal spending anomalies automatically.",
            icon: <BarChart3 />
          },
          {
            title: "Decision-Focused Outputs",
            desc: "Instead of complex charts, the system generates high-impact action lists for CEOs and Finance heads.",
            icon: <Target />
          }
        ].map((feature, i) => (
          <div key={i} className="glass-card p-10 space-y-6 hover:border-accent-pink/40 transition-colors">
            <div className="text-accent-pink w-8 h-8 opacity-60">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-black text-text-main">{feature.title}</h3>
            <p className="text-text-muted font-medium leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 6. CHALLENGES & LEARNINGS */}
      <section className="space-y-12">
        <h2 className="text-4xl font-black tracking-tight text-text-main uppercase">Challenges & Learnings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "API Limit Failover",
              desc: "External LLM APIs can be slow or capped. We built a local fallback engine using fuzzy matching and pre-indexed vendor maps to ensure the site never crashes during analysis.",
              tag: "Technical Excellence"
            },
            {
              title: "State Persistence",
              desc: "Handling large session states for financial analysis was tricky. We redesigned the flow to use persistent local state synchronized with Supabase for a seamless 'pick-up-where-you-left' experience.",
              tag: "Architectural Shift"
            },
            {
              title: "UI State Logic",
              desc: "Initially, overlapping components caused 401/500 errors during analysis. We implemented a robust state machine in React to manage the 'Ready → Processing → Completed' cycle safely.",
              tag: "System Robustness"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-pink/60">{item.tag}</span>
              <h3 className="text-xl font-bold text-text-main">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BUSINESS IMPACT */}
      <section className="bg-bg-surface border-y border-glass-stroke py-24 px-12 -mx-12 lg:-mx-24 flex flex-col items-center text-center space-y-8">
        <div className="w-16 h-16 rounded-full bg-accent-pink/10 flex items-center justify-center text-accent-pink border border-accent-pink/30 mb-4">
          <Zap className="w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-main max-w-4xl">
          IDENTIFYING WASTEFUL SPENDING FOR <span className="text-accent-pink italic">BUSINESS SURVIVAL</span>
        </h2>
        <p className="text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
          The primary value of SpendGuardAI isn't just "showcasing data"—it's about improving the bottom line. Our users have identified up to 12% in recoverable waste within the first 30 minutes of use.
        </p>
      </section>

      {/* 8. FINAL CTA */}
      <section className="flex flex-col items-center justify-center space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-black text-text-main uppercase">Ready for the Full Deep Dive?</h2>
          <p className="text-text-muted font-medium">Download the architectural breakdown and research paper.</p>
        </div>
        
        <a 
          href="https://drive.google.com/drive/folders/1_YxmQXA2LhvWGa9bb-fTXuhPswnqR35a" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-4 px-12"
        >
          📥 View Detailed Case Study (PDF)
          <ExternalLink className="w-5 h-5 text-bg-dark" />
        </a>

        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-text-muted/60 hover:text-accent-pink transition-colors font-bold text-sm tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>
      </section>

    </div>
  );
}
