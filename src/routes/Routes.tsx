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
import TaApplyPage from "../app/pages/dashboardpages/TaApplyPage";
import TaCourseApplyForm from "../app/pages/dashboardpages/TaCourseApplyForm";
import Courses from "../app/pages/dashboardpages/Courses";
import MyTaApplications from "../app/pages/dashboardpages/MyTaApplications";
import MyTaApplicationStatus from "../app/pages/dashboardpages/MyTaApplicationStatus";
import AcceptRejectOffers from "../app/pages/dashboardpages/AcceptRejectOffers";
import UserProfile from "../app/pages/dashboardpages/UserProfile";
import TaApplicationReview from "../app/pages/dashboardpages/TaApplicationReview";
import SingleApplicationDetail from "../app/pages/dashboardpages/SingleApplicationDetail";
import TaRecomandation from "../app/pages/dashboardpages/TaRecomandation";
import TaSelection from "../app/pages/dashboardpages/TaSelection";
import TaFeedback from "../app/pages/dashboardpages/TaFeedback";
import SingleFeedback from "../app/pages/dashboardpages/SingleFeedback";

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
          <Route path="ta-apply" element={<TaApplyPage />} />
          <Route path="ta-apply/:id" element={<TaCourseApplyForm />} />
          <Route path="my-applies" element={<MyTaApplications />} />
          <Route
            path="my-application-status"
            element={<MyTaApplicationStatus />}
          />
          <Route path="accept-reject-offers" element={<AcceptRejectOffers />} />
          <Route path="user" element={<UserProfile />} />
          <Route
            path="ta-application-review"
            element={<TaApplicationReview />}
          />
          <Route
            path="ta-application-review/:reviewId"
            element={<SingleApplicationDetail />}
          />
          <Route path="ta-recommandation" element={<TaRecomandation />} />

          <Route path="ta-selection" element={<TaSelection />} />

          <Route path="ta-feedback" element={<TaFeedback />} />
          <Route path="ta-feedback/:courseId" element={<SingleFeedback />} />

          <Route path="courses" element={<Courses />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}
