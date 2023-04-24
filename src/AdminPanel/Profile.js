import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-4 metalic-color ">
          <div className="col-sm-6 mx-auto my-5">
            <div className="row mx-0 px-0">
              <h2 className="mx-auto">Profile</h2>
              <h5 className="mb-4">View & Edit Profile</h5>

              <form>
                <label className=" my-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control bg-transparent border border-info text-info"
                />
                <label className=" my-2">Phone Number</label>
                <input
                  type="text"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  className="form-control bg-transparent border border-info text-info"
                />
                <label className=" my-2">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control bg-transparent border border-info text-info"
                />
                <label className=" my-2">password</label>
                <input
                  type="password"
                  id="psw"
                  name="psw"
                  className="form-control bg-transparent border border-info text-info"
                />

                <label className="col-12 my-3 mt-4">
                  Google Pay/ Phone Pe/ PayTm QR Code
                </label>
                <div className="col-sm-12">
                  {" "}
                  <img
                    src=""
                    className="col-sm-2 h-auto"
                    alt=" QR Code will be here "
                  />
                </div>
                <label className="col-12 my-2">Upload ScreenShot </label>
                <input
                  type="file"
                  id="ScreenShot"
                  name="ScreenShot"
                  className="form-control bg-transparent border border-info text-info"
                />

                <button type="submit" className="btn btn-info mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
