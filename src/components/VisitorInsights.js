import React from 'react';
import './VisitorInsights.css';

const VisitorInsights = () => {
  return (
    <div className="visitor-insights">
      <h3 className="insights-title">Visitor Insights</h3>
      <div className="insights-chart">
        <svg width="100%" height="200" viewBox="0 0 300 200">
          <path
            d="M20,150 Q50,120 80,130 T140,110 T200,120 T260,100 T300,90"
            fill="none"
            stroke="#FF6B94"
            strokeWidth="3"
          />
          <path
            d="M20,160 Q50,140 80,150 T140,130 T200,140 T260,120 T300,110"
            fill="none"
            stroke="#00D4AA"
            strokeWidth="3"
          />
          <path
            d="M20,170 Q50,150 80,160 T140,140 T200,150 T260,130 T300,120"
            fill="none"
            stroke="#5570FF"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="insights-legend">
        <div className="legend-row">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#FF6B94' }}></div>
            <span>Loyal Customers</span>
          </div>
        </div>
        <div className="legend-row">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#00D4AA' }}></div>
            <span>New Customers</span>
          </div>
        </div>
        <div className="legend-row">
          <div className="legend-item">
            <div className="legend-dot" style={{ backgroundColor: '#5570FF' }}></div>
            <span>Unique Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorInsights;
