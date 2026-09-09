/**
 * Ritesh Paul - Cybersecurity Portfolio Engine
 * Dynamic rendering, interactive SOC terminal, filtering & audio-visual telemetry
 */

import { portfolioData } from '../data/portfolioData.js';

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initMatrixCanvas();
  initLiveClock();
  renderHeroStats();
  renderSkillsSection();
  renderExperienceSection();
  renderProjectsSection();
  renderCertificationsSection();
  renderEducationSection();
  initTerminal();
  initContactActions();
  initMobileNav();
  initLucide();
});

// Helper for Lucide icons rendering
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// -------------------------------------------------------------
// 1. Matrix Background Canvas
// -------------------------------------------------------------
function initMatrixCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const chars = '01ABCDEF#%&*<>{}[]=+/\\';
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(5, 8, 17, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#06b6d4';
    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 45);
}

// -------------------------------------------------------------
// 2. Real-time SOC Clock & Telemetry Bar
// -------------------------------------------------------------
function initLiveClock() {
  const clockEl = document.getElementById('soc-clock');
  const pingEl = document.getElementById('soc-ping');

  function updateTime() {
    const now = new Date();
    const utcString = now.toUTCString().split(' ')[4] + ' UTC';
    const istString = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST';
    if (clockEl) {
      clockEl.textContent = `${istString} // ${utcString}`;
    }
  }

  // Simulate subtle ping variations
  setInterval(() => {
    if (pingEl) {
      const ping = Math.floor(12 + Math.random() * 8);
      pingEl.textContent = `${ping}ms`;
    }
  }, 4000);

  updateTime();
  setInterval(updateTime, 1000);
}

// -------------------------------------------------------------
// 3. Hero Stats Rendering
// -------------------------------------------------------------
function renderHeroStats() {
  const container = document.getElementById('hero-stats-grid');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(stat => `
    <div class="cyber-card p-4 rounded-xl border border-sky-500/20 text-left group">
      <div class="flex items-baseline justify-between mb-1">
        <span class="text-3xl font-bold font-mono text-cyan-400 group-hover:text-emerald-400 transition-colors">
          ${stat.value}
        </span>
        <span class="text-xs font-mono text-slate-500 uppercase tracking-widest">METRIC</span>
      </div>
      <p class="text-sm font-semibold text-slate-200">${stat.label}</p>
      <p class="text-xs text-slate-400 mt-0.5">${stat.detail}</p>
    </div>
  `).join('');
}

// -------------------------------------------------------------
// 4. Skills Matrix & Search Filter
// -------------------------------------------------------------
let currentSkillCategory = 'all';
let skillSearchQuery = '';

function renderSkillsSection() {
  const categoriesNav = document.getElementById('skills-category-tabs');
  const skillsGrid = document.getElementById('skills-grid');
  const searchInput = document.getElementById('skill-search-input');

  if (!categoriesNav || !skillsGrid) return;

  // Category Tabs
  const categories = [
    { id: 'all', name: 'All Domains' },
    ...portfolioData.skillCategories.map(c => ({ id: c.id, name: c.name }))
  ];

  categoriesNav.innerHTML = categories.map(cat => `
    <button 
      class="px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all border ${
        currentSkillCategory === cat.id 
          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/30' 
          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
      }"
      data-category="${cat.id}"
    >
      ${cat.name}
    </button>
  `).join('');

  categoriesNav.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentSkillCategory = e.currentTarget.getAttribute('data-category');
      renderSkillsSection();
    });
  });

  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = 'true';
    searchInput.addEventListener('input', (e) => {
      skillSearchQuery = e.target.value.toLowerCase().trim();
      filterAndDisplaySkills();
    });
  }

  filterAndDisplaySkills();
}

