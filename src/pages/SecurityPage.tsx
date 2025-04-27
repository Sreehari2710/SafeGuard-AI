import React from 'react';
import { SecurityDashboard } from '../components/security/SecurityDashboard';

export const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      <div className="flex">
        <div className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <header className="flex flex-col items-center justify-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Security Dashboard
              </h1>
              <p className="mt-3 text-gray-400 text-center max-w-2xl">
                Monitor overall security status and trends
              </p>
            </header>

            <SecurityDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};
