import React from "react";

const ErrorLoadingBox = ({ className, msg }) => (
  <div className={ className }>
    <p>
      <span role="img" aria-label="skull">
        💀
      </span>{" "}
      {msg}
    </p>
  </div>
);

export default ErrorLoadingBox;
