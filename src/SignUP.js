import React from "react";
import { Link } from "react-router-dom";

import Navbar, { MainNavbar } from "./LandingPages/Navbar";

const SignUP = () => {
  return (
    <>
      <Navbar />
      <MainNavbar />{" "}
      <div className="background">
        <div className="center-box col-sm-6 p-5 my-5 ">
          <h1 className="my-4">LOGO</h1>
          <h4>Sign Up | Bharat Finance</h4>
          <form className="row text-start fs-3">
            <div className="col-sm-6">
              {" "}
              <h6 className="form-label float-start mt-3 fs-4">
                Sponsor Id/Invite Code (Optional)
              </h6>
              <input
                type="text"
                id="SponserID"
                className="form-control"
                name="SponserID"
              />
            </div>

            <div className="col-sm-6">
              <h6 className="form-label float-start mt-3 fs-4">Name</h6>
              <input
                type="text"
                id="Name"
                className="form-control"
                name="Name"
                required
              />
            </div>
            <div className="col-sm-6">
              <h6 className="form-label float-start mt-3 fs-4">Phone</h6>
              <input
                type="text"
                id="Phone"
                className="form-control"
                name="Phone"
                required
              />
            </div>
            <div className="col-sm-6">
              <h6 className="form-label float-start mt-3 fs-4">Email</h6>
              <input
                type="email"
                id="Email"
                className="form-control"
                name="Email"
                required
              />
            </div>
            <div className="col-sm-6">
              <h6 className="form-label float-start mt-3 fs-4">Password</h6>
              <input
                type="password"
                id="psw"
                className="form-control"
                name="psw"
                required
              />
            </div>
            <div className="col-sm-6">
              <h6 className="form-label float-start mt-3 fs-4">PAN</h6>
              <input
                type="text"
                id="pan"
                className="form-control"
                name="pan"
                required
              />
            </div>

            <div className="form-check mt-3 fs-4 ms-4 ">
              <input
                className="form-check-input fs-3"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label
                className="form-check-lab  el float-start fs-3"
                htmlFor="flexCheckDefault"
              >
                I agree with the terms and conditions
              </label>
            </div>

            <Link
              to="/sign-in"
              type="submit"
              className="btn btn-info my-4  "
              style={{}}
            >
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUP;
