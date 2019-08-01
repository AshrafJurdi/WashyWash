import React from 'react';
import MaterialTable from 'material-table';

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
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
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
