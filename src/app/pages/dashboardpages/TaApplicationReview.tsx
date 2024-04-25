import { Link } from "react-router-dom";

const TaApplicationReview = () => {
  return (
    <div>
      <h1 className="mb-4 text-xl font-semibold text-center">
        Application Review
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green-500 text-white text-lg">
              <tr>
                <th></th>
                <th>Subject</th>
                <th>Z Number</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>
                  <Link to="/dashboard/ta-application-review/1">
                    <button className="btn bg-purple-700 hover:bg-purple-800 text-white">
                      View Details
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

export default TaApplicationReview;
