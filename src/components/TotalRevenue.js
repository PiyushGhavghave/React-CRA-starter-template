import React from "react";
import "./TotalRevenue.css";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const online = [14, 17, 6, 16, 12, 17, 21]; // in k
const offline = [12, 12, 23, 7, 11, 13, 11]; // in k
const maxValue = 25; // highest Y axis value (25k)

const TotalRevenue = () => {
  return (
    <div className="total-revenue">
      <h3 className="revenue-title">Total Revenue</h3>
      <div className="revenue-chart">
        <svg viewBox="0 0 700 320" preserveAspectRatio="none">
          {/* Y-axis grid lines + labels */}
          {[0, 5, 10, 15, 20, 25].map((val, i) => {
            const y = 280 - (val / maxValue) * 240;
            return (
              <g key={i}>
                <line x1="60" x2="660" y1={y} y2={y} stroke="#E5E7EB" strokeWidth="1" />
                <text x="40" y={y + 4} fontSize="12" textAnchor="end" fill="#64748b">
                  {val}k
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {days.map((day, i) => {
            const groupX = 90 + i * 85;
            const onlineHeight = (online[i] / maxValue) * 240;
            const offlineHeight = (offline[i] / maxValue) * 240;

            return (
              <g key={i}>
                <rect
                  x={groupX}
                  y={280 - onlineHeight}
                  width="20"
                  height={onlineHeight}
                  fill="#007BFF"
                  rx="4"
                />
                <rect
                  x={groupX + 25}
                  y={280 - offlineHeight}
                  width="20"
                  height={offlineHeight}
                  fill="#00C389"
                  rx="4"
                />

                {/* X-axis labels */}
                <text
                  x={groupX + 12}
                  y={300}
                  fontSize="12"
                  textAnchor="middle"
                  fill="#334155"
                >
                  {day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="revenue-legend">
        <div className="legend-item">
          <div className="legend-dot blue"></div>
          <span>Online Sales</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot green"></div>
          <span>Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
