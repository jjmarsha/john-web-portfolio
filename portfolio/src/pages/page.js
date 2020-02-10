import React from "react";
import { Col } from "reactstrap";
import "./page.css";

const Page = (props) => {
    return(
        <Col md="12" >
            <div className="page">
                {props.children}
            </div>
            <div className="footer">
                <a href="https://www.linkedin.com/in/john-marshall-60113412a/">
                    <i className="fab fa-linkedin"/>
                </a>
                <a href="https://github.com/jjmarsha">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="mailto:jjmarsha@usc.edu">
                    <i className="fas fa-envelope-square"></i>
                </a>
            </div>
        </Col>
    )
}

export default Page;