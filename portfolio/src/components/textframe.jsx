import React from "react";
import "./frame.css"

const TextFrame = () => {
    const overlayLines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return(
        <div className="textframe">
            <div className="textframe-overlay">
                {overlayLines.map((value, key) => 
                    <div className="overlay-row" style={{animationDuration: (value*0.8)+"s"}}/>
                )}
            </div>
            <b style={{fontSize: "30px"}}>Who am I</b>
            <p>
                You can call me John or John Marshall, whichever rolls
                well with your tongue. I am a developer, gamer, as well as 
                a scientist who seeks to apply the natural laws to my work 
                and move the world forward. 
            </p>
            <p>
                I have experience in full-stack development with various language 
                and frameworks including React.js and JSP for front-end design
                along with Node.js, Go, and Python for the back-end frameworks.
                For game development and software/application development,
                I am well-versed in C++ and Java for both speed and raw power. In summary,
                I am well-rounded in all areas of the development layers.
            </p>
            <p>
                Yikes, that doesn't explain much about who I am as a person. My definition
                of fun is playing Smash Ultimate with friends (and to my regrets, losing every time).
                At the same time, I'm the type of person to get excited for the smallest improvements in any
                activity, and the type to push through a long night because I always
                tell myself "one more turn/chapter/episode". But it is because of this, I
                am able to push through against all odds and grow into the type of person
                and engineer that I am today.
            </p>
        </div>
    );
}

export default TextFrame;