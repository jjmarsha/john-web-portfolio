import React from "react";
import "./menulink.css";
import {NavLink} from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: "black"
}

const MenuLink = (props) => {
    return(
        <div className={"menulink" + (props.active ? " active" : "")}>
            <NavLink style={linkStyle} to={props.link}>{props.name}</NavLink>
        </div>
    )
}

export default MenuLink;