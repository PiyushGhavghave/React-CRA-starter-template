import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import "./TargetVsReality.css";

/** Data heights tuned to visually match the Figma bars */
const data = [
  { name: "Jan", reality: 170, target: 210 },
  { name: "Feb", reality: 150, target: 190 },
  { name: "Mar", reality: 125, target: 250 },
  { name: "Apr", reality: 170, target: 195 },
  { name: "May", reality: 205, target: 255 },
  { name: "June", reality: 205, target: 255 },
  { name: "July", reality: 202, target: 255 },
];

export default function TargetVsReality() {
  return (
    <div className="tvr">
      <h3 className="tvr__title">Target vs Reality</h3>

      <div className="tvr__chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 6, right: 10, bottom: 10, left: 4 }}
            barCategoryGap="36%"   /* space between month groups */
            barGap={12}            /* space between reality/target */
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9AA6B2", fontSize: 14, dy: 4 }}
            />
            <YAxis hide domain={[0, 270]} />
            <Bar
              dataKey="reality"
              fill="#2DC7A6"
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
            <Bar
              dataKey="target"
              fill="#F5C443"
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="tvr__legend">
        <div className="tvr__legendItem">
          <div className="tvr__icon tvr__icon--reality" aria-hidden>
            {/* shopping-bag icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 8V7a5 5 0 0 1 10 0v1h2a1 1 0 0 1 1 1l-1 10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3L4 9a1 1 0 0 1 1-1h2zm2 0h6V7a3 3 0 0 0-6 0v1z"/>
            </svg>
          </div>
          <div className="tvr__legendText">
            <span className="tvr__legendTitle">Reality Sales</span>
            <span className="tvr__legendSub">Global</span>
          </div>
          <span className="tvr__legendValue tvr__legendValue--green">
            8.823
          </span>
        </div>

        <div className="tvr__legendItem">
          <div className="tvr__icon tvr__icon--target" aria-hidden>
            {/* badge icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v11.5a1.5 1.5 0 0 1-2.4 1.2L12 13.5l-4.6 3.2A1.5 1.5 0 0 1 5 15.5V4a2 2 0 0 1 2-2z"/>
            </svg>
          </div>
          <div className="tvr__legendText">
            <span className="tvr__legendTitle">Target Sales</span>
            <span className="tvr__legendSub">Commercial</span>
          </div>
          <span className="tvr__legendValue tvr__legendValue--orange">
            12.122
          </span>
        </div>
      </div>
    </div>
  );
}
