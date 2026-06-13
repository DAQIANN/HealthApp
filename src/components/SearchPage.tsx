import { useMemo, useState } from 'react';
import HealthSearch from './HealthSearch';
import { searchCatalog } from '../data/mockData';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const filteredResults = useMemo(
    () =>
      searchCatalog.filter((item) =>
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
