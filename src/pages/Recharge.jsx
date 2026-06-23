import React from 'react';
import { Gamepad2, Brain, Puzzle, Coffee } from 'lucide-react';

const Recharge = () => {
  return (
    <div className="recharge-page">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-3 mb-2">
          <Gamepad2 className="text-accent-purple" size={36} />
          <span>Recharge Zone</span>
        </h1>
        <p className="text-muted max-w-lg mx-auto">Take a controlled break to refresh your mind. These short activities are designed to improve focus when you return to learning.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="glass-card group flex flex-col items-center text-center border-accent-purple/20 hover:border-accent-purple">
          <div className="w-20 h-20 rounded-2xl bg-[rgba(167,139,250,0.1)] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
            <Brain size={40} className="text-accent-purple" />
          </div>
          <h3 className="text-xl font-bold mb-2">Memory Match</h3>
          <p className="text-sm text-muted mb-6">Test your memory with science symbols and formulas. Limit: 3 mins.</p>
          <button className="btn btn-secondary w-full mt-auto" style={{borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)'}}>Play Now</button>
        </div>

        <div className="glass-card group flex flex-col items-center text-center border-accent-teal/20 hover:border-accent-teal">
          <div className="w-20 h-20 rounded-2xl bg-[rgba(45,212,191,0.1)] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
            <Puzzle size={40} className="text-accent-teal" />
          </div>
          <h3 className="text-xl font-bold mb-2">Periodic Puzzle</h3>
          <p className="text-sm text-muted mb-6">Arrange the elements correctly. Limit: 5 mins.</p>
          <button className="btn btn-secondary w-full mt-auto border-accent-teal text-accent-teal">Play Now</button>
        </div>

        <div className="glass-card group flex flex-col items-center text-center border-accent-blue/20 hover:border-accent-blue">
          <div className="w-20 h-20 rounded-2xl bg-[rgba(96,165,250,0.1)] flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
            <Coffee size={40} className="text-accent-blue" />
          </div>
          <h3 className="text-xl font-bold mb-2">Guided Breathing</h3>
          <p className="text-sm text-muted mb-6">A 2-minute visual breathing exercise to calm your nerves before a quiz.</p>
          <button className="btn btn-secondary w-full mt-auto border-accent-blue text-accent-blue">Start Breathing</button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-muted uppercase tracking-widest">Games are automatically locked during study sessions and break modes to ensure focused learning.</p>
      </div>
    </div>
  );
};

export default Recharge;
