import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink,
  Target,
  FileText,
  Smartphone,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  Calculator,
  Sliders,
  Database,
  Sparkles,
  MapPin,
  FileCheck,
  Send,
  Workflow,
  Server,
  Share2,
  Lock,
  PhoneCall,
  Instagram
} from 'lucide-react';
import { cn } from '../lib/utils';

interface CaseStudyProps {
  onBack: () => void;
}

export default function CashAllCaseStudy({ onBack }: CaseStudyProps) {
  const [activeModule, setActiveModule] = useState<'customer' | 'admin' | 'field' | 'support'>('customer');

  const moduleSteps = {
    customer: [
      { step: "01", title: "Device Selection", desc: "Select device brand, model, storage, and variant from dynamic catalog." },
      { step: "02", title: "Condition Assessment", desc: "Interactive questionnaire for screen, body, accessories, and functional defects." },
      { step: "03", title: "Instant Dynamic Quote", desc: "Deterministic pricing engine calculates real-time buyback estimate." },
      { step: "04", title: "Doorstep Pickup Scheduling", desc: "Select pickup date, timeslot, and doorstep location via Google Maps address lookup." },
      { step: "05", title: "Live Status & Tracking", desc: "Customer portal tracking assigned agent, inspection status, and offer updates." },
      { step: "06", title: "Offer Acceptance & Instant Pay", desc: "Customer verifies revised quote, accepts agreement, and receives instant digital payment." }
    ],
    admin: [
      { step: "01", title: "Order Pipeline Management", desc: "Centralized view of incoming leads, scheduled pickups, and completed orders." },
      { step: "02", title: "Automated Agent Dispatch", desc: "Assign field agents based on geographic proximity, availability, and route capacity." },
      { step: "03", title: "Catalog & Deduction Matrix", desc: "Configure base device pricing, category multipliers, and defect deduction percentages." },
      { step: "04", title: "Inspection Audit & Quality Check", desc: "Review photographic evidence, OCR serial scans, and technician field remarks." },
      { step: "05", title: "Payment Clearance & Reconciliation", desc: "Reconcile instant bank transfers, UPI payouts, and purchase invoices against order ledger." }
    ],
    field: [
      { step: "01", title: "Real-time Lead Alerts", desc: "Mobile push notification for assigned doorstep pickup with customer details." },
      { step: "02", title: "In-App Route Navigation", desc: "Direct turn-by-turn routing to customer address powered by Google Maps." },
      { step: "03", title: "Physical Inspection Checklist", desc: "Step-by-step diagnostic test: display touch, camera, biometrics, body grading." },
      { step: "04", title: "Dynamic Re-Quote Engine", desc: "System recalculates revised offer on-site based on actual defects identified." },
      { step: "05", title: "Identity & Device Proof Capture", desc: "Capture customer ID, device IMEI via OCR, and digital seller agreement signature." },
      { step: "06", title: "Payment Proof & Handover", desc: "Attach payout confirmation screenshot and transition device to transit inventory." }
    ],
    support: [
      { step: "01", title: "Abandoned Quote Capture", desc: "Captures high-intent leads where customers calculated price but didn't book pickup." },
      { step: "02", title: "Telecaller CRM Queue", desc: "Auto-prioritized dialing queue with customer device details and quoted valuation." },
      { step: "03", title: "Call Disposition & Follow-up", desc: "Log call outcomes (interested, callback requested, price negotiation, scheduled)." },
      { step: "04", title: "Assisted Order Conversion", desc: "Telecaller books pickup slot on behalf of the customer, converting abandoned drop-offs." }
    ]
  };

  return (
    <div className="space-y-32 py-12">
      
      {/* HUD Navigation */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-8 mb-12">
        <button 
          onClick={onBack} 
          className="group flex items-center gap-3 font-headline text-[10px] uppercase tracking-[0.3em] text-text-muted hover:text-primary transition-all"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </button>
        <div className="flex flex-wrap items-center gap-3">
          <a 
            href="https://cashall.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-bg-dark font-headline text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,193,208,0.3)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            cashall.in
          </a>
          <a 
            href="https://www.instagram.com/cashall_official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary font-headline text-[10px] font-black uppercase tracking-widest hover:bg-primary/10 active:scale-95 transition-all"
          >
            <Instagram className="w-3.5 h-3.5" />
            @cashall_official
          </a>
          <div className="flex items-center gap-3 text-[10px] font-headline uppercase tracking-widest text-primary font-bold border-l border-primary/20 pl-3">
            <Activity className="w-3.5 h-3.5 text-secondary animate-pulse" />
            Operational Platform
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="font-headline text-[10px] uppercase tracking-[0.4em] text-secondary border-l-2 border-primary pl-4 block">
              FLAGSHIP PLATFORM // RECOMMERCE ERP
            </span>
            <h1 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-text-main leading-[0.95]">
              CASHALL <br />
              <span className="text-primary italic font-light drop-shadow-[0_0_15px_rgba(255,193,208,0.3)]">
                OPERATIONAL INFRASTRUCTURE.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              Designing and developing the digital backbone behind a used-device recommerce business — connecting customer valuation, telecalling conversion, field-agent diagnostic inspections, and automated accounting in a unified ecosystem.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 pt-2">
            <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest font-black rounded-sm">
              Next.js 14 App Router
            </span>
            <span className="px-3 py-1.5 bg-secondary/10 border border-secondary/20 text-secondary text-[10px] uppercase tracking-widest font-black rounded-sm">
              Prisma + PostgreSQL
            </span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 text-text-main text-[10px] uppercase tracking-widest font-black rounded-sm">
              Native Android App
            </span>
            <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest font-black rounded-sm">
              Deterministic Pricing Engine
            </span>
          </div>
        </div>

        {/* Metrics/Pillars Cards */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-primary/5 transition-all">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-primary uppercase tracking-widest font-bold">Platform Scope</span>
              <Smartphone className="w-4 h-4 text-primary" />
            </div>
            <div className="text-sm font-bold text-text-main">4 Role-Based Operational Workflows</div>
            <p className="text-xs text-text-muted">Customer Portal, Admin Operations, Field Agent App & Support Desk</p>
          </div>
          <div className="glass-card p-6 ghost-border space-y-2 group hover:bg-secondary/5 transition-all">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-secondary uppercase tracking-widest font-bold">Pricing Accuracy</span>
              <Calculator className="w-4 h-4 text-secondary" />
            </div>
            <div className="text-sm font-bold text-text-main">Deterministic Rule Valuation</div>
            <p className="text-xs text-text-muted">Multi-condition deductions, accessory bonuses, and floor-price safety limits</p>
          </div>
          <div className="glass-card p-6 bg-primary text-bg-dark space-y-2 group hover:scale-[1.02] transition-all cursor-default shadow-[0_0_30px_rgba(255,193,208,0.25)]">
            <span className="text-[10px] uppercase tracking-widest font-black opacity-80">Full-Stack Architecture</span>
            <div className="text-sm font-black leading-tight">Web + Mobile + API + DB + Integrations</div>
            <p className="text-xs font-semibold opacity-90">Engineered with AI-assisted developer workflows</p>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM & SOLUTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-8 border-y border-primary/10">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-secondary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            The Industry Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            Used-Device Procurement is Operationally Fragmented.
          </h2>
          <div className="space-y-4 text-text-muted text-sm leading-relaxed">
            <p>
              In traditional used-phone buying businesses, transactions collapse because of multiple friction points:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                <span><strong className="text-text-main">Arbitrary Manual Valuation:</strong> Inconsistent pricing across different shops and staff, causing customer distrust.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                <span><strong className="text-text-main">High Lead Drop-Off:</strong> Customers request an estimate online but never schedule a pickup without active telecaller follow-up.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                <span><strong className="text-text-main">Disjointed Field Inspection:</strong> Technicians arrive without clear diagnostic rubrics, leading to disputes over revised pricing at the customer doorstep.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                <span><strong className="text-text-main">Lack of Legal & Payment Audit:</strong> Cash handovers without structured seller declarations, photo proofs, and automated invoice records expose businesses to fraud.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            The Engineered Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            An End-to-End Recommerce & Operations Platform.
          </h2>
          <div className="space-y-4 text-text-muted text-sm leading-relaxed">
            <p>
              CashALL replaces ad-hoc spreadsheets and phone calls with a structured, multi-role digital pipeline:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span><strong className="text-text-main">Deterministic Valuation Engine:</strong> Rule-based algorithmic quoting that adjusts prices based on cosmetic flaws, functional faults, and warranty status.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span><strong className="text-text-main">Dedicated Role Dashboards:</strong> Purpose-built web interfaces for Admin dispatchers and Telecallers, paired with a native Android field-agent application.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span><strong className="text-text-main">Automated Verification & Payout:</strong> OCR scanning for device IMEI/serial numbers, digital signature agreements, and instant automated invoicing.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span><strong className="text-text-main">Live Operational Synchronization:</strong> Seamless data flows between PostgreSQL/Supabase, Google Sheets backup, and Meta conversion tracking APIs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. FEATURE STORY: 4-MODULE WORKFLOWS */}
      <section className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            System Workflow Story
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-none">
            A System, Not Just a Website.
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            CashALL coordinates four distinct user personas across the entire lifecycle of a used-device transaction.
          </p>
        </div>

        {/* Module Switcher Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 glass-card ghost-border max-w-2xl">
          {[
            { id: 'customer', label: 'Customer Journey', icon: <Users className="w-4 h-4" /> },
            { id: 'admin', label: 'Admin Operations', icon: <Sliders className="w-4 h-4" /> },
            { id: 'field', label: 'Field Agent (Android)', icon: <Smartphone className="w-4 h-4" /> },
            { id: 'support', label: 'Telecaller Support', icon: <PhoneCall className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveModule(tab.id as any)}
              className={cn(
                "flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-md font-headline text-xs uppercase tracking-wider font-bold transition-all",
                activeModule === tab.id
                  ? "bg-primary text-bg-dark shadow-[0_0_20px_rgba(255,193,208,0.3)]"
                  : "text-text-muted hover:text-text-main hover:bg-white/5"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Module Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleSteps[activeModule].map((item, idx) => (
            <motion.div
              key={`${activeModule}-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-6 ghost-border flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all"
            >
              <div className="flex justify-between items-start">
                <span className="font-headline text-2xl font-black text-primary/40">{item.step}</span>
                <div className="w-2 h-2 rounded-full bg-primary/40" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-lg font-bold text-text-main">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DETERMINISTIC PRICING ENGINE */}
      <section className="glass-card p-8 md:p-12 ghost-border bg-primary/[0.02] space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3 text-secondary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            <Calculator className="w-4 h-4" />
            Core Algorithmic Logic
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            Deterministic Rule-Based Valuation Engine.
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Rather than relying on vague estimates or unpredictable generative models, CashALL's valuation engine is strictly deterministic and rule-driven. It applies mathematical percentage and fixed deductions against verified device catalog baselines.
          </p>
        </div>

        {/* Pricing Formula Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="glass-card p-6 text-center ghost-border space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-text-muted font-black">Input Baseline</span>
            <h4 className="font-headline text-xl font-bold text-text-main">Base Device Value</h4>
            <p className="text-[11px] text-text-muted">Indexed by brand, model, release year & storage tier</p>
          </div>

          <div className="glass-card p-6 text-center ghost-border space-y-2 border-primary/40">
            <span className="text-[10px] uppercase tracking-widest text-primary font-black">+ / - Adjustments</span>
            <h4 className="font-headline text-xl font-bold text-primary">Condition & Accessories</h4>
            <p className="text-[11px] text-text-muted">Original box, charger, invoice bonus & body grade</p>
          </div>

          <div className="glass-card p-6 text-center ghost-border space-y-2 border-secondary/40">
            <span className="text-[10px] uppercase tracking-widest text-secondary font-black">- Defect Deductions</span>
            <h4 className="font-headline text-xl font-bold text-secondary">Component Faults</h4>
            <p className="text-[11px] text-text-muted">Screen lines, battery health, camera glass, biometrics</p>
          </div>

          <div className="glass-card p-6 text-center bg-primary text-bg-dark space-y-2 shadow-[0_0_25px_rgba(255,193,208,0.3)]">
            <span className="text-[10px] uppercase tracking-widest font-black opacity-80">Guaranteed Result</span>
            <h4 className="font-headline text-xl font-black">Estimated Cash Offer</h4>
            <p className="text-[11px] font-semibold opacity-90">Enforced by dynamic minimum floor-price protections</p>
          </div>
        </div>

        <div className="p-6 bg-bg-surface/50 rounded-lg border border-primary/10 text-xs text-text-muted leading-relaxed">
          <p className="font-bold text-text-main mb-1 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Field Re-Quote Precision:
          </p>
          When an agent inspects the phone at the doorstep, any discrepancy (e.g., unreported scratch or degraded battery) updates the deduction parameters in real-time on the agent app, generating a transparent recalculated price sheet that the customer can sign immediately.
        </div>
      </section>

      {/* 5. TECHNICAL ARCHITECTURE DIAGRAM */}
      <section className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            System Topology
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            Integrated Technical Architecture.
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Clean decoupling between client applications, API endpoints, domain services, database persistence, and external cloud integrations.
          </p>
        </div>

        {/* Architecture Flow Card */}
        <div className="glass-card p-8 md:p-12 ghost-border space-y-8">
          
          {/* Layer 1: Clients */}
          <div className="space-y-3">
            <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">1. Client Applications</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm text-center">
                <p className="text-xs font-bold text-text-main">Customer Web App</p>
                <p className="text-[9px] text-text-muted">Next.js 14 / Tailwind</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm text-center">
                <p className="text-xs font-bold text-text-main">Field Agent App</p>
                <p className="text-[9px] text-text-muted">Native Android / Java</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm text-center">
                <p className="text-xs font-bold text-text-main">Admin Operations Hub</p>
                <p className="text-[9px] text-text-muted">Next.js Role Portal</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm text-center">
                <p className="text-xs font-bold text-text-main">Support / CRM Queue</p>
                <p className="text-[9px] text-text-muted">Telecalling Console</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-primary/40"><ArrowRight className="w-5 h-5 rotate-90" /></div>

          {/* Layer 2: API & Core Logic */}
          <div className="space-y-3">
            <span className="text-[10px] font-headline uppercase tracking-widest text-secondary font-bold">2. Serverless API & Business Domain Services</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-bg-surface/60 border border-secondary/20 rounded-sm">
                <p className="text-xs font-bold text-text-main">Next.js API Routes</p>
                <p className="text-[10px] text-text-muted">REST endpoints, Auth guards, Rate limiting & Validation</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-secondary/20 rounded-sm">
                <p className="text-xs font-bold text-text-main">Valuation Core Service</p>
                <p className="text-[10px] text-text-muted">Deterministic deduction matrix & dynamic price calculation</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-secondary/20 rounded-sm">
                <p className="text-xs font-bold text-text-main">Order Lifecycle Engine</p>
                <p className="text-[10px] text-text-muted">State machine for pickup dispatch, inspection & payouts</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-primary/40"><ArrowRight className="w-5 h-5 rotate-90" /></div>

          {/* Layer 3: Persistence */}
          <div className="space-y-3">
            <span className="text-[10px] font-headline uppercase tracking-widest text-primary font-bold">3. Persistence & Data Layer</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm">
                <p className="text-xs font-bold text-text-main">Prisma ORM</p>
                <p className="text-[10px] text-text-muted">Type-safe schema, migrations, relational queries</p>
              </div>
              <div className="p-4 bg-bg-surface/60 border border-primary/20 rounded-sm">
                <p className="text-xs font-bold text-text-main">PostgreSQL / Supabase</p>
                <p className="text-[10px] text-text-muted">Orders, catalog, inspection logs, user roles & secure storage</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-primary/40"><ArrowRight className="w-5 h-5 rotate-90" /></div>

          {/* Layer 4: Integrations */}
          <div className="space-y-3">
            <span className="text-[10px] font-headline uppercase tracking-widest text-text-muted font-bold">4. Cloud Integrations & External Ecosystem</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 bg-bg-surface/40 border border-white/10 rounded-sm text-center">
                <p className="text-[11px] font-bold text-text-main">Google Maps</p>
                <p className="text-[9px] text-text-muted">Places API & Distance Matrix</p>
              </div>
              <div className="p-3 bg-bg-surface/40 border border-white/10 rounded-sm text-center">
                <p className="text-[11px] font-bold text-text-main">Meta Tracking</p>
                <p className="text-[9px] text-text-muted">Pixel & Conversions API (CAPI)</p>
              </div>
              <div className="p-3 bg-bg-surface/40 border border-white/10 rounded-sm text-center">
                <p className="text-[11px] font-bold text-text-main">Tesseract OCR</p>
                <p className="text-[9px] text-text-muted">IMEI & ID verification</p>
              </div>
              <div className="p-3 bg-bg-surface/40 border border-white/10 rounded-sm text-center">
                <p className="text-[11px] font-bold text-text-main">PDF & Notifications</p>
                <p className="text-[9px] text-text-muted">Automated bills, WhatsApp, Email</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHAT I BUILT: PRODUCT, ENGINEERING, AUTOMATION, OPERATIONS */}
      <section className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] font-black">
            Contribution Scope
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-text-main leading-tight">
            What I Built Across the Stack.
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Delivering the complete system from initial customer journey wireframing to database schemas, full-stack implementation, and production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="glass-card p-8 ghost-border space-y-4 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl font-bold text-text-main">Product & Workflow Design</h3>
            <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Designed end-to-end customer journey from device lookup to invoice payout
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Structured field technician diagnostic checklist for on-site inspections
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Created abandoned-quote recovery flows for telecallers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Formulated pricing logic with configurable margin guards and floor controls
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 ghost-border space-y-4 hover:border-secondary/40 transition-all">
            <div className="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl font-bold text-text-main">Engineering & Full-Stack Development</h3>
            <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Built Next.js 14 web application using App Router, TypeScript, and Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Modeled relational database schemas in Prisma connecting orders, users, devices, and inspections
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Developed RESTful API routes handling state changes, quote generation, and dispatch
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Implemented role-based authentication separating public customers from internal staff
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 ghost-border space-y-4 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl font-bold text-text-main">Automation & Integrations</h3>
            <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Configured Meta Pixel and Conversions API (CAPI) for precise lead and quote tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Integrated Google Maps autocomplete and routing for customer addresses and agent navigation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Engineered automated PDF tax invoice and seller declaration generation upon order completion
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Synchronized real-time transaction logs with Google Sheets for accounting redundancy
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 ghost-border space-y-4 hover:border-secondary/40 transition-all">
            <div className="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-xl font-bold text-text-main">AI-Assisted Development Multiplier</h3>
            <ul className="space-y-2 text-xs text-text-muted leading-relaxed">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Leveraged Antigravity and Gemini coding agents to accelerate architecture scaffolding and debugging
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Maintained strict deterministic logic in core services while using AI to iterate UI and API boilerplate
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Rapidly integrated Tesseract OCR pipelines to read IMEI numbers from photo uploads
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-secondary rounded-full" />
                Achieved production deployment in weeks rather than months of conventional agency timeline
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 ghost-border space-y-4 hover:border-primary/40 transition-all md:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-text-main">Social Media & Brand Growth Management</h3>
                  <span className="text-[10px] text-secondary font-mono font-bold">@cashall_official</span>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/cashall_official/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary/10 border border-primary/25 text-primary text-xs font-headline font-bold uppercase tracking-wider hover:bg-primary/20 transition-all rounded-sm flex items-center gap-2"
              >
                View Brand Instagram
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Directly managing the company's official Instagram handle (<strong className="text-text-main">@cashall_official</strong>) — designing the creative brand aesthetic, writing hook-driven scripts, producing short-form video reels that illustrate phone valuation benefits, and crafting promotional campaign visuals.
            </p>
          </div>

        </div>
      </section>

      {/* 7. VERIFIED TECHNOLOGY STACK */}
      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <h3 className="text-xl font-headline font-bold text-text-main whitespace-nowrap">
            VERIFIED PLATFORM STACK
          </h3>
          <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Next.js 14", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", 
            "PostgreSQL", "Supabase", "Native Android", "Java", "Tesseract.js OCR", 
            "Google Maps Platform", "Meta Graph API", "Meta CAPI", "PDF Generation", 
            "REST APIs", "Vercel"
          ].map((tech, i) => (
            <span 
              key={i} 
              className="px-4 py-2 glass-card ghost-border text-xs font-bold text-text-muted hover:text-primary hover:border-primary/50 cursor-default transition-all uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="glass-card p-12 text-center ghost-border bg-primary/5 space-y-6"
      >
        <h3 className="text-3xl md:text-4xl font-headline font-bold text-text-main">
          Explore the Live Platform & Brand
        </h3>
        <p className="text-text-muted max-w-xl mx-auto text-sm">
          CashALL is actively operating in the recommerce market. Experience the customer valuation journey firsthand and check out the official brand content.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a 
            href="https://cashall.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-bg-dark font-bold tracking-widest uppercase text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,208,0.3)] flex items-center gap-2"
          >
            Open cashall.in
            <ExternalLink className="w-4 h-4" />
          </a>
          <a 
            href="https://www.instagram.com/cashall_official/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary/30 text-primary font-bold tracking-widest uppercase text-xs hover:bg-primary/10 active:scale-95 transition-all flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" />
            @cashall_official
          </a>
          <button 
            onClick={onBack}
            className="px-8 py-4 ghost-border text-text-muted hover:text-text-main font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-all"
          >
            Return to Portfolio Work
          </button>
        </div>
      </motion.div>

    </div>
  );
}
