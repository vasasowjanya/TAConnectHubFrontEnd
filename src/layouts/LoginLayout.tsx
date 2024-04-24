import { Outlet } from "react-router-dom";
import BaseNavbar from "../app/components/BaseNavbar";

const LoginLayout = () => {
  return (
    <div>
      <BaseNavbar></BaseNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
