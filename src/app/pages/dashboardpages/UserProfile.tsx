// eslint-disable
// @ts-nocheck

import toast from "react-hot-toast";
import axiosInstance from "../../../utils/axiosInstance";
import catchAsync from "../../../utils/catchAsync";

const UserProfile = () => {
  const LSUser = localStorage.getItem("user");
  let userData;
  if (LSUser) userData = JSON.parse(LSUser);

  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="mb-5">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="user"
        />
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Name: </b>
          {userData.name}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Email: </b>
          {userData.email}
        </h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">
          <b>Phone: </b>
          {userData.phone}
        </h1>
      </div>
      {userData.type === "ta_applicant" && (
        <div>
          <h1 className="text-lg mt-2 uppercase">
            <b>Z Number: </b>
            {userData?.ta_applicant.z_id}
          </h1>
        </div>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Update Profile
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Update Profile</h3>
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);

              let data;

              formData.forEach((value, key) => {
                if (value) data = { ...data, [key]: value };
              });

              catchAsync(async () => {
                const res = await axiosInstance.patch(
                  `/auth/update/${userData.id}`,
                  data,
                );
                toast.success(res.data.message);
                document.getElementById("my_modal_1").close();
                localStorage.setItem("user", JSON.stringify(res.data.data));
                window.location.reload();
              })();
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={userData.name}
              className="input w-full max-w-xs"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              defaultValue={userData.phone}
              className="input w-full max-w-xs"
            />

            <input
              type="password"
              name="password"
              placeholder="Old Password"
              className="input w-full max-w-xs"
            />

            <input
              type="password"
              name="new_password"
              placeholder="New Password"
              className="input w-full max-w-xs"
            />

            <br />
            <br />
            <button
              type="submit"
              className="btn text-white bg-green-500 hover:bg-green-600"
            >
              Update
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UserProfile;
