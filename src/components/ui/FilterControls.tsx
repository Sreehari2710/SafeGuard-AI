import React from 'react';
import { SortOrder, SeverityFilter } from '../../types/incident';
import { ArrowDownAZ, ArrowUpAZ, Filter } from 'lucide-react';

interface FilterControlsProps {
  sortOrder: SortOrder;
  severityFilter: SeverityFilter;
  onSortChange: (order: SortOrder) => void;
  onFilterChange: (filter: SeverityFilter) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  sortOrder,
  severityFilter,
  onSortChange,
  onFilterChange
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full z-10 mb-8 p-4 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-indigo-500/20 shadow-lg transform hover:shadow-indigo-500/10 transition-all duration-300">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-indigo-400" />
        <span className="text-indigo-300 font-medium">Filter by Severity:</span>
        <div className="flex gap-2">
          {(['All', 'Low', 'Medium', 'High'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                severityFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-indigo-300 font-medium">Sort by Date:</span>
        <div className="flex gap-2">
          <button
            onClick={() => onSortChange('newest')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              sortOrder === 'newest'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <ArrowDownAZ className="h-4 w-4" />
            Newest First
          </button>
          <button
            onClick={() => onSortChange('oldest')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              sortOrder === 'oldest'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <ArrowUpAZ className="h-4 w-4" />
            Oldest First
          </button>
        </div>
      </div>
    </div>
  );
};