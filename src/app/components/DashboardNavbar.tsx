/* eslint-disable @typescript-eslint/ban-ts-comment */
import { jwtDecode } from "jwt-decode";
import logo from "../../assets/logo.png";
import { RoleWiseNavbar } from "./RoleWiseNavbar";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token as string);

  return (
    <div>
      <Link
        to={"/"}
        className="py-5 bg-gray-950 flex items-center justify-center gap-5"
      >
        <img className="w-14 object-cover" src={logo} alt="logo" />
        <h1 className="text-white text-2xl font-semibold">TAConnectHub</h1>
      </Link>
      <div>
        {/* @ts-ignore */}
        <RoleWiseNavbar role={decodedData.type} />
      </div>
    </div>
  );
};

export default DashboardNavbar;
