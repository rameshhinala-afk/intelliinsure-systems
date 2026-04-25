/* ============================================
   IntelliInsure — Sidebar Builder
   Call buildSidebar(root) where root = '../' or ''
   ============================================ */
function buildSidebar(root = '') {
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: root + 'index.html',          icon: iconDash,    label: 'Dashboard',       section: 'Main' },
    { href: root + 'pages/policy.html',   icon: iconPolicy,  label: 'Policy Analyzer',  section: 'AI Modules' },
    { href: root + 'pages/claims.html',   icon: iconClaims,  label: 'Claims Processor', section: null },
    { href: root + 'pages/risk.html',     icon: iconRisk,    label: 'Risk Scorer',      section: null },
    { href: root + 'pages/fraud.html',    icon: iconFraud,   label: 'Fraud Detector',   section: null },
    { href: root + 'pages/customers.html',icon: iconCust,    label: 'Customers',        section: 'Data' },
    { href: root + 'pages/reports.html',  icon: iconReport,  label: 'Reports',          section: null },
    { href: root + 'pages/settings.html', icon: iconSet,     label: 'Settings',         section: 'System' },
  ];

  let html = `
  <aside class="sidebar">
    <div class="sb-brand">
      <div class="sb-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
          <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6L12 2z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      </div>
      <div class="sb-brand-text">
        <div class="name">IntelliInsure</div>
        <div class="tagline">AI Systems</div>
      </div>
    </div>
    <nav class="sb-nav">`;

  let lastSection = null;
  links.forEach(({ href, icon, label, section }) => {
    if (section && section !== lastSection) {
      html += `<div class="sb-section">${section}</div>`;
      lastSection = section;
    } else if (!section && lastSection === 'Main') {
      // nothing
    }
    const target = href.split('/').pop();
    const active = target === page ? ' active' : '';
    html += `<a href="${href}" class="sb-link${active}">${icon}<span>${label}</span></a>`;
  });

  html += `
    </nav>
    <div class="sb-footer">
      <div class="sb-avatar">MR</div>
      <div>
        <div class="sb-user-name">M. Raghavan</div>
        <div class="sb-user-role">Senior Underwriter</div>
      </div>
    </div>
  </aside>`;

  document.write(html);
}

/* SVG icons */
const iconDash   = `<svg class="icon" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.2" fill="currentColor"/><rect x="9" y="1" width="6" height="6" rx="1.2" fill="currentColor" opacity=".5"/><rect x="1" y="9" width="6" height="6" rx="1.2" fill="currentColor" opacity=".5"/><rect x="9" y="9" width="6" height="6" rx="1.2" fill="currentColor" opacity=".25"/></svg>`;
const iconPolicy = `<svg class="icon" viewBox="0 0 16 16" fill="none"><path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M10 2v3h3" stroke="currentColor" stroke-width="1.3"/><line x1="5" y1="7" x2="11" y2="7" stroke="currentColor" stroke-width="1.1" opacity=".6"/><line x1="5" y1="9.5" x2="9" y2="9.5" stroke="currentColor" stroke-width="1.1" opacity=".6"/></svg>`;
const iconClaims = `<svg class="icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.3"/><path d="M8 5v3l2 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
const iconRisk   = `<svg class="icon" viewBox="0 0 16 16" fill="none"><path d="M8 1.5l1.8 4.5H14l-3.5 2.8 1.2 4.5L8 10.8l-3.7 2.5 1.2-4.5L2 6h4.2z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
const iconFraud  = `<svg class="icon" viewBox="0 0 16 16" fill="none"><path d="M8 1L2 4v4c0 3.3 2.6 5.6 6 7 3.4-1.4 6-3.7 6-7V4L8 1z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M5.5 8.5l1.5 1.5 3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
const iconCust   = `<svg class="icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M2.5 13.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
const iconReport = `<svg class="icon" viewBox="0 0 16 16" fill="none"><rect x="2" y="9.5" width="2.5" height="5" rx=".5" fill="currentColor"/><rect x="6.5" y="6.5" width="2.5" height="8" rx=".5" fill="currentColor" opacity=".7"/><rect x="11" y="3.5" width="2.5" height="11" rx=".5" fill="currentColor" opacity=".45"/><path d="M3.25 9.5 6.5 6.5l2.5 2 4-5.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconSet    = `<svg class="icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
