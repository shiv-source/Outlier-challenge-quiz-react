import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Navbar dark expand="md" color="primary">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            Outlier
          </NavbarBrand>
        </div>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link active" to="/home">
              <span className="fa fa-home fa-lg"></span> Home
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
