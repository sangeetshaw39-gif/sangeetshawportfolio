import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ExternalLink, 
  X, 
  Sparkles, 
  Eye, 
  TrendingUp,
  Flame,
  ArrowUpRight,
  Instagram,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ContentItem {
  id: string;
  title: string;
  type: 'cashall' | 'personal';
  category: 'reels' | 'carousels' | 'ads';
  categoryLabel: string;
  format: string;
  link: string;
  hook: string;
  description: string;
  strategy: string;
  platform: string;
  channel: string;
  metrics?: { views?: string; likes?: string; comments?: string; tag?: string };
  visualBg: string;
}

const contentItems: ContentItem[] = [
  // --- CASHALL OFFICIAL BRAND CONTENT (ORDERED BY HIGHEST VIEWS) ---
  {
    id: 'c1',
    title: 'CashALL Valuation & Doorstep Buyback Reel',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Brand Reel (Top Viral)',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/Dcz-DCvRyn2/',
    hook: '"Purana phone bechne ke liye shop ke chakkar kyun lagana?"',
    description: 'CashALL’s #1 viral reel demonstrating instant doorstep valuation, device inspection, and direct UPI payout without offline store hassle.',
    strategy: 'High-intent pain point acquisition eliminating customer friction of traveling to retail shops with promises of instant digital payment.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '72.3K+ Views', likes: '52 Likes' },
    visualBg: 'from-amber-950/40 via-bg-surface to-rose-950/30'
  },
  {
    id: 'c2',
    title: 'Ganesh Chaturthi Festive Smart Upgrade Campaign',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Brand Campaign Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DdQdrnqx0RR/',
    hook: '"🙏✨ Bappa aaye hain, aur saath laaye hain smart upgrade ka message! 📱"',
    description: 'Festive seasonal campaign urging consumers to liquidate idle smartphones at home to fund their new festive upgrades.',
    strategy: 'Cultural resonance paired with an urgent monetization hook to capture festive season upgrade intent.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '32.8K+ Views', likes: '10 Likes' },
    visualBg: 'from-yellow-950/40 via-bg-surface to-amber-900/30'
  },
  {
    id: 'c3',
    title: 'Device Resale & Value Depreciation Awareness',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Educational Brand Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DceJQr1p1YF/',
    hook: '"Your phone is still working. But is its value still working for you? 📱"',
    description: 'Educational thought-leadership reel showing how rapidly unused electronics lose market resale value sitting in desk drawers.',
    strategy: 'Loss-aversion psychology targeting gadget hoarders to prompt immediate valuation checks.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '26.0K+ Views', likes: '22 Likes' },
    visualBg: 'from-rose-950/40 via-bg-surface to-purple-950/30'
  },
  {
    id: 'c4',
    title: 'Hassle-Free 3-Step Doorstep Selling Workflow',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Workflow Conversion Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DctwqFVvMMc/',
    hook: '"Ab purana phone sell karne ke liye shop ke chakkar lagane ki zarurat nahi."',
    description: 'Smooth 3-step walkthrough showing request creation, slot selection, field agent inspection, and instant UPI bank transfer.',
    strategy: 'Workflow simplification converting hesitant users into active pickup bookings.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '15.6K+ Views', likes: '21 Likes' },
    visualBg: 'from-blue-950/40 via-bg-surface to-cyan-950/30'
  },
  {
    id: 'c5',
    title: 'Relatable Phone Upgrade Comedy Skit',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Brand Humor Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/Dcge804piFo/',
    hook: '"Your phone has one excuse: \'Main abhi bhi chal raha hoon.\' 😂📱"',
    description: 'Humorous relatable content dissecting the common excuses users make before finally trading in their aging devices.',
    strategy: 'Observational humor engineered for high organic shares, comments, and algorithm discovery.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '10.2K+ Views', likes: '19 Likes' },
    visualBg: 'from-pink-950/40 via-bg-surface to-indigo-950/30'
  },
  {
    id: 'c6',
    title: 'Raksha Bandhan Story & Festive Gifting Campaign',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Festive Story Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DcjbgdDPNAV/',
    hook: '"Rakhi ka gift lena tha… salary abhi aayi nahi thi. 😅📱"',
    description: 'Narrative reel demonstrating how selling unused household phones provided immediate budget for Rakhi gifts.',
    strategy: 'Relatable situational dilemma driving instant utility and emotional resonance.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '7.6K+ Views', likes: '22 Likes' },
    visualBg: 'from-orange-950/40 via-bg-surface to-rose-950/30'
  },
  {
    id: 'c7',
    title: 'Doorstep Inspection & Dynamic Verification Reel',
    type: 'cashall',
    category: 'reels',
    categoryLabel: 'Field Inspection Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DdWhihhJ30y/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    hook: '"Watch how our technicians verify condition and transfer payment in 5 minutes."',
    description: 'Behind-the-scenes field agent inspection reel showing transparency, digital quotation checks, and instant UPI transfer on the spot.',
    strategy: 'Trust-building creative that resolves customer hesitation regarding on-site technician inspections.',
    platform: 'Instagram Reels (@cashall_official)',
    channel: '@cashall_official',
    metrics: { views: '4.6K+ Views', likes: '37 Likes' },
    visualBg: 'from-emerald-950/40 via-bg-surface to-slate-900'
  },
  {
    id: 'c8',
    title: 'CashALL Recommerce Customer Acquisition Campaign',
    type: 'cashall',
    category: 'ads',
    categoryLabel: 'Performance Ad Creative',
    format: 'Promotional Post',
    link: 'https://www.instagram.com/p/DdQgp8gkeAU/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    hook: '"Sell your old devices for the best value with CashALL."',
    description: 'High-contrast promotional visual engineered for feed discovery, emphasizing instant payout, multi-category support (phones, laptops, tablets), and doorstep service.',
    strategy: 'Direct-response conversion creative engineered to drive high-intent traffic to cashall.in.',
    platform: 'Instagram Feed (@cashall_official)',
    channel: '@cashall_official',
    metrics: { tag: 'Direct Ad Creative' },
    visualBg: 'from-purple-950/40 via-bg-surface to-pink-950/30'
  },
  {
    id: 'c9',
    title: 'CashALL Device Buyback Guarantee Post',
    type: 'cashall',
    category: 'carousels',
    categoryLabel: 'Brand Positioning',
    format: 'Square Post / Deck',
    link: 'https://www.instagram.com/p/DdMAiGYCZgu/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
    hook: '"Why take less at offline shops? Get deterministic pricing online."',
    description: 'Brand messaging post comparing traditional offline phone trade-in friction with CashALL’s transparent online algorithmic valuation.',
    strategy: 'Brand positioning creative highlighting fair market value and customer convenience.',
    platform: 'Instagram (@cashall_official)',
    channel: '@cashall_official',
    metrics: { tag: 'Value Guarantee' },
    visualBg: 'from-orange-950/40 via-bg-surface to-slate-900'
  },

  // --- PERSONAL TOP-VIEWED REELS (@sangeetshaw_i) ---
  {
    id: 'p1',
    title: 'Personal Showcase: Viral Motion & Lifestyle Reel',
    type: 'personal',
    category: 'reels',
    categoryLabel: 'Personal Reel (Top Viral)',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DVLzc39kpvN/',
    hook: 'Top Performer: High-retention audio & cinematic pacing',
    description: 'My most viewed personal Instagram reel, featuring high-energy transitions, audio synchronization, and visual pacing that generated over 2,500+ organic views.',
    strategy: 'Hook retention and audio-trend alignment engineered to capture audience attention within the first 1.5 seconds.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '2,528+ Views', likes: '127 Likes', comments: '55 Comments' },
    visualBg: 'from-blue-950/40 via-bg-surface to-indigo-950/30'
  },
  {
    id: 'p2',
    title: 'Personal Creative: Kinetic Cut & Motion Reel',
    type: 'personal',
    category: 'reels',
    categoryLabel: 'Personal Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DZZ9zajB7VB/',
    hook: 'Visual rhythm & color-graded aesthetic',
    description: 'Curated short-form visual reel demonstrating creative video editing techniques, sound design, and consistent color tone.',
    strategy: 'Visual mood curation engineered for repeat plays and high completion rates.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,131+ Views', likes: '72 Likes', comments: '14 Comments' },
    visualBg: 'from-purple-950/40 via-bg-surface to-slate-900'
  },
  {
    id: 'p3',
    title: 'Personal Narrative: Lifestyle & Aesthetic Cut',
    type: 'personal',
    category: 'reels',
    categoryLabel: 'Personal Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DWv5P6nAcVG/',
    hook: 'Seamless cut-on-action transitions',
    description: 'Short-form visual reel showcasing dynamic framing, ambient soundscapes, and clean mobile cinematic editing.',
    strategy: 'Pacing experiments designed to boost watch time and interaction rate.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,094+ Views', likes: '63 Likes', comments: '13 Comments' },
    visualBg: 'from-emerald-950/40 via-bg-surface to-zinc-900'
  },
  {
    id: 'p4',
    title: 'Personal Exploration: Dynamic Sequence Reel',
    type: 'personal',
    category: 'reels',
    categoryLabel: 'Personal Reel',
    format: '9:16 Video Reel',
    link: 'https://www.instagram.com/reel/DV6B9NTAfjv/',
    hook: 'Audience-engaging community hook',
    description: 'High engagement reel that stimulated 37+ direct comments and active discussion, testing call-to-action captions.',
    strategy: 'Community engagement mechanics tested through open-ended caption hooks.',
    platform: 'Instagram Reels (@sangeetshaw_i)',
    channel: '@sangeetshaw_i',
    metrics: { views: '1,069+ Views', likes: '75 Likes', comments: '37 Comments' },
    visualBg: 'from-rose-950/40 via-bg-surface to-pink-950/30'
  }
];

