import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          src={require("../Static/images/white.png")}
          alt="logo"
          className="logo"
        />
      </Link>
    </div>
  );
}
