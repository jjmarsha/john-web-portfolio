import React from "react";
import { Col } from "reactstrap";
import "./page.css";

const Page = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          fontSize: "40px",
          width: "100%",
          color: "rgb(54, 54, 54)",
          marginTop: "10%",
          paddingBottom: "50px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {props.children}
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/john-marshall-60113412a/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/jjmarsha">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="mailto:jjmarsha@usc.edu">
          <i className="fas fa-envelope-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Page;
