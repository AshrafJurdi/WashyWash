import React, { useState } from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "Order #", field: "order" },
      { title: "Username", field: "username" },
      { title: "Date", field: "date", type: "numeric" },
      {
        title: "Priority",
        field: "priority",
        lookup: { 1: "High", 0: "Low" }
      },
      {
        title: "Status",
        field: "status",
        lookup: { 0: "Pending", 1: "Completed", 2: "Delivered" }
      },
      { title: "Notes", field: "notes" }
    ],
    data: [
      { order: "3", username: "Baran", date: 1987, priority: 1, status: 0 },
      {
        order: "5",
        username: "Joey",
        date: 2017,
        priority: 0,
        status: 2
      }
    ]
  });

  return (
    <MaterialTable
      title="Orders"
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
