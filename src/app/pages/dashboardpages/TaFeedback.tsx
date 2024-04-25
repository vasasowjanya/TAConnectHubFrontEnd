import { Link } from "react-router-dom";

const TaFeedback = () => {
  return (
    <div>
      <h1 className="text-lg">TA Feedback</h1>
      <div className="mt-2">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Name</th>
                <th>Z-Number</th>
                <th>Feedback</th>
                <th> Add/Edit Feedback</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>
                  <Link to="/dashboard/ta-feedback/1">
                    <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                      Add / Edit
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaFeedback;
