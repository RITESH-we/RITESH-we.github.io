export const portfolioData = {
  personal: {
    name: "Ritesh Paul",
    title: "Cybersecurity Analyst",
    subtitle: "SOC Operations | Incident Response | SIEM Monitoring",
    location: "Bangalore, India",
    email: "riteshpaul262@gmail.com",
    phone: "+91 95472 44315",
    github: "https://github.com/RITESH-we",
    githubUser: "RITESH-we",
    linkedin: "https://linkedin.com/in/riteshpaul262",
    linkedinUser: "riteshpaul262",
    tryhackme: "https://tryhackme.com/p/riteshpaul262",
    linktree: "https://linktr.ee/riteshpaul",
    status: "Open to SOC Analyst & Cybersecurity Opportunities",
    availability: "Available for Full-time & Internship Roles",
    bio: "Cybersecurity Analyst and SOC Analyst fresher with hands-on government SOC internship experience in SIEM monitoring (ArcSight), incident response, IOC analysis, and alert triage. Experienced with threat intelligence tools (VirusTotal, AbuseIPDB, AlienVault OTX), MITRE ATT&CK framework, Azure cloud infrastructure, and Python. Pursuing B.Tech in Cybersecurity & Cyber Defense (graduating 2027)."
  },

  stats: [
    { label: "Live Alerts Triaged Daily", value: "50+", detail: "Government CSOC Engagement" },
    { label: "SOC Detection Signatures", value: "15+", detail: "Suricata OWASP Top 10" },
    { label: "MITRE ATT&CK Case Studies", value: "T1110", detail: "Live Brute Force Escalation" },
    { label: "Industry Certifications", value: "6", detail: "Cisco, Google, Red Hat, OPSWAT" }
  ],

  socMetrics: {
    systemStatus: "DEFCON 4 // NORMAL OPERATING STATUS",
    siemEngine: "Micro Focus ArcSight + Suricata IDS",
    threatFeedStatus: "ACTIVE (VirusTotal / AbuseIPDB / AlienVault OTX)",
    activeSensors: "VM-1 (Sensor Layer) + Filebeat Shipper",
    mitreTechniqueInScope: "T1110 (Brute Force) & OWASP Top 10"
  },

  skillCategories: [
    {
      id: "siem",
      name: "SIEM & Detection",
      icon: "shield-alert",
      skills: [
        { name: "ArcSight SIEM", level: "Advanced", tag: "Primary SOC Platform" },
        { name: "Suricata IDS", level: "Proficient", tag: "AF-PACKET & EVE JSON" },
        { name: "Splunk", level: "Familiar", tag: "Log Search & Dashboards" },
        { name: "Filebeat", level: "Proficient", tag: "Log Shipping & Parsing" },
        { name: "Redis", level: "Intermediate", tag: "Message Queueing" }
      ]
    },
    {
      id: "intel",
      name: "Threat Intelligence",
      icon: "crosshair",
      skills: [
        { name: "MITRE ATT&CK", level: "Advanced", tag: "TTP Mapping & Analysis" },
        { name: "VirusTotal", level: "Proficient", tag: "Hash & File Reputation" },
        { name: "AbuseIPDB", level: "Proficient", tag: "IP Scoring & Blacklists" },
        { name: "AlienVault OTX", level: "Proficient", tag: "Threat Exchange Pulses" },
        { name: "IOC Analysis", level: "Advanced", tag: "Indicator Extraction & Triage" },
        { name: "TTP Mapping", level: "Proficient", tag: "Adversary Profiling" }
      ]
    },
    {
      id: "ir",
      name: "Incident Response",
      icon: "activity",
      skills: [
        { name: "Alert Triage", level: "Advanced", tag: "False-Positive Filtering" },
        { name: "Log Analysis", level: "Advanced", tag: "Auth, Syslog, IDS Telemetry" },
        { name: "Escalation Workflows", level: "Proficient", tag: "Severity & SLA Adherence" },
        { name: "ITMS Ticketing", level: "Proficient", tag: "Incident Lifecycle Tracking" }
      ]
    },
    {
      id: "network",
      name: "Network Security",
      icon: "network",
      skills: [
        { name: "Firewall Design", level: "Proficient", tag: "Stateful Inspection & ACLs" },
        { name: "VLAN Segmentation", level: "Proficient", tag: "Traffic Isolation" },
        { name: "DMZ Architecture", level: "Proficient", tag: "Perimeter Demarcation" },
        { name: "Nmap", level: "Proficient", tag: "Recon & Port Auditing" },
        { name: "Cisco Packet Tracer", level: "Advanced", tag: "Topology Simulation" }
      ]
    },
    {
      id: "cloud-sec",
      name: "Cloud & Security Concepts",
      icon: "cloud",
      skills: [
        { name: "Python", level: "Proficient", tag: "Scripting & Automation" },
        { name: "Microsoft Azure", level: "Intermediate", tag: "VM Provisioning & NSGs" },
        { name: "AWS", level: "Learning", tag: "EC2 & S3 Basics" },
        { name: "AES-256 Encryption", level: "Proficient", tag: "Symmetric Cryptography" },
        { name: "LSB Steganography", level: "Proficient", tag: "Covert Data Channels" },
        { name: "OWASP Top 10", level: "Proficient", tag: "Web Vulnerability Testing" }
      ]
    },
    {
      id: "os",
      name: "Operating Systems",
      icon: "terminal",
      skills: [
        { name: "Kali Linux", level: "Proficient", tag: "Security Tool Suite" },
        { name: "Ubuntu Linux", level: "Advanced", tag: "Sysadmin & Daemons" }
      ]
    }
  ],

  experience: [
    {
      id: "ocac-csoc",
      role: "SOC Analyst Intern",
      organization: "OCAC Tower – CSOC (Government)",
      location: "Bhubaneswar, Odisha",
      period: "Feb 2026 – Mar 2026",
      type: "Government Security Operations Center (45-Day Engagement)",
      badgeColor: "emerald",
      highlights: [
        "Monitored and triaged 50+ live security alerts daily using ArcSight SIEM in a production government Security Operations Center.",
        "Investigated a confirmed brute force attack (MITRE ATT&CK T1110) — performed comprehensive log analysis, enriched IOCs via VirusTotal & AbuseIPDB, managed ITMS tickets, and escalated under senior analyst guidance.",
        "Gained hands-on exposure to SOC workflows, alert prioritization, SLA compliance, and TTP-based escalation in a government network environment."
      ],
      caseStudy: {
        title: "Government CSOC Incident Investigation: MITRE ATT&CK T1110",
        technique: "T1110 — Brute Force (Password Guessing & Spraying)",
        toolsUsed: ["ArcSight SIEM", "AbuseIPDB", "VirusTotal", "ITMS Ticketing"],
        details: [
          "Alert Generation: ArcSight correlation rule triggered on abnormal rate of authentication failures targeting internal gateway services.",
          "IOC Enrichment: Extracted attacker source IP and queried AbuseIPDB (100% confidence score, reported by 45+ security organizations worldwide) and VirusTotal.",
          "Log Cross-Correlation: Traced correlated syslog and firewall events to confirm unauthorized attempts were blocked before compromise.",
          "Ticketing & Containment: Filed high-priority ITMS incident ticket with full threat dossier; recommended permanent IP perimeter drop rule."
        ]
      },
      tags: ["ArcSight SIEM", "Incident Response", "MITRE ATT&CK T1110", "VirusTotal", "AbuseIPDB", "ITMS"]
    },
    {
      id: "edunet",
      role: "Cybersecurity Intern",
      organization: "EDUNET Foundation",
      location: "Remote",
      period: "May 2025 – Jun 2025",
      type: "Applied Cryptography & Security Research",
      badgeColor: "cyan",
      highlights: [
        "Built a steganography-based data-hiding system combining AES-256 military-grade encryption with LSB (Least Significant Bit) steganography to embed data covertly inside PNG/JPG images.",
        "Explored security concepts around covert data embedding and analyzed the system for detectability and extraction risks."
      ],
      caseStudy: {
        title: "Covert Communication & Steganalysis Evaluation",
        technique: "AES-256 Cipher + LSB Spatial Domain Steganography",
        toolsUsed: ["Python", "PyCryptodome", "Pillow / OpenCV", "Steganalysis Tools"],
        details: [
          "Architecture: Symmetric AES-256 in CBC mode with PKCS7 padding before embedding binary ciphertext into image color planes.",
          "Detectability Analysis: Measured Peak Signal-to-Noise Ratio (PSNR > 45 dB) and visual imperceptibility across varied color bit depths.",
          "Security Validation: Assessed brute-force and chi-square statistical resistance against covert message extraction."
        ]
      },
      tags: ["Python", "AES-256", "LSB Steganography", "Data Hiding", "Cryptography"]
    },
    {
      id: "acmegrade",
      role: "Cybersecurity Intern",
      organization: "ACMEGRADE",
      location: "Remote",
      period: "Jan 2024 – Mar 2024",
      type: "Network Reconnaissance & Vulnerability Assessment",
      badgeColor: "indigo",
      highlights: [
        "Performed Nmap-based network reconnaissance and basic vulnerability assessment in a simulated lab to identify open ports and attack surfaces.",
        "Documented findings in structured vulnerability reports with actionable risk ratings and remediation roadmaps."
      ],
      caseStudy: {
        title: "Simulated Lab Perimeter Security Assessment",
        technique: "Network Scanning, Service Fingerprinting & Vulnerability Profiling",
        toolsUsed: ["Nmap", "Wireshark", "Vulnerability Scoring", "Audit Reports"],
        details: [
          "Reconnaissance: Executed TCP SYN (-sS), Version Detection (-sV), and NSE vulnerability scripts against target segments.",
          "Surface Analysis: Uncovered exposed test services, unauthenticated admin interfaces, and legacy SSL/TLS configurations.",
          "Reporting: Generated executive summary and technical remediation guides prioritized by CVSS severity scores."
        ]
      },
      tags: ["Nmap", "Vulnerability Assessment", "Port Scanning", "Attack Surface", "Report Writing"]
    }
  ],

  projects: [
    {
      id: "threat-intel-pipeline",
      title: "Location-Based Threat Intelligence Alert System",
      scope: "Major Project — Sri Sri University",
      category: "siem",
      categoryLabel: "SIEM & SOC Pipeline",
      role: "Team Lead (Team of 5)",
      featured: true,
      summary: "Architected and built a distributed multi-VM SOC pipeline replicating an enterprise production detection-to-dashboard workflow. Owned the sensor layer (VM-1), configuring Suricata IDS with AF-PACKET capture, writing 15 custom detection rules covering OWASP Top 10, and shipping enriched logs via Filebeat.",
      bullets: [
        "Led a team of 5 to architect and build a distributed multi-VM SOC pipeline replicating a production detection-to-dashboard workflow.",
        "Owned VM-1 (sensor layer): deployed and configured Suricata IDS with AF-PACKET capture and EVE JSON logging; wrote 15 custom detection rules covering OWASP Top 10 categories (SQLi, XSS, directory traversal, brute force, port scan).",
        "Configured Filebeat for resilient log shipping with cursor persistence and sensor metadata enrichment; used OWASP Juice Shop as attack target for rule validation."
      ],
      architecture: [
        { component: "Sensor Layer (VM-1)", role: "Suricata IDS running with AF-PACKET live wire capture in passive promiscuous mode." },
        { component: "Rule Engine", role: "15 hand-crafted Suricata signatures targeting SQL injection, cross-site scripting, path traversal, brute force, and stealth scans." },
        { component: "Log Shipper", role: "Filebeat instance monitoring eve.json with cursor persistence, sensor geo-tagging, and buffering." },
        { component: "Validation Target", role: "OWASP Juice Shop deployed inside isolated test segment to generate authentic attack vectors." }
      ],
      techStack: ["Suricata IDS", "AF-PACKET", "EVE JSON", "Filebeat", "OWASP Top 10", "Juice Shop", "Multi-VM Linux", "Bash"],
      metrics: "15 Custom Rules // Multi-VM Pipeline // Real-Time Telemetry"
    },
    {
      id: "oil-gas-architecture",
      title: "Oil & Gas Network Security Architecture",
      scope: "Minor Project — Sri Sri University",
      category: "network",
      categoryLabel: "Industrial & Network Defense",
      role: "Security Architect",
      featured: true,
      summary: "Designed a hardened, secure OT/IT converged network for oil & gas refinery operations in Cisco Packet Tracer with multi-tier stateful firewalls, isolated VLANs, and Demilitarized Zones (DMZ) to isolate OT operational technology assets and prevent lateral threat movement.",
      bullets: [
        "Designed a secure OT/IT network in Cisco Packet Tracer with routers, firewalls, VLANs, and DMZ to isolate OT assets and prevent lateral movement, applying ICS and OWASP security principles.",
        "Enforced strict network micro-segmentation separating SCADA control systems, safety instrumented systems (SIS), engineering consoles, and IT enterprise traffic.",
        "Implemented deep packet filtering access control lists (ACLs) based on ISA/IEC 62443 industrial cybersecurity standards."
      ],
      architecture: [
        { component: "Perimeter & DMZ", role: "Tiered Cisco firewalls creating an isolation buffer between enterprise IT and industrial field networks." },
        { component: "VLAN Segmentation", role: "Distinct VLANs for SCADA Masters, HMI Consoles, Engineering Workstations, and Office IT." },
        { component: "Access Control", role: "Strict bidirectional ACL policies allowing only authenticated, necessary OT telemetry protocols." }
      ],
      techStack: ["Cisco Packet Tracer", "Stateful Firewalls", "VLAN Segmentation", "DMZ Design", "ICS / OT Security", "ACL Policies"],
      metrics: "Industrial Control Defense // ISA/IEC 62443 Principles // OT/IT DMZ Isolation"
    },
    {
      id: "ai-firewall",
      title: "AI-Driven Intelligent Firewall",
      scope: "College Research Project — Sri Sri University",
      category: "ai-threat",
      categoryLabel: "AI & Threat Response",
      role: "Core Contributor",
      featured: true,
      summary: "Proposed an AI-integrated firewall using ML-based behavioral anomaly detection for real-time network traffic analysis, automated threat response, and CVE-based dynamic rule updates.",
      bullets: [
        "Proposed an AI-integrated firewall using ML-based behavioral anomaly detection for real-time traffic analysis, automated threat response, and CVE-based rule updates.",
        "Engineered behavioral feature extraction pipeline parsing flow statistics, packet length distributions, and inter-arrival times.",
        "Formulated autonomous mitigation mechanism to dynamically generate packet filter drops for detected attack clusters."
      ],
      architecture: [
        { component: "Anomaly Engine", role: "Unsupervised machine learning model detecting deviations from baseline enterprise traffic patterns." },
        { component: "CVE Threat Correlator", role: "Dynamic cross-referencing of observed anomaly vectors against newly published CVE databases." },
        { component: "Automated Response", role: "Rule generator creating targeted drop rules within milliseconds of high-confidence anomalies." }
      ],
      techStack: ["Python", "Machine Learning", "Anomaly Detection", "CVE Threat Feeds", "Automated Mitigation", "Network Flow"],
      metrics: "Sub-Second Threat Response // ML Anomaly Detection // Dynamic CVE Correlation"
    }
  ],

  certifications: [
    {
      id: "ccna",
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco",
      date: "Jun 2024",
      category: "Networking & Protocols",
      badgeCode: "CISCO-NET-2024",
      badgeUrl: "https://www.cisco.com",
      icon: "network",
      highlight: "IP addressing, subnetting, switching, routing architecture, and network security fundamentals."
    },
    {
      id: "opswat",
      title: "Introduction to CIP (Critical Infrastructure Protection)",
      issuer: "OPSWAT Academy",
      date: "Jan 2026",
      category: "ICS / SCADA Security",
      badgeCode: "OPSWAT-CIP-2026",
      badgeUrl: "https://www.opswat.com/academy",
      icon: "shield-check",
      highlight: "Critical infrastructure defense, perimeter isolation, OT security standards, and supply-chain protection."
    },
    {
      id: "google-sec",
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "Nov 2023",
      category: "Security Fundamentals",
      badgeCode: "GOOGLE-CYBER-2023",
      badgeUrl: "https://coursera.org/verify/google-cybersecurity",
      icon: "lock",
      highlight: "Core security frameworks, CIA triad, threat modeling, SIEM operations, and compliance practices."
    },
    {
      id: "tata-sim",
      title: "Tata Cybersecurity Analyst Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      category: "Enterprise Simulation",
      badgeCode: "FORAGE-TATA-2025",
      badgeUrl: "https://theforage.com",
      icon: "terminal",
      highlight: "Enterprise SOC simulation, incident impact analysis, identity & access security, and threat reporting."
    },
    {
      id: "mastercard-sim",
      title: "Mastercard Cybersecurity Simulation",
      issuer: "Forage",
      date: "Jan 2025",
      category: "Enterprise Simulation",
      badgeCode: "FORAGE-MC-2025",
      badgeUrl: "https://theforage.com",
      icon: "cpu",
      highlight: "Security awareness, threat vector triage, phishing containment, and breach communication protocols."
    },
    {
      id: "redhat",
      title: "Fundamentals of Red Hat Enterprise Linux",
      issuer: "Red Hat",
      date: "Dec 2023",
      category: "System Administration",
      badgeCode: "RHEL-FUND-2023",
      badgeUrl: "https://www.redhat.com",
      icon: "server",
      highlight: "Linux command-line mastery, user privileges, systemd services, filesystem permissions, and networking."
    }
  ],

  education: [
    {
      degree: "B.Tech – CSE (Cybersecurity & Cyber Defense)",
      institution: "Sri Sri University",
      location: "Cuttack, Odisha",
      period: "Expected Jul 2027",
      status: "In Progress",
      tag: "Undergraduate Degree",
      details: "Specialized coursework: Security Operations Centers (SOC), Network Defense, Cryptography, Ethical Hacking, Cloud Infrastructure, Operating System Internals, and Incident Response methodologies."
    },
    {
      degree: "Higher Secondary (Class XII) – Science",
      institution: "Kendriya Vidyalaya AFS Yelahanka",
      location: "Bangalore, Karnataka",
      period: "2023",
      status: "Completed",
      tag: "Senior Secondary",
      details: "Advanced coursework in Physics, Chemistry, Mathematics, and Computer Science with emphasis on logical reasoning and analytical problem solving."
    }
  ],

  terminalCommands: {
    help: "Available commands: whoami, bio, skills, experience, projects, certs, triage, contact, metrics, clear, resume",
    whoami: "Ritesh Paul - Cybersecurity Analyst | SOC Operations | SIEM (ArcSight) | Incident Response | Bangalore, India",
    bio: "Fresher Cybersecurity Analyst with hands-on government SOC internship experience (OCAC Tower CSOC) triaging 50+ live alerts daily, investigating brute force attacks (T1110), and architecting distributed Suricata IDS detection pipelines.",
    triage: "INCIDENT RECORD #T1110: Brute Force Attack detected on Govt CSOC sensor. Triaged via ArcSight -> IOC enriched via VirusTotal/AbuseIPDB -> Escalated to Level 2 with ITMS ticket. Outcome: Block & Mitigate.",
    contact: "Email: riteshpaul262@gmail.com | Phone: +91 95472 44315 | LinkedIn: /in/riteshpaul262 | GitHub: /RITESH-we",
    metrics: "50+ Alerts/Day | 15+ Custom Suricata Rules | MITRE T1110 Live Investigation | 6 Industry Certifications"
  }
};
