import sys
sys.path.append("/tmp")
from logo_b64 import B64_LAND

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project Proposal — Kunal Drum Class Studio OS | Disojo Solutions</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {{
      --blue: #3B66FF;
      --blue-light: rgba(59, 102, 255, 0.08);
      --blue-border: rgba(59, 102, 255, 0.25);
      --dark: #0F172A;
      --slate: #334155;
      --muted: #64748B;
      --bg-page: #F8FAFC;
      --card-bg: #FFFFFF;
      --border: #E2E8F0;
    }}

    * {{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }}

    body {{
      background: var(--bg-page);
      color: var(--dark);
      font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      padding: 40px 20px 80px;
    }}

    .page-container {{
      max-width: 920px;
      margin: 0 auto;
      background: var(--card-bg);
      border-radius: 20px;
      box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px var(--border);
      padding: 56px 64px;
    }}

    /* Header */
    .doc-header {{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid var(--border);
      padding-bottom: 32px;
      margin-bottom: 40px;
    }}

    .logo-img {{
      width: 170px;
      height: auto;
      margin-bottom: 12px;
    }}

    .agency-meta {{
      font-size: 12.5px;
      color: var(--muted);
      line-height: 1.5;
    }}

    .proposal-badge {{
      text-align: right;
    }}

    .badge-pill {{
      display: inline-block;
      background: var(--blue-light);
      border: 1px solid var(--blue-border);
      color: var(--blue);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 8px;
    }}

    .doc-title {{
      font-size: 28px;
      font-weight: 800;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.2;
    }}

    .doc-subtitle {{
      font-size: 15px;
      color: var(--muted);
      margin-top: 4px;
    }}

    /* Client Bar */
    .client-bar {{
      background: #F1F5F9;
      border-radius: 12px;
      padding: 18px 24px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 40px;
    }}

    .meta-col-label {{
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--muted);
      margin-bottom: 2px;
    }}

    .meta-col-val {{
      font-size: 14px;
      font-weight: 700;
      color: var(--dark);
    }}

    /* Sections */
    .section {{
      margin-bottom: 44px;
    }}

    .section-title {{
      font-size: 18px;
      font-weight: 800;
      color: var(--dark);
      letter-spacing: -0.3px;
      border-left: 4px solid var(--blue);
      padding-left: 14px;
      margin-bottom: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}

    p {{
      font-size: 14.5px;
      color: var(--slate);
      margin-bottom: 14px;
    }}

    /* Cards Grid */
    .grid-3 {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 18px;
    }}

    .feature-card {{
      background: var(--bg-page);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px;
      transition: all 0.2s ease;
    }}

    .feature-card:hover {{
      border-color: var(--blue-border);
      box-shadow: 0 8px 24px rgba(59, 102, 255, 0.08);
    }}

    .feature-icon {{
      font-size: 24px;
      margin-bottom: 10px;
    }}

    .feature-title {{
      font-size: 15px;
      font-weight: 700;
      color: var(--dark);
      margin-bottom: 6px;
    }}

    .feature-desc {{
      font-size: 13px;
      color: var(--muted);
      line-height: 1.5;
    }}

    /* Proactive Value Adds Highlight */
    .proactive-box {{
      background: linear-gradient(135deg, rgba(59, 102, 255, 0.05) 0%, rgba(59, 102, 255, 0.01) 100%);
      border: 1px solid var(--blue-border);
      border-radius: 16px;
      padding: 26px;
      margin-top: 20px;
    }}

    .proactive-title {{
      font-size: 15px;
      font-weight: 800;
      color: var(--blue);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .value-item {{
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 14px;
    }}

    .value-item:last-child {{
      margin-bottom: 0;
    }}

    .value-bullet {{
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--blue);
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }}

    /* Timeline Table */
    .timeline-table {{
      width: 100%;
      border-collapse: collapse;
      margin-top: 14px;
    }}

    .timeline-table th {{
      background: #F1F5F9;
      text-align: left;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--muted);
      padding: 12px 16px;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }}

    .timeline-table td {{
      padding: 14px 16px;
      font-size: 13.5px;
      border-bottom: 1px solid var(--border);
      color: var(--slate);
    }}

    .sprint-tag {{
      font-family: "JetBrains Mono", monospace;
      font-size: 12px;
      font-weight: 700;
      color: var(--blue);
    }}

    /* Financials & Milestones */
    .milestone-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-top: 16px;
    }}

    .milestone-card {{
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      background: #FAFAFA;
      text-align: center;
    }}

    .milestone-pct {{
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1px;
      color: var(--blue);
      text-transform: uppercase;
    }}

    .milestone-amt {{
      font-size: 19px;
      font-weight: 800;
      color: var(--dark);
      margin: 4px 0;
    }}

    .milestone-trigger {{
      font-size: 11.5px;
      color: var(--muted);
      line-height: 1.4;
    }}

    /* Action bar */
    .print-bar {{
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-bottom: 24px;
      max-width: 920px;
      margin: 0 auto 24px;
    }}

    .btn {{
      background: var(--blue);
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 700;
      padding: 10px 20px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 14px rgba(59, 102, 255, 0.3);
      transition: all 0.2s ease;
    }}
    .btn:hover {{
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(59, 102, 255, 0.4);
    }}

    @media print {{
      body {{
        background: #FFFFFF !important;
        padding: 0;
      }}
      .print-bar {{
        display: none !important;
      }}
      .page-container {{
        box-shadow: none !important;
        border: none !important;
        padding: 0;
      }}
    }}
  </style>
