import React from "react";
import Page from "./page";
import Frame from "components/frame";
import TextFrame from "components/textframe";

//Use this method to insert dynamic text

// <Text>{`
// Hi~
// this is a test message.
// `}</Text>

class About extends React.Component {
    render() {
        return(
            <Page>
                <Frame/>
                <TextFrame/>
            </Page>
        )
    }
}

export default About;