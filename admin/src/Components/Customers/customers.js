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
import "./customers.css";
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
          F_Name: "First Name",
          M_Name: "Middle Name",
          L_Name: "Last Name",
          C_Id: "Customer Id",
          U_name: "Username"
        }
      ],
      clothes: [
        {
          First_Name: "Omar",
          Middle_Name: "Jeans",
          Last_Name: "33",
          Customer_Id: "55",
          User_Name: "fh"
        },
        {
          First_Name: "Samir",
          Middle_Name: "skirt",
          Last_Name: "22",
          Customer_Id: "2",
          User_Name: "kksf"
        }
      ],
      modal14: false,

      filteredCustomers: []
    };
  }

  componentDidMount() {
    const filteredCustomers = [...this.state.clothes];
    this.setState({ filteredCustomers });
  }

  sortBySelect = e => {
    const sortBy = e.target.value;
    if (sortBy === "none") return;
    var filteredCustomers = [...this.state.filteredCustomers];

    function compareLastName(a, b) {
      
      const  LastNameA = a.L_Name.toUpperCase();
      const  LastNameB = b.L_Name.toUpperCase();

      let comparison = 0;
      if ( LastNameA >  LastNameB) {
        comparison = 1;
      } else if ( LastNameA <  LastNameB) {
        comparison = -1;
      }
      return comparison;
    }

    function compareFirstName(a, b) {
      // Use toUpperCase() to ignore character casing
      const First_NameA = a.First_Name.toUpperCase();
      const First_NameB = b.First_Name.toUpperCase();

      let comparison = 0;
      if (First_NameA > First_NameB) {
        comparison = 1;
      } else if (First_NameA < First_NameB) {
        comparison = -1;
      }
      return comparison;
    }

    // this.sortBySelect = e => {
    //   const sortBy = e.target.value;
    //   if(sortBy === "none") return;
    //   var filteredCustomers = [...this.state.filteredCustomers];
    //   function compareMiddleName(a,b) {

    //     const Mid
    //   }
    // }

    filteredCustomers.sort(
      sortBy === "Last_Name" ? compareLastName :compareFirstName
    );
    this.setState({
      filteredCustomers
    });  
  };

  


  filterName = e => {
    e.preventDefault();
    const name = e.target.value.toUpperCase();
    var filteredCustomers;
    filteredCustomers = this.state.filteredCustomers.filter(c => {
      return (
        c.First_Name.toUpperCase().includes(name) ||
        c.Last_Name.toUpperCase().includes(name)
      );
    });
    this.setState({ filteredCustomers });
  };

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

    datas[index].First_Name = prompt("Please edit First Name");
    datas[index].Middle_Name = prompt("Please edit Middle Name");
    datas[index].Last_Name = prompt("Please edit Last Name");
    datas[index].User_Name = prompt("Please edit User Name");
    datas[index].Customer_Id= prompt("Please edit Customer ID");
    this.setState({ clothes:datas });
  };

  addData = e => {
    e.preventDefault();
    let Info = [...this.state.clothes];
    console.log(e.target);
    var a = {
      First_Name: e.target.firstname.value,
      Middle_Name: e.target.middlename.value,
      Last_Name: e.target.lastname.value,
      Customer_Id: e.target.id.value,
      User_Name: e.target.username.value
    };
    console.log();
    Info.push(a);
    this.setState({ clothes: Info });
  };

  render() {
    return (
      <div>
      <div>
      <fieldset>
          <legend>
            <b>Sort and Filter Data</b>
          </legend>
          <p>
            <label>Sort By: </label>
            <select id="myList" onChange={this.sortBySelect}>
              <option value="none">----</option>
              <option value="fname">First Name</option>
              <option value="lname">Last Name</option>
            </select>
          </p>
          <input
            type="text"
            name="nameFilter"
            placeholder="name"
            onChange={this.filterName}
          />
        </fieldset>




      </div>
      <div className="layout">
        <div>
          <MDBContainer>
            <MDBBtn
              className="button"
              color="primary"
              onClick={this.toggle(14)}
            >
              Add Customer
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
                  <MDBInput
                    hint="Your First Name"
                    type="text"
                    name="firstname"
                  />
                  <MDBInput
                    hint="Your Middle Name"
                    type="text"
                    name="middlename"
                  />
                  <MDBInput hint="Your Last Name" type="text" name="lastname" />
                  <MDBInput
                    hint="Your UserName"
                    type="text"
                    name="username"
                    required
                  />
                  <MDBInput hint="Customer ID" type="number" name="id" />
                  <MDBBtn type="submit" value="submit" color="primary">
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
                  <th>{p.F_Name}</th>
                  <th>{p.M_Name}</th>
                  <th>{p.L_Name}</th>
                  <th>{p.C_Id}</th>
                  <th>{p.U_name}</th>
                </tr>
              ))}
            </MDBTableHead>
            <MDBTableBody>
              {this.state.clothes.map((h, index) => (
                <tr>
                  <td>{h.First_Name}</td>
                  <td>{h.Middle_Name}</td>
                  <td>{h.Last_Name}</td>
                  <td>{h.Customer_Id}</td>
                  <td>{h.User_Name}</td>

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
      </div>
    );
  }
}

export default Customers;
