
import React from 'react';
import { PILLARS, STATS } from '../constants';
import { ArrowRight, CheckCircle2, ShieldCheck, MapIcon, Layers } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const scalingData = [
  { year: 'Year 1', value: 5, label: 'Pilot' },
  { year: 'Year 2', value: 25 },
  { year: 'Year 3', value: 100, label: 'Expansion' },
  { year: 'Year 4', value: 280 },
  { year: 'Year 5', value: 500, label: 'Global Scaling' },
];

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Transforming <span className="text-emerald-400">Rural Assets</span> Into Financial Scale
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/80 mb-8 max-w-2xl font-light">
              Digital MRV: High-precision geospatial infrastructure turning traditional farming practices into verified carbon credits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onEnterDashboard}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/40"
              >
                Launch Monitoring System <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Digital MRV Dashboard Preview" 
                className="rounded-2xl opacity-90 brightness-110 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 p-6 rounded-2xl shadow-2xl border border-emerald-500 max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200 mb-1">Impact Verified</p>
                <p className="text-2xl font-bold">₹50K+</p>
                <p className="text-sm text-emerald-50">Additional Annual Income Per Hectare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest mb-4">Market Opportunity</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The Rural Green Economy</h3>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-rose-600 font-bold mb-4">The Current Stagnation</h4>
                <p className="text-slate-600 mb-4">
                  Typical Indian farmers earn only ₹80,000 – ₹1,20,000 per hectare annually. High verification costs and middleman gatekeepers (who siphon 80% of value) prevent individual access to carbon markets.
                </p>
                <div className="flex items-center gap-2 text-rose-700 font-medium text-sm italic">
                   <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                   Status: Manual audits are slow, expensive, and non-scalable.
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
                <h4 className="text-emerald-700 font-bold mb-4">The Eco Gram Edge</h4>
                <p className="text-slate-700 mb-4">
                  We aggregate village-level assets using remote sensing and IoT, reducing overhead by 70%. We create a scalable <b>"Digital Twin"</b> of every village farm for direct-to-farmer payouts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>70% overhead reduction via satellite AI</span>
                  </div>
                  <div className="flex items-start gap-3 text-emerald-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Direct-to-bank bypass of gatekeepers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Four Pillars of Revenue</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Digitizing every ecosystem service provided by the farm to maximize financial returns for smallholders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div 
                key={pillar.id} 
                className={`${pillar.color} border ${pillar.borderColor} p-8 rounded-3xl transition-transform hover:-translate-y-2 group`}
              >
                <div className="mb-6 transform transition-transform group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="h-px w-full bg-black/5 mb-6"></div>
                <ul className="space-y-2 text-xs font-semibold text-slate-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Digital Smart Metering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> Remote Verification</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Credit Logic */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Carbon Credit Calculation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-emerald-500/30 -z-0"></div>
             
             {[
               { title: 'Baseline Emission', desc: 'Current CO2 footprint from diesel & waste at Year 0.' },
               { title: 'Asset Sequestration', desc: 'Biomass gain & SOC increase via Satellite & Samples.' },
               { title: 'RE Displacement', desc: 'Quantifying fossil fuel avoided via Solar and Biogas.' },
               { title: 'Net Credit Minting', desc: '[Removal - Baseline]. Multi-factor market issuance.' }
             ].map((step, idx) => (
               <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative z-10 text-center">
                 <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white mb-4 mx-auto">
                   {idx + 1}
                 </div>
                 <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                 <p className="text-sm text-slate-400">{step.desc}</p>
               </div>
             ))}
          </div>

          <div className="mt-16 bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl text-center">
            <p className="text-emerald-400 font-mono text-xl md:text-2xl font-bold">
              Credits = (Avoided Baseline Emissions) + (New Sequestration Growth)
            </p>
          </div>
        </div>
      </section>

      {/* GIS & Scale Visualization */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">GIS & Remote Sensing: The Backbone</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our platform provides "Monitoring, Reporting, and Verification" (MRV) at millimetric precision across thousands of small plots.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 border border-slate-100 flex-shrink-0">
                    <MapIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Cadastral Mapping</h5>
                    <p className="text-sm text-slate-500">Plot-level geo-fencing to ensure zero double-counting of carbon assets.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 border border-slate-100 flex-shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Vegetation Indices</h5>
                    <p className="text-sm text-slate-500">NDVI/EVI tracking for real-time health and biomass growth analysis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 border border-slate-100 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Spectral Soil Mapping</h5>
                    <p className="text-sm text-slate-500">Estimating SOC content from multispectral data without expensive manual sampling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h4 className="text-center font-bold text-slate-400 mb-8 uppercase tracking-widest text-xs">Projected Portfolio Scaling</h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={scalingData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    />
                    <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex justify-between text-xs font-bold text-slate-400 px-2">
                <span>PILOT</span>
                <span>EXPANSION</span>
                <span>GLOBAL SCALE</span>
              </div>
              <p className="mt-8 text-center text-emerald-700 font-bold text-lg">$100M+ Carbon Assets Under Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Scale Rural Sustainability?</h2>
          <p className="text-xl text-emerald-100/80 mb-12 font-light">
            Join the digital revolution in carbon sequestration. Secure, verified, and high-yield infrastructure for the next generation of climate-resilient farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onEnterDashboard}
              className="bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all shadow-[0_0_0_8px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
