import { useState, useCallback, useMemo } from 'react';
import { Incident, SortOrder, SeverityFilter } from '../types/incident';
import { mockIncidents } from '../data/mockIncidents';

export const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  
  const addIncident = useCallback((incident: Omit<Incident, 'id' | 'reported_at'>) => {
    const newIncident: Incident = {
      ...incident,
      id: Math.max(0, ...incidents.map(inc => inc.id)) + 1,
      reported_at: new Date().toISOString()
    };
    
    setIncidents(prev => [...prev, newIncident]);
  }, [incidents]);
  
  const deleteIncident = useCallback((id: number) => {
    setIncidents(prev => prev.filter(incident => incident.id !== id));
  }, []);
  
  const filteredAndSortedIncidents = useMemo(() => {
    // First apply severity filter
    const filtered = severityFilter === 'All' 
      ? incidents 
      : incidents.filter(incident => incident.severity === severityFilter);
    
    // Then sort by date
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      
      return sortOrder === 'newest' 
        ? dateB - dateA 
        : dateA - dateB;
    });
  }, [incidents, sortOrder, severityFilter]);
  
  return {
    incidents: filteredAndSortedIncidents,
    sortOrder,
    severityFilter,
    setSortOrder,
    setSeverityFilter,
    addIncident,
    deleteIncident
  };
};