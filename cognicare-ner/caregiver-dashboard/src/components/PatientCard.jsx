function PatientCard({ patient }) {
  return (
    <div className="patient-card">
      <div className="patient-info">
        <h3>{patient.name}</h3>
        <p>Age {patient.age}</p>
      </div>

      <div className="patient-metric">
        <strong>{patient.accuracy}%</strong>
        <span>Accuracy</span>
      </div>

      <div className="patient-metric">
        <strong>{patient.sessions}</strong>
        <span>Sessions</span>
      </div>

      <div className="patient-metric">
        <span>{patient.lastActivity}</span>
      </div>

      <div className={`patient-status ${patient.status === "Active" ? "active" : "attention"}`}>
        {patient.status}
      </div>
    </div>
  )
}

export default PatientCard