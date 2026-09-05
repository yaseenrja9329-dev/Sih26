# 🤖 Role 3: AI/ML + Cognitive Engine
**Owns:** Adaptive difficulty logic, performance modeling, cognitive trend analysis — the "intelligence" layer.

Be honest about what this actually is: a rule-based/statistical adaptation system, not a diagnostic AI. Judges respect an honest, working simple model far more than an overclaimed fake one.

---

## 📚 What You Need to Learn
- [ ] Basic statistics: rolling averages, standard deviation, simple trend detection over a time series
- [ ] Adaptive algorithms 101 (Elo-rating style adjustment, or simpler: threshold-based difficulty stepping)
- [ ] Time-series thinking: how to detect a "declining trend" vs. normal day-to-day noise without false alarms
- [ ] Basics of a lightweight ML library if you want to go beyond rules (scikit-learn: simple regression/classification)
- [ ] How to design a clean, versioned "cognitive session" data schema (accuracy, response time, difficulty, domain: memory/attention/pattern)
- [ ] How to expose your logic as a simple API/function the App team can call (input: session history → output: next difficulty level)
- [ ] Enough about real dementia cognitive-training research (e.g., NIMHANS iCARE/CDCT model — attention, executive function, memory, language domains) to ground your task taxonomy in something real, not invented

---

## ✅ Task Checklist

### Phase 0 — Research & Design
- [ ] Read at least 1-2 papers/summaries on cognitive training task domains (memory, attention, executive function, language, visuospatial) to structure your difficulty dimensions correctly
- [ ] Define what "difficulty" means per game (e.g., memory match: number of pairs + exposure time; pattern recognition: pattern length + distractor count)
- [ ] Define the data schema for a "game session" record (link with Backend/App teams)
- [ ] Decide: rule-based adaptive engine (safe, explainable, buildable) vs. lightweight ML model (riskier, only if time allows) — default to rule-based first

### Phase 1 — Build the Adaptive Engine
- [ ] Implement rolling-window accuracy + response-time tracking per patient per game
- [ ] Implement the difficulty-adjustment rule (e.g., 3 consecutive high-accuracy fast sessions → increase difficulty; drop in accuracy → decrease)
- [ ] Expose this as a callable function/API endpoint: `getNextDifficulty(sessionHistory) → difficultyLevel`
- [ ] Test it against synthetic session data (generate fake patient histories — improving, declining, stable) to confirm sane behavior

### Phase 2 — Trend Detection for Caregivers
- [ ] Build a simple trend-flagging function: compares recent performance window vs. historical baseline
- [ ] Output plain-language flags, not raw numbers ("noticeably slower this week" not "response time +40%")
- [ ] Explicitly cap what this claims — it flags patterns for caregiver awareness, it does NOT diagnose
- [ ] Test with synthetic declining/stable/improving patient profiles

### Phase 3 — Polish & Defend
- [ ] Write a clear one-paragraph explanation of exactly what the model does and doesn't do (for judge Q&A)
- [ ] Prepare a live demo: feed a synthetic declining-performance patient into the system and show the flag firing correctly
- [ ] Be ready to explain honestly what real-world data and validation would be needed to make this clinically credible

---

## 🔗 Dependencies
- Needs game session data schema agreed with **Patient App/UX** and **Backend**
- Needs the trend-flag output format agreed with **Caregiver Platform** team (how it's displayed)
- Reports architecture decisions to **Product/System Architect**

## 🎯 Demo-Day Deliverable
A working adaptive-difficulty engine visibly changing game difficulty in real time, plus a trend-detection demo on synthetic data with an honest, well-defended explanation of its limits.
