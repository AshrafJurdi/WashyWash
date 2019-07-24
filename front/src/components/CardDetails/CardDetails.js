import React from 'react';
import './CardDetails.css'



import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class CardDetails extends React.Component {
state = {
  modal14: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer>
        {/* <MDBBtn color="primary" onClick={this.toggle(14)}>MDBModal</MDBBtn> */}
        <MDBCol>
      <MDBCard onClick={this.toggle(14)} style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Click to show details
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
          <img className="CardDetails-Logo" src={require('../../assets/images/logo.png')} alt="logo" />
          </MDBModalHeader>
          <MDBModalBody>
        <p className="mdb-color white-text">Order Number: example 1</p>
        <p className="mdb-color white-text">Items: example 2</p>
        <p className="mdb-color white-text">Status: example 3</p>
        <p className="mdb-color white-text">Price: example 4</p>
        <p className="mdb-color white-text">Date Ordered: example 5</p>
                
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default CardDetails;