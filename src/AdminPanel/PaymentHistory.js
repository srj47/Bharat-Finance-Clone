import React from "react";
import { Link } from "react-router-dom";
const PaymentHistory = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Payment History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image </th>
                <th scope="col">Date</th>
                <th scope="col">Delete</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white">
                  <img
                    src="./Assets/paymentSS.webp"
                    className=" w-100 h-auto"
                    alt=" ... "
                  />
                </td>
                <td className="text-white">12-03-2023</td>
                <td className="text-white">
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td className="text-white">Verified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
