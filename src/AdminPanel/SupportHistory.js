import React from "react";
import { Link } from "react-router-dom";
const SupportHistory = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Support History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subject </th>
                <th scope="col">Inquiry</th>
                <th scope="col">Date</th>
                <th scope="col">Reply</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">Balance Enquiry</td>
                <td className="text-white">Here will be textarea text</td>
                <td className="text-white">12-03-2023</td>
                <td className="text-white">Here will be reply</td>
                <td className="text-white">Resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportHistory;
