import React, { useState } from 'react';
import { FlaskConical, Beaker, PlayCircle, Info } from 'lucide-react';

const Lab = () => {
  const [activeTab, setActiveTab] = useState('experiments');

  const experiments = [
    { title: "Ohm's Law Verification", subject: "Physics", icon: PlayCircle },
    { title: "Focal Length of Convex Lens", subject: "Physics", icon: PlayCircle },
    { title: "Testing Acids and Bases", subject: "Chemistry", icon: PlayCircle },
    { title: "Stomata Observation", subject: "Biology", icon: PlayCircle },
  ];

  const equipment = [
    { name: "Microscope", desc: "Used to observe small objects", icon: Beaker },
    { name: "Voltmeter", desc: "Measures electrical potential difference", icon: Beaker },
    { name: "Convex Lens", desc: "Converging lens", icon: Beaker },
    { name: "Litmus Paper", desc: "pH indicator", icon: Beaker },
  ];

  return (
    <div className="lab-page h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-3 mb-2">
          <FlaskConical className="text-accent-teal" /> Virtual Laboratory
        </h1>
        <p className="text-muted">Perform experiments and explore scientific equipment safely online.</p>
      </div>

      <div className="flex gap-4 mb-6 border-b border-border-glass pb-2">
        <button 
          className={`font-medium pb-2 px-2 transition-colors ${activeTab === 'experiments' ? 'text-accent-teal border-b-2 border-accent-teal' : 'text-muted hover:text-text-primary'}`}
          onClick={() => setActiveTab('experiments')}
        >
          Virtual Experiments
        </button>
        <button 
          className={`font-medium pb-2 px-2 transition-colors ${activeTab === 'equipment' ? 'text-accent-teal border-b-2 border-accent-teal' : 'text-muted hover:text-text-primary'}`}
          onClick={() => setActiveTab('equipment')}
        >
          Equipment Explorer
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-8">
        {activeTab === 'experiments' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, idx) => (
              <div key={idx} className="glass-card group flex flex-col items-center text-center">
                <div className="w-full h-32 bg-bg-primary rounded-lg mb-4 flex items-center justify-center border border-border-glass relative overflow-hidden group-hover:border-accent-teal transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,212,191,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <exp.icon size={48} className="text-muted group-hover:text-accent-teal transition-colors relative z-10" />
                </div>
                <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                <p className="text-xs text-accent-teal uppercase tracking-wider mb-4">{exp.subject}</p>
                <button className="btn btn-secondary w-full mt-auto">Start Experiment</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'equipment' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, idx) => (
              <div key={idx} className="glass-card flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-bg-primary border border-border-glass flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-accent-blue" />
                </div>
                <h3 className="font-bold mb-2">{item.name}</h3>
                <p className="text-xs text-muted mb-4">{item.desc}</p>
                <button className="text-xs text-accent-blue flex items-center gap-1 hover:underline mt-auto">
                  <Info size={14} /> View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lab;
