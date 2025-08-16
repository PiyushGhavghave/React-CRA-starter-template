import React from 'react';
import './Dashboard.css';
import TodaysSales from './TodaysSales';
import Chart from './Chart';
import TopProducts from './TopProducts';
import VisitorInsights from './VisitorInsights';

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
            <div className="chart-container">
              <Chart
                title="Total Revenue"
                type="bar"
                data={[2, 4, 6, 8, 4, 6, 8, 10, 6, 8, 4, 6]}
                colors={["#00D4AA", "#5570FF"]}
              />
            </div>
            <div className="chart-container">
              <Chart
                title="Customer Satisfaction"
                type="line"
                subtitle1="Last Month"
                subtitle2="This Month"
                value1="$3,004"
                value2="$4,504"
                data={[3, 5, 2, 6, 8, 4, 7, 9, 5, 8]}
                colors={["#5570FF", "#00D4AA"]}
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
                colors={["#FFEB3B", "#4CAF50", "#2196F3", "#FF9800", "#9C27B0"]}
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
              colors={["#5570FF", "#00D4AA"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
