import React from "react";
import "./nav.css";

import LOGO from "../../AID_MEDIA_LOGO.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="row m-0">
      <div className="nav  p-3 bg-dark ">
        <div className="col-sm-2 mx-auto">
          <h3 className="text-white">
            <img
              src={LOGO}
              className="ms-5 h-auto"
              width={70}
              alt=" AID Media "
            />
          </h3>
        </div>
        <div className="col-sm-2 "></div>
      </div>
    </div>
  );
};

export default NavBar;
