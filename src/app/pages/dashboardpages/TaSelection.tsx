/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import catchAsync from "../../../utils/catchAsync";
import toast from "react-hot-toast";

const TaSelection = () => {
  const [courseData, setCourseData] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/applications?get_all=true");
      if (res.data.success) {
        setCourseData(res.data.data.data);
      }
    };
    getCourse();
  }, [refetchTrigger]);

  const applications = courseData && courseData.filter((course) => true);

  console.log(applications);

  const handleAccept = async (id) => {
    const submitData = {
      offered: "accepted",
    };

    catchAsync(async () => {
      await axiosInstance.patch("/applications/" + id, submitData);
      toast.success("Offer accepted successfully");
      refetch();
    })();
  };
  const handleReject = async (id) => {
    const submitData = {
      offered: "rejected",
    };

    catchAsync(async () => {
      await axiosInstance.patch("/applications/" + id, submitData);
      toast.success("Offer rejected successfully");
      refetch();
    })();
  };

  return (
    <div>
      <h1 className="text-3xl font-medium p-3">TA Selection</h1>
      <hr />
      <div className="mt-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Username</th>
                <th>Status</th>
                <th>Recommendation</th>
                <th className="text-center">Action</th>
                <th className="text-center">Operation</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}
              {applications &&
                applications.map((application, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{application?.course?.title}</td>
                    <td>{application?.ta_applicant?.name}</td>
                    <td>{application?.accepted}</td>
                    <td>
                      {application?.recommended
                        ? "recommended"
                        : "not recommended "}
                    </td>
                    <td className="text-center">
                      <Link
                        to={`/dashboard/ta-application-review/${application?.id}`}
                      >
                        <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td className="text-center">
                      {application.offered === "pending" ? (
                        <>
                          <button
                            onClick={() => handleAccept(application?.id)}
                            className="btn bg-purple-700 hover:bg-purple-800 text-white"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(application?.id)}
                            className="btn bg-purple-700 hover:bg-purple-800 text-white"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        application.offered
                      )}
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

export default TaSelection;
