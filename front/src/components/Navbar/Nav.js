import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../Navbar/Nav.css";
import About_Us from "..//About_Us/About_Us.test";
import "../User_Popup/User_Popup.css";
/**
 * @param  {} props
 * @param  {} {super(props
 * @param  {false} ;this.state={collapse
 * @param  {false};this.onClick=this.onClick.bind(this} isWideEnough
 */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              color="bg-primary"
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
              className="landing-nav-bar"
            >
              <img
                className="Image"
                src="https://www.washywash.com/image/cache/static/logo-824x159.png"
                alt="logo"
              />

              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center>
                  <MDBNavItem active>
                    <MDBNavLink to="#">About Us</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Services</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact Us</MDBNavLink>
                  </MDBNavItem>
                  <MDBBtn className="but" gradient="aqua">
                    Log In / Sign up
                  </MDBBtn>
                  <a
                    href="#popup1"
                    className="text-right"
                    className="text-center"
                    className="UserText"
                  >
                    UserName
                  </a>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    );
  }
}

export default Navbar;
