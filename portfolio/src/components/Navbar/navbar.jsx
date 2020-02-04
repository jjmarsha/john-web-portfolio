import React from "react";
import MenuLink from "../Menu/menulinks";
import "../styles/navbar.css";

const Navbar = (props) => {
    return(
        <div className="navbar">
            <div className="freebar"></div>
            <MenuLink name={"homepage"} active={true}/>
            <MenuLink name={"about"}/>
            <MenuLink name={"resume"}/>
            <MenuLink name={"blog"}/>
        </div>
    );
}

export default Navbar;