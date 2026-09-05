# 🧩 Role 1: Product + System Architect
**Owns:** Overall system design, integration between all modules, scope control, demo-day orchestration.

You are the glue. Every other role builds a piece; you make sure the pieces actually fit together and the team doesn't over-scope.

---

## 📚 What You Need to Learn
- [ ] System architecture diagramming (C4 model or simple block diagrams — component, data flow, sequence diagrams)
- [ ] API contract design (REST basics: endpoints, request/response shapes, status codes)
- [ ] Offline-first architecture patterns (local-first DB, sync/merge strategies, conflict resolution basics)
- [ ] Mobile app architecture basics (so you can talk to the App/UX and Backend roles in their language)
- [ ] Version control workflow for a multi-person repo (branching strategy, PR reviews, merge conflicts)
- [ ] Basics of India's DPDP Act as it applies to health data (enough to defend architecture choices to judges)
- [ ] Project scoping / MoSCoW prioritization (Must/Should/Could/Won't) — critical for a 12-feature PS

---

## ✅ Task Checklist

### Phase 0 — Scoping (Day 0, before anyone codes)
- [ ] Read the full problem statement and list all 12 features
- [ ] Run a MoSCoW pass: decide the ONE vertical slice the team will fully build (e.g., 2 languages, 3 games, offline sync, caregiver alerts, no diagnosis claims)
- [ ] Pick the tech stack with input from each lead (mobile framework, backend, DB, sync approach)
- [ ] Draw the system architecture diagram: Patient App ↔ Local DB ↔ Sync Layer ↔ Backend ↔ Caregiver Dashboard, with AI/ML engine and Voice/Bhashini as services
- [ ] Define API contracts between: App↔Backend, App↔AI Engine, Backend↔Caregiver Dashboard
- [ ] Set up shared repo, folder structure, and README for the whole team

### Phase 1 — Build Coordination
- [ ] Hold a daily 10-min sync: who's blocked on whom
- [ ] Track integration points explicitly (e.g., "AI engine needs game session data shape from App team by X")
- [ ] Maintain a single source-of-truth data schema (patient profile, game session, reminder, caregiver alert)
- [ ] Resolve scope creep in real time — if a feature isn't in the MoSCoW "Must," park it
- [ ] Do a mid-hackathon integration test: plug App + Backend + AI engine together, even with dummy data

### Phase 2 — Integration & Hardening
- [ ] Full end-to-end test: patient plays game offline → data syncs → caregiver dashboard updates
- [ ] Stress-test the "turn off wifi" scenario yourself before a judge does
- [ ] Confirm every claimed feature in the pitch actually works live — cut any that don't
- [ ] Write the non-diagnostic disclaimer language and confirm it's visible in the UI

### Phase 3 — Pitch Prep
- [ ] Build the final architecture slide (clean, one-glance diagram)
- [ ] Prepare answers for: "why this stack," "how does offline sync work," "how do you handle unsupported languages"
- [ ] Own the live demo script — decide who drives which part of the demo and in what order
- [ ] Have a fallback plan if live demo fails (recorded backup video)

---

## 🔗 Dependencies
- Needs data schema input from **Backend** and **AI/ML** early
- Needs UI flow from **Patient App/UX** to finalize API contracts
- Needs sync requirements from **Offline/Voice/Security** to design the architecture correctly
- Feeds the **Caregiver Platform/Research** lead the final architecture for the pitch deck

## 🎯 Demo-Day Deliverable
A single clean architecture diagram + a live, fully-integrated demo that survives a wifi-off test and a "walk me through your stack" question.
