import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Bot, 
  Library, 
  FileText, 
  PenTool, 
  BarChart2, 
  FlaskConical, 
  Gamepad2,
  Menu,
  X
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/learn', label: 'Learn', icon: BookOpen },
  { path: '/tutor', label: 'AI Tutor', icon: Bot },
  { path: '/library', label: 'Textbooks', icon: Library },
  { path: '/question-bank', label: 'Question Bank', icon: FileText },
  { path: '/paper-generator', label: 'Paper Generator', icon: PenTool },
  { path: '/progress', label: 'Progress', icon: BarChart2 },
  { path: '/lab', label: 'Virtual Lab', icon: FlaskConical },
  { path: '/recharge', label: 'Recharge Zone', icon: Gamepad2 },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // If mobile, we use a bottom nav for main items, but keep the full menu accessible via a hamburger.
  // For simplicity, we'll implement a modern responsive sidebar that slides out on mobile and stays pinned on desktop.
  
  return (
    <>
      {isMobile && (
        <button className="mobile-toggle" onClick={toggleSidebar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {isMobile && isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`sidebar ${isOpen || !isMobile ? 'open' : 'closed'} glass-panel`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">Y</div>
            <h2 className="logo-text text-gradient">Yukthi Path</h2>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => isMobile && setIsOpen(false)}
            >
              <item.icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">S</div>
            <div className="user-info">
              <p className="user-name">Student</p>
              <p className="user-class">Class 10 Science</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      {isMobile && (
        <div className="bottom-nav glass-panel">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <item.icon size={22} />
              <span className="bottom-nav-label">{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
