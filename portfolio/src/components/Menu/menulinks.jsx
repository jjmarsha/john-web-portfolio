import React from "react";
import "./menulink.css";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const MenuLink = (props) => {
  return (
    <div className={"menulink" + (props.active ? " active" : "")}>
      {props.doc ? (
        <a href={props.doc} target="_blank">
          {props.name}
        </a>
      ) : props.outsource ? (
        <a href={props.link}>{props.name}</a>
      ) : (
        <Link style={linkStyle} to={props.link}>
          {props.name}
        </Link>
      )}
    </div>
  );
};

export default MenuLink;