function filterAndDisplaySkills() {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;

  let filteredCategories = portfolioData.skillCategories;
  if (currentSkillCategory !== 'all') {
    filteredCategories = filteredCategories.filter(c => c.id === currentSkillCategory);
  }

  let html = '';

  filteredCategories.forEach(cat => {
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(skillSearchQuery) || 
      s.tag.toLowerCase().includes(skillSearchQuery) ||
      cat.name.toLowerCase().includes(skillSearchQuery)
    );

    if (matchingSkills.length > 0) {
      html += `
        <div class="cyber-card p-5 rounded-xl border border-slate-800">
          <div class="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
            <div class="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <i data-lucide="${cat.icon || 'shield'}" class="w-5 h-5"></i>
            </div>
            <div>
              <h4 class="text-base font-semibold text-slate-100">${cat.name}</h4>
              <p class="text-xs text-slate-400 font-mono">${matchingSkills.length} Verified Competencies</p>
            </div>
          </div>
          <div class="space-y-3">
            ${matchingSkills.map(s => `
              <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/60 hover:border-cyan-500/30 transition-all gap-2">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${
                    s.level === 'Advanced' ? 'bg-emerald-400 pulse-emerald' :
                    s.level === 'Proficient' ? 'bg-cyan-400' : 'bg-amber-400'
                  }"></span>
                  <span class="font-medium text-slate-200 text-sm">${s.name}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge-pill text-[11px]">${s.tag}</span>
                  <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">${s.level}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  if (!html) {
    skillsGrid.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-400">
        <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 text-slate-600"></i>
        <p class="font-mono text-sm">No skills matching "${skillSearchQuery}" found in this category.</p>
      </div>
    `;
  } else {
    skillsGrid.innerHTML = html;
  }

  initLucide();
}

// -------------------------------------------------------------
// 5. Experience Section with Expandable Incident Case Studies
// -------------------------------------------------------------
function renderExperienceSection() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map((exp, idx) => `
    <div class="relative pl-8 pb-10 border-l border-cyan-500/20 last:border-l-transparent group">
      <!-- Timeline Node -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-emerald-400 transition-all"></div>

      <div class="cyber-card p-6 rounded-xl border border-slate-800">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="text-lg font-bold text-slate-100">${exp.role}</h3>
              <span class="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ${exp.status || 'Verified Experience'}
              </span>
            </div>
            <p class="text-sm font-medium text-cyan-400 mt-0.5">
              ${exp.organization} <span class="text-slate-500">•</span> <span class="text-slate-400">${exp.location}</span>
            </p>
          </div>
          <span class="text-xs font-mono text-slate-400 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
            ${exp.period}
          </span>
        </div>

        <p class="text-xs text-slate-400 font-mono mb-4 pb-2 border-b border-slate-800/80">
          TYPE: ${exp.type}
        </p>

        <!-- Highlights List -->
        <ul class="space-y-2 mb-5">
          ${exp.highlights.map(h => `
            <li class="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
              <i data-lucide="shield-alert" class="w-4 h-4 text-cyan-400 shrink-0 mt-1"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <!-- Case Study Expandable Card -->
        ${exp.caseStudy ? `
          <div class="mt-4 pt-4 border-t border-slate-800">
            <button 
              class="w-full flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-500/40 text-left transition-all group/cs"
              onclick="toggleCaseStudy('${exp.id}')"
            >
              <div class="flex items-center gap-2.5">
                <i data-lucide="file-warning" class="w-4 h-4 text-amber-400"></i>
                <span class="text-xs font-mono text-cyan-300 font-semibold group-hover/cs:text-cyan-200">
                  INCIDENT DOSSIER: ${exp.caseStudy.title}
                </span>
              </div>
              <i data-lucide="chevron-down" id="chevron-${exp.id}" class="w-4 h-4 text-slate-400 transition-transform"></i>
            </button>

            <div id="case-study-${exp.id}" class="hidden mt-3 p-4 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-mono space-y-2.5">
              <div class="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                <span>TECHNIQUE: <span class="text-amber-400 font-bold">${exp.caseStudy.technique}</span></span>
                <span>TOOLS: ${exp.caseStudy.toolsUsed.join(', ')}</span>
              </div>
              <ul class="space-y-1.5 text-slate-300 pt-1">
                ${exp.caseStudy.details.map(d => `
                  <li class="flex items-start gap-2">
                    <span class="text-cyan-400 select-none">></span>
                    <span>${d}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        ` : ''}

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 mt-5">
          ${exp.tags.map(tag => `
            <span class="badge-pill">${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

window.toggleCaseStudy = function(id) {
  const dossier = document.getElementById(`case-study-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  if (!dossier) return;

  const isHidden = dossier.classList.contains('hidden');
  if (isHidden) {
    dossier.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  } else {
    dossier.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
};

// -------------------------------------------------------------
// 6. Projects Section & Filtering
// -------------------------------------------------------------
let currentProjectCategory = 'all';

function renderProjectsSection() {
  const filterContainer = document.getElementById('projects-filter-tabs');
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'siem', label: 'SIEM & SOC Pipeline' },
    { id: 'network', label: 'Network & ICS Security' },
    { id: 'ai-threat', label: 'AI & Threat Response' }
  ];

  if (filterContainer) {
    filterContainer.innerHTML = filters.map(f => `
      <button 
        class="px-4 py-1.5 text-xs font-mono rounded-lg transition-all border ${
          currentProjectCategory === f.id
            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm shadow-cyan-500/20'
            : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
        }"
        data-filter="${f.id}"
      >
        ${f.label}
      </button>
    `).join('');

    filterContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentProjectCategory = e.currentTarget.getAttribute('data-filter');
        renderProjectsSection();
      });
    });
  }

  const filteredProjects = currentProjectCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === currentProjectCategory);

  projectsGrid.innerHTML = filteredProjects.map(proj => `
    <div class="cyber-card rounded-2xl border border-slate-800 p-6 flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            ${proj.categoryLabel}
          </span>
          <span class="text-xs font-mono text-slate-400">
            ${proj.scope}
          </span>
        </div>

        <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
          ${proj.title}
        </h3>
        
        <p class="text-xs font-mono text-emerald-400 mb-3">
          ROLE: ${proj.role}
        </p>

        <p class="text-sm text-slate-300 mb-5 leading-relaxed">
          ${proj.summary}
        </p>

        <!-- Architecture Breakdown -->
        <div class="mb-5 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <p class="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2.5 font-semibold flex items-center gap-1.5">
            <i data-lucide="cpu" class="w-3.5 h-3.5"></i>
            Architectural Highlights
          </p>
          <div class="space-y-2 text-xs text-slate-300">
            ${proj.architecture.map(arch => `
              <div class="flex items-start gap-2">
                <span class="text-cyan-400 font-mono font-bold select-none">•</span>
                <div>
                  <span class="font-semibold text-slate-200">${arch.component}:</span>
                  <span class="text-slate-400"> ${arch.role}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div>
        <!-- Telemetry Metric Pill -->
        <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 mb-4 flex items-center gap-2">
          <i data-lucide="activity" class="w-3.5 h-3.5 text-cyan-400"></i>
          <span>${proj.metrics}</span>
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5">
          ${proj.techStack.map(tech => `
            <span class="badge-pill text-[11px]">${tech}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  initLucide();
}

// -------------------------------------------------------------
// 7. Certifications Showcase
// -------------------------------------------------------------
function renderCertificationsSection() {
  const grid = document.getElementById('certifications-grid');
  if (!grid) return;

  grid.innerHTML = portfolioData.certifications.map(cert => `
    <div class="cyber-card p-5 rounded-xl border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
            <i data-lucide="${cert.icon || 'shield-check'}" class="w-5 h-5"></i>
          </div>
          <span class="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
            ${cert.date}
          </span>
        </div>

        <h4 class="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
          ${cert.title}
        </h4>
        <p class="text-xs font-mono text-cyan-400 mb-3">
          ${cert.issuer} <span class="text-slate-600">•</span> ${cert.category}
        </p>

        <p class="text-xs text-slate-300 leading-relaxed mb-4">
          ${cert.highlight}
        </p>
      </div>

      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span class="text-[11px] text-slate-500">${cert.badgeCode}</span>
        <span class="text-emerald-400 flex items-center gap-1 font-semibold">
          <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Verified
        </span>
      </div>
    </div>
  `).join('');

  initLucide();
}

// -------------------------------------------------------------
// 8. Education Section
// -------------------------------------------------------------
function renderEducationSection() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="cyber-card p-6 rounded-xl border border-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          ${edu.tag}
        </span>
        <span class="text-xs font-mono text-slate-400">
          ${edu.period}
        </span>
      </div>

      <h4 class="text-lg font-bold text-slate-100 mb-1">${edu.degree}</h4>
      <p class="text-sm font-medium text-cyan-400 mb-3">
        ${edu.institution} <span class="text-slate-500">•</span> <span class="text-slate-400">${edu.location}</span>
      </p>

      <p class="text-xs text-slate-300 leading-relaxed font-sans">
        ${edu.details}
      </p>
    </div>
  `).join('');

  initLucide();
}

// -------------------------------------------------------------
// 9. Interactive SOC Terminal Window
// -------------------------------------------------------------
function initTerminal() {
  const terminalModal = document.getElementById('terminal-dialog');
  const openButtons = document.querySelectorAll('.open-terminal-btn');
  const closeBtn = document.getElementById('close-terminal-btn');
  const terminalInput = document.getElementById('terminal-cli-input');
  const terminalLogs = document.getElementById('terminal-logs');
  const chips = document.querySelectorAll('.terminal-cmd-chip');

  if (!terminalModal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      terminalModal.showModal();
      if (terminalInput) terminalInput.focus();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      terminalModal.close();
    });
  }

  // Keyboard shortcut: `~` or `Ctrl + K`
  window.addEventListener('keydown', (e) => {
    if ((e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) || (e.ctrlKey && e.key === 'k')) {
      e.preventDefault();
      if (terminalModal.open) {
        terminalModal.close();
      } else {
        terminalModal.showModal();
        if (terminalInput) terminalInput.focus();
      }
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  const commandHistory = [];
  let historyIdx = -1;

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim();
        if (cmd) {
          commandHistory.push(cmd);
          historyIdx = commandHistory.length;
          executeCommand(cmd);
          terminalInput.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (historyIdx > 0) {
          historyIdx--;
          terminalInput.value = commandHistory[historyIdx] || '';
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIdx < commandHistory.length - 1) {
          historyIdx++;
          terminalInput.value = commandHistory[historyIdx] || '';
        } else {
          historyIdx = commandHistory.length;
          terminalInput.value = '';
        }
      }
    });
  }

  function executeCommand(rawCmd) {
    if (!terminalLogs) return;
    const cmd = rawCmd.toLowerCase().trim();

    // Log prompt echo
    const echoEl = document.createElement('div');
    echoEl.className = 'text-cyan-400 font-mono text-xs flex items-center gap-2 mt-2';
    echoEl.innerHTML = `<span class="text-slate-500">ritesh@soc-console:~$</span> <span>${rawCmd}</span>`;
    terminalLogs.appendChild(echoEl);

    const outEl = document.createElement('div');
    outEl.className = 'text-slate-300 font-mono text-xs pl-4 border-l-2 border-slate-800 my-1 space-y-1';

    switch (cmd) {
      case 'help':
        outEl.innerHTML = `
          <div class="text-emerald-400 font-semibold mb-1">AVAILABLE SOC COMMANDS:</div>
          <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
            <div><span class="text-cyan-400">whoami</span> - Identity & Specialization</div>
            <div><span class="text-cyan-400">bio</span> - Professional Summary</div>
            <div><span class="text-cyan-400">triage</span> - Live MITRE T1110 Incident Dossier</div>
            <div><span class="text-cyan-400">skills</span> - Full Core Security Skills Matrix</div>
            <div><span class="text-cyan-400">experience</span> - SOC & Internship Timeline</div>
            <div><span class="text-cyan-400">projects</span> - Deployed Security Architectures</div>
            <div><span class="text-cyan-400">certs</span> - Verified Credentials & Badges</div>
            <div><span class="text-cyan-400">contact</span> - Phone, Email, LinkedIn, GitHub</div>
            <div><span class="text-cyan-400">resume</span> - Print/Save Printable Resume</div>
            <div><span class="text-cyan-400">clear</span> - Flush Terminal Buffer</div>
          </div>
        `;
        break;

      case 'whoami':
        outEl.innerHTML = `
          <div class="text-emerald-400 font-bold">RITESH PAUL</div>
          <div>Role: Cybersecurity Analyst | SOC Operations | Incident Response</div>
          <div>Location: Bangalore, India</div>
          <div>Status: Open to Full-Time & Internship SOC Roles</div>
        `;
        break;

      case 'bio':
        outEl.textContent = portfolioData.personal.bio;
        break;

      case 'triage':
        outEl.innerHTML = `
          <div class="text-amber-400 font-bold border-b border-amber-500/30 pb-1 mb-1">
            [ALERT CONFIRMED] MITRE ATT&CK T1110 (Brute Force)
          </div>
          <div>• Sensor: ArcSight SIEM Correlation Engine (Government CSOC)</div>
          <div>• Attack Vector: High-frequency authentication failure cluster</div>
          <div>• IOC Correlation: AbuseIPDB (100% confidence) + VirusTotal reputation</div>
          <div>• Action Taken: Senior Analyst Escalation & ITMS Containment Ticket Filed</div>
          <div class="text-emerald-400">• Outcome: Perimeter IP block implemented; zero lateral breach.</div>
        `;
        break;

      case 'skills':
        outEl.innerHTML = `
          <div class="text-cyan-400 font-semibold">CORE CAPABILITIES:</div>
          <div>• SIEM: ArcSight (Advanced), Suricata IDS (Proficient), Splunk, Filebeat</div>
          <div>• Threat Intel: MITRE ATT&CK, VirusTotal, AbuseIPDB, AlienVault OTX, IOC Triage</div>
          <div>• Network Sec: Firewalls, VLANs, DMZ, Nmap, Cisco Packet Tracer</div>
          <div>• Cloud & Code: Python, Azure VMs, AES-256 Crypto, OWASP Top 10</div>
        `;
        break;

      case 'experience':
        outEl.innerHTML = portfolioData.experience.map(e => `
          <div><span class="text-cyan-400">${e.period}:</span> ${e.role} @ ${e.organization}</div>
        `).join('');
        break;

      case 'projects':
        outEl.innerHTML = portfolioData.projects.map(p => `
          <div><span class="text-emerald-400 font-semibold">${p.title}</span> (${p.scope})</div>
          <div class="text-slate-400 text-[11px] pl-3">Tech: ${p.techStack.join(', ')}</div>
        `).join('');
        break;

      case 'certs':
        outEl.innerHTML = portfolioData.certifications.map(c => `
          <div>• <span class="text-cyan-300 font-semibold">${c.title}</span> - ${c.issuer} (${c.date})</div>
        `).join('');
        break;

      case 'contact':
        outEl.innerHTML = `
          <div>Email: <a href="mailto:${portfolioData.personal.email}" class="text-cyan-400 underline">${portfolioData.personal.email}</a></div>
          <div>Phone: <span class="text-emerald-400">${portfolioData.personal.phone}</span></div>
          <div>LinkedIn: <a href="${portfolioData.personal.linkedin}" target="_blank" class="text-cyan-400 underline">${portfolioData.personal.linkedin}</a></div>
          <div>GitHub: <a href="${portfolioData.personal.github}" target="_blank" class="text-cyan-400 underline">${portfolioData.personal.github}</a></div>
        `;
        break;

      case 'resume':
        outEl.innerHTML = `<div class="text-emerald-400">Triggering printable resume layout...</div>`;
        setTimeout(() => window.print(), 300);
        break;

      case 'clear':
        terminalLogs.innerHTML = '';
        return;

      default:
        outEl.innerHTML = `<span class="text-rose-400">Command not recognized: '${rawCmd}'. Type <span class="text-cyan-300 font-semibold">help</span> for command list.</span>`;
        break;
    }

    terminalLogs.appendChild(outEl);
    terminalLogs.scrollTop = terminalLogs.scrollHeight;
  }
}

