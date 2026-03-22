import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="space-y-12">

      {/* INTRO */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">My Approach</h2>
        <p className="text-white/60 leading-relaxed">
          B.Com student and aspiring MBA (Business Analytics), focused on solving real-world business problems using data, automation, and AI.
          <br /><br />
          I work on practical systems for MSMEs to improve efficiency, visibility, and decision-making.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Problem → System</h3>
            <p className="text-white/60 leading-relaxed">
              I focus on identifying real business problems and converting them into simple, structured systems that improve daily operations.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Data → Decisions</h3>
            <p className="text-white/60 leading-relaxed">
              I use data analysis and automation to help businesses make faster, smarter, and more consistent decisions.
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE (USE YOUR IMAGE) */}
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
          <img src="https://picsum.photos/seed/analytics/800/800" 
          alt="Work Approach" 
          className="object-cover w-full h-full opacity-50" 
          referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-lg font-medium text-white italic">
              "Simple systems. Clear data. Better decisions."
            </p>
          </div>
        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white text-center">Core Skills</h3>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Data Analysis",
            "Business Intelligence (Power BI, Tableau)",
            "Dashboard Development",
            "Process Automation (Google Apps Script)",
            "Exploratory Data Analysis (EDA)",
            "Risk Analytics & Financial Analysis",
            "Business Strategy & Operations Analysis",
            "Customer Segmentation",
            "Generative AI & Prompt Engineering"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:border-indigo-500/50 hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}