import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="background">
      <div className="center-box col-sm-3 p-5 ">
        <h1 className="my-4">LOGO</h1>
        <h4>Sign In | Bharat Finance</h4>
        <form>
          <h5
            htmlFor="UserID"
            className="form-label float-start mt-4"
            style={{ fontSize: "1.5rem" }}
          >
            User ID:
          </h5>
          <input
            type="text"
            id="UserID"
            className="form-control"
            name="UserID"
            required
          />

          <h5
            htmlFor="psw"
            className="form-label float-start mt-3"
            style={{ fontSize: "1.5rem" }}
          >
            Password:
          </h5>
          <input
            type="password"
            className="form-control"
            id="psw"
            name="psw"
            required
          />

          <Link to="/dashboard" type="submit" className="btn btn-dark my-5">
            <h3>Sign In</h3>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
