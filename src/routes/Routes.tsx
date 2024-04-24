import {
  createBrowserRouter,
  createRoutesFromElements,
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

export default function Routes() {
  // const isTokenAvailable = localStorage.getItem("token");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginLayout />}>
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
        <Route path="/dashboard" element={<BaseLayout />}>
          {/* Your existing routes inside AppLayout */}
          {/* <Route path="booking" element={<BookingList />} /> */}
        </Route>
      </>
      // <>
      //   <Route
      //     path="/login"
      //     element={isTokenAvailable ? <Navigate to="/" /> : <Login />}
      //   />
      //   {isTokenAvailable ? (
      //     <Route path="/" element={<AppLayout />}>
      //       {/* Your existing routes inside AppLayout */}
      //       <Route path="booking" element={<BookingList />} />
      //       <Route path="theater" element={<TheaterList />} />
      //       <Route path="event" element={<EventList />} />
      //       <Route path="decoration" element={<DecorationList />} />
      //       <Route path="rose" element={<RoseList />} />
      //       <Route path="photography" element={<PhotographyList />} />
      //       <Route path="cake" element={<CakeList />} />
      //       <Route path="food" element={<FoodList />} />
      //       <Route path="changePassword" element={<ChangePassword />} />
      //       <Route path="*" element={<Navigate to="/" />} />

      //       <Route path="*" element={<Navigate to="/" />} />
      //     </Route>
      //   ) : (
      //     <>
      //       <Route path="/" element={<Navigate to="/login" />} />
      //       <Route path="*" element={<Navigate to="/login" />} />
      //     </>
      //   )}
      // </>
    )
  );

  return <RouterProvider router={router} />;
}
