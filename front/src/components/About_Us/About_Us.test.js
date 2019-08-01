import React, { useState } from "react";
import "./About_Us.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import mission from "../../assets/images/mission.png";
import history from "../../assets/images/histo.ico";
import vision from "../../assets/images/vision.png";
/**
 *sets the state containing the content of about_us(title,image,description)
 *
 * @returns
 */
const About_Us = () => {
  const [services, setServices] = useState([
    {
      title: "History",
      picture: history,
      description: "raed"
    },
    {
      title: "Mission",
      picture: mission,
      description: "adsfdsf"
    },
    {
      title: "Vision",
      picture: vision,
      description: "adsfsldklksddsf"
    }
  ]);

  return (
    <div>
      <h1 className="About-Title">About Us</h1>
      <div className="About_Us">
        {services.map(service => (
          <Flippy
            flipOnHover={true} // default false
            flipOnCick={false} // default false
            flipDirection="horizontal " // horizontal or vertical
            // ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "200px", height: "280px" }} /// these are optional style, it is not necessary
          >
            <FrontSide className="frontside">
              <img className="card-image" src={service.picture} alt="" />
              <h4>{service.title}</h4>
            </FrontSide>
            <BackSide className="backside">
              <p>{service.description}</p>
            </BackSide>
          </Flippy>
        ))}
      </div>
    </div>
  );
};

export default About_Us;
