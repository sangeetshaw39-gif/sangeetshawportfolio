import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ExternalLink, 
  X, 
  Sparkles, 
  TrendingUp,
  ArrowUpRight,
  Instagram,
  Video,
  Layers
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ContentItem {
  id: string;
  title: string;
  type: 'cashall' | 'personal';
  categoryLabel: string;
  rankBadge: string;
  format: string;
  link: string;
  hook: string;
  description: string;
  strategy: string;
  platform: string;
  channel: string;
  metrics: { views: string };
  visualBg: string;
}

// --- TOP 4 CASHALL OFFICIAL BRAND REELS ---
const brandReels: ContentItem[] = [
  {
    id: 'c1',
    title: 'CashALL Valuation & Doorstep Buyback Reel',
    type: 'cashall',
    categoryLabel: 'Brand Reel (Top Viral)',
    rankBadge: 'Rank #1 Viral',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/Dcz-DCvRyn2/',
    hook: '"Purana phone bechne ke liye shop ke chakkar kyun lagana?"',
    description: 'CashALL’s #1 viral reel demonstrating instant doorstep valuation, device inspection, and direct UPI payout without offline store hassle.',
    strategy: 'High-intent pain point acquisition eliminating customer friction of traveling to retail shops with promises of instant digital payment.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '72.3K+ Views' },
    visualBg: 'from-amber-950/40 via-bg-surface to-rose-950/30'
  },
  {
    id: 'c2',
    title: 'Ganesh Chaturthi Festive Smart Upgrade Campaign',
    type: 'cashall',
    categoryLabel: 'Brand Campaign Reel',
    rankBadge: 'Rank #2 Festive',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DdQdrnqx0RR/',
    hook: '"🙏✨ Bappa aaye hain, aur saath laaye hain smart upgrade ka message! 📱"',
    description: 'Festive seasonal campaign urging consumers to liquidate idle smartphones at home to fund their new festive upgrades.',
    strategy: 'Cultural resonance paired with an urgent monetization hook to capture festive season upgrade intent.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '32.8K+ Views' },
    visualBg: 'from-yellow-950/40 via-bg-surface to-amber-900/30'
  },
  {
    id: 'c3',
    title: 'Device Resale & Value Depreciation Awareness',
    type: 'cashall',
    categoryLabel: 'Educational Brand Reel',
    rankBadge: 'Rank #3 Education',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DceJQr1p1YF/',
    hook: '"Your phone is still working. But is its value still working for you? 📱"',
    description: 'Educational thought-leadership reel showing how rapidly unused electronics lose market resale value sitting in desk drawers.',
    strategy: 'Loss-aversion psychology targeting gadget hoarders to prompt immediate valuation checks.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '26.0K+ Views' },
    visualBg: 'from-rose-950/40 via-bg-surface to-purple-950/30'
  },
  {
    id: 'c4',
    title: 'Hassle-Free 3-Step Doorstep Selling Workflow',
    type: 'cashall',
    categoryLabel: 'Workflow Conversion Reel',
    rankBadge: 'Rank #4 Conversion',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DctwqFVvMMc/',
    hook: '"Ab purana phone sell karne ke liye shop ke chakkar lagane ki zarurat nahi."',
    description: 'Smooth 3-step walkthrough showing request creation, slot selection, field agent inspection, and instant UPI bank transfer.',
    strategy: 'Workflow simplification converting hesitant users into active pickup bookings.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '15.6K+ Views' },
    visualBg: 'from-blue-950/40 via-bg-surface to-cyan-950/30'
  }
];

