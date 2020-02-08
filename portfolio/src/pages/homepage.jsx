import React from "react";
import "./homepage.css";
import ReactTypingEffect from "react-typing-effect";
import Page from "./page";

const name = "John Marshall";

export default class Homepage extends React.Component {
    render() {
        return(
            <Page>
                <div style={{
                    fontSize: "40px",
                    color: "rgb(54, 54, 54)",
                    marginTop: "15%",
                }}>
                    Page Coming Soon
                </div>
            </Page>
        )
    }
}
