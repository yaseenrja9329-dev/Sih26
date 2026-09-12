function Sidebar({ activeSection, onNavigate }) {
  const menuItems = [
    { id: "overview", icon: "🏠", label: "Overview" },
    { id: "patients", icon: "👥", label: "Patients" },
    { id: "alerts", icon: "🔔", label: "Alerts" },
    { id: "reminders", icon: "⏰", label: "Reminders" },
    { id: "research", icon: "📚", label: "Research" },
    { id: "settings", icon: "⚙️", label: "Settings" },
  ]

  return (
    <aside className="sidebar">
      <div className="logo">
        <span>🧠</span>
        <h2>CogniCare</h2>
      </div>

      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${
              activeSection === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Caregiver Portal</p>
        <small>CogniCare NER</small>
      </div>
    </aside>
  )
}

export default Sidebar