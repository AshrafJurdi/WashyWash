import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Orders from "./Components/Orders/Orders.test";
import Orders_Updated from "./Components/Orders_Updated/Orders_Updated";
import Users from "./Components/Users/Users";
import Products from "./Components/Products/Products";
// import User_Popup from "../../front/src/components/User_Popup/User_Popup.test";
import "./App.css";
import Orders from "./Components/Orders/Orders.test";
import CMSLoginForm from "./Components/Login/cmslogin";

function App() {
  return (
    <div className="App">
      {/* <Orders_Updated /> */}
      {/* <Users /> */}
      <Products />
      <CMSLoginForm />
    </div>
  );
}

export default App;
