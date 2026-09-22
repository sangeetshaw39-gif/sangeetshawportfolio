import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
import pypdf

def create_resume(output_path):
    # Printable area: 8.5 x 11 inches = 612 x 792 pt
    # Margins: 26 pt top/bottom, 36 pt left/right -> 540 pt width, 740 pt height
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=26,
        bottomMargin=26
    )

    heading_color = colors.HexColor("#9f1239")  # Rose / Wine accent
    text_dark = colors.HexColor("#111827")      # Rich black
    text_muted = colors.HexColor("#4b5563")     # Subdued gray
    line_color = colors.HexColor("#e5e7eb")     # Subtle divider line

    # Typography styles
    name_style = ParagraphStyle(
        'Name',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=text_dark,
        alignment=0
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=heading_color,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=7.4,
        leading=9.8,
        textColor=text_muted,
        alignment=0
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=10.8,
        textColor=heading_color,
        spaceBefore=5,
        spaceAfter=2,
        textTransform='uppercase'
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=8.0,
        leading=9.8,
        textColor=text_dark
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        fontName='Helvetica-Oblique',
        fontSize=7.4,
        leading=9.2,
        textColor=text_muted
    )

    item_sub_right = ParagraphStyle(
        'ItemSubRight',
        fontName='Helvetica-Oblique',
        fontSize=7.4,
        leading=9.2,
        textColor=text_muted,
        alignment=2
    )

    date_right = ParagraphStyle(
        'DateRight',
        fontName='Helvetica',
        fontSize=7.4,
        leading=9.2,
        textColor=text_muted,
        alignment=2
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=7.4,
        leading=9.8,
        textColor=text_dark
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.4,
        textColor=text_dark,
        leftIndent=8
    )

    story = []

    # 1. HEADER (Left-stacked layout as per official template)
    story.append(Paragraph("<b>SANGEET SHAW</b>", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Digital Marketing &bull; Social Media &amp; Content &bull; AI-Assisted Product Builder", tagline_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Howrah, India &nbsp;|&nbsp; +91 62894 77287 &nbsp;|&nbsp; sangeetshaw39@gmail.com", contact_style))
    story.append(Paragraph("LinkedIn: in/sangeet-shaw-753148348 &nbsp;|&nbsp; Instagram: @sangeetshaw_i &nbsp;|&nbsp; cashall.in (@cashall_official)", contact_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.6, color=line_color, spaceBefore=1, spaceAfter=3))

    # 2. PROFESSIONAL SUMMARY (Human, active, unbolded voice)
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_heading))
    summary_text = (
        "Multi-disciplinary growth practitioner working across digital marketing, high-retention short-form video, and AI-assisted "
        "product building. I run performance ad campaigns and organic content strategies while shipping end-to-end operational "
        "systems for clients on demand — including CashALL (cashall.in) — using AI tools like Antigravity and Gemini to build "
        "custom web platforms, ERPs, and business automations quickly."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 2))

    # 3. WORK EXPERIENCE
    story.append(Paragraph("<b>WORK EXPERIENCE</b>", section_heading))

    # CashALL
    cashall_head = Table([
        [
            Paragraph("<b>CashALL — Aarna Enterprise</b>", item_title),
            Paragraph("<i>Aug 2026 – Present</i>", item_sub_right)
        ]
    ], colWidths=[380, 160])
    cashall_head.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(cashall_head)
    story.append(Paragraph("<i>Digital Marketing &amp; Product Associate — Used-Device Recommerce (cashall.in)</i>", item_sub))
    story.append(Paragraph("&bull; Built CashALL's ERP and digital business platform through an AI-assisted workflow.", bullet_style))
    story.append(Paragraph("&bull; Designed customer, agent, admin, support, and operations workflows end to end.", bullet_style))
    story.append(Paragraph("&bull; Developed the device valuation, quotation, order, inspection, and billing systems.", bullet_style))
    story.append(Paragraph("&bull; Manage social media, Reels, ad creatives, and performance marketing (@cashall_official).", bullet_style))
    story.append(Paragraph("&bull; Implemented Meta CAPI, Google Maps, OCR, and automated invoicing.", bullet_style))
    story.append(Spacer(1, 2.5))

    # IMS Proschool
    ims_head = Table([
        [
            Paragraph("<b>Finance Intern — IMS Proschool, Kolkata</b>", item_title),
            Paragraph("<i>May 2025 – Jun 2025</i>", item_sub_right)
        ]
    ], colWidths=[380, 160])
    ims_head.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(ims_head)
    story.append(Paragraph("&bull; Built break-even and profitability models analyzing BATA's franchise structure, applying time-value-of-money methods for financial decision analysis.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Acmegrade
    acme_head = Table([
        [
            Paragraph("<b>Finance Intern — Acmegrade (Remote)</b>", item_title),
            Paragraph("<i>Feb 2025 – Apr 2025</i>", item_sub_right)
        ]
    ], colWidths=[380, 160])
    acme_head.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(acme_head)
    story.append(Paragraph("&bull; Studied equity markets, portfolio balancing strategies, and price movements using technical indicators.", bullet_style))
    story.append(Spacer(1, 2))

    # 4. PROJECTS
    story.append(Paragraph("<b>PROJECTS</b>", section_heading))

    # CashALL Platform
    p_cashall = Table([
        [
            Paragraph("<b>CashALL — Recommerce &amp; Operations Platform</b>", item_title),
            Paragraph("<i>Antigravity AI &middot; Next.js 14 &middot; PostgreSQL</i>", item_sub_right)
        ]
    ], colWidths=[350, 190])
    p_cashall.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(p_cashall)
    story.append(Paragraph("&bull; Built a complete recommerce platform with Antigravity AI, connecting four roles: Customer Portal, Admin Hub, native Android app, and Telecaller Queue.", bullet_style))
    story.append(Paragraph("&bull; Configured a deterministic rule-based pricing engine, instant invoicing, Tesseract OCR verification, and Meta CAPI conversion tracking.", bullet_style))
    story.append(Spacer(1, 2.5))

    # LedgerPrime
    p_lp = Table([
        [
            Paragraph("<b>LedgerPrime — Desktop ERP &amp; Accounting System</b>", item_title),
            Paragraph("<i>Antigravity AI &middot; Electron &middot; SQLite</i>", item_sub_right)
        ]
    ], colWidths=[350, 190])
    p_lp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(p_lp)
    story.append(Paragraph("&bull; Built a keyboard-centric desktop accounting system with AI assistance, delivering Tally-style speed, full voucher cycles, and automated GST calculations.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Business Automations
    p_auto = Table([
        [
            Paragraph("<b>Business Automations &amp; Revenue Intelligence</b>", item_title),
            Paragraph("<i>Apps Script &middot; Python &middot; Power BI</i>", item_sub_right)
        ]
    ], colWidths=[350, 190])
    p_auto.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)
    ]))
    story.append(p_auto)
    story.append(Paragraph("&bull; FIFO Inventory &amp; GST Billing: automated stock-batch tracking and tax-invoice creation with Apps Script and Google Sheets.", bullet_style))
    story.append(Paragraph("&bull; Retail Revenue Intelligence (RFM): customer cohort segmentation model built in Python and Power BI to target high-value buyers.", bullet_style))
    story.append(Spacer(1, 2))

    # 5. EDUCATION & CERTIFICATIONS
    story.append(Paragraph("<b>EDUCATION &amp; CERTIFICATIONS</b>", section_heading))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Commerce (B.Com) — Umeschandra College</b>", item_title),
            Paragraph("2023 – 2026", date_right)
        ],
        [
            Paragraph("<b>Class XII (ISC) — 77%</b> &nbsp;|&nbsp; Agrasain Boys' School", item_title),
            Paragraph("<i>Commerce &amp; Mathematics</i>", item_sub_right)
        ],
        [
            Paragraph("<b>Class X (ICSE) — 80%</b> &nbsp;|&nbsp; Agrasain Boys' School", item_title),
            Paragraph("<i>Secondary Board Examination</i>", item_sub_right)
        ],
        [
            Paragraph("<b>Certification: Generative AI Mastermind — Outskill</b>", item_title),
            Paragraph("<i>Autonomous Systems &amp; AI Agents</i>", item_sub_right)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.8),
        ('TOPPADDING', (0,0), (-1,-1), 0.8),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 2))

    # 6. SKILLS & CORE COMPETENCIES
    story.append(Paragraph("<b>SKILLS &amp; CORE COMPETENCIES</b>", section_heading))
    skills_data = [
        [
            Paragraph("<b>Digital Marketing</b>", item_title),
            Paragraph("Meta Ads Manager, performance marketing, campaign strategy, conversion tracking (Pixel &amp; CAPI), lead generation, audience targeting, and funnel optimization.", body_style)
        ],
        [
            Paragraph("<b>Social &amp; Content</b>", item_title),
            Paragraph("Short-form video (Reels), video editing (Premiere / CapCut), content planning &amp; calendars, carousel design, scriptwriting &amp; hook creation, ad creatives.", body_style)
        ],
        [
            Paragraph("<b>AI Product Building</b>", item_title),
            Paragraph("Custom web apps, ERPs, and business tools with Antigravity IDE &amp; Gemini AI; prompt architecture, functional specs, and rapid prototyping.", body_style)
        ],
        [
            Paragraph("<b>Systems &amp; Tools</b>", item_title),
            Paragraph("Next.js 14, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Supabase, Python, REST APIs, Google Apps Script, Sheets automation, Git &amp; GitHub.", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[110, 430])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0.8),
        ('TOPPADDING', (0,0), (-1,-1), 0.8),
    ]))
    story.append(skills_table)

    doc.build(story)
    print(f"Generated resume successfully at: {output_path}")

if __name__ == "__main__":
    create_resume("sangeetshawresum.pdf")
    create_resume("public/assets/sangeetshawresume.pdf")

    reader = pypdf.PdfReader("sangeetshawresum.pdf")
    print(f"Total pages in sangeetshawresum.pdf: {len(reader.pages)}")
    reader2 = pypdf.PdfReader("public/assets/sangeetshawresume.pdf")
    print(f"Total pages in public/assets/sangeetshawresume.pdf: {len(reader2.pages)}")
