import { useState } from 'react';
import ServiceComparison from './ServiceComparison';
import { services } from '../data/mockData';

const ComparisonPage = () => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<number[]>([1, 3]);

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
