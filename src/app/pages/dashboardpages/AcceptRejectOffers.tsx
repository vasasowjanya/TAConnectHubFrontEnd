const AcceptRejectOffers = () => {
  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-center">My Available Offers</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-500 text-white text-lg">
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Z Number</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="flex items-center gap-2">
                <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                  Accept
                </button>
                <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptRejectOffers;
