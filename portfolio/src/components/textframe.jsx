import React from "react";
import "./frame.css"

const TextFrame = () => {
    const overlayLines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return(
        <div className="textframe">
            <div className="textframe-overlay">
                {overlayLines.map((value, key) => 
                    <div className="overlay-row" style={{animationDuration: (value*0.8)+"s"}}/>
                )}
            </div>
            <b>About</b>
            <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
        </div>
    );
}

export default TextFrame;