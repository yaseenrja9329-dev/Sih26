# 🔒 Role 5: Offline + Voice + Security
**Owns:** Offline-first architecture, voice/multilingual integration, accessibility infra, data privacy/security.

This role covers the parts judges specifically test live (turning off wifi, asking for a new language, asking about data privacy) — so "it works in theory" is not good enough here; it has to survive being poked at.

---

## 📚 What You Need to Learn
- [ ] Offline-first local storage on mobile (SQLite / Realm / WatermelonDB / Hive) — write, read, and query patterns
- [ ] Sync/conflict-resolution strategies (last-write-wins vs. merge vs. queue-and-replay) — pick the simplest one you can implement correctly
- [ ] Speech APIs: Bhashini's ASR (speech-to-text), TTS (text-to-speech), and translation APIs — how to call them, and their language coverage limits
- [ ] What a "content pack" architecture looks like (externalized strings/audio per language, not hardcoded in app code) — this is your answer to "add a new language live"
- [ ] Mobile permissions and secure local storage (encrypting local DB, secure token storage)
- [ ] India's DPDP Act basics as applied to health data — consent, purpose limitation, data minimization (enough to design consent flows correctly)
- [ ] Basic auth/token security (don't store secrets in plaintext, don't expose API keys in the client app)

---

## ✅ Task Checklist

### Phase 0 — Offline Architecture
- [ ] Set up local database schema mirroring the backend schema (or a practical subset)
- [ ] Implement local-first writes: every game session, reminder interaction, etc. is written locally FIRST
- [ ] Implement a sync queue: locally stored "pending sync" records with client-generated UUIDs
- [ ] Implement the sync trigger (on connectivity restored, background or foreground) that pushes queued data to Backend's endpoint

### Phase 1 — Voice & Language
- [ ] Integrate Bhashini ASR/TTS for at least one scheduled NER language (Assamese, Bodo, or Manipuri) + English
- [ ] Build the content-pack structure: a JSON/config file per language holding UI strings, audio prompt references, and cultural asset mappings
- [ ] Wire voice prompts into the Patient App's game-start and reminder screens (coordinate with App team)
- [ ] Prepare a fallback/stub for languages Bhashini doesn't cover (e.g., Khasi, Mizo, Naga languages) — show the pack architecture as the scalable answer, even if only demoed with placeholder/manually-recorded audio

### Phase 2 — Security & Privacy
- [ ] Implement consent flow: caregiver must be explicitly linked/approved before accessing patient data
- [ ] Encrypt sensitive local data at rest (patient profile, health-related session data)
- [ ] Ensure API calls use auth tokens, not open endpoints
- [ ] Write a short, honest data-handling policy (what's collected, why, who can see it) — useful both for the app and for judge Q&A

### Phase 3 — Stress Test
- [ ] Do the "turn off wifi mid-game, play, turn wifi back on" test yourself repeatedly until it's reliable
- [ ] Do the "simulate 3 days offline then sync" test with realistic data volume
- [ ] Confirm no crash/data-loss on interrupted sync (kill the app mid-sync and restart)
- [ ] Rehearse the "add a new language live" demo moment with the content-pack system

---

## 🔗 Dependencies
- Needs local DB schema aligned with **Backend**
- Needs voice-hook integration points from **Patient App/UX**
- Reports offline/sync architecture decisions to **Product/System Architect**

## 🎯 Demo-Day Deliverable
A live, repeatable demo of offline play + delayed sync, working voice guidance in at least one NER language, and a clear, rehearsed answer (with working pack structure) for "add a new language right now."
