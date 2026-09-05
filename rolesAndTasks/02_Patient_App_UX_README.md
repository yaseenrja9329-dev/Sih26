# 👴 Role 2: Patient App + UX
**Owns:** The elderly-facing application — cognitive games, reminders, voice guidance, accessible UI.

This is the most-judged surface. It must look and feel genuinely usable by someone with memory decline, low vision, or hand tremor — not just "big buttons" as a slide bullet.

---

## 📚 What You Need to Learn
- [ ] Mobile framework of choice (React Native or Flutter) — components, navigation, state management
- [ ] Accessibility design principles for elderly users (WCAG basics: contrast ratios, tap target sizes, font scaling)
- [ ] Basic game-loop programming (scoring, timers, difficulty levels) inside a mobile app
- [ ] Local state persistence (AsyncStorage / SQLite / Realm / Hive) so games work fully offline
- [ ] Calling REST APIs from a mobile app (for when sync happens)
- [ ] Basics of cognitive game design for memory/attention (what makes a task "memory," "attention," or "pattern recognition")
- [ ] How to integrate a text-to-speech / voice prompt SDK into a mobile screen

---

## ✅ Task Checklist

### Phase 0 — Foundation
- [ ] Wireframe the core screens: home, game selection, game screen, reminders, simple profile
- [ ] Apply elderly-UX rules: large text (min 18-20pt equivalent), high contrast, max 1 action per screen, no small icons without labels
- [ ] Decide on the content-pack architecture (games reference swappable data: images/sounds/text per culture/language) — do NOT hardcode one culture's assets
- [ ] Set up the mobile project skeleton and navigation

### Phase 1 — Build the Games
- [ ] Build Game 1: Memory Match (pairs of familiar objects)
- [ ] Build Game 2: Daily Routine Recall (sequence ordering task)
- [ ] Build Game 3: Pattern Recognition (simple visual pattern completion)
- [ ] Each game logs: accuracy, response time, difficulty level, completion status — locally
- [ ] Implement a simple adaptive-difficulty hook that calls the AI/ML engine's logic (or local rule-based fallback) after each session
- [ ] Add voice instructions/prompts at the start of each game (hook point for Voice team's Bhashini integration)

### Phase 2 — Reminders & Profile
- [ ] Build local notification system: medicine, hydration, appointment reminders with icon + voice + simple text
- [ ] Build a minimal patient profile screen (name, language preference, caregiver link code)
- [ ] Add a "Today" home screen summarizing reminders + suggested game

### Phase 3 — Offline & Polish
- [ ] Confirm every screen works with wifi fully off (test explicitly, don't assume)
- [ ] Add sync indicator (small, non-alarming — "saved, will sync later")
- [ ] Add the non-diagnostic disclaimer text somewhere visible but not scary
- [ ] Do an actual usability pass: hand the phone to someone unfamiliar with the app and watch them use it without instructions

---

## 🔗 Dependencies
- Needs API contracts from **Product/System Architect**
- Needs local DB schema shared with **Backend** so sync works cleanly
- Needs voice/TTS integration hooks from **Offline/Voice/Security**
- Needs difficulty-adjustment logic/interface from **AI/ML** team
- Needs cultural content packs (images, terms, scenarios) from **Caregiver Platform/Research** team

## 🎯 Demo-Day Deliverable
3 fully playable, offline-working games with voice guidance and visible adaptive difficulty, running on an elderly-friendly UI that survives a "hand it to a stranger" test.
