import React from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginForm from "./components/LoginSignup/login";
import SignupForm from "./components/LoginSignup/signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
    <div className="App">
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}
      <SignupForm />
      <LoginForm />
      <CardDetails />
    </div>
  );
}

export default App;
