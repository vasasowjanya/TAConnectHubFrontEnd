import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../app/pages/authpages/Home";
import TaLogin from "../app/pages/authpages/TaLogin";
import DepartmentLogin from "../app/pages/authpages/DepartmentLogin";
import CommitteeLogin from "../app/pages/authpages/CommitteeLogin";
import InstructorLogin from "../app/pages/authpages/InstructorLogin";
import TaSignUp from "../app/pages/authpages/TaSignUp";
import DepartmentSignUp from "../app/pages/authpages/DepartmentSignUp";
import CommitteeSignUp from "../app/pages/authpages/CommitteeSignUp";
import InstructorSignUp from "../app/pages/authpages/InstructorSignUp";
import Courses from "../app/pages/dashboardpages/Courses";

export default function Routes() {
  const isTokenAvailable = localStorage.getItem("token");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* auth routes */}
        <Route
          path="/"
          element={
            isTokenAvailable ? <Navigate to="/dashboard" /> : <LoginLayout />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/login/ta-applicant" element={<TaLogin />} />
          <Route path="/signup/ta-applicant" element={<TaSignUp />} />
          <Route path="/login/department-staff" element={<DepartmentLogin />} />
          <Route
            path="/signup/department-staff"
            element={<DepartmentSignUp />}
          />
          <Route
            path="/login/ta-committee-member"
            element={<CommitteeLogin />}
          />
          <Route
            path="/signup/ta-committee-member"
            element={<CommitteeSignUp />}
          />
          <Route path="/login/instructor" element={<InstructorLogin />} />
          <Route path="/signup/instructor" element={<InstructorSignUp />} />
        </Route>

        {/* protected routes */}
        <Route
          path="/dashboard"
          element={isTokenAvailable ? <BaseLayout /> : <Navigate to="/" />}
        >
          <Route path="courses" element={<Courses />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}
