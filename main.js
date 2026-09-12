/**
 * DevOps AI — Interactive Engine
 * Theme switcher, OS detection, download hub, frame tabs, FAQ, mobile nav
 *
 * To configure Google Drive links, update GOOGLE_DRIVE_LINKS below.
 */

const GOOGLE_DRIVE_LINKS = {
  windows: 'https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_WINDOWS_LINK',
  macos:   'https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_MACOS_LINK',
  linux:   'https://drive.google.com/drive/folders/YOUR_GOOGLE_DRIVE_LINUX_LINK'
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initDownloadHub();
  initAppFrameTabs();
  initFaqAccordion();
  initMobileMenu();
  initNavbarScroll();
  initFooterOsLinks();
  initCopyEmail();
});

/* ─── 1. Theme Engine ──────────────────────────────────────────────────── */
function initThemeEngine() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const stored = localStorage.getItem('devopsai-theme');
  applyTheme(stored || 'light');

  toggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('devopsai-theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/* ─── 2. OS-Auto-detect Download Hub ──────────────────────────────────── */
function initDownloadHub() {
  const tabs  = document.querySelectorAll('.os-tab-btn');
  const panes = document.querySelectorAll('.os-content-pane');
  const badge = document.getElementById('detected-os-badge-text');

  // Detect OS
  const ua  = navigator.userAgent.toLowerCase();
  const plt = (navigator.platform || '').toLowerCase();

  let detected = 'windows', detectedName = 'Windows';

  if (/mac|macintosh|darwin/.test(plt) || /mac os x/.test(ua)) {
    detected = 'macos'; detectedName = 'macOS';
  } else if (/linux/.test(plt) || /linux/.test(ua)) {
    detected = 'linux'; detectedName = 'Linux';
  }

  if (badge) {
    badge.innerHTML = `<span class="badge-dot"></span><span>Auto-detected: ${detectedName}</span>`;
  }

  function switchOS(key) {
    tabs.forEach(t  => t.classList.toggle('active', t.dataset.os === key));
    panes.forEach(p => p.classList.toggle('active', p.id === `pane-os-${key}`));
  }

  tabs.forEach(t => t.addEventListener('click', () => switchOS(t.dataset.os)));

  // Set Google Drive links
  const wins = document.getElementById('btn-gdrive-windows');
  const macs = document.getElementById('btn-gdrive-macos');
  const lins = document.getElementById('btn-gdrive-linux');
  if (wins) wins.href = GOOGLE_DRIVE_LINKS.windows;
  if (macs) macs.href = GOOGLE_DRIVE_LINKS.macos;
  if (lins) lins.href = GOOGLE_DRIVE_LINKS.linux;

  switchOS(detected);
}

/* ─── 3. Desktop App Frame Tabs & Interactive Demo ─────────────────────── */
function initAppFrameTabs() {
  const segBtns    = document.querySelectorAll('.segmented-btn');
  const framePanes = document.querySelectorAll('.frame-pane');
  const navItems   = document.querySelectorAll('.frame-nav-item');
  const crumbTitle = document.getElementById('topbar-crumb-title');
  const moduleNames = {
    servers:      'Servers / Server',
    docker:       'Docker & Orchestration',
    dashboard:    'Fleet Overview & Command Center',
    databases:    'Databases',
    'ai-agent':   'AI Agent & Copilot',
    workspaces:   'Workspaces',
    'server-groups': 'Server Groups',
    network:      'Network & Firewalls',
    cloud:        'Cloud Infrastructure',
    terminal:     'Interactive Terminal',
    deployments:  'Deployments & CI',
    settings:     'Settings & Configuration'
  };

  function switchTab(id) {
    const targetPane = document.getElementById(`frame-${id}`);
    if (targetPane) {
      framePanes.forEach(p => p.classList.remove('active'));
      targetPane.classList.add('active');
    }
    navItems.forEach(n => n.classList.toggle('active', n.dataset.tab === id));
    segBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    if (crumbTitle && moduleNames[id]) {
      crumbTitle.textContent = moduleNames[id];
    }
  }

  navItems.forEach(n => n.addEventListener('click', () => n.dataset.tab && switchTab(n.dataset.tab)));
  segBtns.forEach(b  => b.addEventListener('click', () => b.dataset.tab && switchTab(b.dataset.tab)));

  // Interactive Playbook Execution Demo
  const btnExecute = document.getElementById('btn-execute-playbook');
  const btnFixWorker = document.getElementById('btn-fix-worker');
  const terminalLogs = document.getElementById('sre-terminal-logs');
  const alertBanner = document.getElementById('sre-alert-banner');
  const navBadge = document.getElementById('nav-sre-badge');

  function executeSelfHealing() {
    if (!btnExecute || btnExecute.disabled) return;
    btnExecute.disabled = true;
    btnExecute.innerHTML = `<span>⏳ Executing Playbook...</span>`;
    
    if (terminalLogs) {
      const now = new Date().toLocaleTimeString('en-US', { hour12: false });
      const line1 = document.createElement('div');
      line1.className = 'log-line';
      line1.innerHTML = `<span class="log-time">[${now}]</span> <span class="log-sys">[playbook]</span> Purging Linux kernel pagecache... Reclaimed 2.1 GB RAM.`;
      terminalLogs.appendChild(line1);

      setTimeout(() => {
        const line2 = document.createElement('div');
        line2.className = 'log-line';
        line2.innerHTML = `<span class="log-time">[${now}]</span> <span class="log-info">[playbook]</span> Relaunching backend-worker-1 container (1.5GB cap)... Success.`;
        terminalLogs.appendChild(line2);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;
      }, 800);

      setTimeout(() => {
        const line3 = document.createElement('div');
        line3.className = 'log-line';
        line3.innerHTML = `<span class="log-time">[${now}]</span> <span class="log-info">[sre-agent]</span> 502 Resolved. Nginx upstream returns HTTP 200 OK.`;
        terminalLogs.appendChild(line3);
        terminalLogs.scrollTop = terminalLogs.scrollHeight;

        btnExecute.disabled = false;
        btnExecute.className = 'app-btn app-btn-secondary';
        btnExecute.innerHTML = `<span>✅ Playbook Completed</span>`;

        if (alertBanner) {
          alertBanner.style.background = 'rgba(16,185,129,0.08)';
          alertBanner.style.borderColor = 'rgba(16,185,129,0.3)';
          alertBanner.innerHTML = `<div style="color:#34D399; font-weight:700; font-size:0.82rem;">✅ Incident Resolved: All Services Healthy (200 OK)</div><div style="font-size:0.75rem; color:#94A3B8; margin-top:2px;">Memory limit increased to 1.5GB. backend-worker-1 is online.</div>`;
        }

        if (navBadge) {
          navBadge.className = 'status-tag tag-success';
          navBadge.textContent = '0 Alerts';
        }

        const workerCard = document.getElementById('card-container-worker');
        const workerTag = document.getElementById('tag-worker-status');
        if (workerCard && workerTag) {
          workerCard.classList.remove('container-card-danger');
          workerTag.className = 'status-tag tag-success';
          workerTag.textContent = 'RUNNING';
        }
      }, 1600);
    }
  }

  btnExecute?.addEventListener('click', executeSelfHealing);
  btnFixWorker?.addEventListener('click', () => {
    switchTab('sre');
    executeSelfHealing();
  });

  // Blue/Green Traffic Toggle Demo
  const btnSwitchBG = document.getElementById('btn-switch-bluegreen');
  let isGreen = true;
  btnSwitchBG?.addEventListener('click', () => {
    isGreen = !isGreen;
    if (isGreen) {
      btnSwitchBG.textContent = '🔀 Switch Traffic to Blue (v2.4.1)';
    } else {
      btnSwitchBG.textContent = '🔀 Switch Traffic back to Green (v2.4.0)';
    }
  });
}

/* ─── 4. FAQ Accordion & Category Filter ──────────────────────────────────── */
function initFaqAccordion() {
  const cards = document.querySelectorAll('.faq-card');
  const filterBtns = document.querySelectorAll('.faq-filter-btn');

  // Category filter switching
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category || 'all';
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));

      cards.forEach(card => {
        const cardCat = card.dataset.category;
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
          card.classList.remove('open');
        }
      });
    });
  });

  // Accordion toggle
  cards.forEach(card => {
    card.querySelector('.faq-trigger')?.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      cards.forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });
}

