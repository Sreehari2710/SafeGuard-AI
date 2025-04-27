import React, { useState } from 'react';
import { Incident } from '../../types/incident';
import { AlertTriangle, Calendar, ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

interface IncidentCardProps {
  incident: Incident;
  onDelete: (id: number) => void;
}

export const IncidentCard: React.FC<IncidentCardProps> = ({ incident, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const getSeverityColor = (severity: Incident['severity']) => {
    switch (severity) {
      case 'Low':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'High':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/30';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };
  
  return (
    <div 
      className={`
        relative group w-full p-5 rounded-xl 
        bg-gray-900/60 backdrop-blur-md 
        border border-indigo-500/20
        shadow-lg hover:shadow-indigo-500/10
        transform transition-all duration-500
        ${expanded ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
        will-change-transform perspective-1000
      `}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-100 transition-colors">
            {incident.title}
          </h3>
          <button
            onClick={() => onDelete(incident.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-rose-500/20 text-rose-400"
            aria-label="Delete incident"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${getSeverityColor(incident.severity)}`}>
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>{incident.severity} Severity</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-indigo-400" />
            <span>{formatDate(incident.reported_at)}</span>
          </div>
        </div>
        
        <div 
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${expanded ? 'max-h-96 mt-3' : 'max-h-0'}
          `}
        >
          <p className="text-gray-300 leading-relaxed">
            {incident.description}
          </p>
        </div>
        
        <button
          onClick={toggleExpanded}
          className="flex items-center gap-1.5 self-start mt-1 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              View Details
            </>
          )}
        </button>
      </div>
      
      {/* Glowing effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl pointer-events-none
          transition-opacity duration-700 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5
        `}
      ></div>
    </div>
  );
};