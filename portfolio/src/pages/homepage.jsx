import React from "react";
import "../components/styles/homepage.css";
import ReactTypingEffect from "react-typing-effect";

const name = "John Marshall";

export default class Homepage extends React.Component {
    componentDidMount() {
    }
    render() {
        return(
            <div className="homepage">
                <div className="johnmarshall">
                    <ReactTypingEffect
                        text="John Marshall"
                        cursor="|"
                        speed={100}
                        eraseDelay={10000}
                    />
                </div>
            </div>
        )
    }
}
