import React from 'react';
import { Download, FileText, FileSpreadsheet } from 'lucide-react';

export const ReportsPage: React.FC = () => {
  const generatePDFReport = () => {
    // PDF generation logic
    console.log('Generating PDF report...');
  };

  const generateExcelReport = () => {
    // Excel generation logic
    console.log('Generating Excel report...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="flex flex-col items-center justify-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            Incident Reports
          </h1>
          <p className="mt-3 text-gray-400 text-center max-w-2xl">
            Generate and download detailed incident reports
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekly Summary Card */}
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Weekly Summary</h3>
            <p className="text-gray-300 mb-6">
              Download a summary report of all incidents from the past week.
            </p>
            <button
              onClick={generatePDFReport}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500/80 text-white transition-all duration-300"
            >
              <FileText className="h-5 w-5" />
              Download PDF
            </button>
          </div>

          {/* Full Data Export Card */}
          <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Full Data Export</h3>
            <p className="text-gray-300 mb-6">
              Export all incident data in Excel format for further analysis.
            </p>
            <button
              onClick={generateExcelReport}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-purple-600/80 hover:bg-purple-500/80 text-white transition-all duration-300"
            >
              <FileSpreadsheet className="h-5 w-5" />
              Download Excel
            </button>
          </div>

          {/* Custom Report Card */}
          <div className="md:col-span-2 bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4">Custom Report</h3>
            <p className="text-gray-300 mb-4">
              Generate a custom report based on your selected criteria:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-indigo-300 mb-1">Date Range</label>
                <select className="w-full px-3 py-2 rounded-lg bg-gray-800/80 border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Custom range</option>
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-indigo-300 mb-1">Severity</label>
                <select className="w-full px-3 py-2 rounded-lg bg-gray-800/80 border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
                  <option>All severities</option>
                  <option>Low only</option>
                  <option>Medium only</option>
                  <option>High only</option>
                </select>
              </div>

              {/* Format */}
              <div>
                <label className="block text-sm font-medium text-indigo-300 mb-1">Format</label>
                <select className="w-full px-3 py-2 rounded-lg bg-gray-800/80 border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>
                </select>
              </div>
            </div>

            <button
              onClick={generatePDFReport}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              Generate Custom Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
