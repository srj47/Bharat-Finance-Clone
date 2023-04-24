import React from "react";
import { Link } from "react-router-dom";
const SignUP = () => {
  return (
    <div className="background">
      <div className="center-box col-sm-6 p-5 ">
        <h1 className="my-4">LOGO</h1>
        <h4>Sign Up | Bharat Finance</h4>
        <form className="row text-start">
          <div className="col-sm-6">
            {" "}
            <h6 className="form-label float-start mt-3">
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
            <h6 className="form-label float-start mt-3">Name</h6>
            <input
              type="text"
              id="Name"
              className="form-control"
              name="Name"
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Phone</h6>
            <input
              type="text"
              id="Phone"
              className="form-control"
              name="Phone"
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Email</h6>
            <input
              type="email"
              id="Email"
              className="form-control"
              name="Email"
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">Password</h6>
            <input
              type="password"
              id="psw"
              className="form-control"
              name="psw"
              required
            />
          </div>
          <div className="col-sm-6">
            <h6 className="form-label float-start mt-3">PAN</h6>
            <input
              type="text"
              id="pan"
              className="form-control"
              name="pan"
              required
            />
          </div>

          <div className="form-check mt-3 ms-4">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckDefault"
            />
            <label
              className="form-check-lab  el float-start "
              htmlFor="flexCheckDefault"
              style={{ fontSize: "1.2rem" }}
            >
              I agree with the terms and conditions
            </label>
          </div>

          <Link to="/sign-in" type="submit" className="btn btn-dark my-4">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
