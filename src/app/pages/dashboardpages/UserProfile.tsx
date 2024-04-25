const UserProfile = () => {
  const LSUser = localStorage.getItem("user");
  let userData;
  if (LSUser) userData = JSON.parse(LSUser);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
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
    </div>
  );
};

export default UserProfile;
