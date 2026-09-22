# Canonical Official Resume & Writing Style Guidelines

This document establishes the official resume text, layout, and human writing style for **Sangeet Shaw**. 
All future resume edits must strictly follow these rules and be implemented via `generate_resume.py`.

---

## 1. Core Philosophy & Writing Style ("Written by Human")

- **Natural, Unforced Sentences:** Sentences flow naturally without artificial mid-sentence bolding or buzzword stuffing (e.g. avoid `Built CashALL's <b>ERP & digital business platform</b> using...`). Instead, write clean, grounded sentences: `Built CashALL's ERP and digital business platform through an AI-assisted workflow.`
- **First-Person Authentic Summary:** Grounded in real execution across digital marketing, video content (Reels), and AI-assisted platform delivery.
- **Active Verbs:** Start bullet points with concrete verbs: *Built, Designed, Developed, Manage, Implemented, Studied*.
- **Accurate Positioning:** Growth practitioner, digital marketer, and AI-assisted product builder (not a traditional computer science developer).
- **Exact 1-Page Layout:** The resume must always fit on exactly 1 Letter page without overflow.

---

## 2. Canonical Resume Structure & Content

### Header
- **Name:** SANGEET SHAW (Bold, dark)
- **Tagline (Rose/Wine Accent #9f1239):** Digital Marketing • Social Media & Content • AI-Assisted Product Builder
- **Contact Line 1:** Howrah, India | +91 62894 77287 | sangeetshaw39@gmail.com
- **Contact Line 2:** LinkedIn: in/sangeet-shaw-753148348 | Instagram: @sangeetshaw_i | cashall.in (@cashall_official)

### Professional Summary
Multi-disciplinary growth practitioner working across digital marketing, high-retention short-form video, and AI-assisted product building. I run performance ad campaigns and organic content strategies while shipping end-to-end operational systems for clients on demand — including CashALL (cashall.in) — using AI tools like Antigravity and Gemini to build custom web platforms, ERPs, and business automations quickly.

### Work Experience
- **CashALL — Aarna Enterprise** *(Aug 2026 – Present)*
  *Digital Marketing & Product Associate — Used-Device Recommerce (cashall.in)*
  - Built CashALL's ERP and digital business platform through an AI-assisted workflow.
  - Designed customer, agent, admin, support, and operations workflows end to end.
  - Developed the device valuation, quotation, order, inspection, and billing systems.
  - Manage social media, Reels, ad creatives, and performance marketing (@cashall_official).
  - Implemented Meta CAPI, Google Maps, OCR, and automated invoicing.
- **Finance Intern — IMS Proschool, Kolkata** *(May 2025 – Jun 2025)*
  - Built break-even and profitability models analyzing BATA's franchise structure, applying time-value-of-money methods for financial decision analysis.
- **Finance Intern — Acmegrade (Remote)** *(Feb 2025 – Apr 2025)*
  - Studied equity markets, portfolio balancing strategies, and price movements using technical indicators.

### Projects
- **CashALL — Recommerce & Operations Platform** *(Antigravity AI · Next.js 14 · PostgreSQL)*
  - Built a complete recommerce platform with Antigravity AI, connecting four roles: Customer Portal, Admin Hub, native Android app, and Telecaller Queue.
  - Configured a deterministic rule-based pricing engine, instant invoicing, Tesseract OCR verification, and Meta CAPI conversion tracking.
- **LedgerPrime — Desktop ERP & Accounting System** *(Antigravity AI · Electron · SQLite)*
  - Built a keyboard-centric desktop accounting system with AI assistance, delivering Tally-style speed, full voucher cycles, and automated GST calculations.
- **Business Automations & Revenue Intelligence** *(Apps Script · Python · Power BI)*
  - FIFO Inventory & GST Billing: automated stock-batch tracking and tax-invoice creation with Apps Script and Google Sheets.
  - Retail Revenue Intelligence (RFM): customer cohort segmentation model built in Python and Power BI to target high-value buyers.

### Education & Certifications
- Bachelor of Commerce (B.Com) — Umeschandra College (2023 – 2026)
- Class XII (ISC) — 77% | Agrasain Boys' School (Commerce & Mathematics)
- Class X (ICSE) — 80% | Agrasain Boys' School (Secondary Board Examination)
- Certification: Generative AI Mastermind — Outskill (Autonomous Systems & AI Agents)

### Skills & Core Competencies
- **Digital Marketing:** Meta Ads Manager, performance marketing, campaign strategy, conversion tracking (Pixel & CAPI), lead generation, audience targeting, and funnel optimization.
- **Social & Content:** Short-form video (Reels), video editing (Premiere / CapCut), content planning & calendars, carousel design, scriptwriting & hook creation, ad creatives.
- **AI Product Building:** Custom web apps, ERPs, and business tools with Antigravity IDE & Gemini AI; prompt architecture, functional specs, and rapid prototyping.
- **Systems & Tools:** Next.js 14, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Supabase, Python, REST APIs, Google Apps Script, Sheets automation, Git & GitHub.

---

## 3. Editing Protocol
Whenever changes are made:
1. Update `generate_resume.py`.
2. Run `python generate_resume.py` to regenerate both `sangeetshawresum.pdf` and `public/assets/sangeetshawresume.pdf`.
3. Verify that total page count remains strictly **1 page**.
