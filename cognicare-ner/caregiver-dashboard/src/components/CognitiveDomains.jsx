import { cognitiveDomains } from "../data/mockData"

function CognitiveDomains() {
  return (
    <section className="dashboard-section">
      <div className="section-header">
        <div>
          <h2>Cognitive Activity Areas</h2>
          <p>Recent performance by activity area</p>
        </div>
      </div>

      <div className="domain-list">
        {cognitiveDomains.map((item) => (
          <div className="domain-item" key={item.domain}>
            <div className="domain-header">
              <span>{item.domain}</span>
              <strong>{item.score}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CognitiveDomains