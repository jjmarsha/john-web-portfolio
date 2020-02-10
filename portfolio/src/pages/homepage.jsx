import React from "react";
import "./homepage.css";
import Page from "./page";
import Frame from "components/frame";
import TextFrame from "components/textframe";

export default class Homepage extends React.Component {
    render() {
        return(
            <Page>
                <div style={{
                    fontSize: "40px",
                    color: "rgb(54, 54, 54)",
                    marginTop: "10%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    Page Coming Soon
                </div>
            </Page>
        )
    }
}
