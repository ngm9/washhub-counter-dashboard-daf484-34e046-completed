import { SearchInput } from './SearchInput';

type OrderFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedService: string;
  services: string[];
  onServiceChange: (service: string) => void;
};

export function OrderFilters({ search, onSearchChange, selectedService, services, onServiceChange }: OrderFiltersProps) {
  return (
    <div className="filters-row" aria-label="Order filters">
      <SearchInput
        label="Search by order ID or customer"
        placeholder="Search by order ID or customer"
        value={search}
        onChange={onSearchChange}
        variant="filter"
      />
      <select
        className="filter-select"
        aria-label="Service filter"
        value={selectedService}
        onChange={(event) => onServiceChange(event.target.value)}
      >
        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
}