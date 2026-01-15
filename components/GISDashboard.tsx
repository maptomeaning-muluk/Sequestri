
import React, { useState, useEffect } from 'react';
import { Layers, Map as MapIcon, Sun, TreeDeciduous, Droplets, Leaf, Info, Filter, Search, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer, Cell } from 'recharts';

const mockPlots = [
  { id: 'PLOT-001', owner: 'Amara K.', size: 2.4, carbon: 42, ndvi: 0.82, trees: 140, solar: 5.5, biogas: 12 },
  { id: 'PLOT-002', owner: 'Ramesh S.', size: 1.8, carbon: 31, ndvi: 0.74, trees: 88, solar: 4.2, biogas: 8 },
  { id: 'PLOT-003', owner: 'Sita D.', size: 4.1, carbon: 85, ndvi: 0.91, trees: 210, solar: 8.0, biogas: 22 },
  { id: 'PLOT-004', owner: 'Vikram B.', size: 3.2, carbon: 58, ndvi: 0.78, trees: 165, solar: 6.1, biogas: 15 },
  { id: 'PLOT-005', owner: 'Kavita M.', size: 1.5, carbon: 22, ndvi: 0.65, trees: 45, solar: 2.8, biogas: 5 },
];

const GISDashboard: React.FC = () => {
  const [selectedPlot, setSelectedPlot] = useState(mockPlots[0]);
  const [activeLayer, setActiveLayer] = useState<'BASE' | 'NDVI' | 'SOLAR' | 'TREES'>('NDVI');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlots = mockPlots.filter(p => 
    p.owner.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getLayerColor = (val: number, type: string) => {
    if (type === 'NDVI') {
      if (val > 0.8) return 'bg-emerald-500';
      if (val > 0.7) return 'bg-emerald-400';
      return 'bg-amber-400';
    }
    return 'bg-emerald-600';
  };

  return (
    <div className="pt-16 h-screen flex overflow-hidden bg-slate-100">
      {/* Sidebar - Controls */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <MapIcon className="w-5 h-5 text-emerald-600" /> MRV Monitoring
          </h2>
          <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">Plot Inventory & GIS</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Layer Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Layers className="w-4 h-4" /> Imagery Layers
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'BASE', label: 'True Color (RGB)', icon: <MapIcon /> },
                { id: 'NDVI', label: 'Vegetation Index (NDVI)', icon: <Leaf /> },
                { id: 'TREES', label: 'Tree Canopy Map', icon: <TreeDeciduous /> },
                { id: 'SOLAR', label: 'Solar Potential', icon: <Sun /> },
              ].map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as any)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all border ${
                    activeLayer === layer.id 
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm' 
                      : 'border-slate-100 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-5 h-5 ${activeLayer === layer.id ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {React.cloneElement(layer.icon as React.ReactElement, { className: 'w-5 h-5' })}
                  </span>
                  {layer.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search & List */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter Plots
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search Plot ID or Owner..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-2 mt-4 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
              {filteredPlots.map((plot) => (
                <button
                  key={plot.id}
                  onClick={() => setSelectedPlot(plot)}
                  className={`w-full text-left p-3 rounded-xl transition-all border ${
                    selectedPlot.id === plot.id 
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg' 
                      : 'bg-white border-slate-100 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm">{plot.id}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold ${
                      selectedPlot.id === plot.id ? 'bg-white/20' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {plot.size} Ha
                    </span>
                  </div>
                  <div className="text-xs opacity-80">{plot.owner}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Map Simulation */}
      <div className="flex-1 relative flex flex-col">
        {/* Map Viewport */}
        <div className="flex-1 bg-slate-200 relative overflow-hidden">
          {/* Simulated Satellite Map Grid */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-8 opacity-40 grayscale pointer-events-none">
            {Array.from({length: 36}).map((_, i) => (
              <div key={i} className="border border-slate-400/20 bg-slate-300"></div>
            ))}
          </div>

          {/* Simulated Plot Outlines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* Main Selected Plot Shape */}
             <div className="relative transform hover:scale-105 transition-transform">
               <svg width="400" height="400" viewBox="0 0 100 100" className="drop-shadow-2xl">
                 <path 
                  d="M10,20 L80,15 L90,80 L15,85 Z" 
                  fill={activeLayer === 'NDVI' ? '#10b981' : activeLayer === 'SOLAR' ? '#f59e0b' : '#047857'} 
                  className={`transition-colors duration-500 ${activeLayer === 'NDVI' ? 'opacity-80' : 'opacity-60'}`}
                  stroke="white" 
                  strokeWidth="0.5" 
                />
                {/* Simulated Metadata Overlay */}
                <text x="50" y="50" textAnchor="middle" fill="white" className="text-[4px] font-bold uppercase opacity-60">
                  {selectedPlot.id} - Digital Twin
                </text>
               </svg>
               
               {/* Tree Dots if in Tree Layer */}
               {activeLayer === 'TREES' && (
                 <div className="absolute inset-0">
                    {Array.from({length: 20}).map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-1 h-1 bg-emerald-900 rounded-full" 
                        style={{
                          left: `${20 + Math.random() * 60}%`, 
                          top: `${20 + Math.random() * 60}%`
                        }}
                      ></div>
                    ))}
                 </div>
               )}
             </div>
          </div>

          {/* Map Controls */}
          <div className="absolute top-6 right-6 space-y-2">
            <div className="bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg border border-white/50 space-y-2">
              <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-lg text-slate-700 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-lg text-slate-700 transition-colors">
                <Info className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Carbon Accrual</span>
              </div>
              <div className="text-2xl font-black text-slate-900">{selectedPlot.carbon} <span className="text-sm font-normal text-slate-400">tCO2e</span></div>
              <div className="mt-2 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Solar Offset</span>
              </div>
              <div className="text-2xl font-black text-slate-900">{selectedPlot.solar} <span className="text-sm font-normal text-slate-400">kWp</span></div>
              <div className="mt-1 text-[10px] text-emerald-600 font-bold">Verified: 24/7 Smart Metering</div>
            </div>

            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <TreeDeciduous className="w-4 h-4 text-emerald-700" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Nature Assets</span>
              </div>
              <div className="text-2xl font-black text-slate-900">{selectedPlot.trees} <span className="text-sm font-normal text-slate-400">Trees</span></div>
              <div className="mt-1 text-[10px] text-slate-400">Resolution: 0.5m High Res AI</div>
            </div>

            <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Methane Capture</span>
              </div>
              <div className="text-2xl font-black text-slate-900">{selectedPlot.biogas} <span className="text-sm font-normal text-slate-400">m³/day</span></div>
              <div className="mt-1 text-[10px] text-blue-600 font-bold">Status: Active Digestor</div>
            </div>
          </div>
        </div>

        {/* Bottom Panel - Plot Deep Dive */}
        <div className="h-72 bg-white border-t border-slate-200 p-6 flex gap-8">
          <div className="w-1/3">
             <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-between">
                <span>Plot Metadata: {selectedPlot.id}</span>
                <button className="text-emerald-600 text-xs hover:underline flex items-center">Download Audit Report <ChevronRight className="w-3 h-3" /></button>
             </h3>
             <div className="grid grid-cols-2 gap-y-4 gap-x-8">
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Farmer Name</p>
                 <p className="text-sm font-semibold">{selectedPlot.owner}</p>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Verified Area</p>
                 <p className="text-sm font-semibold">{selectedPlot.size} Hectares</p>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Monitoring Status</p>
                 <div className="flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-sm font-semibold text-emerald-700">Live (S-2 Tracking)</span>
                 </div>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">Last Sync</p>
                 <p className="text-sm font-semibold">Today, 04:30 AM</p>
               </div>
             </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900">Carbon Credit Breakdown (Cumulative)</h3>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase text-slate-400">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-500 rounded-sm"></div> RE</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-400 rounded-sm"></div> Nature</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-300 rounded-sm"></div> Soil</div>
              </div>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockPlots} layout="vertical" margin={{ left: -20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="id" hide />
                  <ReTooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', fontSize: '12px'}}
                  />
                  <Bar dataKey="carbon" radius={[0, 4, 4, 0]}>
                    {mockPlots.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.id === selectedPlot.id ? '#059669' : '#e2e8f0'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISDashboard;
