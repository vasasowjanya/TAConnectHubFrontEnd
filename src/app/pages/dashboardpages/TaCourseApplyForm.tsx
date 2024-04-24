/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import catchAsync from "../../../utils/catchAsync";

const TaCourseApplyForm = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState();
  const [hasExperience, setHasExperience] = useState(false);

  const token = localStorage.getItem("token");
  const decodedData = jwtDecode(token as string);

  useEffect(() => {
    try {
      const getCourse = async () => {
        const res = await axiosInstance.get("/courses/" + id);
        if (res.data.success) {
          setCourseData(res.data.data);
        }
      };
      getCourse();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const credit_completed = parseInt(form.total_credits_completed.value);
    const credit_registered = parseInt(form.credit_registered.value);
    const major = form.major.value;
    const cv_link = form.cv_link.value;
    const previous_service = form.previous_service_details.value;

    const submitData = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ta_applicant_id: decodedData.id,
      has_served_before: hasExperience,
      credit_completed,
      cv_link,
      credit_registered,
      major,
      course_id: id,
    };

    if (hasExperience) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      submitData.previous_service_details = previous_service;
    }

    console.log(submitData);

    catchAsync(async () => {
      await axiosInstance.post("/applications", submitData);
      toast.success("Submitted data successfully");
      navigate("/dashboard/ta-apply");
    })();
  };

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-200 rounded-md shadow-lg p-5 mx-auto"
      >
        {courseData && (
          <h1 className="text-xl font-semibold text-center">
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            Application Form - {courseData.title} - {courseData.term}
          </h1>
        )}
        <br />
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">
                  Total Credits Completed
                </span>
              </div>
              <input
                type="number"
                name="total_credits_completed"
                id="total_credits_completed"
                placeholder="Enter here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">
                  Total Credits Registered
                </span>
              </div>
              <input
                type="number"
                name="credit_registered"
                id="credit_registered"
                placeholder="Enter here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Major</span>
              </div>
              <input
                type="text"
                name="major"
                id="major"
                placeholder="Enter your major here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Resume Link</span>
              </div>
              <input
                type="text"
                name="cv_link"
                id="cv_link"
                placeholder="Enter here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="my-auto">
            <label className="label cursor-pointer">
              <span className="label-text text-base">
                Have previous experience?
              </span>
              <input
                onChange={() => setHasExperience(!hasExperience)}
                type="checkbox"
                className="h-5 w-5"
              />
            </label>
          </div>
          <div className={`${!hasExperience && "hidden"}`}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">
                  Previous Experience
                </span>
              </div>
              <input
                type="text"
                name="previous_service_details"
                id="previous_service_details"
                placeholder="Enter here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>

          <div className="pt-10 my-auto">
            <button className="w-full btn rounded-none btn-md bg-green-500 hover:bg-green-600 text-white text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaCourseApplyForm;
