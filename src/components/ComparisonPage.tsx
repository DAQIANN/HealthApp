import { useState } from 'react';
import ServiceComparison from './ServiceComparison';
import { services } from '../data/mockData';

// Page container for service comparison; owns selected-service state and passes it down
const ComparisonPage = () => {
  // Default to services 1 and 3 selected so the comparison table is non-empty on first load
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([1, 3]);

  // Toggles a service in or out of the selection list
  const toggleService = (id: number) => {
    setSelectedServiceIds((current) =>
      current.includes(id) ? current.filter((serviceId) => serviceId !== id) : [...current, id]
    );
  };

  return (
    <div className="page-content">
      <div className="page-heading">
        <h2>Service comparison</h2>
        <p>Choose several services and compare coverage likelihood, cost, and outcomes side by side.</p>
      </div>
      <ServiceComparison services={services} selectedIds={selectedServiceIds} onToggle={toggleService} />
    </div>
  );
};

export default ComparisonPage;
