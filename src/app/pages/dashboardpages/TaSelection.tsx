import { Link } from "react-router-dom";

const TaSelection = () => {
  return (
    <div>
      <h1 className="text-lg">TA Selection</h1>
      <div className="mt-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Status</th>
                <th>Action</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Pending</td>
                <td>
                  <Link to="/dashboard/ta-application-review/1">
                    <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                      View Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                    Accept
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaSelection;
