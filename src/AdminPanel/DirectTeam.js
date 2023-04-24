import React from "react";
import { Link } from "react-router-dom";
const DirectTeam = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Direct Team</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sponsor Id</th>
                <th scope="col">Name</th>
                <th scope="col">User Id</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Joining Date</th>
                <th scope="col">View Team</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">548</td>
                <td className="text-white">Sachin</td>
                <td className="text-white">TR54</td>
                <td className="text-white">4567891230</td>
                <td className="text-white">Sachin@gmail.com</td>
                <td className="text-white">12-02-2023</td>
                <td className="text-white">-</td>
                <td className="text-white">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DirectTeam;
