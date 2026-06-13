import { plans } from '../data/mockData';

const Dashboard = () => (
  <section className="dashboard">
    <div className="dashboard-grid">
      <article className="summary-card">
        <h2>Cost effectiveness at a glance</h2>
        <p>Compare plans, services, and clinical support options to identify best value and expected outcomes.</p>
        <div className="metric-list">
          <div>
            <span className="metric-label">Average plan cost</span>
            <strong>$133</strong>
          </div>
          <div>
            <span className="metric-label">Top score</span>
            <strong>92%</strong>
          </div>
          <div>
            <span className="metric-label">Plans tracked</span>
            <strong>{plans.length}</strong>
          </div>
        </div>
      </article>

      <article className="plan-list">
        <h2>Plan comparison</h2>
        <div className="cards">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <div className="plan-card-header">
                <h3>{plan.name}</h3>
                <span className="cost">${plan.monthlyCost}/mo</span>
              </div>
              <p>{plan.description}</p>
              <div className="progress-row">
                <span>Effectiveness</span>
                <strong>{plan.effectivenessScore}%</strong>
              </div>
              <div className="progress-bar">
                <div style={{ width: `${plan.effectivenessScore}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  </section>
);

export default Dashboard;
