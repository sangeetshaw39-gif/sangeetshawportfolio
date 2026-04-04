import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Target, Zap, LayoutGrid, Layers, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "SpendGuard AI",
    tag: "FINTECH SYSTEM",
    isFeatured: true,
    route: "case-study-spendguardai",
    link: "https://spendguardai.vercel.app/",
    description: "A financial data processing system that transforms inconsistent expense data into structured insights using a hybrid pipeline of rule-based validation and AI-assisted analysis.",
    impact: "Standardizes messy financial data and highlights high-risk spending patterns for faster analysis",
    tech: ["Gemini AI", "FastAPI", "Supabase", "Javascript UI"],
    image: "/assets/SPENDGUARDAI.png",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "FIFO Inventory Intelligence",
    tag: "LOGISTICS ENGINE",
    route: "case-study-fifo",
    link: "https://drive.google.com/drive/folders/13k2bVpFxBIr728i9hX_AqnsMJ-iWg4a_",
    description: "A structured inventory tracking system built using Google Sheets and Apps Script to manage stock movement based on FIFO logic, reducing manual tracking errors and improving visibility across inventory flows.",
    impact: "Brings consistency to inventory tracking by automating FIFO-based stock movement and reducing dependency on manual logs",
    tech: ["APPS SCRIPT", "GOOGLE SHEETS", "INVENTORY LOGIC", "DASHBOARDING"],
    image: "/assets/FIFO.png",
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: "GST Billing Automation",
    tag: "FINANCIAL SYSTEM",
    route: "case-study-bill",
    link: "https://drive.google.com/drive/folders/1ElkFZjWs34ARfNYrkRNAxK2hpKPXhI1e",
    description: "A workflow automation system built on Google Sheets and Apps Script to streamline GST invoicing by integrating customer records, product lookup, and automated bill generation.",
    impact: "Reduces manual billing effort by automating invoice creation and maintaining structured customer and transaction records",
    tech: ["AUTOMATION", "GOOGLE SHEETS", "APPS SCRIPT", "MSME TOOLS"],
    image: "/assets/BILL.png",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Retail Revenue Intelligence",
    tag: "DATA ANALYTICS",
    route: "case-study-rfm",
    link: "/assets/rfm_revenue_intelligence_dashboard.pdf",
    description: "A customer-level revenue analysis model built using Python and Power BI to identify spending patterns, segment users, and highlight high-value customer groups using RFM-based logic.",
    impact: "Helps identify high-value customer segments and understand revenue concentration patterns for better targeting decisions",
    tech: ["PYTHON", "POWER BI", "RFM ANALYSIS", "DATA VISUALIZATION"],
    image: "/assets/RFM.png",
    icon: <LayoutGrid className="w-5 h-5" />
  }
];

function ProjectCard({ project, onViewCaseStudy }: { project: any, onViewCaseStudy: (route: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative glass-card p-6 ghost-border flex flex-col hover:-translate-y-2 md:hover:-translate-y-2 transition-all duration-500"
    >
      {/* Project Image Section */}
      <div className="overflow-hidden mb-6 aspect-video bg-bg-surface relative rounded-lg">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover md:grayscale transition-all duration-700 md:group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
        {project.isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-bg-dark font-black text-[10px] uppercase tracking-widest rounded-full z-20">
            Featured
          </div>
        )}
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-headline text-[10px] uppercase tracking-widest text-secondary block mb-1">
              {project.tag}
            </span>
            <h3 className="font-headline text-3xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="p-2 border border-primary/20 rounded-full text-primary group-hover:bg-primary group-hover:text-bg-dark transition-all">
            {project.icon}
          </div>
        </div>

        <p className="text-sm text-text-muted mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Impact HUD */}
        <div className="p-4 bg-primary/5 border border-primary/10 rounded-sm mb-8">
          <span className="text-[10px] text-primary uppercase tracking-widest block mb-1">Key Impact</span>
          <p className="text-sm font-bold text-text-main">{project.impact}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string, i: number) => (
            <span key={i} className="px-2 py-1 bg-bg-surface/50 border border-primary/10 rounded text-[9px] uppercase tracking-widest text-text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {project.route && (
            <button
              onClick={() => onViewCaseStudy(project.route)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-bg-dark font-bold text-xs tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all"
            >
              Case Study
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full flex items-center justify-center gap-3 py-4 border border-primary/30 text-primary font-bold text-xs tracking-widest uppercase hover:bg-primary/5 active:scale-95 transition-all",
                !project.route && "bg-primary text-bg-dark border-none"
              )}
            >
              {project.title === "SpendGuard AI" ? "Visit Live Site" : (project.route ? "View Project" : "View System")}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ onViewCaseStudy, onContact }: { onViewCaseStudy: (route: string) => void, onContact: () => void }) {
  return (
    <div className="space-y-16 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Archive / Selected Work
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none">
            ACTIONABLE <br />
            <span className="text-secondary italic font-light">STRATEGY.</span>
          </h2>
        </div>
        <p className="text-text-muted text-sm uppercase tracking-widest max-w-[200px] leading-relaxed hidden md:block">
          Scroll to explore architectural interventions in data systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} onViewCaseStudy={onViewCaseStudy} />
        ))}
      </div>

      {/* Process CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass-card p-12 text-center ghost-border bg-primary/5 space-y-6"
      >
        <h3 className="text-3xl font-headline font-bold text-text-main">Ready to Engineer the Future?</h3>
        <p className="text-text-muted max-w-xl mx-auto">
          Currently taking selective commissions for MSME systems and custom AI analytics dashboards.
        </p>
        <div className="pt-4">
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-primary text-bg-dark font-bold tracking-widest uppercase text-xs hover:px-14 transition-all duration-300"
          >
            Initiate Contact
          </button>
        </div>
      </motion.div>
    </div>
  );
}