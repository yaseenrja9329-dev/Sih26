import { useState } from "react"

function ReminderCard({ reminder }) {
  const [status, setStatus] = useState(reminder.status)

  const handleComplete = () => {
    setStatus("Completed")
  }

  return (
    <div className="reminder-card">
      <div className="reminder-icon">⏰</div>

      <div className="reminder-content">
        <h3>{reminder.activity}</h3>
        <p>{reminder.patient}</p>
      </div>

      <div className="reminder-time">
        {reminder.time}
      </div>

      <div
        className={`reminder-status ${
          status.toLowerCase().replace(" ", "-")
        }`}
      >
        {status}
      </div>

      {status === "Pending" && (
        <button
          className="complete-reminder-button"
          onClick={handleComplete}
        >
          Mark as Done
        </button>
      )}
    </div>
  )
}

export default ReminderCard