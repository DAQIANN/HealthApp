type TermsOfServiceProps = {
  onAccept: () => void;
};

// Blocking modal shown on first visit; user must accept before accessing the app
const TermsOfService = ({ onAccept }: TermsOfServiceProps) => (
  <div className="tos-overlay" role="dialog" aria-modal="true" aria-labelledby="tos-title">
    <div className="tos-modal">
      <div className="tos-header">
        <h2 id="tos-title">Terms of Use</h2>
        <p className="tos-subtitle">Please read and accept before continuing</p>
      </div>

      <div className="tos-body">
        <section>
          <h3>Informational purposes only</h3>
          <p>
            Healthcare Plan Explorer is an educational tool. Nothing on this site constitutes
            medical, clinical, financial, or insurance advice, and no professional relationship
            of any kind is created by using it.
          </p>
        </section>

        <section>
          <h3>Simulated data</h3>
          <p>
            All plans, services, coverage likelihoods, cost tiers, and effectiveness ratings
            shown in this application are simulated. They do not represent real insurance
            products, actual coverage determinations, verified clinical outcomes, or the
            offerings of any specific insurer.
          </p>
        </section>

        <section>
          <h3>AI estimates</h3>
          <p>
            The Cost Predictor feature generates illustrative estimates only. These are not
            actuarial calculations, coverage guarantees, or predictions of any individual's
            out-of-pocket costs. Do not use them to make healthcare or financial decisions.
          </p>
        </section>

        <section>
          <h3>No liability</h3>
          <p>
            To the fullest extent permitted by law, the creators of this tool accept no
            liability for decisions made based on information presented here. Always verify
            coverage details directly with your insurer and consult a licensed healthcare
            or insurance professional before making any decisions.
          </p>
        </section>

        <section>
          <h3>No affiliation</h3>
          <p>
            This tool is not affiliated with, endorsed by, or sponsored by any insurance
            company, government health program, or healthcare provider.
          </p>
        </section>

        <section>
          <h3>Changes to these terms</h3>
          <p>
            These terms may be updated at any time. Continued use of the application
            constitutes acceptance of the current terms.
          </p>
        </section>
      </div>

      <div className="tos-actions">
        <p className="tos-consent-note">
          By clicking <strong>I Understand & Accept</strong> you confirm that you have read
          these terms and agree to use this tool for informational purposes only.
        </p>
        <button type="button" className="tos-accept-button" onClick={onAccept}>
          I Understand &amp; Accept
        </button>
      </div>
    </div>
  </div>
);

export default TermsOfService;
