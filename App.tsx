
import React, { useState } from 'react';
import { ViewType } from './types';
import LandingPage from './components/LandingPage';
import GISDashboard from './components/GISDashboard';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>(ViewType.LANDING);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentView={view} onViewChange={setView} />
      <main>
        {view === ViewType.LANDING ? (
          <LandingPage onEnterDashboard={() => setView(ViewType.DASHBOARD)} />
        ) : (
          <GISDashboard />
        )}
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">Eco Gram</h3>
            <p className="text-sm max-w-md">Empowering farmers through digital MRV and high-yield carbon assets, driving the digital revolution for a rural green economy.</p>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => setView(ViewType.LANDING)}
              className="text-sm hover:text-white transition-colors"
            >
              Homepage
            </button>
            <button 
              onClick={() => setView(ViewType.DASHBOARD)}
              className="text-sm hover:text-white transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-xs opacity-60">
          © {new Date().getFullYear()} Eco Gram. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
