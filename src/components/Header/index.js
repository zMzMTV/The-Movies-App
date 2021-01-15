import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <>
      <div style={{ backgroundColor: "blueviolet" }} className="d-flex">
        <div className="container ">
          <Link to="/">
            <h1 className="text-center text-white mb-3">Movies App</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
