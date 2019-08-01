import React from "react";
import About_Us from "../../components/About_Us/About_Us.test";
import Navbar from "../../components/Navbar/Nav";
import ServiceCard from "../../components/Service-Card/service-card";
import Footer from "../../components/Footer/footer";
import Animation from "../../components/Animation/animation";
import User_Popup from "../../components/User_Popup/User_Popup.test.js"
import "../../components/User_Popup/User_Popup.css";
import "./landingPage.css";
export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Navbar />
        <User_Popup/>
        <Animation />
        <ServiceCard />
        <About_Us />
        <Footer />
      </div>
    );
  }
}
