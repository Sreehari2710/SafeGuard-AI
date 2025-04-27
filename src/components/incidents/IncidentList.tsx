import React from 'react';
import { Incident, SortOrder, SeverityFilter } from '../../types/incident';
import { IncidentCard } from './IncidentCard';
import { FilterControls } from '../ui/FilterControls';

interface IncidentListProps {
  incidents: Incident[];
  sortOrder: SortOrder;
  severityFilter: SeverityFilter;
  onSortChange: (order: SortOrder) => void;
  onFilterChange: (filter: SeverityFilter) => void;
  onDelete: (id: number) => void;
}

export const IncidentList: React.FC<IncidentListProps> = ({
  incidents,
  sortOrder,
  severityFilter,
  onSortChange,
  onFilterChange,
  onDelete
}) => {
  return (
    <div className="w-full">
      <FilterControls 
        sortOrder={sortOrder}
        severityFilter={severityFilter}
        onSortChange={onSortChange}
        onFilterChange={onFilterChange}
      />
      
      <div className="grid grid-cols-1 gap-6 w-full">
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <IncidentCard 
              key={incident.id} 
              incident={incident} 
              onDelete={onDelete} 
            />
          ))
        ) : (
          <div className="py-12 px-6 text-center rounded-xl bg-gray-900/40 backdrop-blur-sm border border-indigo-500/10">
            <p className="text-gray-400">No incidents found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};