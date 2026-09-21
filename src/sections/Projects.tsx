import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Wallet, 
  Layers, 
  Zap, 
  LayoutGrid, 
  Smartphone, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Instagram
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectsProps {
  onViewCaseStudy: (route: string) => void;
  onContact: () => void;
}

const otherProjects = [
  {
    title: "LedgerPrime",
    tag: "DESKTOP ERP & ACCOUNTING",
    route: "case-study-ledgerprime",
    link: "/assets/ledgerprime.pdf",
    description: "A high-performance, keyboard-centric desktop accounting ecosystem built for professional speed and financial precision without relying on legacy software.",
    impact: "Reduced data entry friction by 40% through Tally-inspired shortcuts, multi-company ledger persistence, and automated GST calculation.",
    tech: ["React 19", "Electron", "SQLite", "TypeScript", "Antigravity", "Gemini AI"],
    image: "/assets/icon.png",
    icon: <Wallet className="w-5 h-5" />
  },
  {
    title: "FIFO Inventory Intelligence",
    tag: "LOGISTICS ENGINE",
    route: "case-study-fifo",
    link: "https://drive.google.com/drive/folders/13k2bVpFxBIr728i9hX_AqnsMJ-iWg4a_",
    description: "A structured inventory management system built using Google Sheets and Apps Script to enforce FIFO stock movement rules and eliminate manual inventory drift.",
    impact: "Brings automated FIFO stock lot tracking, stock health visualization, and automatic reorder alerts to small business warehouses.",
    tech: ["Apps Script", "Google Sheets", "Inventory Logic", "Automation"],
    image: "/assets/FIFO.png",
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: "GST Billing Automation",
    tag: "FINANCIAL SYSTEM",
    route: "case-study-bill",
    link: "https://drive.google.com/drive/folders/1ElkFZjWs34ARfNYrkRNAxK2hpKPXhI1e",
    description: "A workflow automation system built on Google Sheets and Apps Script to streamline GST invoicing by integrating customer registries, item lookups, and one-click PDF generation.",
    impact: "Reduces billing generation time and eliminates human tax calculation errors across multi-item transactions.",
    tech: ["Automation", "Google Sheets", "Apps Script", "Accounting Logic"],
    image: "/assets/BILL.png",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Retail Revenue Intelligence",
    tag: "DATA ANALYTICS",
    route: "case-study-rfm",
    link: "/assets/rfm_revenue_intelligence_dashboard.pdf",
    description: "A customer-level revenue analysis model built using Python and Power BI to identify spending patterns, segment customers, and highlight revenue concentration using RFM logic.",
    impact: "Segments customer cohorts into actionable groups (Champions, Loyalists, At Risk) for high-efficiency retargeting campaigns.",
    tech: ["Python", "Power BI", "RFM Analytics", "Data Modeling"],
    image: "/assets/RFM.png",
    icon: <LayoutGrid className="w-5 h-5" />
  }
];

