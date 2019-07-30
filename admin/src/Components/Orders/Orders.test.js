import React, { Component } from 'react'

import { Button } from 'react-bootstrap';
import '../Orders/Orders.css'
import Calendar from './Calendar'
import { RadioGroup, Radio } from '@material-ui/core';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact';



class Orders extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        modal14: false
      }
      
      toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    // Data Picker Initialization

    render() {

        return (
            <div className="Orders">
                <div className="Calendar_Button">
                    <div className="Calendar_Center">
                        <Calendar />
                    </div>
                    <Button variant="outline-dark" className="button_two"  onClick={this.toggle(14)}
                    ><MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={this.toggle(14)}>Close</MDBBtn>
                      <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>Add Order</Button>

                </div>
                <div className="Orders_Table">

                    <p>Order #</p>
                    <p>Username</p>
                    <p>Date</p>
                    <p>Priority</p>
                    <p>Status</p>
                    <p>Notes</p>
                    <p></p>

                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p className="Flex_Radio">
                        <form>  <input type="radio" name="gender" value="male" />Tshirt<br />
                            <input type="radio" name="gender" value="male" />socks<br />
                            <input type="radio" name="gender" value="male" />Suit
</form>
                    </p>
                    <p>1</p>
                    <p className="Flex_Icons">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
                    </p>

                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p className="Flex_Radio">
                        <form>  <input type="radio" name="gender" value="male" />Tshirt<br />
                            <input type="radio" name="gender" value="male" />socks<br />
                            <input type="radio" name="gender" value="male" />Suit
</form>
                    </p>
                    <p>1</p>
                    <p className="Flex_Icons">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
                    </p>

                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p className="Flex_Radio">
                        <form>  <input type="radio" name="gender" value="male" />Tshirt<br />
                            <input type="radio" name="gender" value="male" />socks<br />
                            <input type="radio" name="gender" value="male" />Suit
</form>
                    </p>
                    <p>1</p>
                    <p className="Flex_Icons">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
                    </p>

                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p className="Flex_Radio">
                        <form>  <input type="radio" name="gender" value="male" />Tshirt<br />
                            <input type="radio" name="gender" value="male" />socks<br />
                            <input type="radio" name="gender" value="male" />Suit
</form>
                    </p>
                    <p>1</p>
                    <p className="Flex_Icons">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
                    </p>

                </div>
            </div>
        )


    }



}
export default Orders