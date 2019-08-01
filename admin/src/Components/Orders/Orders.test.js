import React from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import "./Orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import SignupForm from "../SignUp/signup.js";
import "../SignUp/signup.css";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Properties: [
        {
          Order: "Order#",
          User: "Username",
          Date: "Date",
          Priority: "Priority",
          Status: "Status",
          Notes: "Notes"
        }
      ],
      clothes: [
        {
          Order: "5",
          User: "mark101",
          Date: "2005",
          Priority: "low",
          Status: "pending",
          Notes: "note......"
        },
        {
          Order: "3",
          User: "steve404",
          Date: "2018",
          Priority: "high",
          Status: "delivered",
          Notes: "note......"
        }
      ],
      modal14: false
    };
    // ----------------------------------------------------------------------------------
    // this.state = {

    //     Rows: ["First Name","Middle Name", "Last Name", "Customer ID"," Username", "Phone Number"],
    //     Data: ["Omar","Samir","Mohammad", "1890765","Omar700","+961 78 871 488"],
    //     Data_Two: ["Omar","Samir","Mohammad", "1890765","Omar700","+961 78 871 488"]
    //  }
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  deleteData = index => {
    let data = this.state.clothes;
    delete data[index];
    this.setState({ data });
    console.log(data);
  };

  editData = index => {
    let datas = this.state.clothes;

    datas[index].Order = prompt("Please edit Order#");
    datas[index].User = prompt("Please edit UserName");
    this.setState({ datas });
  };

  addData = e => {
    e.preventDefault();
    let Info = [...this.state.clothes];
    console.log(e.target);
    var a = {
      Order: e.target.order.value,
      User: e.target.user.value,
      Date: e.target.date.value,
      Priority: e.target.priority.value,
      Status: e.target.status.value,
      Notes: e.target.note.value
    };
    console.log();
    Info.push(a);
    this.setState({ clothes: Info });
  };

  render() {
    return (
      <div className="layout">
        <div>
          <MDBContainer>
            <MDBBtn
              className="button"
              color="primary"
              onClick={this.toggle(14)}
            >
              Add Order
            </MDBBtn>
            <MDBModal
              isOpen={this.state.modal14}
              toggle={this.toggle(14)}
              centered
            >
              <MDBModalHeader toggle={this.toggle(14)}>
                Add A Customer
              </MDBModalHeader>
              <MDBModalBody>
                {/* <SignupForm /> */}
                <form onSubmit={this.addData}>
                  <MDBInput hint="Order#" type="number" name="order" required />
                  <MDBInput hint="Username" type="text" name="user" required />
                  <MDBInput hint="Date" type="number" name="date" required />
                  <MDBInput
                    hint="Priority"
                    type="text"
                    name="priority"
                    required
                  />
                  <MDBInput
                    hint="Status"
                    type="number"
                    name="status"
                    required
                  />
                  <MDBInput hint="Note" type="text" name="note" />
                  <MDBBtn type="Note" value="submit" color="primary">
                    Submit
                  </MDBBtn>
                  <MDBBtn color="secondary" onClick={this.toggle(14)}>
                    Close
                  </MDBBtn>
                </form>
              </MDBModalBody>
              <MDBModalFooter />
            </MDBModal>
          </MDBContainer>
        </div>
        <div>
          <MDBTable>
            <MDBTableHead>
              {this.state.Properties.map(p => (
                <tr>
                  <th>{p.Order}</th>
                  <th>{p.User}</th>
                  <th>{p.Date}</th>
                  <th>{p.Priority}</th>
                  <th>{p.Status}</th>
                  <th>{p.Notes}</th>
                </tr>
              ))}
            </MDBTableHead>
            <MDBTableBody>
              {this.state.clothes.map((h, index) => (
                <tr>
                  <td>{h.Order}</td>
                  <td>{h.User}</td>
                  <td>{h.Date}</td>
                  <td>{h.Priority}</td>
                  <td>{h.Status}</td>
                  <td>{h.Notes}</td>
                  <tr>
                    <FontAwesomeIcon
                      className="svg-inline--fa.fa-w-14"
                      icon={faTrash}
                      onClick={() => this.deleteData(index)}
                    />
                  </tr>
                  <tr>
                    <FontAwesomeIcon
                      className="edit"
                      icon={faEdit}
                      onClick={() => this.editData(index)}
                    />
                  </tr>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    );
  }
}

export default Customers;
