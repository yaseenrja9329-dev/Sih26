# Sih26
Creation of an app  for the people's with alziemer 
new
# 🧠 CogniCare NER — AI Cognitive Gaming & Memory Assistance Platform

**SIH 2026 | Ministry of Development of North Eastern Region (MDoNER)**

An offline-first, multilingual, AI-adaptive cognitive stimulation and memory-assistance platform for elderly dementia patients in India's North Eastern Region, with a caregiver monitoring layer for remote family and health workers.

> ⚠️ **Non-diagnostic tool.** This platform supports cognitive engagement and flags performance trends for caregiver awareness. It does not diagnose dementia or any medical condition.

---

## 📌 Problem Statement Summary

Elderly people in remote NER districts often have no access to neurologists, cognitive therapists, or structured mental stimulation, and no reliable connectivity for cloud-only apps. Families — frequently living elsewhere — have no way to notice gradual cognitive decline until a crisis occurs. This platform provides culturally-relevant cognitive games, voice-guided multilingual interaction, medicine/routine reminders, and a caregiver dashboard — all working fully offline with sync when connectivity is available.

---

## 🏗️ System Architecture (high level)

```
┌─────────────────────┐        ┌──────────────────────┐
│   Patient Mobile App │◄──────►│   Local Offline DB    │
│ (games, voice, UI)   │        │ (SQLite/Realm/etc.)   │
└──────────┬───────────┘        └───────────┬──────────┘
           │  sync queue (on connectivity)   │
           ▼                                 ▼
   ┌───────────────────────────────────────────────┐
   │              Backend (API + Sync)              │
   │   Auth · Patients · Sessions · Reminders        │
   └───────┬───────────────────────┬────────────────┘
           │                       │
           ▼                       ▼
 ┌─────────────────────┐   ┌─────────────────────────┐
 │  AI/ML Cognitive      │   │   Caregiver Dashboard    │
 │  Engine (adaptive     │   │ (trends, alerts, links)  │
 │  difficulty, trends)  │   └─────────────────────────┘
 └─────────────────────┘

 Voice/Language layer (Bhashini ASR/TTS/Translation +
 local content packs) plugs into the Patient App and
 Reminder system across the stack.
```

---

## 🧩 Tech Stack

| Layer | Choice (edit to match your team's decision) |
|---|---|
| Mobile App | React Native / Flutter |
| Local Storage | SQLite / Realm / WatermelonDB |
| Backend | Node.js + Express, or Firebase/Supabase |
| Database | PostgreSQL / Firestore |
| AI/ML | Rule-based adaptive engine (Python/JS) — optional scikit-learn model |
| Voice & Language | Bhashini APIs (ASR, TTS, Translation) + local content packs |
| Caregiver Dashboard | React + charting library (Recharts/Chart.js) |
| Auth | Token-based auth, role-based access (patient vs. caregiver) |

---

## 📁 Repo Structure

```
/patient-app          → Mobile app (games, voice, reminders, offline storage)
/backend              → APIs, database models, sync endpoints, analytics
/ai-engine            → Adaptive difficulty logic, trend detection
/caregiver-dashboard  → Web dashboard for caregivers
/voice-content-packs  → Per-language content: strings, audio refs, cultural assets
/docs                 → Architecture diagrams, research notes, pitch deck
/roles                → Per-role README checklists (see below)
```

---

## 👥 Team Roles

Each role has its own detailed README with a learning list and task checklist:

| # | Role | README |
|---|---|---|
| 1 | Product + System Architect | `/roles/01_Product_System_Architect_README.md` |
| 2 | Patient App + UX | `/roles/02_Patient_App_UX_README.md` |
| 3 | AI/ML + Cognitive Engine | `/roles/03_AI_ML_Cognitive_Engine_README.md` |
| 4 | Backend + Data | `/roles/04_Backend_Data_README.md` |
| 5 | Offline + Voice + Security | `/roles/05_Offline_Voice_Security_README.md` |
| 6 | Caregiver Platform + Research | `/roles/06_Caregiver_Platform_Research_README.md` |

---

## 🎯 MVP Scope (what we're actually building for the hackathon)

- [ ] 3 cognitive games: memory match, daily-routine recall, pattern recognition — with adaptive difficulty
- [ ] Voice guidance in English + at least 1 Bhashini-supported NER language (Assamese / Bodo / Manipuri)
- [ ] Full offline play with background sync on reconnect
- [ ] Medicine / hydration / appointment reminders (visual + voice)
- [ ] Caregiver dashboard: trend view + plain-language alerts + consent-based linking
- [ ] Non-diagnostic disclaimer visible in-app

**Explicitly out of scope for the hackathon:** clinical validation/diagnosis claims, full 22-language coverage, production-grade security hardening, support for non-scheduled minority languages beyond a demoed content-pack stub.

---

## 🚀 Getting Started

```bash
# clone the repo
git clone <repo-url>
cd cognicare-ner

# install dependencies per module (adjust to actual stack chosen)
cd patient-app && npm install
cd ../backend && npm install
cd ../caregiver-dashboard && npm install
```

Environment variables and API keys (Bhashini, backend DB connection, etc.) go in a local `.env` file per module — **never commit real keys**. See `/docs` for the `.env.example` templates once created.

---

## 🌿 Branching & Workflow

- `main` — always demo-ready
- `dev` — integration branch
- `feature/<role>-<short-desc>` — individual work, PR into `dev`
- Daily 10-min sync (owned by Product/System Architect) to catch integration blockers early

---

## 📚 Key References

- NIMHANS iCARE / Caregiver-Driven Cognitive Training (CDCT) model — domain grounding for game task design
- Bhashini (bhashini.gov.in) — ASR / TTS / Machine Translation APIs for scheduled Indian languages
- Competitor references: Lumosity, MindMate — see `/docs` for full competitor analysis

---

## ⚖️ Data & Privacy Note

Patient data is treated as sensitive personal data under India's DPDP Act. Access is consent-gated (caregiver must be explicitly linked/approved), stored with encryption at rest where feasible, and no data is shared beyond the linked caregiver and patient without explicit consent.