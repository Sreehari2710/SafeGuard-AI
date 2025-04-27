import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const SecurityDashboard: React.FC = () => {
  // Sample data
  const incidentsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Low Severity',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
      },
      {
        label: 'Medium Severity',
        data: [8, 15, 7, 10, 5, 8],
        backgroundColor: 'rgba(245, 158, 11, 0.6)',
      },
      {
        label: 'High Severity',
        data: [3, 5, 2, 4, 1, 2],
        backgroundColor: 'rgba(239, 68, 68, 0.6)',
      },
    ],
  };

  const severityDistribution = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Incidents Over Time</h3>
        <Bar 
          data={incidentsData} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#E5E7EB'
                }
              },
            },
            scales: {
              x: {
                grid: {
                  color: 'rgba(79, 70, 229, 0.1)'
                },
                ticks: {
                  color: '#9CA3AF'
                }
              },
              y: {
                grid: {
                  color: 'rgba(79, 70, 229, 0.1)'
                },
                ticks: {
                  color: '#9CA3AF'
                }
              }
            }
          }} 
        />
      </div>
      
      <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Severity Distribution</h3>
        <Pie 
          data={severityDistribution} 
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: '#E5E7EB'
                }
              },
            },
          }} 
        />
      </div>
      
      <div className="lg:col-span-2 bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Security Advisories</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-amber-500/20">
            <h4 className="font-medium text-amber-400 mb-2">Monitor AI Model Drift</h4>
            <p className="text-gray-300">
              Regularly check for model performance degradation which might indicate safety issues.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20">
            <h4 className="font-medium text-indigo-400 mb-2">Implement Input Validation</h4>
            <p className="text-gray-300">
              Ensure all inputs to your AI systems are properly validated to prevent adversarial attacks.
            </p>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-rose-500/20">
            <h4 className="font-medium text-rose-400 mb-2">High Severity Incident Protocol</h4>
            <p className="text-gray-300">
              Immediately isolate affected systems and notify all stakeholders when high severity incidents occur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};