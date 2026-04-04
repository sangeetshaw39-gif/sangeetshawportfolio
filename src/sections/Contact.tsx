import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MessageCircle, ArrowUpRight, Send, Briefcase, ShieldCheck, Bot } from 'lucide-react';

const contactMethods = [
  {
    label: "Email",
    value: "sangeetshaw39@gmail.com",
    href: "mailto:sangeetshaw39@gmail.com",
    desc: "Best for detailed project discussions and structured requirements",
    icon: <Mail className="w-5 h-5" />
  },
  {
    label: "LinkedIn",
    value: "Sangeet Shaw",
    href: "https://www.linkedin.com/in/sangeet-shaw-753148348/",
    desc: "Professional conversations, networking, and opportunities",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    label: "WhatsApp",
    value: "+91 62894 77287",
    href: "https://wa.me/916289477287",
    desc: "Quick discussions and fast communication",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    label: "Instagram",
    value: "@sangeetshaw_i",
    href: "https://www.instagram.com/sangeetshaw_i/",
    desc: "Explore my hobbies, photography, and creative work",
    icon: <Instagram className="w-5 h-5" />
  }
];

const expertise = [
  "End-to-End Inventory Automation",
  "Financial Dashboarding & Reporting",
  "Revenue & Customer Analysis",
  "Workflow Automation & Optimization"
];

interface ContactProps {
  setInteractionState: (state: 'idle' | 'active' | 'success') => void;
}

export default function Contact({ setInteractionState }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:sangeetshaw39@gmail.com?subject=${subject}&body=${body}`;
    setInteractionState('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-24 py-12">
      
      {/* Header */}
      <div className="max-w-4xl">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline text-xs uppercase tracking-[0.3em] mb-6 block"
        >
          Contact / Collaborate
        </motion.span>
        <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-text-main leading-[1.1] mb-8 uppercase">
          Let’s Build <br />
          <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.4)]">Something Useful.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-2xl border-l border-white/10 pl-8 italic">
          If you’re working on a business problem involving data, automation, or analysis — I can help design and build a structured solution.
        </p>
      </div>

      {/* Unified Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            onMouseEnter={() => setInteractionState('active')}
            onMouseLeave={() => setInteractionState('idle')}
            className="group glass-card p-8 flex flex-col items-center text-center space-y-4 hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-bg-surface border border-primary/20 rounded-2xl text-primary group-hover:scale-110 transition-transform">
              {method.icon}
            </div>
            <div className="space-y-1 w-full text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{method.label}</span>
              <p className="text-text-main font-bold truncate">{method.value}</p>
              <p className="text-[9px] text-text-muted/60 font-medium leading-tight pt-2">{method.desc}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left HUD */}
        <div className="lg:col-span-4 space-y-12">
          <div className="glass-card glass-refraction p-10 ghost-border rounded-sm relative overflow-hidden group">
            <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Bot className="w-48 h-48 text-primary" />
            </div>
            <p className="font-headline text-[10px] uppercase tracking-widest text-primary mb-6 pr-4 border-l-2 border-primary pl-4">Working Availability</p>
            <div className="space-y-4 text-text-muted font-medium">
              <p className="text-sm font-bold text-text-main">Currently open to:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Building data-driven systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Automating manual workflows
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  Analyzing financial / operational data
                </li>
              </ul>
              <p className="text-[11px] pt-4 italic border-t border-white/5">
                Prefer working on real-world problems with clear use cases.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold text-text-main">Expertise Map</h3>
            <div className="grid grid-cols-1 gap-4">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-text-muted">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-bg-surface/20 glass-refraction p-8 md:p-16 rounded-sm ghost-border">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-primary transition-colors mb-2 block">Full Name</label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 focus:border-primary py-3 text-lg font-headline font-bold text-text-main outline-none transition-all placeholder:text-text-muted/20"
                    placeholder="SANGEET SHAW"
                  />
                </div>
                <div className="relative group">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-secondary transition-colors mb-2 block">Email Address</label>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 focus:border-secondary py-3 text-lg font-headline font-bold text-text-main outline-none transition-all placeholder:text-text-muted/20"
                    placeholder="SANGEET@SHAW.IO"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="flex justify-between items-end mb-4">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-primary transition-colors block">Message Transcript</label>
                  <span className="text-[10px] text-text-muted italic">Tell me what you're trying to solve — I'll respond with a structured approach.</span>
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-primary/20 focus:border-primary py-3 text-lg font-headline font-bold text-text-main outline-none transition-all resize-none placeholder:text-text-muted/20"
                  rows={4}
                  placeholder="Briefly describe your problem or requirement..."
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-end gap-8 pt-8">
                <button 
                  type="submit"
                  onMouseEnter={() => setInteractionState('active')}
                  onMouseLeave={() => setInteractionState('idle')}
                  className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-secondary text-bg-dark font-headline font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,193,208,0.2)]"
                >
                  Start Conversation →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}