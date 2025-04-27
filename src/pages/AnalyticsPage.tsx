import React from 'react';
import { Line, Pie } from 'react-chartjs-2';  // Import Pie chart component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const AnalyticsPage: React.FC = () => {
  // Sample data
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Total Incidents',
        data: [12, 19, 15, 8, 12, 15, 18],
        borderColor: 'rgba(99, 102, 241, 0.8)',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const systemDistribution = {
    labels: ['ChatGPT', 'Bard', 'Claude', 'LLaMA', 'Other'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(99, 102, 241, 0.7)',
          'rgba(236, 72, 153, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(156, 163, 175, 0.7)'
        ],
        borderColor: [
          'rgba(99, 102, 241, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(156, 163, 175, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      <div className="flex">
        <div className="flex-1">
          <div className="container mx-auto px-4 py-12">
            <header className="flex flex-col items-center justify-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Incident Analytics
              </h1>
              <p className="mt-3 text-gray-400 text-center max-w-2xl">
                Visual insights into AI safety incident patterns
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Monthly Incident Trends</h3>
                <Line 
                  data={trendData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        labels: {
                          color: '#E5E7EB'
                        }
                      }
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
                <h3 className="text-xl font-bold text-white mb-4">Incidents by AI System</h3>
                <div className="h-full">
                  <Pie 
                    data={systemDistribution} 
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: {
                            color: '#E5E7EB'
                          }
                        }
                      }
                    }} 
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Common Incident Patterns</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20">
                    <h4 className="font-medium text-indigo-400 mb-2">Bias Detection</h4>
                    <p className="text-gray-300 text-sm">
                      42% of incidents related to biased outputs or unfair treatment
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-amber-500/20">
                    <h4 className="font-medium text-amber-400 mb-2">Prompt Injection</h4>
                    <p className="text-gray-300 text-sm">
                      28% of incidents involved prompt injection attacks
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-rose-500/20">
                    <h4 className="font-medium text-rose-400 mb-2">Misinformation</h4>
                    <p className="text-gray-300 text-sm">
                      22% of incidents involved false or misleading information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
