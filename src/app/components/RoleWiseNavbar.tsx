import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const RoleWiseNavbar = ({ role }: { role: string }) => {
  const taSidebarItems = (
    <ul className="py-4 bg-[#373737] text-white flex justify-evenly items-center cursor-pointer">
      <li>
        <Link to="/dashboard/ta-apply">Apply Here</Link>
      </li>
      <li>
        <Link to={"/dashboard/my-applies"}>My Applications</Link>
      </li>
      <li>
        <Link to={"/dashboard/my-application-status"}>Application Status</Link>
      </li>
      <li>
        <Link to={"/dashboard/accept-reject-offers"}>Offers</Link>
      </li>
      <li>
        <Link to={"/dashboard/user"}>
          <FaUser />
        </Link>
      </li>

      <li
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="bg-red-600 px-5 py-2 text-base font-semibold rounded-md cursor-pointer"
      >
        Logout
      </li>
    </ul>
  );

  const departmentSidebarItems = (
    <ul className="py-4 bg-[#373737] text-white flex justify-evenly items-center cursor-pointer">
      <li>
        <Link to={"courses"}>Course Management</Link>
      </li>
      <li>
        <Link to={"/dashboard/ta-application-review"}>
          TA Application Review
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/ta-recommandation"}>TA Recommandation</Link>
      </li>
      <li>
        <Link to={"/dashboard/user"}>
          <FaUser />
        </Link>
      </li>
      <li
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="bg-red-600 px-5 py-2 text-base font-semibold rounded-md cursor-pointer"
      >
        Logout
      </li>
    </ul>
  );

  const taCommitteeSidebarItems = (
    <ul className="py-4 bg-[#373737] text-white flex justify-evenly items-center cursor-pointer">
      <li>
        <Link to={"/dashboard/ta-selection"}>TA Selection</Link>
      </li>
      <li>
        <Link to={"/dashboard/user"}>
          <FaUser />
        </Link>
      </li>
      <li
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="bg-red-600 px-5 py-2 text-base font-semibold rounded-md cursor-pointer"
      >
        Logout
      </li>
    </ul>
  );

  const instructorSidebarItems = (
    <ul className="py-4 bg-[#373737] text-white flex justify-evenly items-center cursor-pointer">
      <li>
        <Link to={"/dashboard/ta-feedback"}>TA Feedback</Link>
      </li>
      <li>
        <Link to={"/dashboard/user"}>
          <FaUser />
        </Link>
      </li>
      <li
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="bg-red-600 px-5 py-2 text-base font-semibold rounded-md cursor-pointer"
      >
        Logout
      </li>
    </ul>
  );

  if (role === "ta_applicant") {
    return taSidebarItems;
  } else if (role === "department_staff") {
    return departmentSidebarItems;
  } else if (role === "ta_committee_member") {
    return taCommitteeSidebarItems;
  } else if (role === "instructor") {
    return instructorSidebarItems;
  } else {
    return null;
  }
};
