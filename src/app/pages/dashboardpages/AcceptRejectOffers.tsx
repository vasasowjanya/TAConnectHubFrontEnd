/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const AcceptRejectOffers = () => {
  const lsUser = localStorage.getItem("user");
  let user: any;
  if (lsUser) user = JSON.parse(lsUser);

  const [applications, setApplications] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get(
        `/applications?get_all=true&ta_applicant_id=${user.id}&offered=accepted`,
      );
      setApplications(res.data.data.data);
    })();
  }, [refetchTrigger, user.id]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-center pt-3">
        My Available Offers
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-500 text-white text-lg">
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Z Number</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {applications.map((application, index) => (
              <tr key={application.id}>
                <th>{index + 1}</th>
                <td>{application.course.title}</td>
                <td>{user.ta_applicant.z_id}</td>
                <td>
                  <b>Offered: </b>
                  {application.offered}
                  <br />
                  <b>Accepted: </b>
                  {application.accepted}
                </td>
                <td>{application.course.feedback || "N/A"}</td>
                <td className="h-full">
                  {application.accepted === "pending" ? (
                    <div className="flex items-center gap-2">
                      <button
                        className="btn bg-purple-700 hover:bg-purple-800 text-white"
                        onClick={() => {
                          catchAsync(async () => {
                            const res = await axiosInstance.patch(
                              `/applications/${application.id}`,
                              {
                                accepted: "accepted",
                              },
                            );
                            toast.success(res.data.message);
                            refetch();
                          })();
                        }}
                      >
                        Accept
                      </button>
                      <button
                        className="btn bg-purple-700 hover:bg-purple-800 text-white"
                        onClick={() => {
                          catchAsync(async () => {
                            const res = await axiosInstance.patch(
                              `/applications/${application.id}`,
                              {
                                accepted: "rejected",
                              },
                            );
                            toast.success(res.data.message);
                            refetch();
                          })();
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <p>{application.accepted}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptRejectOffers;
