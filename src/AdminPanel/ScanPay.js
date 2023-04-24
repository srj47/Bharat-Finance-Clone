import React from "react";
import { Link } from "react-router-dom";
const ScanPay = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Scan & Pay</h2>
          <h5>Deposite & Send Sceenshots</h5>
          <div className="col-sm-3 mx-auto">
            <img
              src="./Assets/QRcode.PNG"
              className=" w-100 h-auto my-5"
              alt=" QR Code "
            />
          </div>
          <div className="col-sm-6 mx-auto">
            <label className="form-label">UTR/TRANSECTION ID</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
          <div className="col-sm-6 mx-auto">
            <label className="form-label mt-4">SCREENSHOT</label>
            <input type="file" className="form-control" placeholder="" />
          </div>
          <center className="my-4">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ScanPay;
