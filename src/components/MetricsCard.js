import React from 'react';
import './MetricsCard.css';

const MetricsCard = ({ title, subtitle, value, description, change, color, icon, showHeader }) => {
  return (
    <div className="metrics-card" style={{ backgroundColor: color }}>
      {(title || showHeader) && (
        <div className="card-header">
          <div className="card-header-left">
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
          {showHeader && <button className="export-btn">📤 Export</button>}
        </div>
      )}
      <div className="card-content">
        <div className="metric-value">
          <span className="value">{value}</span>
        </div>
        <div className="metric-info">
          <p className="description">{description}</p>
          <p className="change">{change}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
