import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead,MDBBtn } from 'mdbreact';
import './customers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'

class Customers extends React.Component {
    constructor(props) {  
        super(props);
        this.state = { 
            
            Rows: ["First Name","Middle Name", "Last Name", "Customer ID"," Username", "Phone Number"],
            Data: ["Omar","Samir","Mohammad", "1890765","Omar700","+961 78 871 488"]
         }
    }

    
      
    
    render() { 
        return ( 
        
        <div className="layout">
           <div><MDBBtn color="primary" className="button">Add Customer</MDBBtn></div>
           <div><MDBTable>
            <MDBTableHead>
              <tr>
                  {this.state.Rows.map(p => (
                      <th>{p}</th>
                  ))}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                  {this.state.Data.map(h => (
                      <td>{h}</td>
                  ))}
                  <tr>
                   <FontAwesomeIcon className="svg-inline--fa.fa-w-14" icon={faTrash} onclick={this.deleteData}/>
                   </tr>
                   <tr><FontAwesomeIcon className="edit" icon={faEdit}/></tr>
              </tr>
            </MDBTableBody>
            
          </MDBTable>
          </div> 
          </div>
        );
    }
}
 
export default Customers;
