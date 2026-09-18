# DevOps AI — Autonomous Desktop Control Plane for Linux Infrastructure

Stop babysitting your servers. DevOps AI monitors your entire VPS fleet in real time, autonomously detects and resolves production incidents, orchestrates Docker, manages Nginx SSL, and executes zero-downtime blue/green deployments — all from your desktop.

Local-first. No agents. No cloud sync. Available for Windows, macOS, and Linux. Free during Public Beta.

<p align="center">
  <a href="https://drive.google.com/file/d/1TLD8nOrt3c3l3J52kZ3ZAcbk2-EgHobF/view?usp=sharing"><img src="https://img.shields.io/badge/Download-Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Download for Windows"></a>
  <a href="https://drive.google.com/file/d/1FasxCYfAqauVtSRsnj2_xT1pW40WVz89/view?usp=sharing"><img src="https://img.shields.io/badge/Download-macOS-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download for macOS"></a>
  <img src="https://img.shields.io/badge/Linux-Coming_Soon-lightgrey?style=for-the-badge&logo=linux&logoColor=white" alt="Linux Coming Soon">
</p>

<p align="center">
  <a href="https://piashcse.github.io/devops-ai-site/"><img src="https://img.shields.io/badge/🌐_Explore_Live_Website-piashcse.github.io%2Fdevops--ai--site-4F46E5?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Explore Live Website"></a>
</p>

## Light Mode Preview

![DevOps AI Desktop - Live Telemetry and Diagnostics (Light Mode)](assets/app-showcase-light.png)

## Features

- **Autonomous SRE & Self-Healing** — Detects OOM events, Nginx 502/504s, and daemon crashes. Executes risk-gated playbooks: disk cleanup, pagecache flush, container restarts.
- **Security Posture & Linux Hardening** — Weighted 6-category audit (SSH, UFW, TLS, Docker, packages, secrets) with 1-click hardening, Fail2ban, and HSTS.
- **Zero-Downtime Blue/Green CI/CD** — Dual slots (`app-blue` / `app-green`), 3× HTTP health probes, atomic Nginx reload with zero dropped connections. Git + HMAC webhooks.
- **Docker Fleet & Container Orchestration** — Live CPU/RAM meters, real-time log streaming, 1-click start/stop/restart/kill, image pruning and build-cache cleanup.
- **Nginx Reverse Proxy & SSL Automation** — GUI virtual hosts, proxy pass, WebSocket, caching, Certbot Let's Encrypt issuance with `nginx -t` pre-flight checks.
- **Database Provisioning & Disaster Recovery** — 1-click Postgres/MySQL, scheduled compressed dumps, offsite sync to S3 / R2 / B2, retention pruning, 1-click restore.
- **Live Telemetry & Fleet Monitoring** — CPU, RAM, disk, network sparklines, load average, swap, uptime, systemd manager, 5-minute fleet reachability checks.
- **Interactive Terminal & SFTP File Manager** — Full PTY shell, breadcrumb SFTP browser, in-app text editor with remote save, DevOps snippets catalog.
- **Multi-Env Secrets Vault & .env Manager** — Production / Staging / Preview scopes, AES-256-GCM encryption, masking, bulk `.env` import, versioned history with rollback.
- **Network Intelligence & Topology** — Internet → DNS → Nginx → Docker → DB hop view, UFW rule editor, TCP/HTTP/DNS diagnostics, NAT and port discovery.
- **Health Probes & Incident Response** — HTTP/HTTPS/TCP checks, latency histograms, uptime %, SSL expiry alerts, risk-classified incident log.
- **Automation Scheduler & Cron Manager** — Visual 5-field crontab editor with presets, manual triggers, stdout/stderr history, AI Copilot for natural-language automation.

## How It Works

1. **Download the desktop app** — Single native installer for Windows, macOS, and Linux.
2. **Connect via SSH key** — Enter server IP and private key. Encrypted locally with AES-256-GCM, never leaves your machine.
3. **Instant control** — AI auto-discovers containers, Nginx proxies, firewall rules, and telemetry in seconds.

100% local-first: credentials and SSH keys stay on your device. Zero cloud accounts, telemetry, or trackers.

## Developer

<div align="center">

### Mehedi Hassan Piash
**Founder & Lead Engineer, PLabs**

Local-first security · Autonomous SRE · Production Linux ops

[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?logo=x&logoColor=white&style=for-the-badge)](https://twitter.com/piashcse)
[![Medium](https://img.shields.io/badge/-Medium-00AB6C?logo=medium&logoColor=white&style=for-the-badge)](https://medium.com/@piashcse)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077B5?logo=linkedin&logoColor=white&style=for-the-badge)](https://www.linkedin.com/in/piashcse/)
[![Web](https://img.shields.io/badge/-Web-0073E6?logo=appveyor&logoColor=white&style=for-the-badge)](https://piashcse.github.io/)
[![Blog](https://img.shields.io/badge/-Blog-0077B5?logo=readme&logoColor=white&style=for-the-badge)](https://piashcse.blogspot.com)

*Direct line to the person shipping DevOps AI — no support queue, no middlemen.*

</div>

## Contact

<div align="center">

**Direct line to the builder — beta help, feedback & bug reports. Response within 24h during Public Beta.**

<br>

<a href="mailto:piash599@gmail.com"><img src="https://img.shields.io/badge/Email-piash599@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email piash599@gmail.com"></a>
<a href="https://github.com/piashcse"><img src="https://img.shields.io/badge/GitHub-Report_an_Issue-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub piashcse"></a>

</div>

© 2026 PLabs. All rights reserved.
