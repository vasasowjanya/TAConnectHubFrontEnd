import { Link } from "react-router-dom";
import catchAsync from "../../../utils/catchAsync";
import axiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const InstructorLogin = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    catchAsync(async () => {
      const res = await axiosInstance.post("/auth/login", { email, password });
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      window.location.reload();
    })();
  };

  return (
    <div className="py-24 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-200 rounded-md shadow-lg p-5 mx-auto"
      >
        <h1 className="text-xl font-semibold text-center">Instructor Login</h1>
        <br />
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
        <div className="mt-6">
          <button className="w-[300px] btn rounded-none btn-md bg-green-500 hover:bg-green-600 text-white text-base font-medium">
            Login
          </button>
        </div>
        <h1 className="pt-3 text-sm font-medium text-center">
          Don't have an account?{" "}
          <span className="text-red-500 font-semibold">
            <Link to="/signup/instructor">Sign up here</Link>
          </span>
        </h1>
      </form>
    </div>
  );
};

export default InstructorLogin;
