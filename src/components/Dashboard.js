import './Dashboard.css';
import TodaysSales from './TodaysSales';
import TopProducts from './TopProducts';
import VisitorInsights from './VisitorInsights';
import TotalRevenue from './TotalRevenue';
import CustomerSatisfaction from './CustomerSatisfaction';
import TargetVsReality from './TargetVsReality';
import VolumeServiceLevel from './VolumeServiceLevel';

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
          <TopProducts />
          <VolumeServiceLevel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
