import React from 'react';
import MaterialTable from 'material-table';
/**
 * @param  {} {const[state
 * @param  {[{title:'FirstName'} setState]=React.useState({columns
 * @param  {'FirstName'}} field
 * @param  {'MiddleName'} {title
 * @param  {'MiddleName'}} field
 * @param  {'LastName'} {title
 * @param  {'LastName'}} field
 * @param  {'UserName'} {title
 * @param  {'UserName'}} field
 * @param  {'CustomerID'} {title
 * @param  {'CustomerID'}} field
 * @param  {} ]
 * @param  {[{FirstName:'Mehmet'} data
 * @param  {"batata"} MiddleName
 * @param  {'Baran'} LastName
 * @param  {"booo"} UserName
 * @param  {"2000"}} CustomerID
 * @param  {'ZeryaBetül'} {FirstName
 * @param  {"efkjfj"} MiddleName
 * @param  {'Baran'} LastName
 * @param  {"Zerya2017"} UserName
 * @param  {"34"} CustomerID
 * @param  {} }
 * @param  {} ]
 * @param  {} }
 */
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'FirstName' },
      { title: 'Middle Name', field: 'MiddleName' },
      { title: 'Last Name', field: 'LastName'},
      { title: 'User Name', field: 'UserName'},
      { title: 'Customer ID', field: 'CustomerID'},
    ],
    data: [
      { FirstName: 'Mehmet', MiddleName:"batata", LastName: 'Baran', UserName:"booo", CustomerID:"2000" },
      {
        FirstName: 'Zerya Betül',
        MiddleName:"efkjfj",
        LastName: 'Baran',
        UserName: "Zerya2017",
        CustomerID: "34",
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        /**Pushes new data to the state
         * @param  {} resolve=>{setTimeout((
         * @param  {} =>{resolve(
         * @param  {} ;constdata=[...state.data];data.push(newData
         * @param  {} ;setState({...state
         * @param  {} data}
         * @param  {} ;}
         * @param  {} 600
         */
        
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        /** Edits new data to the state
         * @param  {} newData
         * @param  {} oldData
         * @param  {} =>newPromise(resolve=>{setTimeout((
         * @param  {} =>{resolve(
         * @param  {} ;constdata=[...state.data];data[data.indexOf(oldData
         * @param  {} ]=newData;setState({...state
         * @param  {} data}
         * @param  {} ;}
         * @param  {} 600
         * @param  {} ;}
         */
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        /**Deletes Data from the state
         * @param  {} resolve=>{setTimeout((
         * @param  {} =>{resolve(
         * @param  {} ;constdata=[...state.data];data.splice(data.indexOf(oldData
         * @param  {} 1
         * @param  {} ;setState({...state
         * @param  {} data}
         * @param  {} ;}
         * @param  {} 600
         * @param  {} ;}
         */
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
