import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";
import catchAsync from "../../../utils/catchAsync";
import { useNavigate } from "react-router-dom";

const TaSignUp = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phone.value;
    const z_id = form.z_number.value;
    const department = form.department.value;
    const level = form.level.value;
    const type = "ta_applicant";

    catchAsync(async () => {
      const res = await axiosInstance.post("/auth/signup", {
        user_data: { name, email, phone: phone, password, type },
        ta_applicant_data: { z_id, department, level },
      });
      toast.success(res.data.message);
      navigate("/");
    })();
  };

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-200 rounded-md shadow-lg p-5 mx-auto"
      >
        <h1 className="text-xl font-semibold text-center">
          TA Applicant Signup
        </h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Name</span>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Email</span>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Z Number</span>
              </div>
              <input
                type="text"
                name="z_number"
                id="z_number"
                placeholder="Enter your z-number here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Phone</span>
              </div>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your number here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Department</span>
              </div>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="Enter your department here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Level</span>
              </div>
              <input
                type="text"
                name="level"
                id="level"
                placeholder="Enter your level here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="pt-2 w-[300px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Password</span>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password here"
                className="input input-bordered rounded-none w-full"
              />
            </label>
          </div>
          <div className="pt-10 my-auto">
            <button className="w-[300px] btn rounded-none btn-md bg-green-500 hover:bg-green-600 text-white text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaSignUp;
