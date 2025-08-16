import React from 'react';
import './Dashboard.css';
import TodaysSales from './TodaysSales';
import Chart from './Chart';
import TopProducts from './TopProducts';
import VisitorInsights from './VisitorInsights';
import TotalRevenue from './TotalRevenue';
import CustomerSatisfaction from './CustomerSatisfaction';
import TargetVsReality from './TargetVsReality';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="top-section">
          <div className="todays-sales-container">
            <TodaysSales />
          </div>
          <div className="visitor-insights-container">
            <VisitorInsights />
          </div>
        </div>

        <div className="charts-section">
          <div className="chart-grid-three">
            <TotalRevenue />
            <CustomerSatisfaction />
            <TargetVsReality />
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
              colors={["#5570FF", "#00D4AA"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
