import { useState } from "react"

function PatientLinking() {
  const [patientCode, setPatientCode] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!patientCode.trim()) {
      setMessage("Please enter a patient code.")
      return
    }

    setMessage(
      `Link request sent for patient code: ${patientCode}`
    )

    setPatientCode("")
  }

  return (
    <section className="dashboard-section">

      <div className="section-header">
        <div>
          <h2>Link a Patient</h2>
          <p>
            Enter the patient code to request caregiver access.
          </p>
        </div>
      </div>

      <form
        className="link-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Example: CGN-1024"
          value={patientCode}
          onChange={(event) =>
            setPatientCode(event.target.value)
          }
        />

        <button type="submit">
          Send Request
        </button>
      </form>

      {message && (
        <p className="link-message">
          {message}
        </p>
      )}

    </section>
  )
}

export default PatientLinking