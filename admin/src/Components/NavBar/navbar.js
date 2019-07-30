import React from "react";
import Nav from "react-bootstrap/Nav";
import MaterialTableDemo from "../Orders_Updated/Orders_Updated";
import Orders from "../Orders/Orders.test";
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
  contactPage = () => {
    this.setState({
      toggleOrders: false,
      toggleCustomers: false,
      toggleLandingPage: false,
      toggleContactPage: true,
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
            <Nav.Link eventKey="link-3" onSelect={() => this.contactPage()}>
              Contact Page
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
        {this.state.toggleOrders && (
          <div>
            <MaterialTableDemo />
          </div>
        )}
        {this.state.toggleCustomers && (
          <div>
            <p>sojdhfkl</p>
          </div>
        )}
        {this.state.toggleLandingPage && <div>aer</div>}
        {this.state.toggleContactPage && <div>saddfg</div>}
        {this.state.toggleUsers && <div>sdg</div>}
        {this.state.toggleData && <div>sgh</div>}
        {this.state.toggleProducts && <div>dhgj</div>}
      </div>
    );
  }
}
export default Navbar;
