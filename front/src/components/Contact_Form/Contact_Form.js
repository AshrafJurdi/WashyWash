import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './Contact_Form.css';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="format">
    <MDBContainer className="bg">
      <MDBRow className="inp"> 
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4 text">Contact Us</p>
            <div className="text-1">
              <MDBInput
                label="Your name"
              
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
              
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput 
                type="textarea"
                rows="2"
                label="Your message"
                
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="warning">
                Send
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </div> );
    }
}
 
export default Form;