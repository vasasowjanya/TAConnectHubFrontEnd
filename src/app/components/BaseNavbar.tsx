import logo from "../../assets/logo.png";

const BaseNavbar = () => {
  return (
    <div className="py-5 bg-gray-950 flex items-center justify-center gap-5">
      <img className="w-14 object-cover" src={logo} alt="logo" />
      <h1 className="text-white text-2xl font-semibold">TA Connect Hub</h1>
    </div>
  );
};

export default BaseNavbar;
