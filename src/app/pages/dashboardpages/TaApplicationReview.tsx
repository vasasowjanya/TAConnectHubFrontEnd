/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";

const TaApplicationReview = () => {
  const [applications, setApplications] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get(`/applications?get_all=true`);
      setApplications(res.data.data.data);
    })();
  }, [refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold text-center mt-3">
        Application Review
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Z Number</th>
                <th className="text-center">Options</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}
              {applications.map((application, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{application.course.title}</td>
                  <td>{application.ta_applicant.ta_applicant.z_id}</td>
                  <td className="text-center">
                    <Link
                      to={`/dashboard/ta-application-review/${application.id}`}
                    >
                      <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                        View Details
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

export default TaApplicationReview;
