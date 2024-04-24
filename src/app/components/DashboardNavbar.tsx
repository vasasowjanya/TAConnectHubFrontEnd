import logo from "../../assets/logo.png";
import { RoleWiseNavbar } from "./RoleWiseNavbar";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="py-5 bg-gray-950 flex items-center justify-center gap-5">
        <img className="w-14 object-cover" src={logo} alt="logo" />
        <h1 className="text-white text-2xl font-semibold">TA Connect Hub</h1>
      </div>
      <div>
        <RoleWiseNavbar role="ta-applicant" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
