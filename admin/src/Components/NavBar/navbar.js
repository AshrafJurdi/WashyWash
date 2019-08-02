import React from "react";
import Nav from "react-bootstrap/Nav";

import Orders from "../Orders/Orders.test";
import Customers from "../Customers/customers";
import Users from "../Users/Users";
import Data from "../Data/data";
import Products from "../Products/Products";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOrders: true,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: false,
      toggleProducts: false
    };
  }
  orders = () => {
    this.setState({
      toggleOrders: true,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: false,
      toggleProducts: false
    });
  };
  customers = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: true,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: false,
      toggleProducts: false
    });
  };
  landingPage = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: false,
      toggleLandingPage: true,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: false,
      toggleProducts: false
    });
  };

  users = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: true,
      toggleData: false,
      toggleProducts: false
    });
  };
  data = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: true,
      toggleProducts: false
    });
  };
  products = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: false,
      toggleUsers: false,
      toggleData: false,
      toggleProducts: true
    });
  };
  render() {
    return (
      <div>
        <Nav justify variant="tabs" defaultActiveKey="/home" className="Navbar">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onSelect={() => this.orders()}>
              Orders
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onSelect={() => this.customers()}>
              Customers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onSelect={() => this.landingPage()}>
              Landing Page
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="admin" disabled onSelect={() => this.users()}>
              Users
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="admin1" disabled onSelect={() => this.data()}>
              Data
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="admin2"
              disabled
              onSelect={() => this.products()}
            >
              Products
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {this.state.toggleCustomers && (
          <div>
            <Orders />
          </div>
        )}
        {this.state.toggleCustomers && (
          <div>
            <Customers />
          </div>
        )}
        {this.state.toggleLandingPage && <div>Landing Page</div>}

        {this.state.toggleUsers && (
          <div>
            <Users />
          </div>
        )}
        {this.state.toggleData && (
          <div>
            <Data />
          </div>
        )}
        {this.state.toggleProducts && (
          <div>
            <Products />
          </div>
        )}
      </div>
    );
  }
}
export default Navbar;
