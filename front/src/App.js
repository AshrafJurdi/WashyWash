import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginForm from "./components/LoginSignup/login";
import SignupForm from "./components/LoginSignup/signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";
import EditForm from "./components/Edit_Profile/edit_profile";
import Test from "./components/test";
import User_Popup from "./components/User_Popup/User_Popup.test";
import Contact_Info from "./components/Contact_Info/Contact_Info.test";
import Contact_Form from "./components/Contact_Form/Contact_Form";
import LandingPage from "./pages/Landing Page/landingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
     
      
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}
    </div>
  );
}

export default App;
