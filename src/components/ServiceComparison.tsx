import { Service } from '../data/mockData';

type ServiceComparisonProps = {
  services: Service[];
  selectedIds: number[];
  onToggle: (id: number) => void;
};

const ServiceComparison = ({ services, selectedIds, onToggle }: ServiceComparisonProps) => {
  const selectedServices = services.filter((service) => selectedIds.includes(service.id));

  return (
    <div className="service-comparison">
      <div className="comparison-header">
        <h2>Compare healthcare services</h2>
        <p>Select the services you want to evaluate side by side.</p>
      </div>

      <div className="service-toggle-list">
        {services.map((service) => (
          <label key={service.id} className="service-toggle">
            <input
              type="checkbox"
              checked={selectedIds.includes(service.id)}
              onChange={() => onToggle(service.id)}
            />
            <span>{service.name}</span>
          </label>
        ))}
      </div>

      <div className="comparison-cards">
        {selectedServices.length > 0 ? (
          selectedServices.map((service) => (
            <article key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p className="category-label">{service.category}</p>
              <p>{service.description}</p>
              <ul>
                <li>
                  <strong>Monthly cost:</strong> ${service.monthlyCost}
                </li>
                <li>
                  <strong>Effectiveness:</strong> {service.effectiveness}%
                </li>
                <li>
                  <strong>Patient satisfaction:</strong> {service.satisfaction}%
                </li>
                <li>
                  <strong>Coverage likelihood:</strong> {service.coverageLikelihood}%
                </li>
              </ul>
            </article>
          ))
        ) : (
          <div className="empty-state">Select one or more services to compare.</div>
        )}
      </div>
    </div>
  );
};

export default ServiceComparison;
