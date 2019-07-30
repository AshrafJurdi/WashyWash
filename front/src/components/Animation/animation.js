import React from "react";
import "./animation.css";
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

export default class Animation extends React.Component {
  render() {
    return (
      <div className="animation">
        <MDBMask
          overlay="white"
          className="flex-center flex-column text-white text-center"
        >
          <img
            className="center"
            src={require("../../assets/images/washy.png")}
          />
          <h1 className="text-1"> We Spin</h1>

          <h1 className="text-2">Your World</h1>
        </MDBMask>
      </div>
    );
  }
}
