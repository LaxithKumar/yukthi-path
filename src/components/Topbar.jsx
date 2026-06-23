import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useHealthGuard } from '../context/HealthGuardContext';
import './Topbar.css';

const Topbar = () => {
  const { sessionTime, SESSION_LIMIT } = useHealthGuard();
  
  // Calculate progress percentage for session time
  const progressPercent = Math.min(100, (sessionTime / SESSION_LIMIT) * 100);
  
  // Color based on progress
  const progressColor = progressPercent > 85 ? 'var(--accent-red)' : 
                        progressPercent > 60 ? 'var(--accent-teal)' : 'var(--accent-green)';

  return (
    <header className="topbar">
      <div className="search-bar glass-panel">
        <Search size={18} className="text-muted" />
        <input 
          type="text" 
          placeholder="Search modules, chapters, or ask AI..." 
          className="search-input"
        />
      </div>

      <div className="topbar-actions">
        {/* Wellness Indicator */}
        <div className="wellness-indicator glass-panel" title="Session Time">
          <div className="wellness-text">
            <span className="wellness-label">Focus</span>
            <span className="wellness-value">{Math.floor(sessionTime / 60)}m</span>
          </div>
          <div className="wellness-bar-bg">
            <div 
              className="wellness-bar-fill" 
              style={{ 
                width: `${progressPercent}%`,
                backgroundColor: progressColor 
              }}
            ></div>
          </div>
        </div>

        <button className="notification-btn glass-panel">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
