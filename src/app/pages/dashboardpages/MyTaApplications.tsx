/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useEffect, useState } from "react";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

interface Aplication {
  id: string; // Mapped from "_id" with default value "auto()" (likely from a database)
  ta_applicant_id: string; // Likely an ObjectId from a database
  has_served_before: boolean;
  previous_service_details?: string; // Optional string
  cv_link: string;
  credit_completed: number;
  credit_registered: number;
  major: string;
  course_id: string; // Likely an ObjectId from a database
  recommended: boolean; // Defaults to false
  offered: string; // Defaults to "pending" with type Status (likely an enum or string literal type)
  accepted: string; // Defaults to "pending" with type Status (likely an enum or string literal type)
}

const MyTaApplications = () => {
  const lsUser = localStorage.getItem("user");
  let user: any;
  if (lsUser) user = JSON.parse(lsUser);

  const [applications, setApplications] = useState<Aplication[]>([]);
  const [selectedApplicaiton, setSelectedApplication] = useState<Aplication>();
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
    <div className="p-3">
      {applications.map((application) => (
        <div
          key={application.id}
          className="py-2 flex items-center justify-between"
        >
          <h1 className="text-lg">{application.course.title}</h1>
          <div className="flex items-center gap-2">
            <button
              className="btn bg-purple-700 hover:bg-purple-800 text-white"
              onClick={() => {
                setSelectedApplication(application);
                document.getElementById("view_application_modal").showModal();
              }}
            >
              View
            </button>
            <button
              className="btn bg-purple-700 hover:bg-purple-800 text-white"
              onClick={() => {
                setSelectedApplication(application);
                document.getElementById("edit_application_modal").showModal();
              }}
            >
              Edit
            </button>
            <button
              className="btn bg-red-700 hover:bg-red-800 text-white"
              onClick={() => {
                catchAsync(async () => {
                  const res = await axiosInstance.delete(
                    `/applications/${application.id}`,
                  );
                  toast.success(res.data.message);
                  refetch();
                })();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <dialog id="view_application_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Application Info: </h3>
          <br />

          <div>
            <p>
              <b>Course: </b>
              {selectedApplicaiton?.course.title}
            </p>

            <p>
              <b>Major: </b>
              {selectedApplicaiton?.major}
            </p>

            <p>
              <b>Credit completed: </b>
              {selectedApplicaiton?.credit_completed}
            </p>

            <p>
              <b>Credit registered: </b>
              {selectedApplicaiton?.credit_registered}
            </p>

            <p>
              <b>Previous experience: </b>
              {selectedApplicaiton?.has_served_before
                ? selectedApplicaiton.previous_service_details
                : "NO"}
            </p>

            <p>
              <b>CV: </b>
              <a
                href={selectedApplicaiton?.cv_link}
                target="_blank"
                className="text-blue-500 underline"
              >
                Link
              </a>
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button classNme="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="edit_application_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Application Info: </h3>
          <br />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.target));

              data.credit_completed = Number(data.credit_completed);
              data.credit_registered = Number(data.credit_registered);

              catchAsync(async () => {
                const res = await axiosInstance.patch(
                  `/applications/${selectedApplicaiton?.id}`,
                  data,
                );
                toast.success(res.data.message);
                document.getElementById("edit_application_modal").close();
                refetch();
              })();
            }}
          >
            <input
              type="text"
              name="major"
              placeholder="Major"
              className="input w-full max-w-xs"
              defaultValue={selectedApplicaiton?.major}
            />

            <input
              type="text"
              name="credit_completed"
              placeholder="Credit Completed"
              className="input w-full max-w-xs"
              defaultValue={selectedApplicaiton?.credit_completed}
            />

            <input
              type="text"
              name="credit_registered"
              placeholder="Credit Registered"
              className="input w-full max-w-xs"
              defaultValue={selectedApplicaiton?.credit_registered}
            />

            <input
              type="text"
              name="cv_link"
              placeholder="CV Link"
              className="input w-full max-w-xs"
              defaultValue={selectedApplicaiton?.cv_link}
            />

            <br />
            <br />
            <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyTaApplications;
