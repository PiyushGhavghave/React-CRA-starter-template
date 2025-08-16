import React from 'react';
import './TodaysSales.css';
import MetricsCard from './MetricsCard';

const TodaysSales = () => {
  const metricsData = [
    {
      title: "Today's Sales",
      subtitle: "Sales Summary",
      value: "$1k",
      description: "Total Sales",
      change: "+8% from yesterday",
      color: "#FFCDD7",
      icon: "📊",
      showHeader: true
    },
    {
      title: "",
      subtitle: "",
      value: "300",
      description: "Total Order",
      change: "+5% from yesterday",
      color: "#FFE4B5",
      icon: "📦",
      showHeader: false
    },
    {
      title: "",
      subtitle: "",
      value: "5",
      description: "Product Sold",
      change: "+1.2% from yesterday",
      color: "#C8E6C9",
      icon: "📈",
      showHeader: false
    },
    {
      title: "",
      subtitle: "",
      value: "8",
      description: "New Customers",
      change: "+0.5% from yesterday",
      color: "#D1C4E9",
      icon: "👥",
      showHeader: false
    }
  ];

  return (
    <div className="todays-sales">
      <div className="todays-sales-grid">
        {metricsData.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default TodaysSales;
