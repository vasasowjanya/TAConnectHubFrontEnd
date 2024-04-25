import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import catchAsync from "../../../utils/catchAsync";
import toast from "react-hot-toast";

const TaSelection = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      const res = await axiosInstance.get("/applications?get_all=true");
      if (res.data.success) {
        setCourseData(res.data.data.data);
      }
    };
    getCourse();
  }, []);

  const applications =
    courseData && courseData.filter((course) => course.accepted == "pending");

  console.log(applications);

  const handleAccept = async (id) => {
    const submitData = {
      offered: "accepted",
    };

    catchAsync(async () => {
      await axiosInstance.patch("/applications/" + id, submitData);
      toast.success("Offer accepted successfully");
    })();
  };
  const handleReject = async (id) => {
    const submitData = {
      offered: "rejected",
    };

    catchAsync(async () => {
      await axiosInstance.patch("/applications/" + id, submitData);
      toast.success("Offer rejected successfully");
    })();
  };

  return (
    <div>
      <h1 className="text-lg">TA Selection</h1>
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
                <th>Action</th>
                <th>Operation</th>
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
                      <Link
                        to={`/dashboard/ta-application-review/${application?.id}`}
                      >
                        <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td>
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
