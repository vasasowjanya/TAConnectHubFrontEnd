import { Outlet } from "react-router-dom";
import DashboardNavbar from "../app/components/DashboardNavbar";

const BaseLayout = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default BaseLayout;
