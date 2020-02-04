import React from "react";
import "../styles/menulink.css";

const MenuLink = (props) => {
    return(
        <div className={"menulink" + (props.active ? " active" : "")}>
            {props.name}
        </div>
    )
}

export default MenuLink;