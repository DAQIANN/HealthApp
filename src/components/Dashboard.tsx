import { plans } from '../data/mockData';

// TODO: these metrics should come from the API once the backend is ready; for now derived from mock data
const avgMonthlyCost = Math.round(plans.reduce((sum, p) => sum + p.monthlyCost, 0) / plans.length);
const topEffectivenessScore = Math.max(...plans.map((p) => p.effectivenessScore));

// Overview page: high-level stats and a card for each available plan
const Dashboard = () => (
  <section className="dashboard">
    <div className="dashboard-grid">
      {/* Summary card: single-number KPIs drawn from the plan dataset */}
      <article className="summary-card">
        <h2>Cost effectiveness at a glance</h2>
        <p>Compare plans, services, and clinical support options to identify best value and expected outcomes.</p>
        <div className="metric-list">
          <div>
            <span className="metric-label">Average plan cost</span>
            <strong>${avgMonthlyCost}</strong>
          </div>
          <div>
            <span className="metric-label">Top score</span>
            <strong>{topEffectivenessScore}%</strong>
          </div>
          <div>
            <span className="metric-label">Plans tracked</span>
            <strong>{plans.length}</strong>
          </div>
        </div>
      </article>

      {/* Plan list: one card per plan with an effectiveness progress bar */}
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
