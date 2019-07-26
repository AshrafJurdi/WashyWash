import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/footer";
import About_Us from "./components/About_Us/About_Us.test";
import "./components/About_Us/About_Us.css";
import ServiceCard from "./components/Service-Card/service-card";
import LoginSignup from "./components/LoginSignup/login-signup";
import Form from "./components/Contact_Form/Contact_Form";
import CardDetails from "./components/CardDetails/CardDetails";
import User_Popup from "./components/User_Popup/User_Popup.test";
import Contact_Info from "./components/Contact_Info/Contact_Info.test";
import Contact_Form from "./components/Contact_Form/Contact_Form";

function App() {
  return (
    <div className="App">
      {/* <Router>
				<Route  exact path="/" component = {Home}></Route>
				
			</Router> */}

      <Contact_Info />
      {/* <Contact_Form /> */}
      {/* <Nav/>
			<User_Popup/> */}
      {/* <Form/> 
			 <LoginSignup/> 
			 <ServiceCard/> 
			 <Footer/>  */}
      {/* <About_Us/>  */}
      {/* <CardDetails /> */}
    </div>
  );
}

export default App;
