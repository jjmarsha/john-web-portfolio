import React from "react";
import Page from "./page";
import Frame from "components/frame";
import TextFrame from "components/textframe";

class About extends React.Component {
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
                    <Frame/>
                    <TextFrame/>
                </div>
            </Page>
        )
    }
}

export default About;