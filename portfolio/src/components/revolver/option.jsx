import React from "react";
import "components/styles/revolver.css";

const Option = (props) => {
  return (
    <div
      className="option-container"
      style={{ transform: "rotate(" + props.degrees * 90 + "deg)" }}
    >
      <div className="option-element"></div>
    </div>
  );
};

export default Option;
