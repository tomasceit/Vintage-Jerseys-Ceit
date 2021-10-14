import * as React from "react";
import "./LoadingIcon.css";

const LoadingIcon = () => {
  return (
    <div className="myContainer d-flex flex-column loading">
      <p>Loading...</p>{" "}
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingIcon;
