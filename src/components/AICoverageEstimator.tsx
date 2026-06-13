import { useState } from 'react';

// Placeholder AI cost predictor — simulates an estimate response until a real model is wired in
const AICoverageEstimator = () => {
  const [estimateInput, setEstimateInput] = useState('Telehealth Consultation');
  const [aiEstimate, setAiEstimate] = useState(
    'Enter a procedure or service and click estimate to see an AI-driven placeholder coverage recommendation.'
  );

  // TODO: replace with a real POST /api/estimate call (or Claude API) that takes estimateInput and returns coverage likelihood + cost range
  const handleEstimate = () => {
    setAiEstimate(
      `Simulated estimate for "${estimateInput}": coverage likelihood is rated High, with out-of-pocket costs that vary by plan tier. This is a placeholder result — no real coverage determination has been made.`
    );
  };

  return (
    <div className="page-content">
      <div className="page-heading">
        <h2>Cost Predictor</h2>
        <p>Estimate coverage likelihood and cost impact for treatments using a placeholder AI model.</p>
      </div>

      {/* Inline warning: AI outputs on this page are simulations, not real coverage rulings */}
      <div className="ai-warning" role="alert">
        <strong>Simulated estimates only.</strong> Results are not a coverage guarantee and should
        not be used for medical or financial decisions. Verify all coverage details directly with
        your insurer.
      </div>

      <section className="ai-estimator-card">
        {/* Input row: procedure name + trigger button */}
        <div className="ai-estimator-controls">
          <label className="ai-input-label">
            Procedure or treatment
            <input
              value={estimateInput}
              onChange={(event) => setEstimateInput(event.target.value)}
              placeholder="e.g. physical therapy, imaging, specialist visit"
            />
          </label>
          <button type="button" className="estimate-button" onClick={handleEstimate}>
            Estimate coverage
          </button>
        </div>

        {/* Output panel: shows the latest estimate or the initial prompt */}
        <div className="ai-estimate-output">
          <p>{aiEstimate}</p>
        </div>
      </section>
    </div>
  );
};

export default AICoverageEstimator;
