
import React from 'react';
import { Sun, TreeDeciduous, Wind, Droplets, Leaf, Activity, Map as MapIcon, BarChart3, TrendingUp, Users } from 'lucide-react';

export const PILLARS = [
  {
    id: 'renewable-energy',
    title: 'Renewable RE',
    description: 'Verified grid displacement via decentralised Solar RE and Solar Pumps.',
    icon: <Sun className="w-8 h-8 text-amber-500" />,
    color: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'nature-assets',
    title: 'Nature Asset',
    description: 'Satellite-tracked agroforestry sequestration credits from existing and new trees.',
    icon: <TreeDeciduous className="w-8 h-8 text-emerald-600" />,
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'biogas-yield',
    title: 'Biogas Yield',
    description: 'Methane capture avoidance via community Biogas (Gobar Gas) digestion.',
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'organic-soil',
    title: 'Organic Soil',
    description: 'Regenerative organic practices for SOC (Soil Organic Carbon) enhancement.',
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    color: 'bg-green-50',
    borderColor: 'border-green-200'
  }
];

export const STATS = [
  { label: 'Additional Income / Ha', value: '₹50,000', icon: <TrendingUp className="w-5 h-5" /> },
  { label: 'Profit Margin Increase', value: '40-60%', icon: <Activity className="w-5 h-5" /> },
  { label: 'Asset Management Scale', value: '$100M+', icon: <BarChart3 className="w-5 h-5" /> },
  { label: 'Farmers Impacted', value: '10,000+', icon: <Users className="w-5 h-5" /> },
];
