/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import catchAsync from "../../../utils/catchAsync";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const SingleFeedback = () => {
  const navigate = useNavigate();

  const { courseId } = useParams();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const data = {
      feedback,
    };
    catchAsync(async () => {
      await axiosInstance.patch("/courses/" + courseId, data);
      toast.success("Feedback submitted successfully");
      navigate("/dashboard/ta-feedback");
    })();
  };

  return (
    <div>
      <h1 className="text-lg">Leave a feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="feedback"
            id="feedback"
            placeholder="Type feedback here"
            className="mt-4 input input-bordered input-primary w-full max-w-xs rounded-none"
          />
          <button className="mt-4 btn bg-purple-700 hover:bg-purple-800 text-white">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleFeedback;
