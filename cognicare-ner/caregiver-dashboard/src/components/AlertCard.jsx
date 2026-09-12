import { useState } from "react"

function AlertCard({ alert }) {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <div className={`alert-card ${acknowledged ? "alert-acknowledged" : ""}`}>
      <div className="alert-icon">🔔</div>

      <div className="alert-content">
        <h3>{acknowledged ? "Alert acknowledged" : alert.title}</h3>

        <p>{alert.message}</p>

        <div className="alert-meta">
          <span>{alert.patient}</span>
          <span>{alert.time}</span>
        </div>

        {!acknowledged && (
          <button
            className="acknowledge-button"
            onClick={() => setAcknowledged(true)}
          >
            Acknowledge
          </button>
        )}

        {acknowledged && (
          <span className="acknowledged-label">
            ✓ Acknowledged
          </span>
        )}
      </div>
    </div>
  )
}

export default AlertCard