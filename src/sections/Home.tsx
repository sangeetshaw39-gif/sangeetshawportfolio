import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

interface HomeProps {
  onViewProjects: () => void;
  onContact: () => void;
  onAbout: () => void;
}

export default function Home({ onViewProjects, onContact, onAbout }: HomeProps) {
  return (
    <div className="space-y-24 py-8">

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-accent-pink border border-accent-pink/30 rounded-full bg-accent-pink/5"
            >
              <Sparkles className="w-3 h-3" />
              AI & Business Analytics Consultant
            </motion.span>

            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-text-main">
              SANGEET <br />
              <span className="text-accent-pink">SHAW</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed font-medium">
              Bridging the gap between <span className="text-text-main">Complex Data</span> and <span className="text-accent-pink italic">Actionable Strategy</span>. Leveraging AI to transform business operations.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <button
              onClick={onViewProjects}
              className="btn-primary group flex items-center gap-3"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContact}
              className="btn-secondary"
            >
              Get in Touch
            </button>

            <a
              href="/assets/sangeetshawresume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-6 text-sm font-bold text-text-muted hover:text-accent-pink transition-colors group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE / PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center items-center cursor-pointer group/portrait"
          onClick={onAbout}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* AMBIENT GRADIENT GLOW */}
            <div className="absolute inset-0 bg-accent-pink/20 blur-[100px] rounded-full scale-125 animate-pulse group-hover/portrait:bg-accent-pink/40 transition-colors duration-700" />
            
            {/* ROTATING OUTER RING (SVG) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-accent-pink/30 rounded-full"
            />

            {/* SECONDARY ROTATING RING */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[15px] border border-accent-pink/20 rounded-full"
            />
            
            {/* THIRD CONCENTRIC RING */}
            <div className="absolute inset-[30px] border border-accent-pink/10 rounded-full" />

            {/* PORTRAIT IMAGE */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 z-10 group">
              <div className="absolute inset-0 bg-accent-pink/20 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/assets/sangeet.png"
                alt="Sangeet Shaw"
                className="w-full h-full object-cover rounded-full border-4 border-accent-pink/30 shadow-[0_0_80px_rgba(244,157,181,0.2)] grayscale-[20%] hover:grayscale-0 transition-all duration-500 relative z-10"
              />
              
            </div>
          </div>
        </motion.div>

      </div>

      {/* CORE PILLARS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Actionable Strategy",
            desc: "Turning raw data into clear, efficient business workflows.",
            icon: "01"
          },
          {
            title: "Business Automation",
            desc: "Building custom AI-powered dashboards and reporting systems.",
            icon: "02"
          },
          {
            title: "Data Intelligence",
            desc: "Advanced EDA to uncover hidden risks and growth opportunities.",
            icon: "03"
          }
        ].map((item, i) => (
          <div key={i} className="glass-card group p-8 space-y-4 hover:border-accent-pink/40">
            <span className="text-4xl font-black text-accent-pink/10 group-hover:text-accent-pink/30 transition-colors leading-none">
              {item.icon}
            </span>
            <h3 className="text-2xl font-bold text-text-main group-hover:text-accent-pink transition-colors">
              {item.title}
            </h3>
            <p className="text-text-muted leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </motion.div>

    </div>
  );
}