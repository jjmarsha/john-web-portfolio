import React from "react";
import "./comingsoon.css";
import Page from "./page";

export default class Loading extends React.Component {
  render() {
    return (
      <Page>
        <div
          style={{
            fontSize: "40px",
            color: "rgb(54, 54, 54)",
            marginTop: "10%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Page is Loading
        </div>
      </Page>
    );
  }
}
