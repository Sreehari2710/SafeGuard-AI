import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldAlert,
  Shield,
  FileBarChart,
  PieChart,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`group w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/10 transform hover:scale-[1.02] hover:translate-z-4 ${
      active ? 'bg-indigo-500/20 text-indigo-400' : 'text-gray-400 hover:text-indigo-300'
    }`}
    style={{
      transform: `translateZ(${active ? '20px' : '0'})`,
      transformStyle: 'preserve-3d',
    }}
  >
    <div
      className={`
        w-5 h-5 transition-transform duration-300
        ${collapsed ? 'scale-110' : ''}
        group-hover:rotate-[10deg] group-hover:scale-110
      `}
    >
      {icon}
    </div>
    <span
      className={`
        font-medium whitespace-nowrap transition-all duration-300
        ${collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
      `}
    >
      {label}
    </span>

    {/* Tooltip for collapsed state */}
    {collapsed && (
      <div className="
        absolute left-full ml-2 px-2 py-1 
        bg-gray-800 text-white text-sm rounded-md
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none
        z-50
      ">
        {label}
      </div>
    )}
  </button>
);

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  const handleNavigation = (path: string) => {
    setActiveItem(path);
    navigate(`/${path.toLowerCase()}`);
  };

  const handleLogout = () => {
    // Perform logout logic here
    navigate('/auth');
  };

  return (
    <div
      className={`relative flex flex-col ${collapsed ? 'w-20' : 'w-64'} h-screen bg-gray-900/60 backdrop-blur-xl border-r border-indigo-500/20 shadow-xl shadow-indigo-500/5 transition-all duration-300 ease-in-out`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={toggleCollapse}
        className="absolute -right-3 top-12 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 transition-all duration-300 transform hover:scale-110 z-50"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Logo */}
      <div
        className={`px-4 py-8 transition-all duration-300 ${
          collapsed ? 'text-center' : ''
        }`}
      >
        <h2
          className={`font-bold text-white transition-all duration-300 ${
            collapsed ? 'text-lg' : 'text-xl'
          }`}
        >
          {collapsed ? '' : 'SafeGuard AI'}
        </h2>
      </div>

      {/* Main Navigation Items - with flex-grow to push logout to bottom */}
      <nav className="flex-grow space-y-2 px-4 overflow-y-auto">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          active={activeItem === 'Dashboard'}
          onClick={() => handleNavigation('Dashboard')}
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<ShieldAlert />}
          label="Incidents"
          active={activeItem === 'Incidents'}
          onClick={() => handleNavigation('Incidents')}
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<Shield />}
          label="Security"
          active={activeItem === 'Security'}
          onClick={() => handleNavigation('Security')}
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<FileBarChart />}
          label="Reports"
          active={activeItem === 'Reports'}
          onClick={() => handleNavigation('Reports')}
          collapsed={collapsed}
        />
        <SidebarItem
          icon={<PieChart />}
          label="Analytics"
          active={activeItem === 'Analytics'}
          onClick={() => handleNavigation('Analytics')}
          collapsed={collapsed}
        />
      </nav>

      {/* Logout Section - at the bottom */}
      <div className="px-4 py-4 mt-auto border-t border-indigo-500/10">
        <SidebarItem
          icon={<LogOut />}
          label="Logout"
          onClick={handleLogout}
          collapsed={collapsed}
        />
      </div>
    </div>
  );
};