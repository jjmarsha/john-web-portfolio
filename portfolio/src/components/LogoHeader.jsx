import React from "react";
import "./logo.css"

const LogoHeader = () => {
    return(
        <div>
            <div className="ancestor">
                <div className="logo"/>
                <div className="logo t-1"/>
                <div className="logo t-2"/>
                <div className="logo t-3"/>
                <div className="logo t-4"/>
                <div className="horizontal left bar"/>
                <div className="horizontal right bar"/>
            </div>
        </div>
    );
}

export default LogoHeader;