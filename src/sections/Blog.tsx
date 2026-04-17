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
    excerpt: "How I turned a non‑coder vibe into a high‑performance accounting desktop app using Antigravity and Gemini AI.",
    date: "April 2026",
    readTime: "12 min read",
    tag: "ERP Systems",
    content: `
The Journey Begins

I started with a simple idea: build an accounting tool that feels as fast as a classic desktop keyboard‑driven system. No fancy UI, just pure speed and precision.

Why Antigravity?

As a non‑coder, I rely on AI to bridge the gap between vision and implementation. Antigravity helped me generate the core React‑Electron scaffolding, while Gemini AI refined the business logic, from GST calculations to multi‑company ledger handling.

Key Challenges & Solutions

- **Keyboard‑First UX**: I used Antigravity‑generated shortcuts to mimic Tally‑style keystrokes, cutting data entry time by 40%.
- **Data Integrity**: Gemini AI assisted in designing the SQLite schema, ensuring ACID compliance without writing every migration manually.
- **Performance**: Leveraging Antigravity’s performance profiling, I optimized rendering pipelines to stay under 50 ms latency.

Result

LedgerPrime now runs as a sleek Electron desktop app, delivering professional‑grade accounting with the speed of a keyboard‑centric workflow. The project showcases how AI‑driven development can empower non‑coders to deliver enterprise‑level solutions.
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