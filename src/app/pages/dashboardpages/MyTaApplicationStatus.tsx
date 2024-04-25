/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";

const MyTaApplicationStatus = () => {
  const lsUser = localStorage.getItem("user");
  let user: any;
  if (lsUser) user = JSON.parse(lsUser);

  const [applications, setApplications] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get(
        `/applications?get_all=true&ta_applicant_id=${user.id}`,
      );
      setApplications(res.data.data.data);
    })();
  }, [refetchTrigger, user.id]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-green-500 text-white text-lg">
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {applications.map((application, index) => (
              <tr key={application.id}>
                <th>{index + 1}</th>
                <td>{application.course.title}</td>
                <td>
                  <b>Offered: </b>
                  {application.offered}
                  <br />
                  {application.offered === "rejected" ? null : (
                    <>
                      <b>Accepted: </b>
                      {application.accepted}
                    </>
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

export default MyTaApplicationStatus;
