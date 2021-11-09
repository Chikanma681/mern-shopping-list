import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpem: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm">
          <Container>
            <NavbarToggler onClick={this.toggle} className="mb-5" />
            <Collapse isOpen={this.state.isOpen} navbar>
            <NavbarBrand href="/" className="me-auto">Shopping List</NavbarBrand>
              <Nav className="ms-auto" navbar>
                <NavItem className="ms-auto">
                  <NavLink  href="https://github.com/Chikanma681">
                    <h6>Github</h6>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
