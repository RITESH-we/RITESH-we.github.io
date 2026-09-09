# Ritesh Paul - Cybersecurity Analyst & SOC Portfolio

A dynamic, high-performance personal portfolio built for **Ritesh Paul**, tailored specifically for **Cybersecurity & SOC Analyst roles** (ArcSight SIEM, Suricata IDS, MITRE ATT&CK T1110, Threat Intelligence).

---

## Features
- **Live SOC Telemetry Bar**: DEFCON status indicator, active sensor metrics, real-time UTC/IST dual clocks, and latency simulation.
- **Interactive SOC Terminal (`>_ CLI`)**: Realistic terminal console (`help`, `whoami`, `triage`, `skills`, `projects`, `certs`, `contact`, `clear`). Press `~` or `Ctrl + K` anytime.
- **Incident Investigation Dossier**: Interactive breakdown of the confirmed brute-force attack (MITRE ATT&CK T1110) handled during the Government CSOC internship at OCAC Tower.
- **Dynamic Data Source (`data/portfolioData.js`)**: All bio, skills, metrics, projects, and certifications are centralized in one file. Update your data in seconds without touching HTML or CSS.
- **Instant Search & Categorized Skills**: Real-time filtering across SIEM & Detection, Threat Intel, Incident Response, Network Security, and Cloud.
- **One-Click Contact**: Copy email & phone to clipboard with toast notification, direct links to LinkedIn & GitHub.
- **One-Click Print / PDF Resume**: Formatted for clean printing or saving to PDF via the browser.

---

## How to Run Locally

### Option 1: Double Click
Simply double click `launch_portfolio.bat` in this folder. It will start a local server and open your default browser to `http://localhost:3000`.

### Option 2: Python Command
Open terminal in this directory and run:
```bash
python preview_server.py
```
or
```bash
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Deploy (Free Hosting)

### Deploy to GitHub Pages (Recommended)
1. Push this folder to your GitHub repository `github.com/RITESH-we/ritesh-we.github.io` (or a `portfolio` repo).
2. In GitHub, go to **Settings > Pages > Branch: main / root > Save**.
3. Your portfolio is instantly live worldwide!

### Deploy to Vercel or Netlify
1. Drag and drop this folder into the [Netlify Drop](https://app.netlify.com/drop) dashboard, or connect via GitHub on Vercel.
2. No build step or build command required — it works out of the box!