// --- TOP 4 PERSONAL CREATOR REELS (@sangeetshaw_i) ---
const personalReels: ContentItem[] = [
  {
    id: 'p1',
    title: 'Personal Showcase: Viral Motion & Lifestyle Reel',
    type: 'personal',
    categoryLabel: 'Personal Reel (Top Viral)',
    rankBadge: 'Rank #1 Viral',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DVLzc39kpvN/',
    hook: 'Top Performer: High-retention audio & cinematic pacing',
    description: 'My most viewed personal Instagram reel, featuring high-energy transitions, audio synchronization, and visual pacing that generated over 2,500+ organic views.',
    strategy: 'Hook retention and audio-trend alignment engineered to capture audience attention within the first 1.5 seconds.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '2,528+ Views' },
    visualBg: 'from-blue-950/40 via-bg-surface to-indigo-950/30'
  },
  {
    id: 'p2',
    title: 'Personal Creative: Kinetic Cut & Motion Reel',
    type: 'personal',
    categoryLabel: 'Creative Kinetic Reel',
    rankBadge: 'Rank #2 Kinetic',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DZZ9zajB7VB/',
    hook: 'Visual rhythm & color-graded aesthetic',
    description: 'Curated short-form visual reel demonstrating creative video editing techniques, sound design, and consistent color tone.',
    strategy: 'Visual mood curation engineered for repeat plays and high completion rates.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,131+ Views' },
    visualBg: 'from-purple-950/40 via-bg-surface to-slate-900'
  },
  {
    id: 'p3',
    title: 'Personal Narrative: Lifestyle & Aesthetic Cut',
    type: 'personal',
    categoryLabel: 'Narrative Aesthetic Reel',
    rankBadge: 'Rank #3 Aesthetic',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DWv5P6nAcVG/',
    hook: 'Seamless cut-on-action transitions',
    description: 'Short-form visual reel showcasing dynamic framing, ambient soundscapes, and clean mobile cinematic editing.',
    strategy: 'Pacing experiments designed to boost watch time and interaction rate.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,094+ Views' },
    visualBg: 'from-emerald-950/40 via-bg-surface to-zinc-900'
  },
  {
    id: 'p4',
    title: 'Personal Exploration: Dynamic Sequence Reel',
    type: 'personal',
    categoryLabel: 'Dynamic Sequence Reel',
    rankBadge: 'Rank #4 Engagement',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DV6B9NTAfjv/',
    hook: 'Audience-engaging community hook',
    description: 'High engagement reel that stimulated direct comments and active community discussion, testing call-to-action captions.',
    strategy: 'Community engagement mechanics tested through open-ended caption hooks.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,069+ Views' },
    visualBg: 'from-rose-950/40 via-bg-surface to-pink-950/30'
  }
];

