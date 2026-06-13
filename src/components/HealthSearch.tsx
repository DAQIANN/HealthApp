// Presentational component: renders a search input and a filtered list of results.
// Heading/description are owned by SearchPage so they aren't duplicated here.

type HealthSearchResult = {
  id: number;
  title: string;
  type: 'Disease' | 'Treatment';
  summary: string;
};

type HealthSearchProps = {
  query: string;
  onQueryChange: (value: string) => void;
  results: HealthSearchResult[];
};

const HealthSearch = ({ query, onQueryChange, results }: HealthSearchProps) => (
  <div className="health-search">
    {/* Controlled search input — filtering logic lives in SearchPage */}
    <label className="search-input-label">
      <span className="sr-only">Search</span>
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search for a disease, treatment, or service"
      />
    </label>

    {/* Result cards, or an empty state when nothing matches */}
    <div className="search-list">
      {results.length > 0 ? (
        results.map((item) => (
          <article key={item.id} className="search-card">
            <div className="search-card-header">
              <h3>{item.title}</h3>
              <span className="badge">{item.type}</span>
            </div>
            <p>{item.summary}</p>
          </article>
        ))
      ) : (
        <div className="empty-state">No results found. Try a different keyword.</div>
      )}
    </div>
  </div>
);

export default HealthSearch;
