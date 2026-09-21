import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Layers, 
  Image as ImageIcon, 
  Lightbulb, 
  ExternalLink, 
  X, 
  Sparkles, 
  Eye, 
  TrendingUp,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ContentItem {
  id: string;
  title: string;
  category: 'reels' | 'carousels' | 'ads' | 'concepts';
  categoryLabel: string;
  format: string;
  hook: string;
  description: string;
  strategy: string;
  platform: string;
  aspectRatio: string;
  visualBg: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'CashALL Valuation Reveal Reel',
    category: 'reels',
    categoryLabel: 'Short-Form Video',
    format: '9:16 Vertical Video',
    hook: '"Stop leaving ₹15,000 on your desk: Why old phones depreciate faster than cars."',
    description: 'Dynamic pacing reel demonstrating the 60-second doorstep phone valuation workflow with snappy jump-cuts, animated price deductions, and sound design.',
    strategy: 'Pain-point hook targeting phone hoarders, highlighting instant doorstep cash payouts versus tedious trade-in counters.',
    platform: 'Instagram Reels / Meta Ads',
    aspectRatio: 'aspect-[9/16]',
    visualBg: 'from-pink-950/40 via-bg-surface to-rose-950/30'
  },
  {
    id: '2',
    title: '5 Costly Mistakes Small Businesses Make with Inventory',
    category: 'carousels',
    categoryLabel: 'Carousel Deck',
    format: '4:5 Editorial Slides',
    hook: 'Slide 1: "Is your warehouse holding dead cash?"',
    description: '10-slide high-retention breakdown showing the financial difference between FIFO stock movement and arbitrary bulk purchasing, concluding with an Apps Script automation framework.',
    strategy: 'Educational value designed for bookmarking and shares among SMB owners and finance managers.',
    platform: 'Instagram Carousel / LinkedIn',
    aspectRatio: 'aspect-[4/5]',
    visualBg: 'from-amber-950/40 via-bg-surface to-orange-950/30'
  },
  {
    id: '3',
    title: 'CashALL Instant Doorstep Cash Ad',
    category: 'ads',
    categoryLabel: 'Performance Ad Creative',
    format: '1:1 Feed & Story',
    hook: '"Sell your broken screen iPhone in 24 hours. Zero hidden deductions."',
    description: 'High-contrast promotional visual featuring bold typography, verified device payout guarantees, and clear WhatsApp/Web CTA badge.',
    strategy: 'Direct response creative engineered for local Meta Ad campaigns with conversion-optimized CTR.',
    platform: 'Meta Ads Manager (Feed & Stories)',
    aspectRatio: 'aspect-square',
    visualBg: 'from-rose-950/40 via-bg-surface to-purple-950/30'
  },
  {
    id: '4',
    title: 'ERP vs Spreadsheets: The Real Tipping Point',
    category: 'reels',
    categoryLabel: 'Short-Form Video',
    format: '9:16 Talking Head & B-Roll',
    hook: '"At what revenue do you actually outgrow Excel? The math might surprise you."',
    description: 'Fast-cut video explaining the hidden operational cost of manual data entry, featuring screen recordings of keyboard-first ERP entry.',
    strategy: 'Founder-led authority building, showcasing technical competence paired with practical business empathy.',
    platform: 'Instagram Reels / YouTube Shorts',
    aspectRatio: 'aspect-[9/16]',
    visualBg: 'from-slate-900 via-bg-surface to-zinc-900'
  },
  {
    id: '5',
    title: 'Omnichannel Used-Device Acquisition Campaign',
    category: 'concepts',
    categoryLabel: 'Campaign Concept',
    format: 'Multi-Asset Campaign Blueprint',
    hook: 'Core Angle: "Turn Old Tech into Working Capital"',
    description: 'Integrated marketing blueprint uniting hyper-local Facebook ads, Instagram reels, doorstep flyer collateral, and automated WhatsApp follow-ups.',
    strategy: 'Capturing both customer sellers and local mobile repair shop partners under an unified affiliate tier.',
    platform: 'Full Funnel (Meta + Offline + WhatsApp)',
    aspectRatio: 'aspect-[16/10]',
    visualBg: 'from-primary/10 via-bg-surface to-secondary/10'
  },
  {
    id: '6',
    title: 'Behind The Scenes: How We Scaffolding CashALL with AI',
    category: 'carousels',
    categoryLabel: 'Carousel Deck',
    format: '4:5 Technical Carousel',
    hook: 'Slide 1: "We built an entire recommerce operations platform in weeks. Here\'s the AI stack."',
    description: 'Step-by-step visual slide deck documenting the prompt-to-production workflow using Antigravity, Next.js 14, and Prisma ORM.',
    strategy: 'Differentiator narrative showing that I don\'t only talk marketing — I build the actual software engine.',
    platform: 'Instagram / LinkedIn',
    aspectRatio: 'aspect-[4/5]',
    visualBg: 'from-blue-950/40 via-bg-surface to-indigo-950/30'
  }
];

