import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const BaseNavbar = () => {
  return (
    <Link
      to={"/"}
      className="py-5 bg-gray-950 flex items-center justify-center gap-5"
    >
      <img className="w-14 object-cover" src={logo} alt="logo" />
      <h1 className="text-white text-2xl font-semibold">TA Connect Hub</h1>
    </Link>
  );
};

export default BaseNavbar;
