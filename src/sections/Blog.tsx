import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const posts = [
  {
    title: "The Architecture of Short-Form Retention: How I Generated 170K+ Organic Reel Views Across Brand & Personal Channels",
    excerpt: "An in-depth breakdown of short-form video mechanics — the 1.5-second retention rule, eliminating recommerce friction for CashALL, kinetic video editing, and turning organic views into real business pipeline.",
    date: "June 2026",
    readTime: "11 min read",
    tag: "Content Strategy & Video",
    content: `
The Architecture of Short-Form Retention

Most creators and brand marketers approach short-form video (Instagram Reels) as a creative lottery: produce enough videos, hope the algorithm picks one up, and pray it turns into followers or customers.

That approach is flawed.

Reels algorithms in 2026 don’t operate on luck. They operate on rigorous, second-by-second attention metrics:
1. 3-Second Retention Rate: If more than 40% of viewers scroll away in the first 3 seconds, distribution stalls immediately.
2. Watch Time vs. Duration (Completion Rate): Reels that achieve >85% completion or repeat loops get pushed outside existing follower graphs.
3. Saves and Direct Shares: The ultimate algorithmic vote of confidence. When a viewer sends a Reel to a friend or saves it for future reference, the system tags the content as high-utility.

Over the past year, managing content for CashALL (@cashall_official) and my personal channel (@sangeetshaw_i), I’ve generated over 170,000+ organic views across our top Reels.

Here is the exact framework, scriptwriting psychology, and editing rhythm I use to build high-retention short-form video.

---

1. The Anatomy of CashALL's 72.3K+ Viral Reel

Our top-performing brand Reel at CashALL generated over 72,300+ organic views. It didn’t require expensive cameras, a studio setup, or paid ad boosts.

It worked because it solved an acute consumer friction within the first 1.5 seconds:

• The Hook:
"Purana phone bechne ke liye shop ke chakkar kyun lagana?"
(Why run around offline shops just to sell your old phone?)

Why did this hook explode?
1. Immediate Pain Identification: Anyone who has tried selling an old phone in traditional offline markets knows the exhaustion: traveling through traffic, bargaining with multiple shopkeepers who artificially undercut prices, and leaving feeling cheated.
2. Direct Contrast: We immediately positioned CashALL’s doorstep solution against that traditional exhaustion.
3. Visual Momentum: The opening frame didn't show a generic brand logo. It showed an immediate close-up of a device screen, rapid physical gesture, and an instant on-screen text bubble.

When your hook directly addresses the single biggest headache of your target customer, they stop scrolling.

---

2. The 1.5-Second Rule: Visual Pacing and Kinetic Rhythm

In short-form video, your viewer makes the decision to stay or swipe within 1,500 milliseconds.

To hold attention, I use a technique called kinetic pacing:
• Cut on Action: Never let a subject finish a movement before cutting. If a hand is reaching for a device, cut while the hand is in motion to the next angle. The human eye subconsciously stays locked in to see the motion complete.
• Audio-Visual Beat Synchronization: Micro-cuts and text pop-ins must be mapped to rhythmic transients in the background track. Audio that hits off-beat causes cognitive dissonance that leads to swiping.
• Subtitle Legibility & Dynamic Emphasis: Over 65% of Instagram users watch Reels with audio muted or at low volume in public. High-contrast typography with colored emphasis words (pinks, ambers) ensures the message lands instantly without audio dependency.
• Pattern Interrupts Every 2 to 3 Seconds: Camera angle swaps, subtle zooms, sound effect cues (whooshes, pops), or on-screen graphic overlays prevent visual fatigue.

---

3. Brand Conversion vs. Personal Creator Narrative

Content creation isn't one-size-fits-all. Managing a company brand channel requires a completely different strategic posture than personal creator content:

A. Company Brand Reels (@cashall_official):
• Objective: Trust, education, and transaction velocity.
• The Recommerce Challenge: Buying used electronics requires overcoming severe customer hesitation: "Will they give me fair value? Is doorstep inspection safe? When will I get paid?"
• Content Pillars:
  - Workflow Transparency: Step-by-step videos showing the exact 3-step doorstep process (Instant quote → Slot booking → 5-minute doorstep inspection → Direct UPI transfer).
  - Loss Aversion: Highlighting how devices lose 10-15% of their resale value every month they sit unused in a drawer.
  - Seasonal Resonance: Tying device liquidation to festive moments (e.g., Ganesh Chaturthi or Raksha Bandhan campaigns) where people need fast liquidity to upgrade.

B. Personal Creator Reels (@sangeetshaw_i):
• Objective: Creative exploration, visual aesthetic, and community dialogue.
• The Focus: Kinetic lifestyle cuts, cinematic transitions, ambient sound design, and color grading.
• Testing Ground: My personal channel serves as an R&D laboratory. I test experimental audio trends, caption mechanics, and high-retention transitions here before applying proven frameworks to client brand campaigns.

---

4. The Lean Production Stack

You do not need a five-person production crew to produce 70K+ view Reels. My entire workflow runs on a streamlined, high-speed setup:

1. Ideation & Hook Formulation: Capturing common customer questions, objections from customer support telecallers, and seasonal shopping trends into a Notion bank.
2. Filming: Smartphone with 4K 60fps recording, natural directional lighting, and clean directional audio.
3. Post-Production: High-tempo video editing (Premiere Pro / CapCut), precision frame trimming, and layered sound effects.
4. Retention Analysis: Reviewing Instagram Insights 48 hours post-publish. Where is the retention graph dropping? Did viewers leave at second 4 or second 12? Every dip informs the next script.

---

5. The Ultimate Takeaway

Content creation is not an isolated art form — it is the top of your product funnel.

Whether you are building an AI-assisted recommerce platform like CashALL or designing digital tools, the ability to clearly articulate value, captivate human attention in 1.5 seconds, and build genuine trust through video is the single most valuable leverage in modern business.
`
  },
  {
    title: "Building CashALL: Architecting a Full-Stack Recommerce & Operations Platform with AI-Assisted Workflows",
    excerpt: "The engineering and product story behind digitizing the used-device buying lifecycle — connecting valuation, field inspection, and instant payments.",
    date: "May 2026",
    readTime: "12 min read",
    tag: "Flagship Platform",
    content: `
The Operational Reality of Used-Device Procurement

Recommerce looks simple on the surface: someone wants to sell their old smartphone, a company buys it, refurbishes it, and resells it.

In reality, the acquisition side of used electronics is one of the most operationally intense, dispute-prone workflows in modern retail.

Transactions collapse at almost every milestone:
1. Online Valuation Friction: Customers drop off when asked 25 confusing questions about their battery health or micro-scratches.
2. The Telecalling Gap: Over 60% of people who generate an online quote never book a pickup slot without active, context-aware telecaller follow-up.
3. Doorstep Disputes: A field technician arrives at the customer's house, spots a camera lens scratch that the customer didn't mention online, manually quotes a lower price out of thin air, and the customer cancels the deal in frustration.
4. Compliance & Verification: Buying used electronics without rigorous IMEI verification (via OCR), photo proofs of physical condition, and digital declaration signatures exposes businesses to stolen goods and fraud.

This wasn't a problem that could be fixed with a simple Shopify store or a generic form. It required an end-to-end operational platform.

That is why I designed and built CashALL (cashall.in).

---

The Core Philosophy: Deterministic Rules, Not Flaky Models

When people hear "modern tech stack" in 2026, they often assume you plugged an LLM into the pricing engine.

For CashALL, that would have been a catastrophic mistake. 

When you are buying physical assets with real capital at the customer's doorstep, pricing cannot be probabilistic. It must be strictly deterministic, rule-based, and auditable.

We built CashALL's valuation engine on explicit mathematical logic:
Base Device Catalog Value
+ Accessory & Packaging Bonuses (Original Box, Charger, Valid Invoice)
- Condition Deductions (Screen lines, Body dents, Battery health, Camera fault)
= Dynamic Cash Offer (enforced by a minimum floor price safeguard)

Because the rules are deterministic, when our field technician runs the diagnostics on their native Android app at the doorstep, the re-quoted price updates mathematically in front of the customer. Transparency builds trust, and trust closes the transaction.

---

Four Interlocking Roles: Building a System, Not a Website

CashALL operates across four synchronized interfaces:

1. Customer Journey (Next.js 14):
A clean, responsive web application allowing users to find their device model in seconds, complete a guided condition check, and receive a guaranteed valuation with instant doorstep pickup booking.

2. Admin Operations Hub:
Centralized dispatching where operations managers monitor lead pipelines, assign field agents based on geographic clusters, adjust device catalog baselines, and audit completed inspection photos.

3. Field Agent App (Native Android):
A technician tool equipped with turn-by-turn navigation, an on-site diagnostic checklist, Tesseract OCR to scan device IMEI numbers directly from device screens, and digital agreement signature capture.

4. Telecaller Support Console:
An automated CRM queue that captures abandoned valuation leads in real-time, allowing support representatives to call back high-intent customers, answer doubts, and schedule pickups directly on their behalf.

---

The AI Multiplier: Vibe Coding with Antigravity & Gemini

Building a multi-tenant platform with Next.js 14 App Router, Prisma ORM, PostgreSQL/Supabase, native Android code, and Meta CAPI tracking would traditionally require a multi-person agency and six months of development.

By utilizing AI-assisted developer workflows with Google Antigravity and Gemini, I delivered the entire production platform in a fraction of that time.

Here is how the workflow actually functioned:
1. Domain Mapping First: I drew out every database schema, state machine transition, and role permission before generating a single line of code.
2. Prompt & Architecture Specification: I fed explicit requirements into Antigravity — specifying relational constraints in Prisma, REST validation guards, and tailwind styling tokens.
3. Verification & Refinement: Antigravity scaffolded the boilerplate and API route handlers; Gemini was used to verify edge-case calculation formulas and test responsive layouts.
4. Production Deployment: The web applications run on Vercel with serverless API routes, connecting to Supabase PostgreSQL and cloud integrations like Google Maps Platform and Meta Conversions API.

---

Key Takeaways for Modern Builders

1. Technology must serve the workflow: Building digital platforms without deeply understanding doorstep pickup friction produces features nobody uses.
2. AI is a velocity multiplier, not a replacement for domain knowledge: The AI cannot design your pricing floor rules or understand why an Android app is better than a mobile web browser for a technician on a motorbike.
3. The future belongs to hybrid builders: Someone who understands digital marketing, customer acquisition funnels, and AI-assisted product building can build complete, revenue-generating systems independently for clients.

CashALL is live today at cashall.in — demonstrating what is possible when marketing strategy and AI-assisted product building come together.
`
  },
  {
    title: "LedgerPrime: From Keyboard‑Centric Vision to Desktop ERP Mastery",
    excerpt: "The real story behind building a professional-grade desktop accounting system — as a non-coder — using AI, obsession, and a clear vision of what speed should feel like.",
    date: "April 2026",
    readTime: "10 min read",
    tag: "Desktop Systems",
    content: `
The Idea That Wouldn't Leave Me Alone

I've worked closely with small businesses and accounting teams for a while now.

And every single time, the same frustration showed up…

They knew what they needed to do — record a sale, track a payment, generate a GST invoice. But the tools around them either slowed them down, confused them, or cost too much to matter.

Then I experienced Tally.

Not as a developer. As someone who watched accountants use it. And I noticed something fascinating — those accountants barely looked at their mouse. They moved through screens using keyboard shortcuts at a speed that looked almost like coding. Everything was fast. Every flow was intentional.

That's when I asked myself: What if I could build something like this, but modern?

Not a SaaS. Not a cloud dashboard. A real desktop application where speed is the feature.

That idea became LedgerPrime.

---

The Challenge Nobody Warned Me About

Here's the honest truth — I didn't come from a computer science background.

I don't write React from scratch. I don't configure Electron from memory. What I do know is systems.

I know how accounting flows should work. I know what a sales entry screen needs to feel like. I know that when an accountant presses Enter after entering a party name, they expect the cursor to jump to the next meaningful field — not anywhere random.

The challenge was: how do you turn that kind of domain clarity into a working, professional-grade desktop application?

The answer was AI orchestration — using Antigravity and Gemini.

---

How I Actually Built This

Think clearly about what the workflow needs to feel like → explain it in precise, human language → use Antigravity to generate the implementation → review the output with Gemini → refine, test, iterate.

Step 1 — I defined the entire flow on paper first:
Sales Entry. Purchase Entry. Journal. Receipt. Payment. Contra. Stock Items. Ledger Master. Company Management. Registers. Party Reports. Trial Balance.

Step 2 — Keyboard-Centric Navigation:
Every field in every form is reachable by keyboard. Tab moves forward. Escape exits. Enter confirms. Alt+C opens a quick-create dialog for new ledgers or stock items without losing your place.

Step 3 — GST Engine:
Automatically calculates CGST, SGST, and IGST based on item categories. Handles split tax scenarios. Displays live totals as items are added to the grid. Prints a fully compliant Tax Invoice.

LedgerPrime proved that domain knowledge and precision are the true barriers to building great software.
`
  },
  {
    title: "Building Business Systems Using Google Sheets: A Practical Approach to Automation and Control",
    excerpt: "Building of a complete billing, inventory, and dashboard system using Sheets and Apps Script.",
    date: "January 2026",
    readTime: "11 min read",
    tag: "Automation",
    content: `
Most small businesses don’t have a software problem. They have a system problem.

Work is happening every day, but there is no structure behind it. Billing is handled manually or semi-manually, inventory tracking is inconsistent, and data is scattered across different places. Because of this, even simple tasks take more time than they should, and decision-making becomes unclear.

Many businesses assume the solution is to buy expensive software. But in most cases, the real need is not a new tool. It is a better system.

This is where tools like Google Sheets become surprisingly powerful when paired with Apps Script.

In the systems I’ve built, automation was used to:
- Generate GST-ready invoices automatically
- Fetch and fill customer details during billing
- Update records without repeated manual entry
- Maintain a structured customer database
- Create basic summaries for tracking

The key takeaway is simple:
You don’t need expensive enterprise software to improve operations.
You need a system that is structured, consistent, and actually used.
`
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  if (selectedPost) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="space-y-12 max-w-4xl mx-auto py-12"
      >
        <button
          onClick={() => setSelectedPost(null)}
          className="group flex items-center gap-3 text-text-muted hover:text-primary transition-all font-bold text-[10px] uppercase tracking-[0.3em]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </button>

        <article className="space-y-10">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-sm bg-primary/5">
              {selectedPost.tag}
            </span>

            <h1 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight tracking-tight">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-6 text-[10px] font-headline uppercase tracking-widest text-text-muted/70">
              <span className="flex items-center gap-2 font-bold"><Calendar className="w-3.5 h-3.5 text-primary/60" /> {selectedPost.date}</span>
              <span className="flex items-center gap-2 font-bold"><Clock className="w-3.5 h-3.5 text-primary/60" /> {selectedPost.readTime}</span>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

          <div className="text-text-muted leading-relaxed whitespace-pre-line text-base font-normal prose prose-invert max-w-none">
            {selectedPost.content}
          </div>
        </article>
      </motion.div>
    );
  }

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-3xl space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] block"
          >
            ARTICLES & JOURNALS // INSIGHTS & CASE STUDIES
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-text-main leading-tight uppercase">
            Marketing Strategy. <br />
            <span className="text-secondary italic font-light">Digital Systems & AI.</span>
          </h2>
          <p className="text-base text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            Reflections, strategic breakdowns, and practical learnings from developing digital products, video content, and AI-assisted client systems.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedPost(post)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group block py-8 px-8 glass-card bg-bg-surface/20 hover:bg-primary/5 transition-all border-b border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10 space-y-3 max-w-3xl">
              <span className="font-headline text-[9px] uppercase text-secondary tracking-[0.3em] font-bold block">
                {post.date} // {post.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-headline font-bold text-text-main group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-6 shrink-0">
              <span className="font-headline text-[10px] uppercase tracking-widest text-text-muted/60 font-bold hidden xl:block">
                {post.readTime}
              </span>
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-dark group-hover:translate-x-1.5 transition-all">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}