export default function ContentShowcase() {
  const [filter, setFilter] = useState<'all' | 'brand' | 'personal'>('all');
  const [activeModalItem, setActiveModalItem] = useState<ContentItem | null>(null);

  const showBrand = filter === 'all' || filter === 'brand';
  const showPersonal = filter === 'all' || filter === 'personal';

  return (
    <div className="space-y-16 py-12">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
          >
            SHORT-FORM VIDEO SHOWCASE // SEPARATED PORTFOLIOS
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-text-main leading-tight">
            TOP REELS: BRAND & <br />
            <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.3)]">
              PERSONAL CREATIVE.
            </span>
          </h1>
          <p className="text-base md:text-lg text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            Separated showcases featuring the <strong className="text-text-main">Top 4 CashALL Brand Reels</strong> (engineered for recommerce customer acquisition) and the <strong className="text-text-main">Top 4 Personal Creator Reels</strong> (engineered for aesthetic pacing, audio synchronization, and kinetic cuts).
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 p-1.5 glass-card ghost-border">
          {[
            { id: 'all', label: 'All Reels (Both)' },
            { id: 'brand', label: 'CashALL Brand Reels (Top 4)' },
            { id: 'personal', label: 'Personal Reels (Top 4)' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={cn(
                "px-4 py-2 rounded-md font-headline text-xs uppercase tracking-wider font-bold transition-all",
                filter === btn.id
                  ? "bg-primary text-bg-dark shadow-[0_0_15px_rgba(255,193,208,0.3)]"
                  : "text-text-muted hover:text-text-main hover:bg-white/5"
              )}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: CASHALL BRAND REELS (TOP 4)                                   */}
      {/* ========================================================================= */}
      {showBrand && (
        <section className="space-y-8">
          
          {/* Brand Section Header Card */}
          <div className="glass-card p-6 md:p-8 ghost-border bg-gradient-to-r from-primary/[0.07] via-bg-surface to-bg-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-l-primary">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 shadow-[0_0_20px_rgba(255,193,208,0.15)]">
                <Video className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-headline uppercase tracking-widest text-secondary font-black block">
                    Company Brand Management
                  </span>
                  <span className="px-2.5 py-0.5 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-full">
                    146.7K+ Top 4 Views
                  </span>
                  <span className="px-2 py-0.5 bg-white/5 text-text-muted text-[10px] font-mono rounded-full">
                    Top 4 Selected
                  </span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-main">
                  CashALL Official — Top 4 Brand Reels
                </h2>
                <p className="text-xs md:text-sm text-text-muted max-w-2xl">
                  High-intent problem hooks, customer friction elimination, and doorstep recommerce acquisition that drove over 146,700+ views across CashALL's top performing video campaigns.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/cashall_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-bg-dark text-xs font-headline font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all rounded-sm flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(255,193,208,0.2)]"
            >
              <Instagram className="w-4 h-4" />
              <span>@cashall_official</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Brand Reels 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {brandReels.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card ghost-border overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 hover:border-primary/40"
              >
                {/* Visual Mockup Header */}
                <div 
                  className={cn(
                    "relative bg-gradient-to-br border-b border-primary/10 p-6 flex flex-col justify-between overflow-hidden min-h-[210px]",
                    item.visualBg
                  )}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <span className="px-2.5 py-1 bg-bg-dark/85 backdrop-blur-md border border-primary/30 text-primary text-[9px] font-black uppercase tracking-widest rounded-sm">
                      {item.rankBadge}
                    </span>
                    <span className="text-[10px] text-text-muted font-mono font-medium bg-bg-dark/50 px-2 py-0.5 rounded">
                      {item.channel}
                    </span>
                  </div>

                  {/* Center Play Button (Click to open Instagram link) */}
                  <div className="my-auto py-3 flex justify-center items-center relative z-10">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 shadow-[0_0_25px_rgba(255,193,208,0.3)]"
                      title="Watch Reel on Instagram"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </a>
                  </div>

                  {/* Views Only — Zero Likes Shown */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-bg-dark/90 text-primary text-[10px] font-black uppercase tracking-wider rounded-sm flex items-center gap-1.5 border border-primary/20">
                      <TrendingUp className="w-3.5 h-3.5 text-secondary" />
                      {item.metrics.views}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-text-muted">
                      {item.format}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-base font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-2 text-[10px]">
                    <div className="text-text-muted line-clamp-1 italic">
                      Hook: "{item.hook}"
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button 
                        onClick={() => setActiveModalItem(item)}
                        className="text-text-muted hover:text-primary font-bold uppercase tracking-wider text-[9px] transition-colors"
                      >
                        Strategy Note
                      </button>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center gap-1 hover:underline"
                      >
                        Watch <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>
      )}

      {/* Visual Section Separator when both are shown */}
      {filter === 'all' && (
        <div className="relative py-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/15" />
          </div>
          <div className="relative px-6 py-2 bg-bg-dark border border-primary/20 rounded-full text-[10px] font-headline font-bold uppercase tracking-[0.25em] text-secondary flex items-center gap-2 shadow-[0_0_20px_rgba(255,193,208,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Creative Division: Brand Strategy & Personal Aesthetic</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: PERSONAL CREATOR REELS (TOP 4)                                */}
      {/* ========================================================================= */}
      {showPersonal && (
        <section className="space-y-8">
          
          {/* Personal Section Header Card */}
          <div className="glass-card p-6 md:p-8 ghost-border bg-gradient-to-r from-secondary/[0.07] via-bg-surface to-bg-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-l-secondary">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shrink-0 shadow-[0_0_20px_rgba(255,193,208,0.15)]">
                <Layers className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-black block">
                    Personal Creator Showcase
                  </span>
                  <span className="px-2.5 py-0.5 bg-secondary/20 text-secondary text-[10px] font-black uppercase rounded-full">
                    5.8K+ Top 4 Views
                  </span>
                  <span className="px-2 py-0.5 bg-white/5 text-text-muted text-[10px] font-mono rounded-full">
                    Top 4 Selected
                  </span>
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-text-main">
                  Personal Creative — Top 4 Creator Reels
                </h2>
                <p className="text-xs md:text-sm text-text-muted max-w-2xl">
                  Short-form visual storytelling, kinetic cut-on-action editing, audio-trend synchronization, and atmospheric lifestyle aesthetics curated on @sangeetshaw_i.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/sangeetshaw_i/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-secondary/40 text-secondary text-xs font-headline font-bold uppercase tracking-wider hover:bg-secondary/15 active:scale-95 transition-all rounded-sm flex items-center gap-2 shrink-0 shadow-[0_0_15px_rgba(255,193,208,0.15)]"
            >
              <Instagram className="w-4 h-4" />
              <span>@sangeetshaw_i</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Personal Reels 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {personalReels.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card ghost-border overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500 hover:border-secondary/40"
              >
                {/* Visual Mockup Header */}
                <div 
                  className={cn(
                    "relative bg-gradient-to-br border-b border-primary/10 p-6 flex flex-col justify-between overflow-hidden min-h-[210px]",
                    item.visualBg
                  )}
                >
                  <div className="flex justify-between items-start relative z-10">
                    <span className="px-2.5 py-1 bg-bg-dark/85 backdrop-blur-md border border-secondary/30 text-secondary text-[9px] font-black uppercase tracking-widest rounded-sm">
                      {item.rankBadge}
                    </span>
                    <span className="text-[10px] text-text-muted font-mono font-medium bg-bg-dark/50 px-2 py-0.5 rounded">
                      {item.channel}
                    </span>
                  </div>

                  {/* Center Play Button (Click to open Instagram link) */}
                  <div className="my-auto py-3 flex justify-center items-center relative z-10">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-bg-dark transition-all duration-300 shadow-[0_0_25px_rgba(255,193,208,0.3)]"
                      title="Watch Reel on Instagram"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </a>
                  </div>

                  {/* Views Only — Zero Likes Shown */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-bg-dark/90 text-secondary text-[10px] font-black uppercase tracking-wider rounded-sm flex items-center gap-1.5 border border-secondary/20">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      {item.metrics.views}
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-text-muted">
                      {item.format}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-headline text-base font-bold text-text-main group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 space-y-2 text-[10px]">
                    <div className="text-text-muted line-clamp-1 italic">
                      Hook: "{item.hook}"
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button 
                        onClick={() => setActiveModalItem(item)}
                        className="text-text-muted hover:text-secondary font-bold uppercase tracking-wider text-[9px] transition-colors"
                      >
                        Strategy Note
                      </button>
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary font-bold uppercase tracking-widest text-[10px] flex items-center gap-1 hover:underline"
                      >
                        Watch <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>
      )}

      {/* Interactive Detail Modal (Zero Likes Shown) */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-xl w-full p-8 ghost-border space-y-6 relative overflow-hidden bg-bg-surface/95 shadow-2xl"
            >
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-6 right-6 p-2 text-text-muted hover:text-primary transition-colors rounded-full border border-primary/20 hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-sm">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-secondary font-mono font-bold">{activeModalItem.channel}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-text-main">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Stats Bar (Views, Platform, Format — NO LIKES) */}
              <div className="p-3 bg-bg-surface/80 border border-primary/20 rounded-md flex items-center justify-around text-xs font-mono">
                <span className="text-primary font-bold">Views: {activeModalItem.metrics.views}</span>
                <span className="text-secondary">Channel: {activeModalItem.channel}</span>
                <span className="text-text-muted">Format: {activeModalItem.format}</span>
              </div>

              {/* Hook Spotlight */}
              <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-md space-y-1">
                <span className="text-[9px] font-headline uppercase tracking-widest text-primary font-black">
                  Hook Narrative
                </span>
                <p className="text-xs font-bold text-text-main italic">{activeModalItem.hook}</p>
              </div>

              <div className="space-y-3 text-xs text-text-muted leading-relaxed">
                <div>
                  <strong className="text-text-main block mb-1">Execution & Narrative:</strong>
                  <p>{activeModalItem.description}</p>
                </div>
                <div>
                  <strong className="text-text-main block mb-1">Audience Strategy:</strong>
                  <p>{activeModalItem.strategy}</p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <a
                  href={activeModalItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary text-bg-dark font-headline text-xs uppercase font-bold tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  Watch Reel on Instagram
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="text-text-muted hover:text-text-main text-xs uppercase tracking-wider font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
