import DashboardBanner from "../components/Sections/Dashboard/DashboardBanner";
import DashboardContent from "../components/Sections/Dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <DashboardBanner/>
      <DashboardContent/>
    </div>
  );
}

export default Dashboard;