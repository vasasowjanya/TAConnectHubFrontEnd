import { FaRegUser } from "react-icons/fa";

export const RoleWiseNavbar = ({ role }: { role: string }) => {
  const taSidebarItems = (
    <ul className="py-4 bg-[#373737] text-white flex justify-evenly items-center cursor-pointer">
      <li>Apply Here</li>
      <li>My Applications</li>
      <li>Application Status</li>
      <li>Offers</li>
      <li>
        <FaRegUser className="text-xl" />
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
      <li>Course Management</li>
      <li>TA Application Review</li>
      <li>TA Selection Status</li>
      <li>
        <FaRegUser className="text-xl" />
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
      <li>Course Management</li>
      <li>TA Application Review</li>
      <li>TA Selection Status</li>
      <li>
        <FaRegUser className="text-xl" />
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
      <li>TA Feedback</li>
      <li>
        <FaRegUser className="text-xl" />
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
