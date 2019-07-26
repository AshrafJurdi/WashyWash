import React, { useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./service-card.css";
import mission from "../../assets/images/mission.png";

const ServiceCard = () => {
  const [services, setServices] = useState([
    {
      title: "hello",
      picture: mission,
      description: "raed"
    }
  ]);

  return (
    <div>
      {services.map(service => (
        <div className="card-div">
          <Flippy
            flipOnHover={true} // default false
            flipOnCick={false} // default false
            flipDirection="vertical" // horizontal or vertical
            // ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: "200px", height: "280px" }} /// these are optional style, it is not necessary
          >
            <FrontSide className="frontside">
              <img className="card-image" src={service.picture} alt="" />
            </FrontSide>
            <BackSide className="backside">
              <p>{service.description}</p>
            </BackSide>
          </Flippy>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
