import React from "react";
// import { Route, withRouter } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
// import Orders_Updated from "./Components/Orders_Updated/Orders_Updated";
// import Users from "./Components/Users/Users";
import Products from "./Components/Products/Products";
// import User_Popup from "../../front/src/components/User_Popup/User_Popup.test";

// import Orders from "./Components/Orders/Orders.test";
// import CMSLoginForm from "./Components/Login/cmslogin";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" render={props => <Products {...props} />} /> */}
      <Products />
    </div>
  );
}
export default App;
// export default withRouter(App);
