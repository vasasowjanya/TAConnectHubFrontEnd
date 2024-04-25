const MyTaApplicationStatus = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green-500 text-white text-lg">
            <tr>
              <th></th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTaApplicationStatus;
