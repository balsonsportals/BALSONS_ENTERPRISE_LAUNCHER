/**
 * BALSONS ENTERPRISE ECOSYSTEM - MOBILE & TABLET RUNTIME ENGINE
 * Version 1.0 (BEDS Mobile Standard / SAM-2026)
 */

const BalsonsMobileApp = {
  currentView: 'hub',
  currentArea: 'LINE-AXLE',
  currentUser: null,
  activeDossier: null,

  // Canonical Accounts Matrix
  accounts: [
    { username: 'superadmin', name: 'Prashant Muley', role: 'Super Administrator', badge: 'BAL-ADM-001', pass: 'Balsons@Super2026!', pin: '2026', scope: 'ALL 7 Portals' },
    { username: 'director.mgmt', name: 'Satish Chandra', role: 'Project Director', badge: 'BAL-DIR-001', pass: 'Balsons@Mgmt2026!', pin: '1001', scope: 'Ops, Store, Safety, Purch' },
    { username: 'admin.purch', name: 'Rohan Sharma', role: 'Purchase Lead / Commercial Head', badge: 'BAL-PUR-001', pass: 'Purch@Admin2026!', pin: '3001', scope: 'Purchase Manager (Full Commercial Write)' },
    { username: 'indenter.ops', name: 'Suresh Verma', role: 'Indenter / Site Engineer', badge: 'BAL-PUR-002', pass: 'Indent@Ops2026!', pin: '3002', scope: 'Purchase (PR Drafting & Tech Specs)' },
    { username: 'dilip.rout', name: 'Dilip Rout', role: 'Operations Area Manager', badge: 'BAL-OPS-001', pass: 'Ops@Dilip2026!', pin: '1002', scope: 'Line-Axle / Line-Wheel' },
    { username: 'sarat.mishra', name: 'Sarat Mishra', role: 'Machine Shop Area Manager', badge: 'BAL-OPS-002', pass: 'Ops@Sarat2026!', pin: '1003', scope: 'Machine Shop 7 Streams' },
    { username: 'admin.store', name: 'Gagan Bihari Das', role: 'Store Portal Admin', badge: 'BAL-STR-001', pass: 'Store@Admin2026!', pin: '4001', scope: 'Store & Tackle Form 11' },
    { username: 'admin.safety', name: 'Gajendra Rao', role: 'Safety Portal Admin', badge: 'BAL-SAF-001', pass: 'Safety@Admin2026!', pin: '3001', scope: 'Safety & PTW Risk' },
    { username: 'admin.gate', name: 'Bikash Mohapatra', role: 'Gate Security Admin', badge: 'BAL-SEC-001', pass: 'Gate@Admin2026!', pin: '5001', scope: 'Gate Entry & Muster' },
    { username: 'admin.hr', name: 'Priyanka Senapati', role: 'HR Portal Admin', badge: 'BAL-HR-001', pass: 'HR@Admin2026!', pin: '6001', scope: 'HR & Statutory KYC' },
    { username: 'emp.ramesh', name: 'Ramesh Kumar', role: 'Senior Certified Rigger', badge: 'BAL-OPS-004', pass: 'Rig@Ramesh2026!', pin: '1005', scope: 'Turnstile & Self-Service' },
    { username: 'client.jtrwf', name: 'Client Auditor', role: 'Client Inspection Auditor', badge: 'BAL-AUD-001', pass: 'Client@JTRWF2026!', pin: '9001', scope: 'Operations 360° Dossiers' }
  ],

  // Work Packages Data with 360° Dossier Punchlists
  workPackages: {
    'WP-AXLE-01': {
      id: 'WP-AXLE-01',
      title: 'Schuler Axle Cold Extrusion Press Erection',
      area: 'LINE-AXLE',
      tag: 'CRITICAL LIFT',
      weightMT: 145.0,
      baselineMD: 280,
      progress: 82,
      equipment: 'Demag CC-2800 (600T) + SPMT 12-Axle',
      lead: 'Dilip Rout / Manoj Das',
      punchlist: [
        { id: 'p1', title: 'Plinth Concrete Curing & Pre-Grout Survey', done: true },
        { id: 'p2', title: 'Tackle Form 11 Certificates Validated (TPI)', done: true },
        { id: 'p3', title: 'SPMT Modular Trailer Haulage & Spotting', done: true },
        { id: 'p4', title: '600T Tandem Crane Lift to Anchor Bolts', done: true },
        { id: 'p5', title: 'Optical Laser Alignment (0.02 mm/m)', done: false },
        { id: 'p6', title: 'Hydraulic Piping Flushing & Client Sign-Off', done: false }
      ]
    },
    'WP-AXLE-02': {
      id: 'WP-AXLE-02',
      title: 'Hydraulic Pullers & Axle Transfer Gantry',
      area: 'LINE-AXLE',
      tag: 'IN PROGRESS',
      weightMT: 68.5,
      baselineMD: 160,
      progress: 64,
      equipment: 'Krupp 100T Crane',
      lead: 'Dilip Rout',
      punchlist: [
        { id: 'p1', title: 'Anchor Pull Testing (120 kN)', done: true },
        { id: 'p2', title: 'Sling & Shackle Form 11 Clearance', done: true },
        { id: 'p3', title: 'Overhead Gantry Girder Placement', done: true },
        { id: 'p4', title: 'Power Rail & Busbar Integration', done: false },
        { id: 'p5', title: 'Load Test with 125% Test Weight', done: false }
      ]
    },
    'WP-WHEEL-01': {
      id: 'WP-WHEEL-01',
      title: '8,000T Monobloc Wheel Forging Press Plinth',
      area: 'LINE-WHEEL',
      tag: 'SUPER HEAVY',
      weightMT: 285.0,
      baselineMD: 420,
      progress: 58,
      equipment: 'Liebherr LTM-11200 + SPMT Hauler',
      lead: 'Dilip Rout / Ramesh Kumar',
      punchlist: [
        { id: 'p1', title: 'Pit Excavation & Foundation Laser Grid', done: true },
        { id: 'p2', title: 'Base Bedplate SPMT Roll-In', done: true },
        { id: 'p3', title: 'Tier 1 Tie-Rod Tensioning (Form 11 Tool)', done: true },
        { id: 'p4', title: 'Hydraulic Cylinder Positioning', done: false },
        { id: 'p5', title: 'Hydrostatic Pressure Testing (350 bar)', done: false },
        { id: 'p6', title: 'Client Inspection Acceptance', done: false }
      ]
    },
    'WP-WHEEL-02': {
      id: 'WP-WHEEL-02',
      title: 'Rotary Hearth Furnace Shell & Hearth Drive',
      area: 'LINE-WHEEL',
      tag: 'HOT ZONE',
      weightMT: 110.0,
      baselineMD: 230,
      progress: 74,
      equipment: 'Telescopic Crane 160T',
      lead: 'Dilip Rout',
      punchlist: [
        { id: 'p1', title: 'Hearth Center Pivot Bearing Alignment', done: true },
        { id: 'p2', title: 'Circular Rail Track Levelling (0.1 mm)', done: true },
        { id: 'p3', title: 'Refractory Lining Staging', done: true },
        { id: 'p4', title: 'Burner Piping Hot Permitted Clearance', done: false },
        { id: 'p5', title: 'Drive Rotation No-Load Commissioning', done: false }
      ]
    },
    'WP-MS-01': {
      id: 'WP-MS-01',
      title: 'MS-FFG: Forged Flange Turning Lathe Cell',
      area: 'AREA-MACHINE-SHOP-AXLE',
      tag: 'STREAM 1/7',
      weightMT: 42.0,
      baselineMD: 95,
      progress: 90,
      equipment: 'Shop EOT Crane 50T',
      lead: 'Sarat Mishra',
      punchlist: [
        { id: 'p1', title: 'Machine Bed Foundation Fastening', done: true },
        { id: 'p2', title: 'Precision Bed Levelling', done: true },
        { id: 'p3', title: 'CNC Console Cabling & Interlock', done: true },
        { id: 'p4', title: 'Spindle Runout Laser Inspection', done: true },
        { id: 'p5', title: 'Client Pilot Turning Clearance', done: false }
      ]
    },
    'WP-MS-02': {
      id: 'WP-MS-02',
      title: 'MS-PARI-GANTRY: Automated Gantry Loading Rail',
      area: 'AREA-MACHINE-SHOP-AXLE',
      tag: 'STREAM 4/7',
      weightMT: 56.0,
      baselineMD: 140,
      progress: 68,
      equipment: 'Mobile Crane 75T',
      lead: 'Sarat Mishra / Debendra Behera',
      punchlist: [
        { id: 'p1', title: 'High-Level Rail Bracket Alignment', done: true },
        { id: 'p2', title: 'Gantry Carriage Hoisting & Rigging', done: true },
        { id: 'p3', title: 'Servo Drive Encoder Calibrations', done: false },
        { id: 'p4', title: 'Light Curtain Safety Interlock Check', done: false }
      ]
    }
  },

  init: function () {
    // 1. Theme restoration
    const savedTheme = localStorage.getItem('balsons_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeButton();

    // 2. Active Session restoration
    this.restoreSession();

    // 3. Render current Area packages
    this.renderAreaPackages();

    console.log('✓ BALSONS Mobile & Tablet Engine Initialized');
  },

  // THEME
  toggleTheme: function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('balsons_theme', next);
    this.updateThemeButton();
  },

  updateThemeButton: function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const btn = document.getElementById('btnMobileTheme');
    if (btn) btn.innerHTML = isDark ? '☀️' : '🌙';
  },

  // VIEW SWITCHING
  switchView: function (viewKey) {
    this.currentView = viewKey;

    // Toggle navigation buttons
    document.querySelectorAll('.nav-item-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewKey);
    });

    // Toggle view containers
    document.querySelectorAll('.mobile-view-container').forEach(c => {
      c.classList.remove('active');
    });

    const activeContainer = document.getElementById(`view-${viewKey}`);
    if (activeContainer) {
      activeContainer.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // AREA SWITCHING (OPERATIONS)
  setArea: function (areaKey, btn) {
    this.currentArea = areaKey;
    document.querySelectorAll('#opsAreaPills .segment-pill-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderAreaPackages();
  },

  renderAreaPackages: function () {
    const container = document.getElementById('opsPackageListContainer');
    if (!container) return;

    const filtered = Object.values(this.workPackages).filter(p => p.area === this.currentArea);

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:30px; color:var(--b-text-muted);">No packages assigned to this area.</div>`;
      return;
    }

    container.innerHTML = filtered.map(pkg => `
      <div class="mobile-touch-card">
        <div class="mt-header">
          <div class="mt-header-title">
            <h3>${pkg.title}</h3>
            <p>ID: ${pkg.id} • ${pkg.equipment}</p>
          </div>
          <span class="mt-badge tag-chip tag-cyan">${pkg.tag}</span>
        </div>

        <div class="mt-metrics-grid">
          <div class="mt-metric-col">
            <span class="mt-metric-lbl">Tonnage</span>
            <span class="mt-metric-val">${pkg.weightMT.toFixed(1)} MT</span>
          </div>
          <div class="mt-metric-col">
            <span class="mt-metric-lbl">Baseline Man-Days</span>
            <span class="mt-metric-val">${pkg.baselineMD} MD</span>
          </div>
          <div class="mt-metric-col" style="grid-column: span 2;">
            <span class="mt-metric-lbl">Supervisors</span>
            <span class="mt-metric-val">${pkg.lead}</span>
          </div>
        </div>

        <div class="mt-progress-wrap">
          <div class="mt-progress-head">
            <span>Physical Progress</span>
            <span style="color:var(--b-cyan-primary);">${pkg.progress}%</span>
          </div>
          <div class="mt-progress-track">
            <div class="mt-progress-fill" style="width: ${pkg.progress}%;"></div>
          </div>
        </div>

        <div class="mt-actions-row">
          <button class="btn-mobile-act-primary" onclick="BalsonsMobileApp.openDossier('${pkg.id}')">
            📋 360° Dossier
          </button>
          <button class="btn-mobile-act-secondary" onclick="BalsonsMobileApp.quickLogEntry('${pkg.id}')">
            ⚡ Quick Log
          </button>
        </div>
      </div>
    `).join('');
  },

  // 360° DOSSIER BOTTOM SHEET
  openDossier: function (pkgId) {
    const pkg = this.workPackages[pkgId];
    if (!pkg) return;
    this.activeDossier = pkg;

    document.getElementById('sheetDossierTitle').textContent = `360° Dossier: ${pkg.id}`;
    document.getElementById('sheetDossierSub').textContent = pkg.title;

    this.renderPunchlist();

    document.getElementById('dossierSheetBackdrop').classList.add('open');
    document.getElementById('dossierBottomSheet').classList.add('open');
  },

  closeDossier: function () {
    document.getElementById('dossierSheetBackdrop').classList.remove('open');
    document.getElementById('dossierBottomSheet').classList.remove('open');
    this.activeDossier = null;
  },

  renderPunchlist: function () {
    const container = document.getElementById('sheetPunchlistContainer');
    if (!container || !this.activeDossier) return;

    const total = this.activeDossier.punchlist.length;
    const completed = this.activeDossier.punchlist.filter(p => p.done).length;
    const pct = Math.round((completed / total) * 100);

    let html = `
      <div style="background:var(--b-bg-subtle); padding:12px; border-radius:8px; border:1px solid var(--b-border); margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:800; margin-bottom:4px;">
          <span>Mechanical Punchlist Completion</span>
          <span style="color:var(--b-cyan-primary);">${completed}/${total} (${pct}%)</span>
        </div>
        <div class="mt-progress-track">
          <div class="mt-progress-fill" style="width:${pct}%;"></div>
        </div>
      </div>
    `;

    html += this.activeDossier.punchlist.map((item, idx) => `
      <div class="punch-item-row" onclick="BalsonsMobileApp.togglePunchItem('${item.id}')">
        <input type="checkbox" class="punch-checkbox" ${item.done ? 'checked' : ''} onclick="event.stopPropagation(); BalsonsMobileApp.togglePunchItem('${item.id}')">
        <div class="punch-content">
          <div class="punch-title" style="${item.done ? 'text-decoration:line-through; opacity:0.7;' : ''}">
            Milestone ${idx + 1}: ${item.title}
          </div>
          <div class="punch-desc">Sign-off Authority: Operations Area Manager & HSE Steward</div>
        </div>
      </div>
    `).join('');

    html += `
      <div style="margin-top:16px; display:flex; gap:8px;">
        <button class="btn-mobile-act-primary" onclick="BalsonsMobileApp.generateCertificate()">
          🖨️ Generate Certificate
        </button>
        <button class="btn-mobile-act-secondary" onclick="BalsonsMobileApp.closeDossier()">
          Close
        </button>
      </div>
    `;

    container.innerHTML = html;
  },

  togglePunchItem: function (itemId) {
    if (!this.activeDossier) return;
    const item = this.activeDossier.punchlist.find(p => p.id === itemId);
    if (item) {
      item.done = !item.done;
      // Recalculate package progress
      const total = this.activeDossier.punchlist.length;
      const completed = this.activeDossier.punchlist.filter(p => p.done).length;
      this.activeDossier.progress = Math.round((completed / total) * 100);
      this.renderPunchlist();
      this.renderAreaPackages();
    }
  },

  generateCertificate: function () {
    if (!this.activeDossier) return;
    alert(`📜 MECHANICAL COMPLETION DOSSIER CERTIFICATE GENERATED!\n\nPackage: ${this.activeDossier.id} - ${this.activeDossier.title}\nWeight: ${this.activeDossier.weightMT} MT\nCompletion: ${this.activeDossier.progress}%\nGoverning Policy: BEDS V1.0 / SAM-2026\nIssued for: JTRWF Site Directorate`);
  },

  quickLogEntry: function (pkgId) {
    const pkg = this.workPackages[pkgId];
    const log = prompt(`Enter Shift Log Notes for ${pkgId} (${pkg.title}):\nE.g. Crane positioning completed; anchor bolt surveyed.`);
    if (log) {
      alert(`✓ Shift Log entry recorded for ${pkgId}!\nSynced with IndexedDB and queued for Cloud Sheet: 1GeqDDmB...`);
    }
  },

  // USER SWITCHER & CREDENTIALS SHEET
  openUserSwitcher: function () {
    this.renderCredentialsList();
    document.getElementById('credSheetBackdrop').classList.add('open');
    document.getElementById('credBottomSheet').classList.add('open');
  },

  closeUserSwitcher: function () {
    document.getElementById('credSheetBackdrop').classList.remove('open');
    document.getElementById('credBottomSheet').classList.remove('open');
  },

  renderCredentialsList: function () {
    const container = document.getElementById('sheetCredContainer');
    if (!container) return;

    container.innerHTML = this.accounts.map(acc => `
      <div style="background:var(--b-bg-subtle); border:1px solid var(--b-border); border-radius:10px; padding:12px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <strong style="font-size:13px; color:var(--b-text-primary);">${acc.name}</strong>
            <div style="font-size:11px; color:var(--b-text-muted);">${acc.role} (${acc.badge})</div>
          </div>
          <button class="btn-mobile-act-primary" style="height:28px; padding:0 8px; font-size:11px; flex:none;" onclick="BalsonsMobileApp.selectAccount('${acc.username}')">
            ➔ Log In
          </button>
        </div>
        <div style="display:flex; gap:10px; margin-top:8px; font-size:11px; font-family:var(--b-font-mono);">
          <span>ID: <strong>${acc.username}</strong></span>
          <span>PIN: <strong>${acc.pin}</strong></span>
        </div>
      </div>
    `).join('');
  },

  selectAccount: function (username) {
    const acc = this.accounts.find(a => a.username === username);
    if (!acc) return;
    this.currentUser = acc;
    localStorage.setItem('balsons_mobile_user', JSON.stringify(acc));
    this.updateUserBadge();
    this.closeUserSwitcher();
    alert(`✓ Active Session switched to: ${acc.name} (${acc.role})\nPersistent mobile session restored.`);
  },

  restoreSession: function () {
    try {
      const raw = localStorage.getItem('balsons_mobile_user');
      if (raw) {
        this.currentUser = JSON.parse(raw);
      } else {
        this.currentUser = this.accounts[0]; // default Super Admin
      }
    } catch (e) {
      this.currentUser = this.accounts[0];
    }
    this.updateUserBadge();
  },

  updateUserBadge: function () {
    const badge = document.getElementById('activeUserPill');
    if (badge && this.currentUser) {
      badge.textContent = `👤 ${this.currentUser.name.split(' ')[0]} (${this.currentUser.pin})`;
    }
  },

  // STORE MOCK ACTIONS
  simulateBarcodeScan: function () {
    const mockTackles = ['SLING-60T-001', 'SHACKLE-85T-004', 'TORQUE-WRENCH-HYD-02', 'MASTER-LINK-100T'];
    const chosen = mockTackles[Math.floor(Math.random() * mockTackles.length)];
    alert(`📷 SCANNER TRIGGERED!\n\nTackle Barcode Detected: ${chosen}\nForm 11 Certificate: VALID (Exp: 2027-04-15)\nTPI Inspector: Lloyd's Register\nStatus: APPROVED FOR IMMEDIATE RIGGING ISSUE.`);
  },

  // SAFETY MOCK ACTIONS
  simulatePTWCheck: function () {
    alert(`🦺 4-EYE LIFT REVIEW VERIFICATION:\n\nActive Permit: PTW-2026-LIFT-042\nLocation: Area 1 (Line Axle)\nCrane: Demag CC-2800 (600T)\nWind Speed: 4.2 m/s (SAFE - Threshold: 9.8 m/s)\nSafety Steward Sign-off: VALID\nOperations Area Sign-off: VALID\nStatus: WORK AUTHORIZED.`);
  },

  // GATE MOCK ACTIONS
  simulateGateScan: function () {
    const badge = prompt('Enter Worker Badge No to Scan Turnstile (e.g. BAL-OPS-001, BAL-OPS-004):', 'BAL-OPS-001');
    if (badge) {
      alert(`🚪 TURNSTILE SCAN RESULT FOR [${badge}]:\n\n1. HR KYC & Aadhaar: VERIFIED (UAN Active)\n2. Form 31 Medical Fitness: PASS\n3. Safety Induction Passport: ACTIVE\n\n>> DECISION: TURNSTILE UNLOCKED (GREEN LIGHT) <<`);
    }
  },

  // DESKTOP SWITCHER
  goToDesktop: function () {
    window.location.href = '../index.html';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  BalsonsMobileApp.init();
});
