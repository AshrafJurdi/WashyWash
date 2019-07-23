import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import '../Navbar/Nav.css'
import About_Us from '..//About_Us/About_Us.test'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
            
            <img className="Image" src={logo} alt='logo'/>
             
              
              
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                  <MDBBtn className="but" gradient="aqua">Log In / Sign up</MDBBtn>
                  <a link to="#" className="text-right" className="text-center" className="UserText">UserName</a>
                </MDBNavbarNav>
                
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
              
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            
             <img className="center" src={require('../../assets/images/washy.png')} />
             <h1 className="text-1"> We Spin</h1>
            
             <h1 className="text-2">Your World</h1>
             
            
            </MDBMask>
            
          </MDBView>
        </header>

        <main>
          <MDBContainer className="text-center my-5">
           {/* <About_Us/> */}
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Navbar;