// -------------------------------------------------------------
// 10. Contact Actions, Clipboard & Toast
// -------------------------------------------------------------
function initContactActions() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const contactForm = document.getElementById('quick-contact-form');
  const templateSelect = document.getElementById('contact-template-select');
  const messageArea = document.getElementById('contact-message');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard(portfolioData.personal.email, 'Email address copied to clipboard!');
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard(portfolioData.personal.phone, 'Phone number copied to clipboard!');
    });
  }

  // Quick message template switcher
  if (templateSelect && messageArea) {
    templateSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'interview') {
        messageArea.value = `Hi Ritesh,\n\nWe reviewed your experience with ArcSight SIEM monitoring, threat intelligence triage, and your government CSOC internship. We would like to invite you for an interview regarding a Cybersecurity Analyst role.`;
      } else if (val === 'soc-role') {
        messageArea.value = `Hi Ritesh,\n\nWe have an opening in our Security Operations Center for an Incident Response / SOC Analyst position and would love to connect.`;
      } else if (val === 'general') {
        messageArea.value = `Hi Ritesh,\n\nI was impressed by your multi-VM Suricata detection pipeline and would like to discuss potential collaboration or opportunities.`;
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Portfolio Inquiry: ${templateSelect ? templateSelect.value : 'General'}`);
      const body = encodeURIComponent(messageArea ? messageArea.value : '');
      window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
      showToast('Opening your email client to send message...');
    });
  }
}

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    // Fallback
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast(msg);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// -------------------------------------------------------------
// 11. Mobile Navigation Toggle
// -------------------------------------------------------------
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}
