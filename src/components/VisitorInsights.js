
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot
} from "recharts";
import "./VisitorInsights.css";

const data = [
  { month: "Jan", loyal: 320, new: 210, unique: 270 },
  { month: "Feb", loyal: 310, new: 230, unique: 320 },
  { month: "Mar", loyal: 280, new: 180, unique: 290 },
  { month: "Apr", loyal: 220, new: 100, unique: 240 },
  { month: "May", loyal: 200, new: 160, unique: 210 },
  { month: "Jun", loyal: 280, new: 290, unique: 250 },
  { month: "Jul", loyal: 330, new: 350, unique: 320 },
  { month: "Aug", loyal: 310, new: 320, unique: 300 },
  { month: "Sep", loyal: 280, new: 290, unique: 270 },
  { month: "Oct", loyal: 260, new: 260, unique: 250 },
  { month: "Nov", loyal: 230, new: 200, unique: 220 },
  { month: "Dec", loyal: 200, new: 150, unique: 260 }
];

const VisitorInsights = () => {
  return (
    <div className="visitor-insights">
      <h3 className="insights-title">Visitor Insights</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
          />
    

          {/* Lines */}
          <Line type="monotone" dataKey="loyal" stroke="#8B5CF6" strokeWidth={3} dot={false} name="Loyal Customers" />
          <Line type="monotone" dataKey="new" stroke="#F43F5E" strokeWidth={3} dot={false} name="New Customers" />
          <Line type="monotone" dataKey="unique" stroke="#22C55E" strokeWidth={3} dot={false} name="Unique Customers" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorInsights;
