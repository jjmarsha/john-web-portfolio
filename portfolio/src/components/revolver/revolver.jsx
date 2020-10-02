import React from "react";
import "components/styles/revolver.css";
import Option from "./option";

class Revolver extends React.Component {
  render() {
    return (
      <div className="revolver-container animation-rotate">
        <Option degrees={0} />
        <Option degrees={1} />
        <Option degrees={2} />
        <Option degrees={3} />
      </div>
    );
  }
}

export default Revolver;
