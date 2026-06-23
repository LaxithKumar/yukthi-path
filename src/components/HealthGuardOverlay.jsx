import React from 'react';
import { useHealthGuard } from '../context/HealthGuardContext';
import { ShieldAlert, Droplets, EyeOff } from 'lucide-react';
import './HealthGuardOverlay.css';

const HealthGuardOverlay = () => {
  const { isBreakMode, breakTimeRemaining, skipBreak } = useHealthGuard();

  if (!isBreakMode) return null;

  const minutes = Math.floor(breakTimeRemaining / 60);
  const seconds = breakTimeRemaining % 60;

  return (
    <div className="health-guard-overlay">
      <div className="health-guard-card glass-panel">
        <div className="health-header">
          <ShieldAlert size={48} className="text-gradient mb-4" />
          <h2 className="health-title">Wellness Break Mode Active</h2>
          <p className="text-muted text-center mb-6">
            You've been studying for a while. It's time to rest your eyes, hydrate, and stretch. Learning modules are temporarily locked to ensure healthy habits.
          </p>
        </div>

        <div className="timer-display mb-8">
          <span className="timer-text">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
          <span className="timer-label">Remaining</span>
        </div>

        <div className="health-tips grid md:grid-cols-2 gap-4 w-full mb-8">
          <div className="tip-card glass-card text-center">
            <EyeOff size={24} className="mb-2 mx-auto text-accent-teal" style={{color: 'var(--accent-teal)'}} />
            <h4 className="mb-1">20-20-20 Rule</h4>
            <p className="text-muted" style={{fontSize: '0.8rem'}}>Look at something 20 feet away for 20 seconds.</p>
          </div>
          <div className="tip-card glass-card text-center">
            <Droplets size={24} className="mb-2 mx-auto text-accent-blue" style={{color: 'var(--accent-blue)'}} />
            <h4 className="mb-1">Hydration</h4>
            <p className="text-muted" style={{fontSize: '0.8rem'}}>Drink a glass of water to stay focused and refreshed.</p>
          </div>
        </div>

        <div className="health-footer flex-col items-center gap-4 w-full">
          <button className="btn btn-primary w-full" disabled>
            Break Mode Active
          </button>
          
          {/* For demonstration only */}
          <button className="btn btn-danger w-full" onClick={skipBreak}>
            [Demo Only] Skip Break
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthGuardOverlay;
