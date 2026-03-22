import { motion } from 'motion/react';

const projects = [
  {
    title: "FIFO Inventory Intelligence System",
    problem: "Manual stock tracking causing reporting inefficiencies.",
    solution: "Designed automated FIFO logic using Google Sheets + Apps Script with real-time dashboards.",
    features: [
      "Automated FIFO tracking",
      "Real-time inventory dashboard",
      "Error reduction system"
    ],
    impact: "Reduced manual errors and improved inventory visibility.",
    link: "https://drive.google.com/drive/folders/13k2bVpFxBIr728i9hX_AqnsMJ-iWg4a_",
  },
  {
    title: "GST Billing Automation Engine",
    problem: "Manual GST invoicing and fragmented customer records.",
    solution: "Built automated billing system with customer database and stock integration.",
    features: [
      "GST billing automation",
      "Customer database",
      "Revenue dashboard",
      "Stock lookup system"
    ],
    impact: "Reduced billing time, minimized errors, improved financial clarity.",
    link: "https://drive.google.com/drive/folders/1ElkFZjWs34ARfNYrkRNAxK2hpKPXhI1e",
  },
  {
    title: "Retail Revenue Intelligence & RFM Segmentation",
    problem: "No visibility on customer-level revenue and churn risk.",
    solution: "Built Python-based RFM model with Power BI dashboard.",
    features: [
      "RFM segmentation",
      "Customer value analysis",
      "Revenue insights dashboard"
    ],
    impact: "Identified 8% customers generating ~44% revenue and ₹2.5M uplift opportunity.",
    link: "/assets/rfm_revenue_intelligence_dashboard.pdf",
  }
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Selected Projects</h2>
        <p className="text-white/60">
          Real-world systems built to solve business problems using data, automation, and analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all"
          >
            {/* TITLE */}
            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            {/* LINE */}
            <div className="w-12 h-[2px] bg-indigo-500 mb-6"></div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">
                    The Problem
                  </h4>
                  <p className="text-white/70">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">
                    The Solution
                  </h4>
                  <p className="text-white/70">{project.solution}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-white/70 space-y-1">
                    {project.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">
                    Impact
                  </h4>
                  <p className="text-white font-medium">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* 🔥 BUTTON (THIS WAS MISSING) */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 rounded-xl hover:bg-indigo-500/30 transition-all"
            >
              View Full Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}