import { motion } from 'motion/react';
import { Brain, Code2, Database, LineChart, Rocket, ShieldCheck, Sparkles, Binary } from 'lucide-react';

const coreValues = [
  {
    title: "Problem First",
    desc: "I don't just build tools; I solve bottlenecks. Every system starts with a 'Why' and ends with a 'How'.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Data Driven",
    desc: "Decisions should be backed by numbers, not intuition. I turn raw data into clear, visual signals.",
    icon: <LineChart className="w-6 h-6" />
  }
];

const skills = [
  "Data Analysis", "Financial Analysis", "Exploratory Data Analysis", 
  "Risk Analytics", "Customer Segmentation", "Dashboard Development", 
  "Google Apps Script", "Power BI", "Generative AI"
];

export default function About() {
  return (
    <div className="space-y-32 py-12">
      
      {/* Intro Header */}
      <div className="max-w-4xl">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline text-xs uppercase tracking-[0.3em] mb-6 block"
        >
          My Ethos & Mission
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none mb-8">
          SYSTEMS OVER <br />
          <span className="text-secondary italic">HYPE.</span>
        </h2>
        <div className="space-y-6">
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl">
            I’m a <span className="text-text-main">B.Com student</span> building practical systems at the intersection of business, data, and technology.
          </p>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            My focus is simple — take <span className="text-text-main">messy, real-world data</span> and turn it into structured, usable insights that help businesses make better decisions.
          </p>
        </div>
      </div>

      {/* NEW: My Journey Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12 border-y border-primary/5">
        <div className="lg:col-span-4 space-y-4">
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">Background & Progression</span>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight uppercase tracking-tighter">
            From Business Student <br />
            <span className="text-secondary">to System Builder.</span>
          </h3>
        </div>
        <div className="lg:col-span-8 space-y-8 text-text-muted leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-medium">
            <p>
              I started with a commerce background — which meant I understood business problems early, but didn’t have the technical tools to solve them. Instead of waiting to <span className="text-text-main">"learn everything first"</span>, I began building directly.
            </p>
            <p>
              My early work focused on simple automation — improving billing workflows, structuring data in Google Sheets, and reducing manual effort in business operations.
            </p>
          </div>
          <div className="p-8 bg-primary/[0.02] border border-primary/10 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Rocket className="w-24 h-24 text-primary" />
            </div>
            <p className="text-base text-text-main font-bold mb-4">Evolution of System Scope</p>
            <p className="text-sm italic">
              "Over time, this evolved into building more structured systems — combining data cleaning, analysis, and AI-assisted insights into end-to-end pipelines like SpendGuardAI. I don’t approach problems as isolated features; I focus on building systems that are practical, reliable, and usable in real-world environments."
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:min-h-[650px]">
        
        {/* Main Content Card: Systems Thinking */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 glass-card glass-refraction p-12 flex flex-col justify-end ghost-border group overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Binary className="w-48 h-48 text-primary" />
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="font-headline text-4xl font-bold text-primary group-hover:translate-x-2 transition-transform">Systems Thinking.</h3>
            <p className="text-text-muted leading-relaxed text-lg">
              I approach problems by breaking them into systems — understanding how data flows, where inefficiencies exist, and how structured logic can improve decision-making. 
              Most of my work focuses on building simple, reliable pipelines that make business data easier to understand and use.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["DATA ANALYSIS", "FINANCIAL ANALYSIS", "DASHBOARD DEVELOPMENT", "GOOGLE APPS SCRIPT"].map((s, i) => (
                <span key={i} className="font-headline text-[9px] px-3 py-1 bg-primary/10 border border-primary/20 text-primary tracking-[0.2em] uppercase rounded-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Focus Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 bg-bg-surface/40 glass-refraction p-8 ghost-border rounded-xl flex flex-col justify-between group hover:bg-secondary/10 transition-colors"
        >
          <div className="flex justify-between items-start">
            <Sparkles className="text-secondary w-10 h-10" />
            <span className="font-headline text-[10px] text-text-muted/40 uppercase tracking-widest">Focus: Practical AI Logic</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-3 text-text-main uppercase tracking-tight">AI AS A SUPPORTING LAYER</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I use AI where it adds practical value — mainly for categorization, summarization, and insight generation. The core system remains built on structured logic for total reliability.
            </p>
          </div>
        </motion.div>

        {/* Target Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:col-span-1 bg-bg-surface/40 glass-refraction p-8 ghost-border rounded-xl flex flex-col justify-between hover:border-primary/50 transition-colors"
        >
          <p className="font-headline text-[10px] text-primary tracking-widest uppercase font-black">Target</p>
          <div className="space-y-3">
            <div className="font-headline text-4xl font-bold text-text-main tracking-tighter italic">MSME</div>
            <p className="text-[10px] text-text-muted leading-relaxed">Focused on solving real operational data challenges for small businesses.</p>
          </div>
        </motion.div>

        {/* Methodology Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:col-span-1 bg-secondary text-bg-dark p-8 rounded-xl flex flex-col justify-between group cursor-default transition-all duration-500 hover:shadow-[0_0_40px_rgba(244,186,158,0.3)]"
        >
          <span className="font-headline text-[10px] tracking-widest uppercase font-bold opacity-70">Methodology</span>
          <div className="font-headline text-2xl font-bold leading-tight uppercase tracking-tighter">Structured <br /> Execution</div>
          <ShieldCheck className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
        </motion.div>

      </div>

      {/* Tech Stack Matrix */}
      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-headline font-bold text-text-main whitespace-nowrap">ANALYTICS STACK</h3>
          <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 glass-card ghost-border text-xs font-bold text-text-muted hover:text-primary hover:border-primary/60 hover:bg-primary/5 cursor-default transition-all tracking-widest uppercase"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Philosophy Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-16 glass-card bg-primary/[0.03] border-dashed border-primary/20 text-center relative overflow-hidden group"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
        <p className="text-3xl md:text-5xl font-headline font-bold text-text-main tracking-tighter leading-tight relative z-10 italic">
          "Simple systems. <br />
          <span className="text-primary not-italic">Clear data.</span> <br />
          Better decisions."
        </p>
      </motion.div>

    </div>
  );
}