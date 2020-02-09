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
            {
                props.doc ? <a href={props.doc} target="_blank">{props.name}</a> :
                <NavLink style={linkStyle} to={props.link}>{props.name}</NavLink>
            }
        </div>
    )
}

export default MenuLink;