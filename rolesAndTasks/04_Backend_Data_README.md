# 🗄️ Role 4: Backend + Data
**Owns:** APIs, database, sync endpoints, analytics aggregation for the caregiver dashboard.

You're the contract everyone else calls into. Clean, stable API contracts early save the whole team from last-day integration chaos.

---

## 📚 What You Need to Learn
- [ ] REST API design and implementation (Node/Express, or Firebase/Supabase functions — pick based on team speed)
- [ ] Database schema design (relational: patients, caregivers, game_sessions, reminders, alerts; or document-based equivalent)
- [ ] Authentication & authorization basics (who can see whose data — patient vs. caregiver roles)
- [ ] Sync architecture: how to accept batched offline data from a client and merge it without duplicating or losing records
- [ ] Basic data aggregation/analytics queries (rolling averages, trend queries) to feed the caregiver dashboard
- [ ] Basics of data protection for health data (encryption at rest, least-privilege access) — enough to defend the design, not become a lawyer

---

## ✅ Task Checklist

### Phase 0 — Schema & Contracts
- [ ] Design the core schema: `patients`, `caregivers`, `patient_caregiver_links`, `game_sessions`, `reminders`, `alerts`
- [ ] Agree on API contracts with **Product/System Architect** and **Patient App/UX**: endpoints for session upload, reminder fetch, caregiver dashboard data
- [ ] Set up the database (Postgres/Firestore/Supabase) and basic project skeleton

### Phase 1 — Core APIs
- [ ] Build patient registration/profile endpoint
- [ ] Build caregiver-link endpoint (caregiver requests access, patient/family approves — simple consent flow)
- [ ] Build game-session upload endpoint (accepts batched sessions from offline sync)
- [ ] Build reminder CRUD endpoints
- [ ] Add basic auth (even simple token-based auth is fine for a hackathon — just don't leave it fully open)

### Phase 2 — Sync & Analytics
- [ ] Implement idempotent batch-sync logic (same session uploaded twice should not duplicate — use client-generated UUIDs)
- [ ] Build aggregation endpoints: weekly accuracy trend, response-time trend, completion rate per patient
- [ ] Build the alert-generation trigger that calls into the **AI/ML** trend-detection logic and stores resulting alerts
- [ ] Test sync with deliberately delayed/out-of-order data (simulate a patient who was offline for 3 days)

### Phase 3 — Security & Hardening
- [ ] Confirm caregiver A cannot query patient data they aren't linked to (test this explicitly)
- [ ] Add basic encryption at rest for sensitive fields if time allows
- [ ] Document the API (simple Postman collection or markdown table) for the whole team
- [ ] Load a realistic amount of synthetic data (weeks of sessions) to make the dashboard demo look real, not empty

---

## 🔗 Dependencies
- Needs game session schema finalized with **Patient App/UX** and **AI/ML**
- Needs sync/conflict requirements from **Offline/Voice/Security** lead
- Feeds all data to the **Caregiver Platform** dashboard

## 🎯 Demo-Day Deliverable
A stable, documented API with working sync (demonstrable with a simulated offline-then-online patient) and populated analytics data ready for the caregiver dashboard to display.
