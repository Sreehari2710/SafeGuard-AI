import React from 'react';
import { IncidentList } from '../incidents/IncidentList';
import { IncidentForm } from '../form/IncidentForm';
import { Sidebar } from '../navigation/Sidebar';
import { useIncidents } from '../../hooks/useIncidents';
import { Bot, ShieldAlert } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const {
    incidents,
    sortOrder,
    severityFilter,
    setSortOrder,
    setSeverityFilter,
    addIncident,
    deleteIncident
  } = useIncidents();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <header className="flex flex-col items-center justify-center mb-12">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500/20 mb-4">
                <ShieldAlert className="h-8 w-8 text-indigo-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                AI Safety Incident Dashboard
              </h1>
              <p className="mt-3 text-gray-400 text-center max-w-2xl">
                Monitor and manage potential AI safety incidents with our advanced 3D dashboard
              </p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div 
                  className="relative"
                  style={{
                    perspective: '1000px',
                  }}
                >
                  {/* Floating effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-xl blur-xl"></div>
                  
                  {/* Glowing grid lines */}
                  <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMC4yIiBvcGFjaXR5PSIwLjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=')]"></div>
                  
                  <IncidentList 
                    incidents={incidents}
                    sortOrder={sortOrder}
                    severityFilter={severityFilter}
                    onSortChange={setSortOrder}
                    onFilterChange={setSeverityFilter}
                    onDelete={deleteIncident}
                  />
                </div>
              </div>
              
              <div 
                className="lg:col-span-1"
                style={{
                  perspective: '1000px',
                }}
              >
                {/* Floating effect for form */}
                <div className="relative">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-xl blur-xl"></div>
                  <IncidentForm onSubmit={addIncident} />
                </div>
              </div>
            </div>
            
            <footer className="mt-20 py-6 text-center text-gray-500 text-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="h-4 w-4" />
                <span>AI SAFETY INITIATIVE</span>
              </div>
              <p>© 2025 SafeGuard AI. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};