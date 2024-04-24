import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const role = event.target.role.value;
    if (role === "TA Applicant") {
      navigate("/login/ta-applicant");
    } else if (role === "Department Staff") {
      navigate("/login/department-staff");
    } else if (role === "TA Committee Member") {
      navigate("/login/ta-committee-member");
    } else if (role === "Instructor") {
      navigate("/login/instructor");
    }
  };

  return (
    <div className="py-36 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-200 rounded-md shadow-lg p-5 mx-auto"
      >
        <h1 className="text-xl font-semibold text-center">Login as</h1>
        <br />
        <div>
          <select
            name="role"
            id="role"
            className="w-[250px] select select-bordered rounded-none"
          >
            <option>Select role</option>
            <option>TA Applicant</option>
            <option>Department Staff</option>
            <option>TA Committee Member</option>
            <option>Instructor</option>
          </select>
        </div>
        <div className="mt-6">
          <button className="w-[250px] btn rounded-none btn-md bg-green-500 hover:bg-green-600 text-white text-base font-medium">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
