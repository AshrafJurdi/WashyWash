import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Position", field: "position" },
      { title: "Email", field: "email" },
      { title: "Password", field: "password" },
      { title: "Phone Number", field: "phoneNumber" },
      { title: "Address", field: "address" }
    ],
    data: [
      {
        name: "Mehmet",
        surname: "Baran",
        position: 1987,
        email: 63,
        password: "whatever",
        phoneNumber: 90293930,
        address: "jahjsh,iahsha "
      },
      {
        name: "Mehmet",
        surname: "Baran",
        position: 1987,
        email: 63,
        password: "whatever",
        phoneNumber: 90293930,
        address: "jahjsh,iahsha "
      }
    ]
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
          })
      }}
    />
  );
}
