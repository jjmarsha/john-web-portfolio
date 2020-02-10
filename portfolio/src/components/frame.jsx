import React from "react";
import "./frame.css";

import P1 from "static/p1.jpg";

const photos = [
    {
        source: P1,
    },
];

const Frame = (props) => {

    return (
        <div className="f-container">
            <div className="frame">
                <img src={photos[0].source}/>
            </div>
        </div>
    )
}

export default Frame;