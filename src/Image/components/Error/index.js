import React from "react";
import "./styles.css";

const ErrorLoadingBox = ({ msg }) => (
  <div className="ErrorLoadingBox">
    <p>
      <span role="img" aria-label="skull">
        💀
      </span>{" "}
      {msg}
    </p>
  </div>
);

export default ErrorLoadingBox;