</head>
<body>

  <div class="print-bar">
    <button class="btn" onclick="window.print()">🖨️ Save as Clean PDF / Print</button>
  </div>

  <div class="page-container">

    <!-- Header -->
    <header class="doc-header">
      <div>
        <img class="logo-img" src="data:image/png;base64,{B64_LAND}" alt="Disojo Solutions">
        <div class="agency-meta">
          <strong>DISOJO SOLUTIONS</strong><br>
          MSME Reg: UDYAM-MH-18-0539895 • Govt. of India<br>
          Mumbai, Maharashtra • <a href="https://disojo.in" style="color:var(--blue);text-decoration:none;">disojo.in</a><br>
          Direct: +91 77380 73307 • tejjo@disojo.in
        </div>
      </div>
      <div class="proposal-badge">
        <span class="badge-pill">Executive Proposal</span>
        <h1 class="doc-title">Studio OS Ecosystem</h1>
        <div class="doc-subtitle">iOS App • Android App • Web Command Center</div>
      </div>
    </header>

    <!-- Client Meta Bar -->
    <div class="client-bar">
      <div>
        <div class="meta-col-label">Client</div>
        <div class="meta-col-val">Kunal Drum Class (KDC)</div>
      </div>
      <div>
        <div class="meta-col-label">Director / Stakeholder</div>
        <div class="meta-col-val">Kunal Sir & Poornima Ma'am</div>
      </div>
      <div>
        <div class="meta-col-label">Target Delivery</div>
        <div class="meta-col-val">Week 4 Beta / Week 6 Live</div>
      </div>
      <div>
        <div class="meta-col-label">Build Investment</div>
        <div class="meta-col-val">₹3,25,000 (Fixed)</div>
      </div>
    </div>

    <!-- Section 1: Executive Overview -->
    <div class="section">
      <div class="section-title">1. Executive Overview & Mission</div>
      <p>
        Kunal Drum Class requires a unified, high-reliability studio operating system designed to replace hours of daily manual WhatsApp coordination with seamless automation. The system unifies 226+ enrolled students, batches, tutors, automated attendance, dynamic makeup (Comp) scheduling, and digital payment accounting into an integrated Apple-grade digital ecosystem.
      </p>
      <p>
        <strong>The Core Architecture Principle:</strong> Autonomous execution driven by deterministic rules (7:00 PM / 3:00 PM cutoff triggers, 1-hour Admin grace windows, and automated 8:00 PM slot releases), paired with unrestricted <strong>Admin Manual Override</strong> authority whenever special situations require it.
      </p>
    </div>

    <!-- Section 2: Core Platform Deliverables -->
    <div class="section">
      <div class="section-title">2. Unified Multi-Platform Deliverables</div>
      <div class="grid-3">
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <div class="feature-title">Student Mobile App</div>
          <div class="feature-desc">
            Native iOS and Android app. Auto-populated weekly fixed class (default: Attending), strict deadline-based cancellation, 2-tier comp balance tracker, and Family Switcher.
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🥁</div>
          <div class="feature-title">Tutor Management App</div>
          <div class="feature-desc">
            Dedicated tutor interface to view assigned batches, student rosters with Fixed vs. Comp indicators, and same-day / next-day attendance marking with class notes.
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🖥️</div>
          <div class="feature-title">Web Command Center</div>
          <div class="feature-desc">
            Executive desktop dashboard for Kunal Sir & Poornima Ma'am. Full CRUD on students/batches, instant overrides, audit logs, and PDF/Excel financial reports.
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: High-Reliability Notification Engine -->
    <div class="section">
      <div class="section-title">3. 10/10 Priority Notification Engine</div>
      <p>
        Eliminating manual WhatsApp texting is the primary objective of this system. Disojo Solutions implements an enterprise-grade push notification pipeline using <strong>Google Firebase Cloud Messaging (FCM v1)</strong> and <strong>Apple APNs</strong>:
      </p>
      <div class="grid-3">
        <div class="feature-card">
          <div class="feature-title">🚨 Urgent Comp Drop</div>
          <div class="feature-desc">
            High-priority heads-up banners triggered at 8:00 PM (weekdays) / 4:00 PM (weekends) to eligible students with deep links to book open makeup seats in 1 tap.
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-title">⏰ Class Reminders</div>
          <div class="feature-desc">
            Automated alerts 24 hours and 2 hours prior to class session. Displays batch timing, tutor name, and studio reminder.
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-title">💳 Billing & Expiry</div>
          <div class="feature-desc">
            Automated quarterly renewal reminders on the 1st, 5th, 10th, and 14th; 7-day warning before unavailed comp credits expire.
          </div>
        </div>
      </div>
    </div>

    <!-- Section 4: Proactive Value Adds -->
    <div class="section">
      <div class="section-title">4. Disojo Proactive Value-Add Enhancements (Included at ₹0)</div>
      <div class="proactive-box">
        <div class="proactive-title">✨ Exclusive Features Built Specifically for KDC</div>
        
        <div class="value-item">
          <div class="value-bullet">1</div>
          <div>
            <strong>1-Tap WhatsApp Studio Concierge (Student App):</strong>
            <p style="margin-bottom:0;font-size:13px;color:var(--slate);">
              Students can tap "Contact Studio" to launch a pre-populated WhatsApp message directly to Poornima Ma'am containing their name and batch timing for instant zero-friction support.
            </p>
          </div>
        </div>

        <div class="value-item">
          <div class="value-bullet">2</div>
          <div>
            <strong>Studio Occupancy & Revenue Heatmap (Web Admin):</strong>
            <p style="margin-bottom:0;font-size:13px;color:var(--slate);">
              A visual, color-coded Monday–Sunday grid showing seat capacity (green = full, amber = open seats, red = empty), plus live monthly revenue forecasting.
            </p>
          </div>
        </div>

        <div class="value-item">
          <div class="value-bullet">3</div>
          <div>
            <strong>1-Tap GST Tuition Certificate Generator (PDF):</strong>
            <p style="margin-bottom:0;font-size:13px;color:var(--slate);">
              Automated generation of official fee receipts with KDC GST credentials and SAC Code 999299, saving the administration hundreds of manual invoice requests every quarter.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 5: Timeline & Sprints -->
    <div class="section">
      <div class="section-title">5. Engineering Roadmap & Delivery Sprints</div>
      <table class="timeline-table">
        <thead>
          <tr>
            <th>Sprint</th>
            <th>Duration</th>
            <th>Deliverables & Milestones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="sprint-tag">Sprint 1</span></td>
            <td><strong>Days 1 – 7</strong></td>
            <td>Database Architecture, PostgreSQL RLS security, 226 student profiles pre-provisioned, Auth.</td>
          </tr>
          <tr>
            <td><span class="sprint-tag">Sprint 2</span></td>
            <td><strong>Days 8 – 18</strong></td>
            <td>Student App Schedule, Strict Cancellation Engine (7 PM / 3 PM logic), Tutor Attendance UI.</td>
          </tr>
          <tr>
            <td><span class="sprint-tag">Sprint 3</span></td>
            <td><strong>Days 19 – 28</strong></td>
            <td><strong>WEEK 4 BETA:</strong> Automated Cutoff Engine, Web Command Center Live, Admin Overrides.</td>
          </tr>
          <tr>
            <td><span class="sprint-tag">Sprint 4</span></td>
            <td><strong>Days 29 – 42</strong></td>
            <td><strong>WEEK 6 PRODUCTION LAUNCH:</strong> Razorpay integration, GST Invoicing, App Store approval.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Section 6: Financials & Retainer -->
    <div class="section">
      <div class="section-title">6. Commercial Terms & Maintenance SLA</div>
      <div class="milestone-grid">
        <div class="milestone-card">
          <div class="milestone-pct">Milestone 1 (5%)</div>
          <div class="milestone-amt">₹16,250</div>
          <div class="milestone-trigger">Contract Signing & Infrastructure Kickoff</div>
        </div>
        <div class="milestone-card">
          <div class="milestone-pct">Milestone 2 (15%)</div>
          <div class="milestone-amt">₹48,750</div>
          <div class="milestone-trigger">Week 4 Beta Delivery for Internal Testing</div>
        </div>
        <div class="milestone-card">
          <div class="milestone-pct">Milestone 3 (25%)</div>
          <div class="milestone-amt">₹81,250</div>
          <div class="milestone-trigger">Testing Sign-off & Store Submissions</div>
        </div>
        <div class="milestone-card">
          <div class="milestone-pct">Milestone 4 (55%)</div>
          <div class="milestone-amt">₹1,78,750</div>
          <div class="milestone-trigger">App Store Approval & Live Production Handover</div>
        </div>
      </div>

      <div style="background:#F8FAFC;border:1px solid var(--border);border-radius:12px;padding:18px;margin-top:20px;">
        <strong>Ongoing Studio Maintenance & Cloud SLA:</strong>
        <p style="margin-bottom:4px;font-size:13.5px;margin-top:6px;">
          • Fixed Retainer: <strong>₹7,500 / month flat</strong> (GST exempt under threshold).<br>
          • Inclusions: 100% cloud database hosting (Supabase) and Web Admin hosting (Vercel) included at ₹0 out-of-pocket.<br>
          • SLA: 72-hour turnaround for routine updates; out-of-hours/critical escalations billed at ₹800/billable hour.
        </p>
      </div>
    </div>

    <!-- Sign-off -->
    <div style="margin-top:48px;padding-top:24px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:flex-end;">
      <div>
        <div style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;">Submitted By</div>
        <div style="font-size:18px;font-weight:800;color:var(--dark);margin-top:4px;">Tejjo Bareja</div>
        <div style="font-size:13px;color:var(--blue);font-weight:700;">Founder & Technical Director | Disojo Solutions</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:12px;color:var(--muted);">Official Proposal Reference: <strong>DISOJO-KDC-2026-001</strong></div>
        <div style="font-size:12px;color:var(--muted);">Valid for 30 days from issuance</div>
      </div>
    </div>

  </div>

</body>
</html>
"""

target = "/Users/tejjo/Desktop/websites/KDC_Executive_Proposal_Disojo.html"
with open(target, "w") as f:
    f.write(html_content)

print("SUCCESS: written proposal to", target)
