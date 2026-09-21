import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Share2, 
  Video, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Terminal, 
  Cpu, 
  Database,
  BarChart3,
  Bot
} from 'lucide-react';
import { cn } from '../lib/utils';

interface WhatIDoProps {
  onExploreWork?: () => void;
  onContact?: () => void;
}

export default function WhatIDo({ onExploreWork, onContact }: WhatIDoProps) {
  const [activeTab, setActiveTab] = useState<'marketing' | 'social' | 'content' | 'products'>('marketing');

  const capabilities = [
    {
      id: 'marketing',
      num: '01',
      title: 'Digital Marketing & Performance',
      subtitle: 'Converting attention into qualified business opportunities through targeted campaigns and rigorous tracking.',
      icon: <Target className="w-6 h-6 text-primary" />,
      tag: 'GROWTH ENGINE',
      items: [
        { name: 'Meta Ads Manager', desc: 'Executing targeted paid acquisition across Instagram and Facebook' },
        { name: 'Campaign Strategy', desc: 'Architecting full-funnel local and promotional ad campaigns' },
        { name: 'Conversion Tracking & CAPI', desc: 'Configuring Meta Pixel and Server-side Conversions API for zero signal loss' },
        { name: 'Audience Targeting', desc: 'Building custom lookalikes, retargeting pools, and location-based clusters' },
        { name: 'Lead Generation', desc: 'Deploying high-converting instant forms and dedicated landing page funnels' },
        { name: 'Campaign Optimization', desc: 'Iterative budget scaling, creative fatigue rotation, and cost-per-lead reduction' }
      ]
    },
    {
      id: 'social',
      num: '02',
      title: 'Social Media & Community',
      subtitle: 'Treating social platforms as genuine distribution channels that build recognizable brand equity.',
      icon: <Share2 className="w-6 h-6 text-secondary" />,
      tag: 'BRAND PRESENCE',
      items: [
        { name: 'Platform Strategy', desc: 'Channel-specific positioning across Instagram, Facebook, and YouTube' },
        { name: 'Content Planning', desc: 'Developing structured weekly content calendars aligned with business cycles' },
        { name: 'Social Media Management', desc: 'Cohesive scheduling, profile optimization, and community engagement' },
        { name: 'Brand Communication', desc: 'Crafting brand tone, value-driven captions, and narrative clarity' },
        { name: 'Community-Facing Outreach', desc: 'Active DM and comment triage converting social followers into inquiries' },
        { name: 'Organic-to-Paid Bridge', desc: 'Validating organic engagement before amplifying top performers through paid ads' }
      ]
    },
    {
      id: 'content',
      num: '03',
      title: 'Content Creation & Video Editing',
      subtitle: 'Producing hook-driven short-form video, carousel breakdowns, and ad assets that stop the scroll.',
      icon: <Video className="w-6 h-6 text-primary" />,
      tag: 'CREATIVE ASSETS',
      items: [
        { name: 'Reels & Short-Form Video', desc: 'End-to-end ideation, pacing, dynamic cuts, sound design, and typography' },
        { name: 'Video Editing', desc: 'Fast-paced timeline cutting, keyframe animations, audio leveling, and motion graphics' },
        { name: 'Carousel Design', desc: 'High-retention educational and editorial slide decks designed for saves and shares' },
        { name: 'Ad Creatives & Banners', desc: 'High-contrast promotional visuals tested for scroll-stopping CTR' },
        { name: 'Scriptwriting & Hooks', desc: 'Structured narrative scripting: 3-second hook → problem tension → solution CTA' },
        { name: 'Visual Thumbnails', desc: 'Bold typography and visual hierarchy engineered for high impression click-through' }
      ]
    },
    {
      id: 'products',
      num: '04',
      title: 'Digital Products & Web Systems',
      subtitle: 'Building responsive web apps, internal operational tools, and automated data pipelines.',
      icon: <Code2 className="w-6 h-6 text-secondary" />,
      tag: 'SYSTEMS & AUTOMATION',
      items: [
        { name: 'Websites & Web Apps', desc: 'Production web applications built with Next.js 14, React, and TypeScript' },
        { name: 'Recommerce & ERP Systems', desc: 'Multi-role operational platforms connecting customers, field agents, and admins (e.g. CashALL)' },
        { name: 'Business Automation', desc: 'Google Sheets, Apps Script, and webhook automations replacing repetitive manual labor' },
        { name: 'Dynamic Pricing Engines', desc: 'Deterministic calculation engines enforcing condition deductions and margin protections' },
        { name: 'API & Cloud Integrations', desc: 'PostgreSQL, Supabase, Google Maps, Meta Graph API, and PDF invoice generation' },
        { name: 'AI-Assisted Development', desc: 'Multiplying engineering velocity using AI coding agents while safeguarding core logic' }
      ]
    }
  ];

  const marketingWorkflow = [
    { step: "01", name: "Research", desc: "Competitor creative audit & audience pain points" },
    { step: "02", name: "Audience", desc: "Demographic, interest & geo-targeting segmentation" },
    { step: "03", name: "Creative", desc: "Hook scripts, video reels, and static ad visuals" },
    { step: "04", name: "Campaign", desc: "Meta Ads campaign structure & budget setup" },
    { step: "05", name: "Tracking", desc: "Pixel & CAPI server-side event confirmation" },
    { step: "06", name: "Leads", desc: "Instant form captures and landing page flow" },
    { step: "07", name: "Analysis", desc: "CPL, CTR, frequency, and conversion audit" },
    { step: "08", name: "Optimization", desc: "Budget scaling and creative variation refresh" }
  ];

  const aiWorkflow = [
    { phase: "Idea", desc: "Identify domain friction or business need" },
    { phase: "Prompt & Spec", desc: "Draft explicit schemas, UX flows & validation rules" },
    { phase: "Architecture", desc: "Decouple frontend, API services & database models" },
    { phase: "Code Generation", desc: "Use Antigravity & Gemini agents for rapid scaffolding" },
    { phase: "Test & Debug", desc: "Verify edge cases, logic integrity & responsive UI" },
    { phase: "Deploy", desc: "Ship to production on Vercel with live monitoring" }
  ];

  return (
    <div className="space-y-28 py-12">
      
      {/* Header */}
      <div className="max-w-4xl space-y-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
        >
          CORE CAPABILITIES // WHAT I DO
        </motion.span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[1]">
          STRATEGY, CREATIVE <br />
          <span className="text-secondary italic font-light">& DIGITAL SYSTEMS.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
          I don't just draft marketing plans or post random graphics. I combine audience strategy, high-impact video content, and custom digital systems built with AI into a unified growth engine.
        </p>
      </div>

      {/* 4 Pillars Navigation & Panels */}
      <div className="space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id as any)}
              className={cn(
                "p-5 text-left rounded-xl transition-all duration-300 border flex flex-col justify-between group",
                activeTab === cap.id
                  ? "bg-bg-surface/80 border-primary shadow-[0_0_30px_rgba(255,193,208,0.15)] scale-[1.02]"
                  : "bg-bg-surface/30 border-primary/10 hover:border-primary/30 hover:bg-bg-surface/50"
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={cn(
                  "font-headline text-[10px] font-black tracking-widest uppercase",
                  activeTab === cap.id ? "text-primary" : "text-text-muted"
                )}>
                  {cap.num} // {cap.tag}
                </span>
                <div className={cn(
                  "p-1.5 rounded-md transition-colors",
                  activeTab === cap.id ? "bg-primary/20" : "bg-white/5"
                )}>
                  {cap.icon}
                </div>
              </div>
              <h3 className="font-headline text-sm md:text-base font-bold text-text-main group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Capability Panel */}
        {capabilities.map((cap) => {
          if (cap.id !== activeTab) return null;
          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 ghost-border space-y-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-primary/10 pb-8">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-[10px] font-headline uppercase tracking-[0.3em] text-secondary font-black">
                    CAPABILITY PILLAR {cap.num}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-headline font-bold text-text-main">
                    {cap.title}
                  </h2>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed">
                    {cap.subtitle}
                  </p>
                </div>
                {onContact && (
                  <button
                    onClick={onContact}
                    className="px-6 py-3 bg-primary text-bg-dark font-headline text-xs uppercase font-bold tracking-widest rounded-sm hover:scale-105 active:scale-95 transition-all shrink-0"
                  >
                    Discuss a Project →
                  </button>
                )}
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cap.items.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-bg-surface/40 border border-primary/10 rounded-xl space-y-2 hover:border-primary/40 hover:bg-primary/[0.03] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <h4 className="font-headline text-sm font-bold text-text-main">{item.name}</h4>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. PERFORMANCE MARKETING WORKFLOW PIPELINE */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-secondary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            <TrendingUp className="w-4 h-4" />
            Practical Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            Performance Marketing Execution Flow.
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Real campaign success comes from an iterative, data-backed execution pipeline rather than guesswork.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {marketingWorkflow.map((step, idx) => (
            <div 
              key={idx}
              className="glass-card p-4 ghost-border flex flex-col justify-between space-y-3 hover:border-primary/40 hover:bg-primary/5 transition-all text-center"
            >
              <span className="font-headline text-lg font-black text-primary/40">{step.step}</span>
              <div>
                <h4 className="font-headline text-xs font-bold text-text-main mb-1">{step.name}</h4>
                <p className="text-[10px] text-text-muted leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Tools Strip */}
        <div className="p-5 glass-card ghost-border flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="text-[10px] font-headline uppercase tracking-widest text-text-muted font-black">
            VERIFIED MARKETING TOOLS:
          </span>
          <div className="flex flex-wrap gap-2">
            {["Meta Ads Manager", "Meta Pixel", "Conversions API (CAPI)", "Google Analytics", "Google Sheets", "Canva / Premiere Pro"].map((t, i) => (
              <span key={i} className="px-3 py-1 bg-white/5 border border-primary/10 text-primary text-[10px] font-bold rounded-sm uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI-ASSISTED DEVELOPMENT PIPELINE */}
      <section className="glass-card p-8 md:p-12 ghost-border bg-primary/[0.02] space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            <Bot className="w-4 h-4" />
            AI-Assisted Building on Client Requirement
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            Building with AI Tools.
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            When clients need custom applications, ERPs, or internal automations, I leverage advanced AI environments (Antigravity, Gemini) to build and deploy production systems rapidly — turning client requirements into working tools without the overhead of traditional software agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {aiWorkflow.map((wf, idx) => (
            <div 
              key={idx}
              className="p-5 bg-bg-surface/50 border border-primary/10 rounded-xl space-y-2 hover:border-primary/40 transition-all"
            >
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-secondary">
                <span>PHASE 0{idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted/40 hidden lg:block" />
              </div>
              <h4 className="font-headline text-sm font-bold text-text-main">{wf.phase}</h4>
              <p className="text-[11px] text-text-muted leading-relaxed">{wf.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-md text-xs text-text-muted leading-relaxed">
          <strong className="text-text-main">The Difference: </strong>
          AI tools don't replace business understanding. The quality of the final client tool depends on how clearly you define client requirements, operational rules, and workflows.
        </div>
      </section>

    </div>
  );
}
