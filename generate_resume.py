import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
import pypdf

def create_resume(output_path):
    # Printable area: 8.5 x 11 inches = 612 x 792 pt
    # Margins: 24 pt top/bottom, 32 pt left/right -> 744 pt height available
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=32,
        rightMargin=32,
        topMargin=24,
        bottomMargin=24
    )

    primary_color = colors.HexColor("#111827")
    secondary_color = colors.HexColor("#831843")
    accent_color = colors.HexColor("#be185d")
    text_dark = colors.HexColor("#1f2937")
    text_muted = colors.HexColor("#4b5563")
    line_color = colors.HexColor("#e5e7eb")

    # Typography styles
    name_style = ParagraphStyle(
        'Name',
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        textColor=primary_color,
        alignment=0
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=accent_color,
        alignment=0
    )

    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=text_muted,
        alignment=0
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=10.8,
        textColor=primary_color,
        spaceAfter=1,
        textTransform='uppercase'
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=10.2,
        textColor=text_dark
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        fontName='Helvetica-Oblique',
        fontSize=7.3,
        leading=9.3,
        textColor=text_muted
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.5,
        textColor=text_dark
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=7.3,
        leading=9.5,
        textColor=text_dark,
        leftIndent=8
    )

    story = []

    # 1. Header: Name & Contact
    header_table_data = [
        [
            Paragraph("<b>SANGEET SHAW</b>", name_style),
            Paragraph("Howrah, India &nbsp;|&nbsp; +91 62894 77287 &nbsp;|&nbsp; sangeetshaw39@gmail.com<br/>"
                      "<b>Portfolio:</b> sangeetshaw.vercel.app &nbsp;|&nbsp; <b>LinkedIn:</b> in/sangeet-shaw-753148348<br/>"
                      "<b>Instagram:</b> @sangeetshaw_i &nbsp;|&nbsp; <b>CashALL:</b> cashall.in (@cashall_official)", contact_style)
        ]
    ]
    header_table = Table(header_table_data, colWidths=[180, 368])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>DIGITAL MARKETING • SOCIAL MEDIA & CONTENT • AI-ASSISTED PRODUCT BUILDER</b>", tagline_style))
    story.append(Spacer(1, 2))
    story.append(HRFlowable(width="100%", thickness=1.2, color=primary_color, spaceBefore=1, spaceAfter=3))

    # 2. Professional Summary (Positioned accurately: Marketer & Content Creator who builds with AI on client need, NOT a software developer)
    summary_text = (
        "Multi-disciplinary growth practitioner operating at the intersection of <b>digital marketing, high-retention video (Reels), and AI-assisted product building</b>. "
        "Experienced in running performance ad campaigns, organic content strategies, and deploying end-to-end operational systems for clients on demand "
        "— including <b>CashALL (cashall.in)</b>. Utilizes advanced AI environments (Antigravity, Gemini) to rapidly build custom web platforms, "
        "ERPs, and business automations when clients require them without traditional software development overhead."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 4))

    # 3. SECTION: PROFESSIONAL EXPERIENCE
    story.append(Paragraph("<b>Professional Experience</b>", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=1, spaceAfter=2.5))

    # CashALL Experience Entry (EXACT user requested text)
    cashall_exp_head = Table([
        [
            Paragraph("<b>CashALL — Aarna Enterprise</b>", item_title),
            Paragraph("<i>Aug 2026 – Present</i>", item_sub)
        ]
    ], colWidths=[380, 168])
    cashall_exp_head.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(cashall_exp_head)
    story.append(Paragraph("<i>Digital Marketing & Product Associate | Startup Venture — Used-Device Recommerce (cashall.in)</i>", item_sub))
    story.append(Paragraph("• Built CashALL's <b>ERP & digital business platform</b> using Antigravity.", bullet_style))
    story.append(Paragraph("• Developed <b>customer, agent, admin, support, and operations workflows</b>.", bullet_style))
    story.append(Paragraph("• Built the <b>device valuation, quotation, order, inspection, and billing systems</b>.", bullet_style))
    story.append(Paragraph("• Manage <b>social media, Reels, ad creatives, and performance marketing</b> (@cashall_official).", bullet_style))
    story.append(Paragraph("• Implemented <b>Meta CAPI, Google Maps, OCR, and automated invoicing</b>.", bullet_style))
    story.append(Spacer(1, 3))

    # Finance Internships
    exp1 = Table([
        [
            Paragraph("<b>Finance Intern</b> — IMS Proschool, Kolkata", item_title),
            Paragraph("<i>May 2025 – Jun 2025</i>", item_sub)
        ]
    ], colWidths=[380, 168])
    exp1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(exp1)
    story.append(Paragraph("• Built break-even and profitability models analyzing BATA's franchise business structure; applied TVM for financial decision analysis.", bullet_style))
    story.append(Spacer(1, 2.5))

    exp2 = Table([
        [
            Paragraph("<b>Finance Intern</b> — Acmegrade (Remote)", item_title),
            Paragraph("<i>Feb 2025 – Apr 2025</i>", item_sub)
        ]
    ], colWidths=[380, 168])
    exp2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(exp2)
    story.append(Paragraph("• Studied equity markets, portfolio balancing strategies, and price movement using technical indicators.", bullet_style))
    story.append(Spacer(1, 4))

    # 4. SECTION: FEATURED CLIENT PROJECTS & AI-BUILT SYSTEMS
    story.append(Paragraph("<b>Featured Client Projects & AI-Built Systems</b>", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=1, spaceAfter=2.5))

    # CashALL Project
    p_cashall = Table([
        [
            Paragraph("<b>CashALL — Recommerce & Operations Platform</b> (cashall.in)", item_title),
            Paragraph("<i>Built with Antigravity AI, Next.js 14, PostgreSQL</i>", item_sub)
        ]
    ], colWidths=[370, 178])
    p_cashall.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(p_cashall)
    story.append(Paragraph("• Built complete client recommerce platform using Antigravity AI connecting 4 roles: Customer Portal, Admin Hub, Native Android App, and Telecaller Queue.", bullet_style))
    story.append(Paragraph("• Configured deterministic rule-based pricing engine, instant invoicing, Tesseract OCR verification, and Meta CAPI conversion tracking.", bullet_style))
    story.append(Spacer(1, 2.5))

    # LedgerPrime
    lp_head = Table([
        [
            Paragraph("<b>LedgerPrime — Desktop ERP & Accounting System</b>", item_title),
            Paragraph("<i>Built with Antigravity AI, Electron, SQLite</i>", item_sub)
        ]
    ], colWidths=[370, 178])
    lp_head.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(lp_head)
    story.append(Paragraph("• Keyboard-centric desktop accounting ecosystem built with AI assistance to deliver Tally-style speed, full voucher cycles, and automated GST calculations.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Automations & Analytics
    other_head = Table([
        [
            Paragraph("<b>Business Automations & Revenue Intelligence</b>", item_title),
            Paragraph("<i>Google Apps Script, Python, Power BI</i>", item_sub)
        ]
    ], colWidths=[370, 178])
    other_head.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('ALIGN', (1,0), (1,0), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(other_head)
    story.append(Paragraph("• <b>FIFO Inventory & GST Billing:</b> Automated stock batch tracking and tax invoice creation using Apps Script and Google Sheets.", bullet_style))
    story.append(Paragraph("• <b>Retail Revenue Intelligence (RFM):</b> Customer cohort segmentation model built in Python and Power BI to target high-value buyers.", bullet_style))
    story.append(Spacer(1, 4))

    # 5. SECTION: EDUCATION (MAKING CLASS X & XII PROMINENT AND BIG AS REQUESTED)
    story.append(Paragraph("<b>Education & Certifications</b>", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=1, spaceAfter=2.5))

    edu_table = Table([
        [
            Paragraph("<b>Bachelor of Commerce (B.Com)</b> — Umeschandra College", item_title),
            Paragraph("<b>2023 – 2027</b>", item_sub)
        ],
        [
            Paragraph("<b>Class XII (ISC) — 77% SCORE</b> &nbsp;|&nbsp; Agrasain Boys' School", item_title),
            Paragraph("<b>Commerce & Mathematics</b>", item_sub)
        ],
        [
            Paragraph("<b>Class X (ICSE) — 80% SCORE</b> &nbsp;|&nbsp; Agrasain Boys' School", item_title),
            Paragraph("<b>Secondary Board Examination</b>", item_sub)
        ],
        [
            Paragraph("<b>Certification:</b> Generative AI Mastermind — Outskill", item_title),
            Paragraph("<i>Autonomous Systems & AI Agents</i>", item_sub)
        ]
    ], colWidths=[380, 168])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 6. SECTION: SKILLS & CORE COMPETENCIES (Accurately reflects AI-assisted builder, NOT software developer)
    story.append(Paragraph("<b>Skills & Core Competencies</b>", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=line_color, spaceBefore=1, spaceAfter=2.5))

    skills_data = [
        [
            Paragraph("<b>Digital Marketing:</b>", item_title),
            Paragraph("Meta Ads Manager, Performance Marketing, Campaign Strategy, Conversion Tracking (Pixel & CAPI), Lead Generation, Audience Targeting, Funnel Optimization", body_style)
        ],
        [
            Paragraph("<b>Social & Content:</b>", item_title),
            Paragraph("Short-Form Video (Reels), Video Editing (Premiere / CapCut), Content Planning & Calendars, Carousel Design, Scriptwriting & Hook Creation, Ad Creatives", body_style)
        ],
        [
            Paragraph("<b>AI Product Building:</b>", item_title),
            Paragraph("Building custom web apps, ERPs & business tools using Antigravity IDE & Gemini AI when clients require it; prompt architecture, functional specs & rapid prototyping", body_style)
        ],
        [
            Paragraph("<b>Systems & Tools:</b>", item_title),
            Paragraph("Next.js 14, React, TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL, Supabase, Python, REST APIs, Google Apps Script, Google Sheets Automation, Git & GitHub", body_style)
        ]
    ]

    skills_table = Table(skills_data, colWidths=[110, 438])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
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
