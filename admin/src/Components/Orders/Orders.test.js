import React, { Component } from 'react'

import { Button } from 'react-bootstrap';
import '../Orders/Orders.css'
import Calendar from './Calendar'
import { RadioGroup, Radio } from '@material-ui/core';


class Orders extends Component {
    constructor(props) {
        super(props);
    }
    // Data Picker Initialization

    render() {

        return (
            <div className="Orders">
                <div className="Calendar_Button">
                    <div className="Calendar_Center">
                        <Calendar />
                    </div>
                    <Button variant="outline-dark" className="button_two">Add Order</Button>

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