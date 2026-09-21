import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MessageCircle, ArrowUpRight, Send, Sparkles, CheckCircle2 } from 'lucide-react';

const contactMethods = [
  {
    label: "Email",
    value: "sangeetshaw39@gmail.com",
    href: "mailto:sangeetshaw39@gmail.com",
    desc: "For campaign briefs, detailed project inquiries & consulting",
    icon: <Mail className="w-5 h-5" />
  },
  {
    label: "LinkedIn",
    value: "Sangeet Shaw",
    href: "https://www.linkedin.com/in/sangeet-shaw-753148348/",
    desc: "Professional networking, strategic discussions & collaboration",
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    label: "WhatsApp",
    value: "+91 62894 77287",
    href: "https://wa.me/916289477287",
    desc: "Direct messages, fast responses & quick consultations",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    label: "Instagram",
    value: "@sangeetshaw_i",
    href: "https://www.instagram.com/sangeetshaw_i/",
    desc: "Follow my creative journey, video reels & behind-the-scenes",
    icon: <Instagram className="w-5 h-5" />
  }
];

const openToOpportunities = [
  "Paid Advertising & Meta Ad Campaigns",
  "Short-Form Video (Reels) & Video Editing",
  "High-Retention Carousel & Ad Creatives",
  "Custom Web Applications & Operational ERPs",
  "Business Workflow Automation & Integrations"
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

    const subject = encodeURIComponent(`Project / Campaign Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject Scope / Inquiry:\n${message}`);
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
      <div className="max-w-4xl space-y-6">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
        >
          CONTACT // COLLABORATE & BUILD
        </motion.span>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-text-main leading-[1] uppercase">
          Have a Brand, Campaign or <br />
          <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.4)]">
            Digital Product in Mind?
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary font-headline font-bold uppercase tracking-tight">
          Let’s Build It.
        </p>
        <p className="text-base md:text-lg text-text-muted font-medium leading-relaxed max-w-2xl border-l border-primary/20 pl-6 italic">
          Whether you need to launch a targeted paid ad campaign, create hook-driven video content, or engineer a custom digital product like CashALL — reach out and let's discuss.
        </p>
      </div>

      {/* 4 Contact Channels Cards */}
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
            className="group glass-card p-8 flex flex-col items-center text-center space-y-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-bg-surface border border-primary/20 rounded-2xl text-primary group-hover:scale-110 transition-transform">
              {method.icon}
            </div>
            <div className="space-y-1 w-full text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">{method.label}</span>
              <p className="text-text-main font-bold truncate text-sm">{method.value}</p>
              <p className="text-[10px] text-text-muted/70 font-medium leading-relaxed pt-1">{method.desc}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
          </motion.a>
        ))}
      </div>

      {/* Bottom Form and Working Availability */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Information */}
        <div className="lg:col-span-5 space-y-10">
          <div className="glass-card p-8 ghost-border space-y-4">
            <span className="font-headline text-[10px] uppercase tracking-widest text-primary font-black block border-l-2 border-primary pl-3">
              Current Availability & Scope
            </span>
            <p className="text-xs text-text-muted leading-relaxed">
              Available for freelance engagements, marketing campaigns, and product development collaborations:
            </p>
            <div className="space-y-2.5 pt-2">
              {openToOpportunities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-text-main">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-secondary/5 border border-secondary/15 rounded-xl space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-black text-secondary block">Direct Coordination</span>
            <p className="text-xs text-text-muted leading-relaxed">
              For immediate inquiries, feel free to reach out directly via WhatsApp (+91 62894 77287) or Instagram DM (@sangeetshaw_i).
            </p>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-bg-surface/20 glass-refraction p-8 md:p-12 rounded-xl ghost-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-primary transition-colors mb-2 block font-black">
                    Your Name
                  </label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 focus:border-primary py-2 text-base font-headline font-bold text-text-main outline-none transition-all placeholder:text-text-muted/20"
                    placeholder="Alex Morgan"
                  />
                </div>
                <div className="relative group">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-secondary transition-colors mb-2 block font-black">
                    Your Email
                  </label>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-primary/20 focus:border-secondary py-2 text-base font-headline font-bold text-text-main outline-none transition-all placeholder:text-text-muted/20"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="flex justify-between items-end mb-2">
                  <label className="font-headline text-[9px] uppercase tracking-[0.3em] text-text-muted/60 group-focus-within:text-primary transition-colors block font-black">
                    Project Requirements / Message
                  </label>
                  <span className="text-[10px] text-text-muted/60 italic">Campaign, video content, or product build</span>
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-primary/20 focus:border-primary py-2 text-base font-headline font-bold text-text-main outline-none transition-all resize-none placeholder:text-text-muted/20"
                  placeholder="Tell me about your goals, target timeline, or what you're looking to build..."
                />
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit"
                  onMouseEnter={() => setInteractionState('active')}
                  onMouseLeave={() => setInteractionState('idle')}
                  className="w-full md:w-auto px-10 py-4 bg-primary text-bg-dark font-headline font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,208,0.25)] flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
}