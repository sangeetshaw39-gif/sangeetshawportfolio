import { motion } from 'motion/react';
import { Brain, Code2, Database, LineChart, Rocket, ShieldCheck } from 'lucide-react';

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
  "Data Analysis", "Power BI & Tableau", "Dashboard Development", 
  "Google Apps Script", "Exploratory Data Analysis", "Risk Analytics", 
  "Financial Analysis", "Customer Segmentation", "Generative AI"
];

export default function About() {
  return (
    <div className="space-y-24 py-8">

      {/* INTRO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-pink font-black text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            My Ethos
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main leading-tight">
            STRATEGY <br />
            <span className="text-accent-pink italic">THROUGH DATA</span>
          </h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed max-w-4xl">
            I am a B.Com student and aspiring MBA specializing in Business Analytics. My mission is to empower MSMEs by implementing high-performance systems that drive efficiency and clarity.
          </p>
        </div>
      </div>

      {/* APPROACH CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {coreValues.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 space-y-6 group hover:border-accent-pink/40"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-accent-pink/10 rounded-xl text-accent-pink border border-accent-pink/20 group-hover:bg-accent-pink group-hover:text-bg-dark transition-all duration-300">
              {value.icon}
            </div>
            <h3 className="text-3xl font-black text-text-main">{value.title}</h3>
            <p className="text-text-muted text-lg font-medium leading-relaxed">
              {value.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* SKILLS MATRIX */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-black text-text-main whitespace-nowrap">TECH STACK</h3>
          <div className="h-px w-full bg-gradient-to-r from-glass-stroke to-transparent" />
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 glass-card text-sm font-bold text-text-muted hover:text-accent-pink hover:border-accent-pink/40 hover:bg-accent-pink/5 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* QUOTE / FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-12 glass-card bg-accent-pink/5 border-dashed border-accent-pink/20 text-center"
      >
        <p className="text-3xl font-black text-text-main italic tracking-tight italic">
          "Simple systems. <span className="text-accent-pink">Clear data.</span> Better decisions."
        </p>
      </motion.div>

    </div>
  );
}