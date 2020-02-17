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
                    justifyContent: "center"
                }}>
                    <p>
                        Page Coming Soon
                    </p>
                    <div style={{fontSize: "15px", width: "400px", margin: "auto"}}>
                        To job recruiters: Sorry, this website is currently a work in
                        progress, but my <b>Resume, Github, and LinkedIn</b> are linked for you
                        as well as my <b>About</b> page.
                    </div>
                </div>
            </Page>
        )
    }
}
