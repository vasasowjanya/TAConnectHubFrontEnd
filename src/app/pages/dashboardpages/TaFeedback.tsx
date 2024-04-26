/* eslint-disable */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */
// @ts-nocheck
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const TaFeedback = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/courses?get_all=true");
      if (res.data.success) {
        setCourseData(res.data.data.data);
      }
    };
    getCourse();
  }, []);

  const assignedCourses =
    courseData &&
    courseData.filter(
      (course) =>
        course.hasOwnProperty("assigned_to_id") &&
        course.assigned_to_id !== null,
    );

  return (
    <div>
      <h1 className="text-3xl p-3">TA Feedback</h1>
      <hr />
      <div className="mt-2">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Name</th>
                <th>Feedback</th>
                <th className="text-center"> Add/Edit Feedback</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}

              {assignedCourses &&
                assignedCourses.map((course, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    {/* @ts-ignore */}
                    <td>{course?.title}</td>
                    {/* @ts-ignore */}
                    <td>{course?.assgined_to?.name}</td>

                    <td>
                      {/* @ts-ignore */}
                      {course?.feedback ? course?.feedback : "N/A"}
                    </td>
                    <td className="text-center">
                      {/* @ts-ignore */}
                      <Link to={`/dashboard/ta-feedback/${course?.id}`}>
                        <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                          Add / Edit
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

export default TaFeedback;
