import { useState } from "react"

import Sidebar from "./components/Sidebar"
import StatCard from "./components/StatCard"
import PatientCard from "./components/PatientCard"
import AlertCard from "./components/AlertCard"
import ReminderCard from "./components/ReminderCard"
import PerformanceChart from "./components/PerformanceChart"
import CognitiveDomains from "./components/CognitiveDomains"
import PatientDetails from "./components/PatientDetails"
import PatientLinking from "./components/PatientLinking"
import EmptyState from "./components/EmptyState"

import {
  patients,
  alerts,
  reminders,
  linkingRequests,
} from "./data/mockData"

function App() {
  const [activeSection, setActiveSection] = useState("overview")
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (selectedPatient) {
    return (
      <div className="dashboard">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <PatientDetails
          patient={selectedPatient}
          onBack={() => setSelectedPatient(null)}
        />
      </div>
    )
  }

  if (activeSection === "patients") {
    return (
      <div className="dashboard">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <main className="main-content">
          <header className="header">
            <div>
              <h1>Patients</h1>
              <p>Patients linked to your caregiver account.</p>
            </div>

            <div className="profile">
              👤 Caregiver
            </div>
          </header>

          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>All Patients</h2>
                <p>Select a patient to view their details.</p>
              </div>
            </div>

            <input
              className="patient-search"
              type="text"
              placeholder="Search patient by name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />

            <div className="patient-list">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="clickable-patient"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <PatientCard patient={patient} />
                  </div>
                ))
              ) : (
                <EmptyState
                  icon="👥"
                  title="No patients found"
                  message="Try searching with a different patient name."
                />
              )}
            </div>
          </section>

          <PatientLinking />

          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>Pending Linking Requests</h2>
                <p>
                  Patient access requests awaiting confirmation.
                </p>
              </div>
            </div>

            {linkingRequests.length > 0 ? (
              <div className="linking-list">
                {linkingRequests.map((request) => (
                  <div
                    className="linking-card"
                    key={request.id}
                  >
                    <div>
                      <h3>{request.patientName}</h3>
                      <p>
                        Patient Code: {request.patientCode}
                      </p>
                    </div>

                    <span className="linking-status">
                      {request.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                icon="🔗"
                title="No pending requests"
                message="There are no patient linking requests at the moment."
              />
            )}
          </section>
        </main>
      </div>
    )
  }

  if (activeSection === "alerts") {
    return (
      <div className="dashboard">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <main className="main-content">
          <header className="header">
            <div>
              <h1>Alerts</h1>
              <p>Important activity patterns and reminders.</p>
            </div>

            <div className="profile">
              👤 Caregiver
            </div>
          </header>

          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>Recent Alerts</h2>
                <p>Review activity patterns that may need attention.</p>
              </div>
            </div>

            {alerts.length > 0 ? (
              <div className="alert-list">
                {alerts.map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="🔔"
                title="No alerts"
                message="There are no new alerts to review."
              />
            )}
          </section>
        </main>
      </div>
    )
  }

  if (activeSection === "reminders") {
    return (
      <div className="dashboard">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <main className="main-content">
          <header className="header">
            <div>
              <h1>Reminders</h1>
              <p>Track scheduled cognitive activities.</p>
            </div>

            <div className="profile">
              👤 Caregiver
            </div>
          </header>

          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>Activity Reminders</h2>
                <p>Monitor scheduled activities for patients.</p>
              </div>
            </div>

            {reminders.length > 0 ? (
              <div className="reminder-list">
                {reminders.map((reminder) => (
                  <ReminderCard
                    key={reminder.id}
                    reminder={reminder}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon="⏰"
                title="No reminders"
                message="There are no scheduled activities right now."
              />
            )}
          </section>
        </main>
      </div>
    )
  }

  if (activeSection === "settings") {
    if (activeSection === "research") {
  return (
    <div className="dashboard">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      <main className="main-content">
        <header className="header">
          <div>
            <h1>Research & Approach</h1>
            <p>
              Cognitive activity areas used in the CogniCare platform.
            </p>
          </div>

          <div className="profile">
            👤 Caregiver
          </div>
        </header>

        <section className="dashboard-section">
          <h2>Why These Activity Areas?</h2>

          <p className="research-intro">
            CogniCare organizes activities around cognitive areas such
            as memory, attention, executive function and language.
            These areas are commonly used in cognitive training and
            caregiver-supported interventions.
          </p>
        </section>

        <section className="research-grid">
          <div className="research-card">
            <div className="research-icon">🧠</div>
            <h3>Memory</h3>
            <p>
              Activities can involve remembering objects, sequences,
              names or everyday information.
            </p>
          </div>

          <div className="research-card">
            <div className="research-icon">👀</div>
            <h3>Attention</h3>
            <p>
              Activities can encourage focused attention and
              identification of relevant information.
            </p>
          </div>

          <div className="research-card">
            <div className="research-icon">🧩</div>
            <h3>Executive Function</h3>
            <p>
              Pattern, sequencing and problem-solving activities can
              engage planning and flexible thinking.
            </p>
          </div>

          <div className="research-card">
            <div className="research-icon">💬</div>
            <h3>Language</h3>
            <p>
              Word and communication activities can provide
              opportunities for language-based cognitive engagement.
            </p>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Caregiver-Supported Approach</h2>

          <p className="research-intro">
            CogniCare is designed to help caregivers observe activity
            patterns over time and support regular cognitive
            engagement. Performance information is not intended to
            diagnose dementia or determine disease progression.
          </p>
        </section>
      </main>
    </div>
  )
}
    return (
      <div className="dashboard">
        <Sidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <main className="main-content">
          <header className="header">
            <div>
              <h1>Settings</h1>
              <p>Manage your caregiver dashboard preferences.</p>
            </div>

            <div className="profile">
              👤 Caregiver
            </div>
          </header>

          <section className="dashboard-section">
            <div className="settings-item">
              <h3>Caregiver Account</h3>
              <p>
                Manage caregiver profile information and linked
                patients.
              </p>
            </div>

            <div className="settings-item">
              <h3>Notifications</h3>
              <p>
                Configure how important activity alerts are shown.
              </p>
            </div>

            <div className="settings-item">
              <h3>Privacy & Consent</h3>
              <p>
                Patient information should only be available after
                appropriate caregiver-patient consent and linking.
              </p>
            </div>

            <div className="settings-item">
              <h3>About CogniCare</h3>
              <p>
                CogniCare supports cognitive engagement and
                caregiver awareness. It is not a medical diagnostic
                system.
              </p>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <Sidebar
        activeSection={activeSection}
        onNavigate={setActiveSection}
      />

      <main className="main-content">
        <header className="header">
          <div>
            <h1>Caregiver Dashboard</h1>
            <p>
              Monitor cognitive activity and daily engagement.
            </p>
          </div>

          <div className="profile">
            👤 Caregiver
          </div>
        </header>

        <section className="stats">
          <StatCard
            title="Linked Patients"
            value={patients.length}
            subtitle="Currently connected"
          />

          <StatCard
            title="Active Patients"
            value={
              patients.filter(
                (patient) => patient.status === "Active"
              ).length
            }
            subtitle="Active recently"
          />

          <StatCard
            title="Avg. Accuracy"
            value={`${Math.round(
              patients.reduce(
                (sum, patient) => sum + patient.accuracy,
                0
              ) / patients.length
            )}%`}
            subtitle="Recent average"
          />

          <StatCard
            title="Pending Alerts"
            value={alerts.length}
            subtitle="Needs review"
          />
        </section>

        <PerformanceChart />

        <CognitiveDomains />

        <section className="dashboard-section">
          <div className="section-header">
            <div>
              <h2>Recent Patients</h2>
              <p>Quick overview of linked patients.</p>
            </div>

            <button
              className="view-all-button"
              onClick={() => setActiveSection("patients")}
            >
              View All
            </button>
          </div>

          <div className="patient-list">
            {patients.length > 0 ? (
              patients.map((patient) => (
                <div
                  key={patient.id}
                  className="clickable-patient"
                  onClick={() => setSelectedPatient(patient)}
                >
                  <PatientCard patient={patient} />
                </div>
              ))
            ) : (
              <EmptyState
                icon="👥"
                title="No patients linked"
                message="Link a patient to begin monitoring activity."
              />
            )}
          </div>
        </section>

        <div className="bottom-grid">
          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>Recent Alerts</h2>
                <p>Important activity patterns.</p>
              </div>

              <button
                className="view-all-button"
                onClick={() => setActiveSection("alerts")}
              >
                View All
              </button>
            </div>

            {alerts.length > 0 ? (
              alerts
                .slice(0, 2)
                .map((alert) => (
                  <AlertCard
                    key={alert.id}
                    alert={alert}
                  />
                ))
            ) : (
              <EmptyState
                icon="🔔"
                title="No alerts"
                message="Everything looks clear right now."
              />
            )}
          </section>

          <section className="dashboard-section">
            <div className="section-header">
              <div>
                <h2>Today's Reminders</h2>
                <p>Scheduled cognitive activities.</p>
              </div>

              <button
                className="view-all-button"
                onClick={() => setActiveSection("reminders")}
              >
                View All
              </button>
            </div>

            {reminders.length > 0 ? (
              reminders
                .slice(0, 3)
                .map((reminder) => (
                  <ReminderCard
                    key={reminder.id}
                    reminder={reminder}
                  />
                ))
            ) : (
              <EmptyState
                icon="⏰"
                title="No reminders"
                message="No activities are scheduled today."
              />
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App