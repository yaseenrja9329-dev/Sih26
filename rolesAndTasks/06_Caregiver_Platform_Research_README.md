# 👨‍👩‍👧 Role 6: Caregiver Platform + Research / Domain / Pitch
**Owns:** Caregiver-facing dashboard, domain research grounding, clinical/cultural validation, and the pitch itself.

You are the credibility layer — the person who makes sure the team isn't building a toy, and the person who has to stand in front of judges and defend it convincingly.

---

## 📚 What You Need to Learn
- [ ] Basic dashboard/web frontend (React or even a simple web app) if you're building the caregiver dashboard yourself
- [ ] Data visualization basics (simple charts: trend lines, completion rates — libraries like Chart.js/Recharts)
- [ ] Real domain background: dementia basics, what cognitive stimulation therapy is, and at least the gist of an Indian caregiver-driven training model (e.g., NIMHANS's iCARE/CDCT approach) so your framing is grounded, not invented
- [ ] Competitor landscape (Lumosity, MindMate, existing cognitive-training apps) — know their gaps cold
- [ ] Basics of India's DPDP Act for health data (to write consent/privacy copy accurately)
- [ ] Pitch structure for hackathon judging (problem → why now → demo → impact → scalability → honest limitations)
- [ ] How to run a short "usability sanity check" with a non-technical person (even a teammate's parent) to validate the elderly-UX claims

---

## ✅ Task Checklist

### Phase 0 — Domain Grounding
- [ ] Read up on the NIMHANS iCARE/CDCT caregiver-driven cognitive training model — use its task domains (memory, attention, executive function, language) to justify your game categories
- [ ] Write a one-page "why this is grounded, not invented" doc the team can reference in Q&A
- [ ] Research 3-4 real competitor apps (Lumosity, MindMate, Reminding, Mindpal) and document their specific gaps vs. your build
- [ ] Draft the non-diagnostic disclaimer language in plain, non-scary wording

### Phase 1 — Caregiver Dashboard
- [ ] Wireframe the dashboard: patient list, per-patient trend view, alerts feed, reminder status
- [ ] Build the trend visualization (accuracy/response-time over time) pulling from Backend's analytics endpoints
- [ ] Build the plain-language alerts feed (consuming AI/ML team's trend flags)
- [ ] Add the caregiver consent/link flow UI (request access, approve access)

### Phase 2 — Validation
- [ ] Run a mini usability test of the Patient App with a non-team-member, ideally someone elderly or unfamiliar with the app
- [ ] Note friction points and feed them back to the App/UX team if time allows fixes
- [ ] Sanity-check the AI/ML trend flags against the synthetic data — do they make sense to a non-technical reader?

### Phase 3 — Pitch
- [ ] Build the pitch deck: problem, root cause, solution, live demo plan, competitor comparison table, impact, scalability, honest limitations
- [ ] Prepare the judge Q&A answer set (diagnosis claim, language coverage, data privacy, "what's really AI here")
- [ ] Rehearse the full team demo flow end-to-end at least twice before presenting
- [ ] Prepare the fallback (recorded demo video) in case live demo fails

---

## 🔗 Dependencies
- Needs analytics/alert data from **Backend** and **AI/ML**
- Needs the final architecture diagram from **Product/System Architect** for the pitch deck
- Needs a working, demoable **Patient App** for the live demo and usability check

## 🎯 Demo-Day Deliverable
A clean caregiver dashboard showing real (synthetic) trend data and alerts, plus a tight, honest, well-rehearsed pitch that survives tough judge questions without overclaiming.
