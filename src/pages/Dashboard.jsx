import React from 'react';
import { PlayCircle, Target, Award, Clock, BookOpen, AlertTriangle } from 'lucide-react';
import { useHealthGuard } from '../context/HealthGuardContext';

const Dashboard = () => {
  const { triggerBreak } = useHealthGuard();

  return (
    <div className="dashboard">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-muted">You've completed 65% of your weekly goals. Keep it up!</p>
        </div>
        
        {/* Testing Button for Health Guard */}
        <button 
          onClick={triggerBreak}
          className="btn btn-secondary flex items-center gap-2"
          title="Test the Break Mode overlay"
        >
          <AlertTriangle size={18} className="text-accent-red" />
          <span>Test Break Mode</span>
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="glass-card flex items-center gap-4">
          <div className="p-3 bg-[rgba(45,212,191,0.1)] rounded-lg text-accent-teal" style={{backgroundColor: 'rgba(45,212,191,0.1)'}}>
            <Target size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">12</h3>
            <p className="text-sm text-muted">Chapters Completed</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4">
          <div className="p-3 bg-[rgba(96,165,250,0.1)] rounded-lg text-accent-blue" style={{backgroundColor: 'rgba(96,165,250,0.1)'}}>
            <Clock size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">24h 15m</h3>
            <p className="text-sm text-muted">Study Time</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4">
          <div className="p-3 bg-[rgba(167,139,250,0.1)] rounded-lg text-accent-purple" style={{backgroundColor: 'rgba(167,139,250,0.1)'}}>
            <Award size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">8</h3>
            <p className="text-sm text-muted">Badges Earned</p>
          </div>
        </div>
        <div className="glass-card flex items-center gap-4">
          <div className="p-3 bg-[rgba(52,211,153,0.1)] rounded-lg text-accent-green" style={{backgroundColor: 'rgba(52,211,153,0.1)'}}>
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold">85%</h3>
            <p className="text-sm text-muted">Avg Quiz Score</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
          <div className="glass-card p-0 overflow-hidden mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-800 relative min-h-[150px]" style={{background: 'linear-gradient(45deg, #1C273A, #2b384e)'}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={48} className="text-white opacity-80" />
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <span className="text-xs text-accent-teal font-bold uppercase tracking-wider mb-2">Physics • Chapter 4</span>
                <h3 className="text-lg font-bold mb-2">Refraction of Light at Curved Surfaces</h3>
                <p className="text-sm text-muted mb-4">Understand how lenses form images and the physics behind human vision.</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-black/30 rounded-full h-2">
                    <div className="bg-accent-teal h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-xs text-muted">45%</span>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mb-4">Recommended Experiments</h2>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="glass-card">
               <h4 className="font-bold mb-2">Focal Length of Convex Lens</h4>
               <p className="text-sm text-muted mb-4">Virtual lab simulation.</p>
               <button className="btn btn-secondary w-full text-sm">Start Experiment</button>
             </div>
             <div className="glass-card">
               <h4 className="font-bold mb-2">Ohm's Law Verification</h4>
               <p className="text-sm text-muted mb-4">Virtual lab simulation.</p>
               <button className="btn btn-secondary w-full text-sm">Start Experiment</button>
             </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Upcoming Goals</h2>
          <div className="glass-panel p-6">
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-accent-teal flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-medium text-sm">Complete Physics Chapter 4 Quiz</h4>
                  <p className="text-xs text-muted">Due Today</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-accent-blue flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-medium text-sm">Review Chemistry Model Paper</h4>
                  <p className="text-xs text-muted">Due Tomorrow</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-border-glass-strong flex-shrink-0 mt-1 bg-accent-green"></div>
                <div>
                  <h4 className="font-medium text-sm line-through text-muted">Read Biology Chapter 2</h4>
                  <p className="text-xs text-muted">Completed</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 glass-card bg-gradient-to-br from-[rgba(167,139,250,0.1)] to-transparent border-accent-purple/30">
            <h3 className="font-bold text-accent-purple mb-2">Need a break?</h3>
            <p className="text-sm text-muted mb-4">You've been studying for 45 minutes. Play a quick memory game to refresh your mind.</p>
            <button className="btn btn-primary w-full text-sm" style={{background: 'var(--accent-purple)', color: '#fff'}}>Go to Recharge Zone</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
