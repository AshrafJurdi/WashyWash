import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import "./customers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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
          U_name: "Username",
          P_Number: "Phone NUmber"
        }
      ],
      clothes: [
        {
          First_Name: "Omar",
          Middle_Name: "Jeans",
          Last_Name: "33",
          Customer_Id: "55",
          User_Name: "fh",
          Phone_Number: "37"
        },
        {
          First_Name: "Samir",
          Middle_Name: "skirt",
          Last_Name: "22",
          Customer_Id: "2",
          User_Name: "kksf",
          Phone_Number: "353"
        }
      ]
    };
    // ----------------------------------------------------------------------------------
    // this.state = {

    //     Rows: ["First Name","Middle Name", "Last Name", "Customer ID"," Username", "Phone Number"],
    //     Data: ["Omar","Samir","Mohammad", "1890765","Omar700","+961 78 871 488"],
    //     Data_Two: ["Omar","Samir","Mohammad", "1890765","Omar700","+961 78 871 488"]
    //  }
  }

  deleteData = index => {
    let data = this.state.clothes;
    delete data[index];
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <div className="layout">
        <div>
          <MDBBtn color="primary" className="button">
            Add Customer
          </MDBBtn>
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
                      <th>{p.P_Number}</th>
                 
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
                  <td>{h.Phone_Number}</td>

                  <tr>
                    <FontAwesomeIcon
                      className="svg-inline--fa.fa-w-14"
                      icon={faTrash}
                      onClick={() => this.deleteData(index)}
                    />
                  </tr>
                  <tr>
                    <FontAwesomeIcon className="edit" icon={faEdit} />
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
