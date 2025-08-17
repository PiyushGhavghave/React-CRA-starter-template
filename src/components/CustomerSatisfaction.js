import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area
} from "recharts";
import "./CustomerSatisfaction.css";

const data = [
  { name: "Jan", lastMonth: 3000, thisMonth: 4000 },
  { name: "Feb", lastMonth: 3500, thisMonth: 3700 },
  { name: "Mar", lastMonth: 2000, thisMonth: 4200 },
  { name: "Apr", lastMonth: 2200, thisMonth: 3900 },
  { name: "May", lastMonth: 2800, thisMonth: 4300 },
  { name: "Jun", lastMonth: 2900, thisMonth: 3600 },
  { name: "Jul", lastMonth: 3100, thisMonth: 4500 },
];

export default function CustomerSatisfaction() {
  return (
    <div className="customer-satisfaction">
      <h2>Customer Satisfaction</h2>

      <div className="chart-container" style={{ boxShadow: "none", padding: 0 }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data} >
            <defs>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0}/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0}/>
                <stop offset="100%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis hide/>
            <YAxis hide />
            <Tooltip cursor={{ stroke: "#ccc", strokeWidth: 1 }} />

            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke="none"
              fill="url(#colorLastMonth)"
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke="none"
              fill="url(#colorThisMonth)"
            />

            <Line
              type="monotone"
              dataKey="lastMonth"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ fill: "#3B82F6", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="thisMonth"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: "#10B981", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="dot blue"></span>
          <span className="label">Last Month</span>
          <span className="value">$3,004</span>
        </div>
        <div className="legend-item">
          <span className="dot green"></span>
          <span className="label">This Month</span>
          <span className="value">$4,504</span>
        </div>
      </div>
    </div>
  );
}