export default function Projects({ onViewCaseStudy, onContact }: ProjectsProps) {
  return (
    <div className="space-y-24 py-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="max-w-2xl space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
          >
            SELECTED WORK // PRODUCTS & SYSTEMS
          </motion.span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-text-main leading-none">
            ENGINEERED <br />
            <span className="text-secondary italic font-light drop-shadow-[0_0_15px_rgba(244,157,181,0.3)]">
              SOLUTIONS.
            </span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl">
            From operational recommerce platforms to desktop ERPs and automated business pipelines — built with modern full-stack technologies and AI-assisted workflows.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-[10px] font-headline uppercase tracking-[0.3em] text-text-muted/60 font-black block">
            FLAGSHIP ARCHITECTURE
          </span>
          <span className="text-xs font-bold text-primary">CashALL Recommerce Platform</span>
        </div>
      </div>

      {/* 1. FLAGSHIP PROJECT: CASHALL HERO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 ghost-border relative overflow-hidden group hover:border-primary/50 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Image & Visual Badge */}
          <div className="lg:col-span-6 space-y-4">
            <div className="overflow-hidden rounded-xl border border-primary/20 bg-bg-surface aspect-video relative group/img cursor-pointer" onClick={() => onViewCaseStudy('case-study-cashall')}>
              <img 
                src="/assets/cashall.png" 
                alt="CashALL Platform Live Interface" 
                className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-bg-dark font-headline text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                Flagship Platform
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-text-main font-bold">
                <span className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  Used-Device Recommerce Operations
                </span>
                <span className="text-[10px] font-mono text-secondary">cashall.in</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Information */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-secondary font-headline text-[10px] uppercase tracking-[0.3em] font-black mb-2">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                RECOMMERCE & OPERATIONS PLATFORM
              </div>
              <h3 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
                CashALL
              </h3>
              <p className="text-sm font-semibold text-secondary/90 italic mt-1">
                Designing the digital infrastructure behind a used-device buying business.
              </p>
            </div>

            <p className="text-sm text-text-muted leading-relaxed">
              CashALL connects the complete used-device acquisition workflow — from customer online valuation and pickup booking to field technician inspection, dynamic re-quoting, payment verification, and final automated documentation.
            </p>

            {/* Key Impact Card */}
            <div className="p-4 bg-primary/5 border border-primary/15 rounded-lg space-y-1">
              <span className="text-[9px] font-headline text-primary uppercase tracking-widest font-black block">
                System Impact & Scope
              </span>
              <p className="text-xs font-medium text-text-main">
                Unified 4 operational roles (Customer, Admin, Android Field Technician & Telecaller Support) with a deterministic rule valuation engine and automated instant invoicing.
              </p>
            </div>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "Native Android", "Meta CAPI", "Google Maps", "Tesseract OCR"].map((t, i) => (
                <span key={i} className="px-2.5 py-1 bg-bg-surface/70 border border-primary/15 rounded text-[9px] font-mono uppercase tracking-wider text-text-muted">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onViewCaseStudy('case-study-cashall')}
                className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3.5 bg-primary text-bg-dark font-headline text-xs uppercase font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,193,208,0.25)]"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="https://cashall.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3.5 border border-primary/30 text-primary font-headline text-xs uppercase font-bold tracking-widest hover:bg-primary/10 active:scale-95 transition-all"
              >
                cashall.in
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://www.instagram.com/cashall_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[170px] flex items-center justify-center gap-2 py-3.5 border border-secondary/30 text-secondary font-headline text-xs uppercase font-bold tracking-widest hover:bg-secondary/10 active:scale-95 transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                @cashall_official
              </a>
            </div>
          </div>

        </div>
      </motion.div>

      {/* 2. OTHER THINGS I'VE BUILT / EXPERIMENTS & DIGITAL PRODUCTS */}
      <div className="space-y-10">
        <div className="border-t border-primary/10 pt-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-secondary font-headline text-[10px] uppercase tracking-[0.3em] font-black">
              EXPERIMENTS & DIGITAL PRODUCTS
            </span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
              Other Things I've Built.
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              These projects demonstrate that I don't only market digital products — I can also engineer them. Built using modern web stacks, automation scripts, and AI-assisted workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 ghost-border flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 group"
            >
              <div>
                <div className="overflow-hidden mb-6 aspect-video bg-bg-surface relative rounded-lg border border-primary/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover md:grayscale transition-all duration-700 md:group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-20 group-hover:opacity-0 transition-opacity" />
                </div>

                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="font-headline text-[9px] uppercase tracking-widest text-secondary block mb-1 font-bold">
                      {project.tag}
                    </span>
                    <h4 className="font-headline text-2xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <div className="p-2 border border-primary/20 rounded-full text-primary group-hover:bg-primary group-hover:text-bg-dark transition-all">
                    {project.icon}
                  </div>
                </div>

                <p className="text-xs text-text-muted mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="p-3 bg-primary/5 border border-primary/10 rounded-sm mb-6">
                  <span className="text-[9px] text-primary uppercase tracking-widest block font-bold mb-1">Key Impact</span>
                  <p className="text-xs font-semibold text-text-main">{project.impact}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t: string, idx: number) => (
                    <span key={idx} className="px-2 py-0.5 bg-bg-surface/50 border border-primary/10 rounded text-[9px] uppercase tracking-wider text-text-muted font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onViewCaseStudy(project.route)}
                    className="flex items-center justify-center gap-2 py-3 bg-primary text-bg-dark font-headline font-bold text-[10px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all rounded-sm"
                  >
                    Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 border border-primary/30 text-primary font-headline font-bold text-[10px] tracking-widest uppercase hover:bg-primary/5 active:scale-95 transition-all rounded-sm"
                  >
                    Documentation
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass-card p-12 text-center ghost-border bg-primary/5 space-y-6"
      >
        <h3 className="text-3xl font-headline font-bold text-text-main">
          Have a Brand, Campaign or Digital Product in Mind?
        </h3>
        <p className="text-text-muted max-w-xl mx-auto text-sm leading-relaxed">
          Whether you need to scale paid acquisition, produce high-retention video content, or build operational software systems — let's build it together.
        </p>
        <div className="pt-4">
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-primary text-bg-dark font-bold tracking-widest uppercase text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,208,0.3)]"
          >
            Let's Build It →
          </button>
        </div>
      </motion.div>

    </div>
  );
}