
import React from 'react';
import { ViewType } from '../types';
import { LayoutDashboard, Home, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onViewChange(ViewType.LANDING)}
        >
          <div className="bg-emerald-600 p-1.5 rounded-lg group-hover:bg-emerald-700 transition-colors">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-emerald-900">Eco Gram</span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => onViewChange(ViewType.LANDING)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentView === ViewType.LANDING 
                ? 'bg-emerald-100 text-emerald-800 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Home className="w-4 h-4" />
            Homepage
          </button>
          <button
            onClick={() => onViewChange(ViewType.DASHBOARD)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentView === ViewType.DASHBOARD 
                ? 'bg-emerald-100 text-emerald-800 shadow-sm' 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
