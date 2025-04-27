import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/Dashboard';
import { AuthPage } from './pages/AuthPage';
import { SecurityPage } from './pages/SecurityPage';
import { ReportsPage } from './pages/ReportsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

function App() {
return (
<Router>
<Routes>
<Route path="/auth" element={<AuthPage />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/incidents" element={<Dashboard />} />
<Route path="/security" element={<SecurityPage />} />
<Route path="/reports" element={<ReportsPage />} />
<Route path="/analytics" element={<AnalyticsPage />} />
<Route path="/" element={<AuthPage />} />
</Routes>
</Router>
);
}

export default App;