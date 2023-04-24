import React from "react";
import { Link } from "react-router-dom";
const ViewTask = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Tasks</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">Task </th>
                <th scope="col">View</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-white">Task 1</th>
                <td className="text-white">
                  <Link to="#" className="btn btn-info rounded-pill">
                    View
                  </Link>
                </td>
                <td className="text-white">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
