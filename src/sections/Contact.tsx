import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MessageCircle, Phone, ArrowUpRight, Send, Briefcase } from 'lucide-react';

const contactMethods = [
  {
    label: "Email",
    value: "sangeetshaw39@gmail.com",
    href: "mailto:sangeetshaw39@gmail.com",
    icon: <Mail className="w-5 h-5" />
  },
  {
    label: "LinkedIn",
    value: "Sangeet Shaw",
    href: "https://www.linkedin.com/in/sangeet-shaw-753148348/",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    label: "WhatsApp",
    value: "+91 62894 77287",
    href: "https://wa.me/916289477287",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    label: "Instagram",
    value: "@sangeetshaw_i",
    href: "https://www.instagram.com/sangeetshaw_i/",
    icon: <Instagram className="w-5 h-5" />
  }
];

export default function Contact() {
  return (
    <div className="space-y-24 py-8">

      {/* HEADER */}
      <div className="max-w-3xl">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-pink font-black text-xs uppercase tracking-[0.3em] mb-4 block"
        >
          Let's Build
        </motion.span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main mb-6 leading-tight">
          IGNITE YOUR <br />
          <span className="text-accent-pink italic">OPERATIONS</span>
        </h2>
        <p className="text-xl text-text-muted font-medium leading-relaxed">
          Open for consulting, collaborative projects, or discussions on how data can transform your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: CONTACT CHANNELS */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-8 flex flex-col items-center text-center space-y-4 hover:border-accent-pink/40 hover:bg-accent-pink/5"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-bg-surface border border-glass-stroke rounded-2xl text-accent-pink group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{method.label}</span>
                <p className="text-text-main font-bold truncate max-w-full">{method.value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-accent-pink/40 group-hover:text-accent-pink transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* BOTTOM SECTION: SERVICES & RESUME */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 space-y-8"
          >
            <div className="flex items-center gap-4">
              <Briefcase className="w-6 h-6 text-accent-pink" />
              <h3 className="text-2xl font-black text-text-main">EXPERTISE</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "End-to-End Inventory Automation",
                "Custom Financial Dashboarding",
                "Retail Revenue Optimization",
                "AI-Powered Workflow Analysis"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-muted font-medium">
                  <div className="w-1.5 h-1.5 bg-accent-pink rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col justify-between space-y-10 group bg-accent-pink/5 hover:bg-accent-pink/10"
          >
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-black text-text-main">READY TO START?</h3>
              <p className="text-lg text-text-muted font-medium">
                Download my full resume for a detailed view of my technical skills and project history.
              </p>
            </div>

            <a
              href="/assets/sangeetshawresume.pdf"
              target="_blank"
              className="btn-primary w-full flex items-center justify-center gap-3"
            >
              Download Full Resume
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}