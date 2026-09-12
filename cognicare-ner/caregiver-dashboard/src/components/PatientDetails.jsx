function PatientDetails({ patient, onBack }) {
  return (
    <main className="main-content">
      <button className="back-button" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <div className="patient-details-header">
        <div>
          <h1>{patient.name}</h1>
          <p>
            Age {patient.age} • Patient ID: CGN-{1000 + patient.id}
          </p>
        </div>

        <span
          className={`patient-status ${
            patient.status === "Active" ? "active" : "attention"
          }`}
        >
          {patient.status}
        </span>
      </div>

      {/* Patient Overview */}
      <section className="dashboard-section">
        <h2>Patient Overview</h2>

        <div className="patient-overview-grid">
          <div className="overview-item">
            <span>Patient ID</span>
            <strong>CGN-{1000 + patient.id}</strong>
          </div>

          <div className="overview-item">
            <span>Current Status</span>
            <strong>{patient.status}</strong>
          </div>

          <div className="overview-item">
            <span>Total Sessions</span>
            <strong>{patient.sessions}</strong>
          </div>

          <div className="overview-item">
            <span>Recent Accuracy</span>
            <strong>{patient.accuracy}%</strong>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="stats">
        <div className="stat-card">
          <p className="stat-title">Accuracy</p>
          <h2>{patient.accuracy}%</h2>
          <p className="stat-subtitle">Recent average</p>
        </div>

        <div className="stat-card">
          <p className="stat-title">Sessions</p>
          <h2>{patient.sessions}</h2>
          <p className="stat-subtitle">Completed sessions</p>
        </div>

        <div className="stat-card">
          <p className="stat-title">Last Activity</p>
          <h2 className="detail-value">{patient.lastActivity}</h2>
          <p className="stat-subtitle">Most recent activity</p>
        </div>
      </div>

      {/* Recent Activity */}
      <section className="dashboard-section">
        <h2>Recent Activity</h2>

        <div className="activity-row">
          <span>🧠 Memory Match</span>
          <span>Completed</span>
          <span>82% accuracy</span>
        </div>

        <div className="activity-row">
          <span>🔢 Pattern Recognition</span>
          <span>Completed</span>
          <span>78% accuracy</span>
        </div>

        <div className="activity-row">
          <span>📅 Daily Routine Recall</span>
          <span>Pending</span>
          <span>—</span>
        </div>
      </section>

      {/* Caregiver Note */}
      <section className="dashboard-section">
        <h2>Caregiver Note</h2>

        <p className="caregiver-note">
          Performance information is provided to help caregivers notice
          activity patterns over time. Changes in performance can happen
          for many reasons and should not be treated as a medical diagnosis.
        </p>

        <textarea
          className="caregiver-note-input"
          placeholder="Write a note about today's activity..."
          rows="4"
        />

        <button className="save-note-button">
          Save Note
        </button>
      </section>
    </main>
  )
}

export default PatientDetails