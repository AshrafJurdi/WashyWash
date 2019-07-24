import React from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginSignup from "./components/LoginSignup/login-signup";
import Form from "./components/Contact_Form/Contact_Form";

function App() {
  return (
    <div className="App">
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}

      <Form />
    </div>
  );
}

export default App;