export default function ContentShowcase() {
  const [filter, setFilter] = useState<'all' | 'cashall' | 'personal' | 'reels'>('all');
  const [activeModalItem, setActiveModalItem] = useState<ContentItem | null>(null);

  const filteredItems = contentItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'cashall') return item.type === 'cashall';
    if (filter === 'personal') return item.type === 'personal';
    if (filter === 'reels') return item.category === 'reels';
    return true;
  });

  return (
    <div className="space-y-20 py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
          >
            CREATIVE SHOWCASE // VIDEO & SOCIAL MEDIA
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-text-main leading-tight">
            CONTENT, REELS & <br />
            <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.3)]">
              SOCIAL MEDIA CREATIVES.
            </span>
          </h1>
          <p className="text-base md:text-lg text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            A live showcase of brand campaigns I manage for <strong className="text-text-main">CashALL (@cashall_official)</strong> alongside my top-performing personal short-form video reels (<strong className="text-text-main">@sangeetshaw_i</strong>).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 glass-card ghost-border">
          {[
            { id: 'all', label: 'All Content' },
            { id: 'cashall', label: 'CashALL Top Reels' },
            { id: 'personal', label: 'Personal Top Reels' },
            { id: 'reels', label: 'Video Reels Only' }
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

      {/* Two Live Channel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Company Channel */}
        <div className="glass-card p-6 ghost-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-primary/[0.03]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] font-headline uppercase tracking-widest text-secondary font-black block">
                  Company Brand Management
                </span>
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-[9px] font-black uppercase rounded-full">
                  165K+ Top Views
                </span>
              </div>
              <h4 className="font-headline text-lg font-bold text-text-main">@cashall_official</h4>
              <p className="text-xs text-text-muted">Top-performing short-form video reels, ad creatives & doorstep recommerce acquisition</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/cashall_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-bg-dark text-xs font-headline font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all rounded-sm flex items-center gap-1.5 shrink-0"
          >
            Visit Channel
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Personal Channel */}
        <div className="glass-card p-6 ghost-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-secondary/[0.03]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] font-headline uppercase tracking-widest text-primary font-black block">
                  Personal Creator Channel
                </span>
                <span className="px-2 py-0.5 bg-secondary/20 text-secondary text-[9px] font-black uppercase rounded-full">
                  5.8K+ Top Views
                </span>
              </div>
              <h4 className="font-headline text-lg font-bold text-text-main">@sangeetshaw_i</h4>
              <p className="text-xs text-text-muted">Lifestyle, short-form pacing & creative editing</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/sangeetshaw_i/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-secondary/30 text-secondary text-xs font-headline font-bold uppercase tracking-wider hover:bg-secondary/10 active:scale-95 transition-all rounded-sm flex items-center gap-1.5 shrink-0"
          >
            Visit Profile
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card ghost-border overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-500"
          >
            {/* Visual Mockup Header */}
            <div 
              className={cn(
                "relative bg-gradient-to-br border-b border-primary/10 p-6 flex flex-col justify-between overflow-hidden min-h-[200px]",
                item.visualBg
              )}
            >
              <div className="flex justify-between items-start relative z-10">
                <span className="px-2.5 py-1 bg-bg-dark/80 backdrop-blur-md border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest rounded-sm">
                  {item.categoryLabel}
                </span>
                <span className="text-[10px] text-text-muted font-mono font-medium">
                  {item.channel}
                </span>
              </div>

              {/* Center Play Button (Click to open Instagram link) */}
              <div className="my-auto py-4 flex justify-center items-center relative z-10">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 shadow-[0_0_25px_rgba(255,193,208,0.25)]"
                  title="Watch on Instagram"
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </a>
              </div>

              {/* Metric Tag or Views Tag */}
              <div className="relative z-10 flex items-center justify-between">
                {item.metrics?.views ? (
                  <span className="px-2 py-0.5 bg-bg-dark/90 text-primary text-[10px] font-black uppercase tracking-wider rounded-sm flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-secondary" />
                    {item.metrics.views}
                  </span>
                ) : (
                  <span className="text-[9px] uppercase tracking-widest text-secondary font-black block">
                    {item.metrics?.tag || 'Featured Asset'}
                  </span>
                )}
                {item.metrics?.likes && (
                  <span className="text-[10px] font-mono text-text-muted flex items-center gap-1">
                    <Heart className="w-3 h-3 text-primary fill-current" /> {item.metrics.likes}
                  </span>
                )}
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
                    className="text-text-muted hover:text-text-main font-bold uppercase tracking-wider text-[9px] hover:underline"
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

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-xl w-full p-8 ghost-border space-y-6 relative overflow-hidden bg-bg-surface/95"
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

              {/* Stats Bar if present */}
              {activeModalItem.metrics?.views && (
                <div className="p-3 bg-bg-surface/80 border border-primary/20 rounded-md flex items-center justify-around text-xs font-mono">
                  <span className="text-primary font-bold">Views: {activeModalItem.metrics.views}</span>
                  <span className="text-text-main">Likes: {activeModalItem.metrics.likes}</span>
                  <span className="text-secondary">Comments: {activeModalItem.metrics.comments}</span>
                </div>
              )}

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
