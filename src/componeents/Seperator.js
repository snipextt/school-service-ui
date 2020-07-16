import React from "react";
import { Link } from "react-router-dom";

export default function seperator() {
  return (
    <>
      <div className="seperatorHome">
        <Link to="/services" className="hbtn">
          Explore Services
        </Link>
      </div>
    </>
  );
}
