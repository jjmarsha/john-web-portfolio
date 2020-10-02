import React from "react";
import "./BlogCard.css";
import Dummy from "static/dummy.jpg";
import WelcomePicture from "static/sophia-muller-yvG__OhaYOY-unsplash.jpg";

const BlogCard = (props) => {
  return (
    <div className="blog-card-container">
      <div style={{ maxWidth: "60%", textAlign: "left" }}>
        <div style={{ maxHeight: "300px", overflow: "hidden" }}>
          <div className="image-fade"></div>
          <img
            src={WelcomePicture}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
        >
          <div className="header-bar" />
          <h2>First article, Baby Steps</h2>
        </div>
        <p style={{ fontSize: "20px" }}>
          &emsp; I have experience in full-stack development with various
          language and frameworks including React.js and JSP for front-end
          design along with Node.js, Go, and Python for the back-end frameworks.
          For game development and software/application development, I am
          well-versed in C++ and Java for both speed and raw power. In summary,
          I am well-rounded in all areas of the development layers.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
