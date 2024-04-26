import { Outlet } from "react-router-dom";
import DashboardNavbar from "../app/components/DashboardNavbar";

const BaseLayout = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BaseLayout;
