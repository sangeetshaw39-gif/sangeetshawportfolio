import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Layers, Target, Zap } from 'lucide-react';

const projects = [
  {
    title: "SpendGuardAI",
    tag: "FLAGSHIP SYSTEM",
    isFeatured: true,
    route: "/case-study/spendguardai",
    description: "AI-powered financial analysis system that helps businesses understand spending patterns, detect inefficiencies, and make smarter decisions.",
    highlights: [
      "Automated data cleaning pipeline",
      "Smart expense categorization",
      "Insight generation (AI + fallback logic)",
      "Decision-focused output for businesses"
    ],
    workflow: ["Upload", "Clean", "Analyze", "Insights", "Decisions"],
    link: "https://drive.google.com/drive/folders/1_YxmQXA2LhvWGa9bb-fTXuhPswnqR35a",
    officialLink: "https://spendguardai.vercel.app/",
    btnText: "📊 View Case Study",
    tooltip: "Explore full product breakdown, architecture, and insights",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "FIFO Inventory Intelligence System",
    problem: "Manual stock tracking causing reporting inefficiencies.",
    solution: "Designed automated FIFO logic using Google Sheets + Apps Script with real-time dashboards.",
    features: ["Automated FIFO tracking", "Real-time inventory dashboard", "Error reduction system"],
    impact: "Reduced manual errors and improved inventory visibility.",
    link: "https://drive.google.com/drive/folders/13k2bVpFxBIr728i9hX_AqnsMJ-iWg4a_",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "GST Billing Automation Engine",
    problem: "Manual GST invoicing and fragmented customer records.",
    solution: "Built automated billing system with customer database and stock integration.",
    features: ["GST billing automation", "Customer database", "Revenue dash", "Stock lookup"],
    impact: "Reduced billing time, minimized errors, improved financial clarity.",
    link: "https://drive.google.com/drive/folders/1ElkFZjWs34ARfNYrkRNAxK2hpKPXhI1e",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Retail Revenue Intelligence",
    problem: "No visibility on customer-level revenue and churn risk.",
    solution: "Built Python-based RFM model with Power BI dashboard.",
    features: ["RFM segmentation", "Customer value analysis", "Revenue insights"],
    impact: "Identified 8% customers generating ~44% revenue.",
    link: "/assets/rfm_revenue_intelligence_dashboard.pdf",
    icon: <Target className="w-6 h-6" />
  }
];

function ProjectCard({ project, index, onViewCaseStudy }: { project: any, index: number, onViewCaseStudy: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative glass-card p-10 overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent-pink/10 ${project.isFeatured ? 'border-accent-pink/40 bg-accent-pink/[0.02]' : ''
        }`}
    >
      {/* FEATURED BADGE */}
      {project.isFeatured && (
        <div className="absolute top-0 right-0 px-6 py-2 bg-accent-pink text-[10px] font-black text-bg-dark rounded-bl-2xl uppercase tracking-widest z-20">
          Featured
        </div>
      )}

      {/* SPOTLIGHT EFFECT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(244, 157, 181, 0.1), transparent 40%)`
          ),
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl border transition-colors ${project.isFeatured ? 'bg-accent-pink/20 text-accent-pink border-accent-pink/40' : 'bg-accent-pink/10 text-accent-pink border-accent-pink/20'
              }`}>
              {project.icon}
            </div>
            <div className="space-y-1">
              {project.tag && (
                <span className="text-[10px] font-black tracking-[0.2em] text-accent-pink uppercase">{project.tag}</span>
              )}
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-text-main group-hover:text-accent-pink transition-colors">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            {project.description ? (
              <div className="space-y-6">
                <p className="text-xl text-text-muted font-medium leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((h: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-text-muted/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-pink/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {project.workflow && (
                  <div className="pt-4 flex items-center gap-2 text-[10px] font-black text-text-muted/40 uppercase tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {project.workflow.map((step: string, i: number) => (
                      <React.Fragment key={i}>
                        <span>{step}</span>
                        {i < project.workflow.length - 1 && <span className="text-accent-pink/20">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-pink/60">Problem</h4>
                  <p className="text-text-muted font-medium leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-pink/60">Solution</h4>
                  <p className="text-text-muted font-medium leading-relaxed">{project.solution}</p>
                </div>
              </div>
            )}

            {project.features && (
              <div className="flex flex-wrap gap-3">
                {project.features.map((feature: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 bg-bg-surface/50 border border-glass-stroke rounded-full text-xs font-bold text-text-muted">
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between space-y-8">
          <div className="p-6 bg-accent-pink/5 border border-accent-pink/10 rounded-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-pink mb-3">
              {project.isFeatured ? 'Core Value' : 'Key Impact'}
            </h4>
            <p className="text-lg font-bold text-text-main leading-snug">
              {project.isFeatured ? 'Actionable Intelligence for Business Survival' : project.impact}
            </p>
          </div>

          <div className="space-y-4">
            {project.officialLink && (
              <a
                href={project.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-3 text-center"
              >
                Visit Official Site
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.route ? (
              <button
                onClick={onViewCaseStudy}
                title={project.tooltip}
                className="group/btn w-full py-4 border border-glass-stroke rounded-2xl flex items-center justify-center gap-3 font-bold bg-bg-surface/50 text-text-main hover:bg-accent-pink/10 hover:border-accent-pink transition-all duration-300"
              >
                {project.btnText || "Detailed Case Study"}
                <Zap className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              </button>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title={project.tooltip}
                className={`group/btn w-full py-4 border rounded-2xl flex items-center justify-center gap-3 font-bold transition-all duration-300 ${project.isFeatured
                    ? 'bg-bg-surface/50 border-glass-stroke text-text-main hover:bg-accent-pink/10 hover:border-accent-pink'
                    : 'bg-bg-surface/50 border-glass-stroke text-text-main hover:bg-accent-pink hover:text-bg-dark hover:border-accent-pink'
                  }`}
              >
                {project.btnText || "Detailed Case Study"}
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ onViewCaseStudy }: { onViewCaseStudy: () => void }) {
  return (
    <div className="space-y-16 py-8">
      <div className="max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-pink font-black text-xs uppercase tracking-[0.3em] mb-4 block"
        >
          Selected Work
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main mb-6">
          ACTIONABLE <br />
          <span className="text-accent-pink italic">STRATEGY</span>
        </h2>
        <p className="text-xl text-text-muted font-medium leading-relaxed">
          Real-world systems engineered to solve high-impact business problems. Focused on automation, risk mitigation, and intelligent growth.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} onViewCaseStudy={onViewCaseStudy} />
        ))}
      </div>
    </div>
  );
}