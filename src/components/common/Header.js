import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggle,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/imgs/stopwatch.png";

export const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark sticky="top" expand="lg" color="dark">
      <NavbarBrand href="/" className="ms-5">
        <img src={Logo} className="float-start" />
      </NavbarBrand>
      <NavbarBrand href="/" className="ms-5">
        Time Tracker
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink className="nav-link"></NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
