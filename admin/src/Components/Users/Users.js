import React, { useState } from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "Employee Name", field: "employee_name" },
      { title: "Position", field: "position" },
      { title: "Username", field: "user_name" }
    ],
    data: [
      { employee_name: "Mark", position: "Consultant", user_name: "Mark807" },
      {
        employee_name: "Richard",
        position: "Manager",
        user_name: "Richard901"
      }
    ]
  });

  return (
    <MaterialTable
      title="Users"
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
