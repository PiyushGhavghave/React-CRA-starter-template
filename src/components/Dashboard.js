import React from 'react';
import './Dashboard.css';
import MetricsCard from './MetricsCard';
import Chart from './Chart';
import TopProducts from './TopProducts';
import VisitorInsights from './VisitorInsights';

const Dashboard = () => {
  const metricsData = [
    {
      title: "Today's Sales",
      subtitle: "Sales Summary",
      value: "$1k",
      description: "Total Sales",
      change: "+8% from yesterday",
      color: "#FFB7C5",
      icon: "📊"
    },
    {
      title: "",
      subtitle: "",
      value: "300",
      description: "Total Order",
      change: "+5% from yesterday",
      color: "#FFD4A3",
      icon: "📦"
    },
    {
      title: "",
      subtitle: "",
      value: "5",
      description: "Product Sold",
      change: "+1.2% from yesterday",
      color: "#B8E6B8",
      icon: "📈"
    },
    {
      title: "",
      subtitle: "",
      value: "8",
      description: "New Customers",
      change: "+0.5% from yesterday",
      color: "#C7A7FF",
      icon: "👥"
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="metrics-section">
          <div className="metrics-grid">
            {metricsData.map((metric, index) => (
              <MetricsCard key={index} {...metric} />
            ))}
          </div>
        </div>

        <div className="charts-section">
          <div className="chart-grid">
            <div className="chart-container large">
              <Chart 
                title="Total Revenue" 
                type="bar" 
                data={[2, 4, 6, 8, 4, 6, 8, 10, 6, 8, 4, 6]}
                colors={["#4ECDC4", "#45B7D1"]}
              />
            </div>
            <div className="visitor-insights">
              <VisitorInsights />
            </div>
          </div>
          
          <div className="chart-grid">
            <div className="chart-container">
              <Chart 
                title="Customer Satisfaction" 
                type="line" 
                subtitle1="Last Month" 
                subtitle2="This Month"
                value1="$3,004" 
                value2="$4,504"
                data={[3, 5, 2, 6, 8, 4, 7, 9, 5, 8]}
                colors={["#45B7D1", "#4ECDC4"]}
              />
            </div>
            <div className="chart-container">
              <Chart 
                title="Target vs Reality" 
                type="bar-comparison" 
                subtitle1="Reality Sales" 
                subtitle2="Target Sales"
                value1="8,823" 
                value2="12,432"
                data={[6, 8, 5, 9, 7, 10, 8, 11, 6, 9, 7, 8]}
                colors={["#F39C12", "#E74C3C", "#3498DB", "#2ECC71", "#9B59B6"]}
              />
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="products-section">
            <TopProducts />
          </div>
          <div className="service-level-section">
            <Chart 
              title="Volume vs Service Level" 
              type="service-level" 
              subtitle1="Volume" 
              subtitle2="Services"
              value1="2.6K" 
              value2="1.2K"
              data={[8, 10, 9, 7, 6, 8, 5]}
              colors={["#45B7D1", "#4ECDC4"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
