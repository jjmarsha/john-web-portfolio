import React from "react";
import { Col } from "reactstrap";
import "./page.css";

const Page = (props) => {
    return(
        <Col md="12" >
            <div className="page">
                {props.children}
            </div>
        </Col>
    )
}

export default Page;