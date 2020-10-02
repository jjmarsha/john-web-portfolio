import React from "react";
import MenuLink from "../Menu/menulinks";
import "./navbar.css";
import Routes from "../../routes";
import { Col } from "reactstrap";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const { pathname } = props.location;
  return (
    <>
      <Col lg="9" md="7"></Col>
      <Col
        lg="3"
        md="5"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {Routes.map((value, id) => {
          return (
            <MenuLink
              key={id}
              doc={value.doc}
              active={pathname === value.route}
              name={value.text}
              link={value.route}
              outsource={value.outsource}
            />
          );
        })}
      </Col>
    </>
  );
};

export default withRouter(Navbar);
