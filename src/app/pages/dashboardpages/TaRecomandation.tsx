/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const TaRecomandation = () => {
  const [courses, setCourses] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);

  useEffect(() => {
    catchAsync(async () => {
      const res = await axiosInstance.get("/courses?get_all=true");
      setCourses(res.data.data.data);
    })();
  }, [refetchTrigger]);

  const refetch = () => {
    setRefetchTrigger((ps) => !ps);
  };

  return (
    <div>
      <h1 className="text-3xl p-3">TA Recomandations</h1>
      <hr />
      <div className="py-4 space-y-3">
        {courses.map((course) => (
          <div className="grid grid-cols-2 " key={course.id}>
            <b>{course.title}</b>
            <form
              className="flex justify-end gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const values = Object.fromEntries(new FormData(e.target));
                console.log(values);

                catchAsync(async () => {
                  const res = await axiosInstance.patch(
                    `/applications/${values.id}`,
                    { recommended: true },
                  );
                  toast.success(res.data.message);
                  refetch();
                })();
              }}
            >
              <div className="flex ">
                <select
                  className="select select-bordered w-full rounded-none"
                  name="id"
                >
                  <option disabled selected>
                    Select Z ID
                  </option>
                  {course.applications.map((application) => (
                    <option value={application.id}>
                      {application.ta_applicant.ta_applicant.z_id}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  className="btn bg-purple-700 hover:bg-purple-800 text-white disabled:opacity-50"
                  type="submit"
                >
                  Recommand
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaRecomandation;
