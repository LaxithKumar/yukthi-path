import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import HealthGuardOverlay from './HealthGuardOverlay';

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
      <HealthGuardOverlay />
    </div>
  );
};

export default Layout;
