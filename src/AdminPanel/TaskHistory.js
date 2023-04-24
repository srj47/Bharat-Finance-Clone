import React from "react";
import { Link } from "react-router-dom";
const TaskHistory = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Task History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Id </th>
                <th scope="col">From</th>
                <th scope="col">Inc. Type </th>
                <th scope="col">Credit</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">BH001220</td>
                <td className="text-white">self</td>
                <td className="text-white">task_income</td>
                <td className="text-white">30 ₹.</td>
                <td className="text-white">12-02-2023</td>
                <td className="text-white ">Credit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;
