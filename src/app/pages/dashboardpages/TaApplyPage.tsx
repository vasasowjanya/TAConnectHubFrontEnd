/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const TaApplyPage = () => {
  const LSUser = localStorage.getItem("user");
  const userData = JSON.parse(LSUser);

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    try {
      const getCourseList = async () => {
        const res = await axiosInstance.get("/courses?get_all=true");
        if (res.data.success) {
          setCourseList(res.data.data.data);
        }
      };
      getCourseList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(courseList);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-lg bg-green-600 text-white">
                <th></th>
                <th>Title</th>
                <th>Course Number</th>
                <th>CRN Number</th>
                <th>Term</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {courseList &&
                courseList.map((course, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className="text-lg">{course.title}</td>
                    <td className="text-lg">{course.course_number}</td>
                    <td className="text-lg">{course.crn_number}</td>
                    <td className="text-lg">{course.term}</td>
                    <td className="text-center">
                      <Link to={`/dashboard/ta-apply/${course.id}`}>
                        <button
                          className="px-5 py-3 bg-blue-600 text-white font-semibold text-base disabled:opacity-75"
                          disabled={course.applications
                            .map((a) => a.ta_applicant_id)
                            .includes(userData.id)}
                        >
                          Apply
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaApplyPage;
