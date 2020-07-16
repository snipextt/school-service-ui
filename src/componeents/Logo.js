import React from "react";

export default function Logo() {
  return (
    <div className="logo-container">
      <img
        src={require("../Static/images/white-min(1).png")}
        alt="logo"
        className="logo"
      />
    </div>
  );
}