/* ─── 5. Mobile Nav ────────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on nav link click
  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ─── 6. Navbar scroll shadow ──────────────────────────────────────────── */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ─── 7. Footer OS-aware quick links ──────────────────────────────────── */
function initFooterOsLinks() {
  const ua  = navigator.userAgent.toLowerCase();
  const plt = (navigator.platform || '').toLowerCase();
  let detected = 'windows';
  if (/mac|darwin/.test(plt) || /mac os x/.test(ua)) detected = 'macos';
  else if (/linux/.test(plt) || /linux/.test(ua))    detected = 'linux';

  const btnIds = { windows: 'footer-dl-win', macos: 'footer-dl-mac', linux: 'footer-dl-linux' };
  const btn = document.getElementById(btnIds[detected]);
  if (btn) {
    btn.href = GOOGLE_DRIVE_LINKS[detected];
    btn.target = '_blank';
    btn.rel = 'noopener';
  }
}

/* ─── 8. Copy-email UX ─────────────────────────────────────────────────── */
function initCopyEmail() {
  document.querySelectorAll('[data-copy-email]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-copy-email') || '';
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(email);
        btn.textContent = 'Copied ✓';
      } catch {
        btn.textContent = email;
      }
      setTimeout(() => { btn.textContent = original; }, 1600);
    });
  });
}
