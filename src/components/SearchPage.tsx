import { useMemo, useState } from 'react';
import HealthSearch from './HealthSearch';
import { searchCatalog } from '../data/mockData';

// Page container for disease/treatment search; owns query state and filters the catalog
const SearchPage = () => {
  const [query, setQuery] = useState('');

  // Filter runs on every keystroke; memoized so the catalog isn't re-scanned on unrelated renders
  const filteredResults = useMemo(
    () =>
      searchCatalog.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.summary.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="page-content">
      <div className="page-heading">
        <h2>Search diseases and treatments</h2>
        <p>Explore healthcare conditions and treatment options using keyword search.</p>
      </div>
      <HealthSearch query={query} onQueryChange={setQuery} results={filteredResults} />
    </div>
  );
};

export default SearchPage;
