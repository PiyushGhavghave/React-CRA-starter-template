import React from 'react';
import './Sidebar.css';
import DummyLogo from '../assets/icons/dummy logo.svg';

const Sidebar = () => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', active: true },
    { id: 'leaderboard', name: 'Leaderboard', icon: '🏆', active: false },
    { id: 'order', name: 'Order', icon: '🛒', active: false },
    { id: 'products', name: 'Products', icon: '📦', active: false },
    { id: 'sales-report', name: 'Sales Report', icon: '📈', active: false },
    { id: 'messages', name: 'Messages', icon: '💬', active: false },
    { id: 'settings', name: 'Settings', icon: '⚙️', active: false },
    { id: 'sign-out', name: 'Sign Out', icon: '🚪', active: false }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
          <div className="logo">
            <img src={DummyLogo} alt="Logo" className="logo-img" />
            <span className="logo-text">Dabang</span>
          </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.id} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