export default function ContentShowcase() {
  const [filter, setFilter] = useState<'all' | 'reels' | 'carousels' | 'ads' | 'concepts'>('all');
  const [activeModalItem, setActiveModalItem] = useState<ContentItem | null>(null);

  const filteredItems = filter === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === filter);

  return (
    <div className="space-y-24 py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
          >
            CREATIVE PORTFOLIO // CONTENT & MEDIA
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-text-main leading-tight">
            CONTENT THAT <br />
            <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.3)]">
              CAPTURES & CONVERTS.
            </span>
          </h1>
          <p className="text-lg text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            A curated showcase of short-form video hooks, educational carousels, performance ad creatives, and campaign concepts built to engage audiences and generate demand.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 glass-card ghost-border">
          {[
            { id: 'all', label: 'All Creatives' },
            { id: 'reels', label: 'Reels / Video' },
            { id: 'carousels', label: 'Carousels' },
            { id: 'ads', label: 'Ad Creatives' },
            { id: 'concepts', label: 'Campaigns' }
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

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card ghost-border overflow-hidden group flex flex-col hover:-translate-y-1.5 transition-all duration-500"
          >
            {/* Visual Header Mockup */}
            <div 
              onClick={() => setActiveModalItem(item)}
              className={cn(
                "relative bg-gradient-to-br border-b border-primary/10 p-8 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[220px]",
                item.visualBg
              )}
            >
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

              <div className="flex justify-between items-start relative z-10">
                <span className="px-2.5 py-1 bg-bg-dark/80 backdrop-blur-md border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest rounded-sm">
                  {item.categoryLabel}
                </span>
                <span className="text-[10px] text-text-muted font-mono font-medium">
                  {item.format}
                </span>
              </div>

              {/* Center Play/Expand indicator */}
              <div className="my-auto py-6 flex justify-center items-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-300 shadow-[0_0_20px_rgba(255,193,208,0.2)]">
                  {item.category === 'reels' ? <Play className="w-6 h-6 fill-current ml-0.5" /> : <Eye className="w-6 h-6" />}
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[9px] uppercase tracking-widest text-secondary font-black block mb-1">Hook Angle</span>
                <p className="text-xs font-bold text-text-main line-clamp-2 italic">{item.hook}</p>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-headline text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2 text-[11px]">
                <div className="flex items-center gap-2 text-text-muted">
                  <Flame className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="font-medium text-text-main truncate">Strategy: {item.strategy}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-text-muted/60 pt-1">
                  <span>Channel: {item.platform}</span>
                  <button 
                    onClick={() => setActiveModalItem(item)}
                    className="text-primary hover:underline flex items-center gap-1 font-bold"
                  >
                    View Breakdown <ArrowUpRight className="w-3 h-3" />
                  </button>
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
              className="glass-card max-w-2xl w-full p-8 md:p-10 ghost-border space-y-6 relative overflow-hidden bg-bg-surface/95"
            >
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-6 right-6 p-2 text-text-muted hover:text-primary transition-colors rounded-full border border-primary/20 hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-sm">
                    {activeModalItem.categoryLabel}
                  </span>
                  <span className="text-xs text-text-muted font-mono">{activeModalItem.format}</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-text-main">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Hook Spotlight */}
              <div className="p-5 bg-primary/5 border-l-2 border-primary rounded-r-md space-y-1">
                <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-black">
                  Core Hook / Headline
                </span>
                <p className="text-sm font-bold text-text-main italic">{activeModalItem.hook}</p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-text-muted leading-relaxed">
                <div>
                  <strong className="text-text-main block mb-1">Creative Execution & Narrative:</strong>
                  <p>{activeModalItem.description}</p>
                </div>
                <div>
                  <strong className="text-text-main block mb-1">Audience & Performance Strategy:</strong>
                  <p>{activeModalItem.strategy}</p>
                </div>
                <div className="p-3 bg-bg-surface/60 border border-white/5 rounded-md flex items-center justify-between text-xs">
                  <span className="text-text-muted">Targeted Distribution Channel:</span>
                  <span className="font-bold text-primary">{activeModalItem.platform}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-4 border-t border-white/5">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-2.5 bg-primary text-bg-dark font-headline text-xs uppercase font-bold tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
