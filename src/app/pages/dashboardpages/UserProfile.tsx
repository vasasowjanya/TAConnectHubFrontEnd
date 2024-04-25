const UserProfile = () => {
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
        <h1 className="text-lg mt-2">Name: user</h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">Email: email</h1>
      </div>
      <div>
        <h1 className="text-lg mt-2">Z Number: number</h1>
      </div>
    </div>
  );
};

export default UserProfile;
