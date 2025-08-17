import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./TotalRevenue.css";

const data = [
  { name: "Monday", online: 14000, offline: 12500 },
  { name: "Tuesday", online: 17000, offline: 12000 },
  { name: "Wednesday", online: 6000, offline: 22500 },
  { name: "Thursday", online: 15800, offline: 6700 },
  { name: "Friday", online: 12000, offline: 11500 },
  { name: "Saturday", online: 16700, offline: 13500 },
  { name: "Sunday", online: 21000, offline: 11000 },
];

const TotalRevenue = () => {
  return (
    <div className="total-revenue-card">
      <h2 className="total-revenue-title">Total Revenue</h2>
      <div className="total-revenue-chart">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} barGap={6}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 8 }} />
            <YAxis tick={{ fill: "#6b7280", fontSize: 14 }} />
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: "#374151", fontSize: 14 }}>{value}</span>
              )}
            />
            <Bar dataKey="online" fill="#1D4ED8" radius={[6, 6, 0, 0]} name="Online Sales" />
            <Bar dataKey="offline" fill="#10B981" radius={[6, 6, 0, 0]} name="Offline Sales" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
