import sys
sys.path.append("/tmp")
from logo_b64 import B64_LAND

# ----------------- CONTRACT HTML -----------------
contract_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Master Services Agreement — KDC & Disojo Solutions</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {{
      --blue: #3B66FF;
      --dark: #0F172A;
      --slate: #334155;
      --muted: #64748B;
      --border: #E2E8F0;
      --bg: #F8FAFC;
    }}
    * {{ margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing:antialiased; }}
    body {{ background:var(--bg); color:var(--dark); font-family:"Plus Jakarta Sans", sans-serif; line-height:1.6; padding:40px 20px; }}
    .container {{ max-width:900px; margin:0 auto; background:#FFF; border-radius:18px; border:1px solid var(--border); box-shadow:0 10px 40px rgba(0,0,0,0.06); padding:56px 64px; }}
    .header {{ display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--border); padding-bottom:28px; margin-bottom:36px; }}
    .logo {{ width:160px; height:auto; margin-bottom:10px; }}
    .meta {{ font-size:12.5px; color:var(--muted); line-height:1.5; }}
    .badge {{ text-align:right; }}
    .badge-pill {{ display:inline-block; background:rgba(59,102,255,0.08); border:1px solid rgba(59,102,255,0.25); color:var(--blue); font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:5px 12px; border-radius:999px; margin-bottom:6px; }}
    .title {{ font-size:24px; font-weight:800; color:var(--dark); }}
    .subtitle {{ font-size:13px; color:var(--muted); }}
    .parties-grid {{ display:grid; grid-template-columns:1fr 1fr; gap:24px; background:#F8FAFC; border:1px solid var(--border); border-radius:12px; padding:20px; margin-bottom:32px; }}
    .party-card h3 {{ font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:var(--blue); margin-bottom:6px; }}
    .party-card p {{ font-size:13px; color:var(--slate); margin-bottom:3px; }}
    h2 {{ font-size:16px; font-weight:800; color:var(--dark); margin:28px 0 12px; border-left:3px solid var(--blue); padding-left:10px; }}
    p, li {{ font-size:13.5px; color:var(--slate); margin-bottom:10px; }}
    ul {{ margin-left:20px; margin-bottom:14px; }}
    table {{ width:100%; border-collapse:collapse; margin:16px 0; }}
    th {{ background:#F1F5F9; text-align:left; font-size:11.5px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--muted); padding:10px 14px; border:1px solid var(--border); }}
    td {{ padding:12px 14px; font-size:13px; border:1px solid var(--border); color:var(--slate); }}
    .signatures {{ display:grid; grid-template-columns:1fr 1fr; gap:40px; margin-top:48px; padding-top:32px; border-top:1px solid var(--border); }}
    .sig-line {{ border-bottom:1px solid #94A3B8; height:40px; margin-bottom:8px; }}
    .btn {{ background:var(--blue); color:#FFF; font-size:13px; font-weight:700; padding:10px 20px; border-radius:999px; border:none; cursor:pointer; float:right; margin-bottom:20px; }}
    @media print {{ body {{ background:#FFF; padding:0; }} .btn {{ display:none; }} .container {{ border:none; box-shadow:none; padding:0; }} }}
  </style>
</head>
<body>
  <div style="max-width:900px;margin:0 auto;">
    <button class="btn" onclick="window.print()">🖨️ Print / Save PDF</button>
  </div>
  <div class="container">
    <div class="header">
      <div>
        <img class="logo" src="data:image/png;base64,{B64_LAND}" alt="Disojo Solutions">
        <div class="meta">
          <strong>DISOJO SOLUTIONS</strong> (MSME: UDYAM-MH-18-0539895)<br>
          A Wing 1904, Eden Garden Tower, Din Quarry Rd, Mumbai - 400088<br>
          Direct: +91 77380 73307 • tejjo@disojo.in • disojo.in
        </div>
      </div>
      <div class="badge">
        <span class="badge-pill">Legally Binding Agreement</span>
        <div class="title">Master Services Agreement</div>
        <div class="subtitle">Agreement No.: DISOJO-KDC-2026-001</div>
      </div>
    </div>

    <div class="parties-grid">
      <div class="party-card">
        <h3>Service Provider (Developer)</h3>
        <p><strong>DISOJO SOLUTIONS</strong></p>
        <p>Proprietor: Anju Kapoor Bareja</p>
        <p>Lead Technical Director: <strong>Tejjo Bareja</strong></p>
        <p>Contact: +91 77380 73307</p>
        <p>Email: tejjo@disojo.in | billing@disojo.in</p>
      </div>
      <div class="party-card">
        <h3>Client</h3>
        <p><strong>KUNAL DRUM CLASS (KDC)</strong></p>
        <p>Authorized Signatory: <strong>Kunal Sir</strong></p>
        <p>Studio Operations: Poornima Ma'am</p>
        <p>Location: Mumbai, Maharashtra</p>
        <p>Engagement: KDC Studio Operating System</p>
      </div>
    </div>

    <h2>1. Scope of Work & Deliverables</h2>
    <p>Disojo Solutions agrees to design, engineer, test, deploy, and maintain a custom Studio Operating System for KDC consisting of:</p>
    <ul>
      <li><strong>Student Mobile App (iOS & Android):</strong> Weekly fixed batch display (default Attending), strict deadline cancellation (weekday 7 PM / weekend 3 PM), 2-tier comp balance tracker, family switcher, and 1-tap WhatsApp concierge.</li>
      <li><strong>Tutor Attendance Interface:</strong> Assigned batch view, student attendance checklist (Fixed vs. Comp indicators), and same-day/next-day attendance marking.</li>
      <li><strong>Web Command Center:</strong> Super Admin dashboard for Kunal Sir and Poornima Ma'am with batch CRUD, student management, manual rule override tool, audit logging, and Excel/PDF reports.</li>
      <li><strong>Autonomous Automation Engine:</strong> Scheduled cutoff engines, 1-hour Admin grace window, automated comp slot release at 8 PM / 4 PM, and high-priority push notifications via FCM v1 & APNs.</li>
    </ul>

    <h2>2. Commercials & Milestone Schedule</h2>
    <p><strong>Total Fixed Build Investment: ₹3,25,000 (Rupees Three Lakhs Twenty-Five Thousand Only).</strong></p>
    <table>
      <thead>
        <tr>
          <th>Milestone</th>
          <th>Description</th>
          <th>%</th>
          <th>Amount (₹)</th>
          <th>Due Trigger</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>M1</strong></td>
          <td><strong>Kickoff & Infrastructure Setup:</strong> DB architecture, Supabase Mumbai, repo configuration, student schema.</td>
          <td>5%</td>
          <td><strong>₹16,250</strong></td>
          <td>Upon contract signing</td>
        </tr>
        <tr>
          <td><strong>M2</strong></td>
          <td><strong>Core Build & Internal Testing:</strong> Student app & Web Admin deployed to staging ready for studio evaluation.</td>
          <td>15%</td>
          <td><strong>₹48,750</strong></td>
          <td>Upon test build delivery (Week 4)</td>
        </tr>
        <tr>
          <td><strong>M3</strong></td>
          <td><strong>Studio Testing Sign-off:</strong> Feedback revisions, edge-case resolution, final production candidate sign-off.</td>
          <td>25%</td>
          <td><strong>₹81,250</strong></td>
          <td>Upon testing completion</td>
        </tr>
        <tr>
          <td><strong>M4</strong></td>
          <td><strong>Store Deployment & Handover:</strong> Apple App Store & Google Play Store approval, live credentials handover.</td>
          <td>55%</td>
          <td><strong>₹1,78,750</strong></td>
          <td>Upon App Store approval & handover</td>
        </tr>
      </tbody>
    </table>

    <h2>3. Monthly Retainer & Support SLA</h2>
    <p>Client shall pay an ongoing monthly retainer of <strong>₹7,500 / month flat</strong> (GST exempt under threshold) commencing upon store release:</p>
    <ul>
      <li><strong>Inclusions:</strong> 100% cloud database (Supabase) and Web Admin hosting (Vercel) included at ₹0 out-of-pocket to Client; routine iOS/Android OS compatibility updates and minor UI adjustments (up to 3 hours/mo).</li>
      <li><strong>Response Time:</strong> Routine updates turned around within <strong>72 business hours</strong>.</li>
      <li><strong>Support Boundaries:</strong> Excludes 24/7 on-call emergency standby. Out-of-hours or critical emergency fixes billed at <strong>₹800 per billable hour</strong>.</li>
    </ul>

    <h2>4. Intellectual Property & Code Handover</h2>
    <p>Upon receipt of full and final payment under Milestone 4, Developer transfers exclusive, perpetual commercial license of the custom application code and student database to the Client.</p>

    <div class="signatures">
      <div>
        <p><strong>For DISOJO SOLUTIONS:</strong></p>
        <div class="sig-line"></div>
        <p><strong>Tejjo Bareja / Anju Bareja</strong><br>Authorized Signatory<br>Date: _______________</p>
      </div>
      <div>
        <p><strong>For KUNAL DRUM CLASS (KDC):</strong></p>
        <div class="sig-line"></div>
        <p><strong>Kunal Sir</strong><br>Authorized Signatory<br>Date: _______________</p>
      </div>
    </div>
  </div>
</body>
</html>
"""

# ----------------- INVOICE HTML -----------------
invoice_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice #001 — Disojo Solutions</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {{
      --blue: #3B66FF;
      --dark: #0F172A;
      --slate: #334155;
      --muted: #64748B;
      --border: #E2E8F0;
    }}
    * {{ margin:0; padding:0; box-sizing:border-box; -webkit-font-smoothing:antialiased; }}
    body {{ background:#F8FAFC; color:var(--dark); font-family:"Plus Jakarta Sans", sans-serif; line-height:1.6; padding:40px 20px; }}
    .container {{ max-width:820px; margin:0 auto; background:#FFF; border-radius:18px; border:1px solid var(--border); box-shadow:0 10px 40px rgba(0,0,0,0.06); padding:48px 56px; }}
    .header {{ display:flex; justify-content:space-between; align-items:flex-start; border-bottom:1px solid var(--border); padding-bottom:24px; margin-bottom:32px; }}
    .logo {{ width:160px; height:auto; margin-bottom:8px; }}
    .meta {{ font-size:12px; color:var(--muted); line-height:1.5; }}
    .inv-title {{ font-size:28px; font-weight:800; color:var(--dark); text-align:right; }}
    .inv-num {{ font-size:13px; font-weight:700; color:var(--blue); text-align:right; }}
    .grid-2 {{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:32px; }}
    .bill-card {{ background:#F8FAFC; border:1px solid var(--border); border-radius:12px; padding:18px; }}
    .bill-card h3 {{ font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:var(--muted); margin-bottom:6px; }}
    .bill-card p {{ font-size:13px; color:var(--slate); margin-bottom:2px; }}
    table {{ width:100%; border-collapse:collapse; margin-bottom:24px; }}
    th {{ background:#F1F5F9; text-align:left; font-size:11.5px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--muted); padding:10px 14px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }}
    td {{ padding:14px; font-size:13.5px; border-bottom:1px solid var(--border); color:var(--slate); }}
    .totals {{ display:flex; justify-content:flex-end; margin-bottom:32px; }}
    .totals-box {{ width:280px; }}
    .tot-row {{ display:flex; justify-content:space-between; font-size:13px; padding:6px 0; color:var(--slate); }}
    .tot-row.grand {{ font-size:18px; font-weight:800; color:var(--dark); border-top:2px solid var(--dark); padding-top:10px; margin-top:6px; }}
    .bank-box {{ background:rgba(59,102,255,0.05); border:1px solid rgba(59,102,255,0.2); border-radius:12px; padding:18px; margin-bottom:28px; }}
    .bank-box h3 {{ font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1px; color:var(--blue); margin-bottom:8px; }}
    .bank-box p {{ font-size:13px; color:var(--slate); margin-bottom:4px; }}
    .btn {{ background:var(--blue); color:#FFF; font-size:13px; font-weight:700; padding:10px 20px; border-radius:999px; border:none; cursor:pointer; float:right; margin-bottom:20px; }}
    @media print {{ body {{ background:#FFF; padding:0; }} .btn {{ display:none; }} .container {{ border:none; box-shadow:none; padding:0; }} }}
  </style>
</head>
<body>
  <div style="max-width:820px;margin:0 auto;">
    <button class="btn" onclick="window.print()">🖨️ Print / Save PDF</button>
  </div>
  <div class="container">
    <div class="header">
      <div>
        <img class="logo" src="data:image/png;base64,{B64_LAND}" alt="Disojo Solutions">
        <div class="meta">
          <strong>DISOJO SOLUTIONS</strong> (MSME: UDYAM-MH-18-0539895)<br>
          A Wing 1904, Eden Garden Tower, Din Quarry Rd, Mumbai - 400088<br>
          Billing Desk: billing@disojo.in • Phone: +91 77380 73307
        </div>
      </div>
      <div>
        <div class="inv-title">INVOICE</div>
        <div class="inv-num">Invoice #: DISOJO-INV-001</div>
        <div class="meta" style="text-align:right;margin-top:4px;">Date: September 08, 2026<br>Due Date: Upon Contract Signing</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="bill-card">
        <h3>Billed To (Client):</h3>
        <p><strong>KUNAL DRUM CLASS (KDC)</strong></p>
        <p>Attn: Kunal Sir & Poornima Ma'am</p>
        <p>Studio: Mumbai, Maharashtra</p>
      </div>
      <div class="bill-card">
        <h3>Project Engagement:</h3>
        <p><strong>KDC Studio OS Platform</strong></p>
        <p>Contract Ref: DISOJO-KDC-2026-001</p>
        <p>Payment Milestone: 1 of 4 (Kickoff Deposit)</p>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Rate (₹)</th>
          <th>Qty</th>
          <th style="text-align:right;">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Milestone 1: Project Kickoff & Infrastructure Setup (5%)</strong><br>
            <span style="font-size:12px;color:var(--muted);">
              Cloud DB architecture (Supabase Mumbai), multi-platform repo initialization, authentication framework, 226 student data schema, and security RLS policies.
            </span>
          </td>
          <td>₹16,250</td>
          <td>1</td>
          <td style="text-align:right;font-weight:700;">₹16,250</td>
        </tr>
      </tbody>
    </table>

    <div class="totals">
      <div class="totals-box">
        <div class="tot-row"><span>Subtotal:</span><span>₹16,250.00</span></div>
        <div class="tot-row"><span>GST (Exempt under threshold):</span><span>₹0.00</span></div>
        <div class="tot-row grand"><span>Total Due:</span><span>₹16,250.00</span></div>
      </div>
    </div>

    <div class="bank-box">
      <h3>Bank Transfer & Payment Instructions</h3>
      <p>Please remit payment via NEFT, RTGS, IMPS, or UPI to:</p>
      <p>• <strong>Beneficiary Name:</strong> DISOJO SOLUTIONS / ANJU BAREJA</p>
      <p>• <strong>Bank:</strong> [Your Bank Name]</p>
      <p>• <strong>Account Number:</strong> [Your Bank Account Number]</p>
      <p>• <strong>IFSC Code:</strong> [Your IFSC Code]</p>
      <p>• <strong>UPI ID:</strong> [Your UPI ID / 7738073307@...]</p>
      <p style="font-size:11.5px;color:var(--muted);margin-top:6px;">* Please share the UTR / transfer confirmation screenshot to billing@disojo.in or WhatsApp.</p>
    </div>

    <div style="font-size:12px;color:var(--muted);text-align:center;border-top:1px solid var(--border);padding-top:16px;">
      Thank you for your business. Disojo Solutions is committed to engineering your studio's premier digital operating system.
    </div>
  </div>
</body>
</html>
"""

with open("/Users/tejjo/Desktop/websites/KDC_Contract_Disojo.html", "w") as f:
    f.write(contract_html)

with open("/Users/tejjo/Desktop/websites/KDC_Invoice_001_Disojo.html", "w") as f:
    f.write(invoice_html)

print("SUCCESS: Contract and Invoice generated!")
