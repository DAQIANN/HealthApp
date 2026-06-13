import { coverageInsights, scoreLabel } from '../data/mockData';

// Displays historical coverage likelihood for common service categories
const CoveragePage = () => (
  <div className="page-content">
    <div className="page-heading">
      <h2>Coverage insights</h2>
      <p>Review the likelihood of insurance coverage for common healthcare services and treatments.</p>
    </div>

    {/* One card per coverage category with a chance percentage and provider context */}
    <div className="coverage-grid">
      {coverageInsights.map((insight) => (
        <article key={insight.id} className="coverage-card">
          <div className="coverage-card-header">
            <h3>{insight.title}</h3>
            <span className="coverage-score">{scoreLabel(insight.coverageChance)}</span>
          </div>
          <p className="coverage-provider">Provider: {insight.provider}</p>
          <p>{insight.details}</p>
        </article>
      ))}
    </div>
  </div>
);

export default CoveragePage;
