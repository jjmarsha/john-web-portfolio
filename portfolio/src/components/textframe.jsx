import React from "react";
import "./frame.css";

const TextFrame = () => {
  const overlayLines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="textframe">
      {/* <div className="textframe-overlay">
        {overlayLines.map((value, key) => (
          <div
            className="overlay-row"
            style={{ animationDuration: value * 0.8 + "s" }}
          />
        ))}
      </div> */}
      <b style={{ fontSize: "30px" }}>Who am I</b>
      <p>
        You can call me John or John Marshall, whichever rolls well with your
        tongue. I am a developer, gamer, and innovator in any field that I enjoy
        pursuing.
      </p>
      <p>
        I wish to call myself an architect because I love designing the systems
        any of app that I have worked on. Whenever I work on a team, I usually
        lead the design of the backend infrastructure and deployment pipelines.
        I enjoy building tools to make life and work more convenient so I can
        spend less time on tedious issues and more time and activities that I
        enjoy. I am also well-adept in full-stack engineering and have lead
        teams in developing web and mobile applications.
      </p>
      <p>
        While I am still in school, I lead a team at Better to develop a
        productivity + social media mobile application in React Native and
        Python Django. We'll be having a beta release in about 2 months.
      </p>
      <p>
        I code part-time at Acclaim Academic Institute, an online platform for
        hiring and communicating with tutors. I build out the full-stack
        implementations of various features as well research and integrate
        various outsourced APIs such as Braintree and Canvas
      </p>
      <p>
        Currently I am looking for a internship or full-time opportunity. With
        my previous experiences, I can for sure bring something new to the
        company that I will work at.
      </p>
    </div>
  );
};

export default TextFrame;
