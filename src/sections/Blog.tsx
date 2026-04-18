import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowLeft, BookOpen, Calendar, Clock, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const posts = [
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

This is where tools like Google Sheets become surprisingly powerful when used correctly.

Instead of treating it like just a spreadsheet, it can be used to build simple but effective business systems. I’ve worked on building a billing and automation system using Google Sheets and basic scripting, and the biggest learning was this — the impact doesn’t come from complexity, it comes from structure.

The starting point is always data organization. Instead of keeping everything in one place, data needs to be structured into clear sections like sales, inventory, and customer records. Once this is done properly, everything becomes easier to manage.

From there, automation starts creating real value.

In the systems I’ve built, automation was used to:

Generate GST-ready invoices automatically
Fetch and fill customer details during billing
Update records without repeated manual entry
Maintain a structured customer database
Create basic summaries for tracking

These are not advanced features, but they solve real problems. Billing becomes faster, errors reduce, and there is consistency in how data is recorded.

One of the most useful outcomes of this approach is visibility.

When data is structured and updated in real time, it becomes easy to understand what is actually happening in the business. Sales, customer activity, and overall performance can be tracked without going through multiple files. This makes decision-making much more practical.

Another important learning is that simplicity matters more than features. A system does not need to be complex to be effective. It needs to be clear and easy to use. If the system is too complicated, people stop using it properly, and the value is lost.

A practical way to approach building something like this is:

Step 1: Move all records into a digital system
Step 2: Structure data into separate, organized sheets
Step 3: Automate repetitive processes like billing and data entry
Step 4: Ensure data is updated consistently with every transaction
Step 5: Create simple summaries or dashboards for visibility

Most businesses try to skip these steps and directly look for advanced tools. That usually creates more confusion instead of solving the problem.

Once a basic system like this is in place, it becomes much easier to scale or add more advanced capabilities like deeper automation or AI-based insights. But without this foundation, those additions don’t create much value.

The key takeaway is simple.

You don’t need expensive software to improve operations.
You need a system that is structured, consistent, and actually used.

Tools like Google Sheets are not powerful because of features.
They are powerful because of how you design the system around them.
`
  },
  {
    title: "From Confusion to Clarity: Building SpendGuardAI – My First Real AI System",
    excerpt: "The behind-the-scenes story of building a system that turns messy financial data into actionable business decisions.",
    date: "March 2026",
    readTime: "10 min read",
    tag: "AI Systems",
    content: `
The Problem Nobody Talks About

AI is everywhere.

Everyway you look, people are building tools, dashboards, agents…
But here’s something I noticed while working with real businesses:

Most businesses don’t actually understand their own spending.

Not because they don’t have data.

But because:
* Their data is messy
* Their systems don’t talk to each other
* And most importantly…
* Nobody converts that data into clear decisions

I saw this closely in MSMEs. They had Excel sheets. They had transactions. They even had accounting tools.

But still, when I asked: “Where are you losing money?” — There was silence.

---

The Idea That Started It All

That’s when the idea clicked: What if I build something that doesn’t just analyze data… but actually helps businesses make decisions?

Not another dashboard. Not another report. A system.

That’s how SpendGuardAI started.

---

Version 1: Reality Check

I started simple. Upload a file → clean data → generate insights.

Sounds easy, right? It wasn’t.

The first version was messy, inconsistent, and honestly… not useful. It could process data, yes. But it didn’t think like a business owner. And that was the biggest gap.

---

The Real Challenge (Not Technical)

Most people think building AI products is about models. It’s not.

The real challenge is: How do you turn raw data into something actionable? That changed everything for me.

---

Building the System (Not Just a Tool)

I redesigned everything around a simple flow: Upload → Clean → Analyze → Insights → Decisions.

This became the backbone of SpendGuardAI.

🔹 1. Data Cleaning (The Hidden Monster)

Real-world data is chaotic. Missing columns, wrong formats, inconsistent entries. So I built a cleaning pipeline that standardizes data, handles missing values, and prepares it for analysis.

🔹 2. Smart Categorization

Expenses alone mean nothing. They need context. So I added logic to group expenses, identify patterns, and highlight abnormal spending.

🔹 3. Insight Generation (AI + Fallback System)

Here’s where things got interesting. I integrated AI for insights. But then… API limits hit. Everything broke.

Instead of stopping, I asked: “What happens if AI fails?”

That’s when I built a fallback insight system. So even without AI, the system still generates insights, providing direction and delivering value. This was one of the most important decisions in the entire build.

🔹 4. Decision-Focused Output

I didn’t want: “Your expenses increased by 12%”.
I wanted: “Reduce supplier X dependency”, “Cut category Y spend”, “Optimize recurring expenses”.

That shift made the system useful.

---

The Struggles Nobody Sees

This project wasn’t smooth.

UI Breaking & Overlapping: At one point, sections were overlapping and components were fighting each other. I rebuilt state handling logic to ensure clean separation of views.

Session Loss Issues: Every refresh meant lost data. Not acceptable. I designed a proper session flow to control state transitions.

API Limitations: The biggest constraint. Fix? A hybrid system (AI + logic-based insights).

---

What I Learned (This Changed My Thinking)

This project changed how I see AI.

Before: AI = cool outputs.
Now: AI = decision systems.

I realized businesses don’t need more data—they need clarity and direction. And that’s what I started building.

---

Why SpendGuardAI Matters

This is not just a project. It’s my first step towards building systems that help businesses think better, using AI for real decision-making, and solving actual problems.

---

What’s Next?

SpendGuardAI is still evolving. Next steps include better decision intelligence, stronger pattern detection, and a full SaaS-level experience.

---

Final Thought

Most people build projects to show skills. I built this to solve a problem I saw in the real world.

And honestly… This is just the beginning.
`
  },
  {
    title: "LedgerPrime: From Keyboard‑Centric Vision to Desktop ERP Mastery",
    excerpt: "The real story behind building a professional-grade desktop accounting system — as a non-coder — using AI, obsession, and a clear vision of what speed should feel like.",
    date: "April 2026",
    readTime: "10 min read",
    tag: "ERP Systems",
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

Here's the honest truth — I am not a coder.

I don't write React from scratch. I don't configure Electron from memory. I don't know the syntax for a GST calculation off the top of my head.

What I do know is systems.

I know how accounting flows should work. I know what a sales entry screen needs to feel like. I know that when an accountant presses Enter after entering a party name, they expect the cursor to jump to the next meaningful field — not anywhere random.

The challenge was: how do you turn that kind of domain clarity into a working, professional-grade desktop application without being a full-stack developer?

The answer was AI.

Specifically — Antigravity and Gemini AI.

---

How I Actually Built This (The Real Process)

Most people imagine building an app as: write code → test → ship.

My process looked nothing like that.

It looked more like this:

Think clearly about what the workflow needs to feel like → explain it in precise, human language → use Antigravity to generate the implementation → review the output with Gemini AI → refine, test, iterate.

That's vibe coding. And it's not lazy — it is a completely different kind of skill.

Step 1 — I defined the entire flow on paper first.

Before a single line of code existed, I mapped out every screen.

Sales Entry. Purchase Entry. Journal. Receipt. Payment. Contra. Stock Items. Ledger Master. Company Management. Registers. Party Reports. Trial Balance.

Each module had a purpose. Each input field had a reason to exist. Each keyboard shortcut had a clear intent.

This is domain knowledge. And no AI can replace it. You need to know the business deeply before you can build for it.

Step 2 — I described the UI in human terms, and Antigravity built it.

When I needed the Sales Entry screen, I didn't open a code editor and start typing components. I described what I needed — keyboard-first navigation, a tabular entry grid, party autocomplete, item lookup by brand and part name, GST auto-calculation — and Antigravity scaffolded it.

My job was to review it. Challenge it. Push it to match my mental model.

Step 3 — Gemini AI handled the logic layer.

GST calculation logic is not simple.

CGST, SGST, IGST. Different rates for different items. Tax-exclusive pricing. Rounding rules. Amount-in-words. Multi-item bill totals.

I used Gemini to validate every formula, every edge case, every calculation scenario. Not to write the code blindly, but to understand what the logic should do — and then confirm the implementation matched it.

---

The Features That Made It Real

LedgerPrime isn't a demo. It's a system someone can actually use.

Here's what we built:

Full Voucher System: Sales, Purchase, Receipt, Payment, Journal, Contra — all with proper accounting treatment. Every voucher posts to the correct ledger, updates running balances, and maintains audit integrity.

Keyboard-Centric Navigation: Every field in every form is reachable by keyboard. Tab moves forward. Escape exits. Enter confirms. Alt+C opens a quick-create dialog for new ledgers or stock items without losing your place. This is the part that makes it feel like Tally.

Inventory Intelligence: Items are organized by brand and part number. When you pick a brand, the system filters part names. When you confirm a part name, the part number fills automatically. No manual entry of codes. No lookup tables open separately.

GST Engine: Automatically calculates CGST, SGST, and IGST based on item categories. Handles split tax scenarios. Displays live totals as items are added to the grid. Prints a fully compliant Tax Invoice.

Multi-Company Support: Each company stores its own data separately. Company profile is editable. Password protection is available. You can switch between companies cleanly.

Registers and Reports: Sales Register, Purchase Register, Party Ledger, Trial Balance — all generated dynamically from stored voucher data. Sorted chronologically. Displayed with running balances. Printable.

---

The Problems That Almost Broke Everything

I want to be honest about the parts that didn't work on the first try — because that's where the real learning lives.

Focus Jumping the Wrong Way

Early versions of the entry grid had a critical bug — after a user picked a party name and pressed Enter, the cursor would skip Brand and land directly on Part Name. This confused users completely.

The fix wasn't obvious. The autocomplete confirmation was triggering a focus event that the grid didn't expect. It took careful analysis of the event sequence to solve it — and Antigravity helped me trace and patch exactly where the flow broke.

Data Disappearing on Confirmation

When a user confirmed the part name, the Part No. field would clear. This happened because the onChange handler assumed any change was a new selection, even when the user was just confirming what was already there.

The solution was to detect whether the value had actually changed before resetting dependent fields. A small logic change. A massive difference in user experience.

Invoice Print Inconsistency

The print template worked perfectly from the Sales Entry screen. But when printing from the Registers view, the format was different — item details were missing, spacing was off, totals didn't match.

The fix required making sure both print paths used the exact same template logic. Not two versions. One source of truth.

Each of these problems was messy. Each one required me to explain the failure clearly, work through it systematically, and iterate until it was right.

That's the real skill in vibe coding — knowing what's wrong well enough to fix it with AI, even when you can't write the code yourself.

---

What This Project Taught Me

This is not just a portfolio piece.

LedgerPrime is proof that the gap between business understanding and software implementation is something AI can help close — if you know what you're doing on the business side.

Here's what I actually learned:

Domain knowledge is irreplaceable. No AI knows your client's pain points better than you do. The value I added was understanding the accounting workflows deeply enough to describe them precisely.

Clarity is code. When I gave vague instructions, I got vague outputs. When I described exactly what I needed — field order, validation logic, keyboard behavior — the outputs were sharp.

Iteration is the real work. The first version is never right. The tenth version starts getting close. Building with AI is still building — it just moves faster.

Users live in the details. The difference between an app people tolerate and an app people love is in the micro-interactions. How the cursor moves. How quickly the system responds. How well the invoice looks when printed. These details matter.

---

Why This Matters Beyond the Project

Most people look at me and assume I must be a developer.

I'm not.

I'm someone who understands systems, sees problems clearly, and uses every tool available to solve them — including AI.

LedgerPrime is the most technical project I've delivered. And I delivered it without writing a single line of code by hand.

That's not something to apologize for. That's the future of building.

The accountants who use Tally didn't build Tally. They understood the work deeply enough to demand the right tool.

I understood the work deeply enough to build it myself.

---

What's Next for LedgerPrime

The core system is functional and deployed. But there's more on the roadmap:

Advanced financial reports (P&L, Balance Sheet)
Smart alerts for overdue payments and unusual transactions
Offline-first architecture for businesses with low connectivity
A cleaner onboarding experience for new company setup

The foundation is solid. Everything else is scale.

---

Final Thought

If you're a business person with a clear vision of what a tool should do — don't let "I'm not a developer" stop you.

That's not the barrier anymore.

The barrier is clarity. And that's something you build through understanding, not through code.

LedgerPrime started as a keyboard-centric idea.

It shipped as a production-grade accounting system.

And it was built — entirely — through vision, precision, and AI.
`,
  },
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
          Archive / Journals
        </button>

        <article className="space-y-12">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-sm bg-primary/5">
              {selectedPost.tag}
            </span>

            <h1 className="text-5xl md:text-7xl font-headline font-bold text-text-main leading-[1] tracking-tighter">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-8 text-[10px] font-headline uppercase tracking-widest text-text-muted/60">
              <span className="flex items-center gap-2 font-bold"><Calendar className="w-4 h-4 text-primary/40" /> {selectedPost.date}</span>
              <span className="flex items-center gap-2 font-bold"><Clock className="w-4 h-4 text-primary/40" /> {selectedPost.readTime}</span>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />

          <div className="text-text-muted leading-relaxed whitespace-pre-line text-lg font-medium prose prose-invert max-w-none">
            {selectedPost.content}
          </div>
        </article>
      </motion.div>
    );
  }

  return (
    <div className="space-y-24 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-headline text-xs uppercase tracking-[0.3em] mb-6 block"
          >
            Archive // Ideas, Systems & Execution
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-text-main leading-[1.1] mb-8 uppercase">
            Thinking in Systems. <br />
            <span className="text-secondary italic font-light">Writing in Data.</span>
          </h2>
          <p className="text-lg text-text-muted font-medium leading-relaxed max-w-2xl border-l-2 border-primary/20 pl-6 italic">
            A collection of breakdowns, experiments, and practical insights from building real-world data systems and automation workflows.
          </p>
        </div>
        <div className="text-left md:text-right space-y-4">
          <p className="font-headline text-[10px] uppercase tracking-[0.3em] text-text-muted/40 font-black">
            Current Focus<br />
            <span className="text-primary">Real-world systems & practical data workflows</span>
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
            className="group block py-10 px-8 glass-card bg-bg-surface/20 hover:bg-primary/5 transition-all border-b border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
            
            <div className="relative z-10 space-y-4 max-w-3xl">
              <span className="font-headline text-[9px] uppercase text-secondary tracking-[0.3em] font-bold block">
                {post.date} // {post.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-text-main group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-text-muted text-sm font-medium leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            
            <div className="relative z-10 flex items-center gap-6">
              <span className="font-headline text-[10px] uppercase tracking-widest text-text-muted/40 font-bold hidden xl:block">
                {post.readTime}
              </span>
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-dark group-hover:translate-x-2 transition-all">
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}