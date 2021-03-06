import React, { Component } from "react";
import "../User_Popup/User_Popup.css";
import {
  ButtonToolbar,
  Button,
  Tab,
  Tabs,
  Card,
  CardGroup,
  CardColumns
} from "react-bootstrap";

class User_Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCurrent: false,
      togglePrevious: false,
      current_Orders_Status: [
        { Image: "holder.js/100px160", Orders: "Tshirt", Status: "Pending" },
        { Image: "holder.js/100px160", Orders: "Jeans", Status: "Completed" }
      ],
      previous_Orders_Status: [
        { Image: "holder.js/100px160", Orders: "Socks", Status: "Delivered" },
        { Image: "holder.js/100px160", Orders: "Polo", Status: "Completed" }
      ]
    };
  }

  Press_Current = () => {
    this.setState({
      toggleCurrent: !this.state.toggleCurrent,
      togglePrevious: false
    });
  };

  Press_Previous = () => {
    this.setState({
      togglePrevious: !this.state.togglePrevious,
      toggleCurrent: false
    });
  };

  render() {
    return (
      <div className="User_Popup">
        <div id="popup1" class="overlay">
          <div class="popup">
            <div className="Grid_Popup">
              <h1>Username</h1>
              <ButtonToolbar>
                <Button variant="outline-dark" className="Edit_Profile_Button">
                  Edit Profile
                </Button>
                <Button variant="outline-dark" className="Log_Out_Button">
                  Log Out
                </Button>
              </ButtonToolbar>
            </div>
            <a class="close" href="#">
              &times;
            </a>
            <div class="content">
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab
                  eventKey="home"
                  title="Current"
                  className="Current_Tab"
                  onEnter={this.Press_Current}
                />
                <Tab
                  eventKey="profile"
                  title="Previous"
                  className="Previous_Tab"
                  onEnter={this.Press_Previous}
                />
              </Tabs>

              {this.state.togglePrevious && (
                <div className="Cards_Popup">
                  {this.state.previous_Orders_Status.map(item => (
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title>
                          Order #2: {item.Orders}
                          <br />
                          Status2:{item.Status}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                  {/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>
                        Order #2: <br />
                        Status2:
                      </Card.Title>
                    </Card.Body>
                  </Card> */}
                </div>
              )}
              {this.state.toggleCurrent && (
                <div className="Cards_Popup">
                  {this.state.current_Orders_Status.map(item => (
                    <Card>
                      <Card.Img variant="top" src={item.Image} />
                      <Card.Body>
                        <Card.Title>
                          Order #1:{item.Orders} <br />
                          Status1:{item.Status}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  ))}
                  {/* <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                            <Card.Title>Order #1: <br />Status1:</Card.Title>

                                        </Card.Body>

                                    </Card> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_Popup;
