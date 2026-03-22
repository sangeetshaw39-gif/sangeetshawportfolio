import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Home({ onViewProjects, onContact }: HomeProps) {
  return (
    <div className="space-y-12 py-12">

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-indigo-400 border border-indigo-400/30 rounded-full bg-indigo-400/5">
            AI & Business Analytics Consultant
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Sangeet Shaw
          </h1>

          <p className="text-xl text-white/60 max-w-xl leading-relaxed mb-8">
            Helping businesses transform operations using data, automation, and AI-driven decision making.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            
            <button
              onClick={onViewProjects}
              className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContact}
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              Contact Me
            </button>

            {/* 🔥 RESUME BUTTON */}
            <a
              href="/assets/sangeetshawresume.pdf"
              target="_blank"
              className="px-8 py-4 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-all"
            >
              View Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <img
            src="/assets/sangeet.png"
            alt="Sangeet Shaw"
            className="w-64 h-64 object-cover rounded-full border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          />
        </motion.div>

      </div>

      {/* SKILLS / VALUE SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Business Automation",
            desc: "Built real-world systems using Google Sheets + Apps Script to automate billing, inventory, and reporting."
          },
          {
            title: "Data Analytics",
            desc: "Performed AI-powered EDA and predictive modeling for financial risk and business insights."
          },
          {
            title: "MSME Consulting",
            desc: "Helping local businesses adopt digital tools, dashboards, and AI-driven workflows."
          }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>

    </div>
  );
}