import { motion } from 'motion/react';
import { 
  Target, 
  Share2, 
  Video, 
  Code2, 
  Bot, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Workflow
} from 'lucide-react';

const skillClusters = [
  {
    category: "01 — Digital Marketing",
    skills: [
      "Meta Ads Manager", "Performance Marketing", "Campaign Strategy", 
      "Conversion Tracking (Pixel & CAPI)", "Audience Targeting", "Lead Generation", 
      "Campaign Optimization", "Funnel Analytics"
    ]
  },
  {
    category: "02 — Social Media & Content",
    skills: [
      "Social Media Strategy", "Content Planning", "Short-Form Video / Reels", 
      "Video Editing (Premiere / CapCut)", "Carousel Design", "Creative Concepts", 
      "Ad Creatives & Banners", "Brand Communication"
    ]
  },
  {
    category: "03 — Product & Technology",
    skills: [
      "Next.js 14", "React", "TypeScript", "Tailwind CSS", 
      "Prisma ORM", "PostgreSQL", "Supabase", "REST APIs", 
      "Google Apps Script", "Git & GitHub", "Python", "Power BI"
    ]
  },
  {
    category: "04 — AI-Assisted Development",
    skills: [
      "AI Coding Agents (Antigravity & Gemini)", "Prompt Engineering & Specs", 
      "Rapid Product Prototyping", "Full-Stack Architecture Scaffolding", 
      "AI-Assisted Debugging", "Automated Workflow Design"
    ]
  }
];

export default function About() {
  return (
    <div className="space-y-28 py-12">
      
      {/* Header */}
      <div className="max-w-4xl space-y-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
        >
          ETHOS & PROFESSIONAL JOURNEY
        </motion.span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[1]">
          MARKETING + CONTENT + <br />
          <span className="text-secondary italic font-light drop-shadow-[0_0_15px_rgba(244,157,181,0.3)]">
            TECHNOLOGY & AI.
          </span>
        </h1>
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-3xl">
            I work at the intersection of business, marketing, creative content, and software engineering. I don't only launch campaigns — I can understand a business model, create the marketing and video content around it, build the web applications or digital workflows required to execute, and track performance end-to-end.
          </p>
          <p className="text-base text-text-muted leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-6 italic">
            The combination is what makes the difference: having the creative empathy to connect with audiences, backed by the technical capability to build the underlying digital infrastructure.
          </p>
        </div>
      </div>

      {/* Progression Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12 border-y border-primary/10">
        <div className="lg:col-span-4 space-y-4">
          <span className="text-secondary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            How I Approach Problems
          </span>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-text-main leading-tight uppercase tracking-tight">
            From Business Context <br />
            <span className="text-primary">to Live Execution.</span>
          </h3>
          <p className="text-xs text-text-muted leading-relaxed">
            I don't look at marketing as disconnected graphics, nor do I look at code as isolated syntax. Everything serves a real business outcome.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-8 text-text-muted leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-medium">
            <div className="space-y-3">
              <h4 className="font-headline text-base font-bold text-text-main flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                The Marketing & Creative Lens
              </h4>
              <p className="text-xs leading-relaxed">
                I study customer friction, create high-converting ad hooks, write engaging scripts, edit short-form reels, and design educational carousels. When you run paid acquisition on Meta or post organic content, clarity and pacing determine whether someone stops scrolling or leaves.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-headline text-base font-bold text-text-main flex items-center gap-2">
                <Code2 className="w-4 h-4 text-secondary" />
                The Product & Builder Lens
              </h4>
              <p className="text-xs leading-relaxed">
                When a campaign generates high volume, marketing alone is not enough. You need the landing page, the automated CRM follow-up, the inventory database, or the custom web application. CashALL is the proof of this: a full recommerce ERP connecting customer valuation to doorstep logistics.
              </p>
            </div>
          </div>

          <div className="p-8 bg-primary/[0.03] border border-primary/15 rounded-xl relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-black">
                HONEST WORKING PRINCIPLE
              </span>
              <p className="text-base text-text-main font-semibold leading-relaxed italic">
                "I don't make exaggerated claims. I work on real campaigns, build real applications, test real audience hooks, and iterate with AI tools to deliver production results faster."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric 4-Pillar Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Main Card: The Hybrid Multiplier */}
        <div className="md:col-span-2 glass-card p-10 flex flex-col justify-between ghost-border space-y-6">
          <div className="space-y-4">
            <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-primary font-black">
              THE HYBRID ADVANTAGE
            </span>
            <h3 className="font-headline text-3xl font-bold text-text-main">
              Marketer Who Builds. Builder Who Markets.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Most projects suffer because marketers don't understand software limitations, while developers don't understand audience psychology. I bridge that divide:
            </p>
            <ul className="space-y-2 text-xs text-text-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span><strong className="text-text-main">Audience Strategy:</strong> Knowing what message resonates and why people buy.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span><strong className="text-text-main">Creative Execution:</strong> Scripting, recording, and editing the video assets directly.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span><strong className="text-text-main">Technical Infrastructure:</strong> Architecting the web app, database, and conversion tracking behind it.</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-secondary">
            Continuous Loop: Create → Distribute → Track → Iterate
          </div>
        </div>

        {/* AI as a Multiplier */}
        <div className="md:col-span-2 glass-card p-10 flex flex-col justify-between ghost-border space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-headline text-[10px] uppercase tracking-[0.3em] text-secondary font-black">
                DEVELOPMENT VELOCITY
              </span>
              <Bot className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-headline text-3xl font-bold text-text-main">
              AI as an Engineering Lever.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I use AI coding agents (Antigravity, Gemini) to translate clear architectural blueprints into functional code quickly. This allows me to prototype, test, and ship complete products like CashALL in weeks without bloated agency overhead.
            </p>
            <div className="p-4 bg-bg-surface/60 border border-primary/10 rounded-lg text-xs text-text-muted">
              <strong className="text-text-main block mb-1">Key Insight:</strong>
              AI speeds up syntax and boilerplate; domain knowledge, pricing rules, and workflow clarity must still come from human understanding.
            </div>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-text-muted/60">
            Tech Stack: Next.js 14 • Prisma • PostgreSQL • Supabase • Android
          </div>
        </div>

      </div>

      {/* Skills Matrix (4 Organized Clusters) */}
      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <h3 className="text-2xl font-headline font-bold text-text-main whitespace-nowrap">
            SKILLS & CAPABILITIES MATRIX
          </h3>
          <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillClusters.map((cluster, i) => (
            <div key={i} className="glass-card p-8 ghost-border space-y-4">
              <h4 className="font-headline text-sm uppercase tracking-widest text-secondary font-black">
                {cluster.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cluster.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 bg-bg-surface/60 border border-primary/15 text-xs font-semibold text-text-muted hover:text-primary hover:border-primary/40 rounded-sm transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="p-12 md:p-16 glass-card bg-primary/[0.03] border-dashed border-primary/20 text-center relative overflow-hidden group rounded-2xl"
      >
        <p className="text-2xl md:text-4xl font-headline font-bold text-text-main tracking-tight leading-tight italic max-w-3xl mx-auto">
          "Understand the business. <br />
          <span className="text-primary not-italic">Hook the audience.</span> <br />
          Build the system that delivers."
        </p>
      </motion.div>

    </div>
  );
}