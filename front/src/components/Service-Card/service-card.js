import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./service-card.css";
import mission from "../../assets/images/mission.png";
class ServiceCard extends React.Component {
  render() {
    return (
      <div className="card-div">
        <Flippy
          flipOnHover={true} // default false
          flipOnCick={false} // default false
          flipDirection="vertical" // horizontal or vertical
          ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
          style={{ width: "200px", height: "280px" }} /// these are optional style, it is not necessary
        >
          <FrontSide className="frontside">
            <img className="card-image" src={mission} alt="" />
          </FrontSide>
          <BackSide className="backside">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              fuga dolores dolore dignissimos veniam sed autem tenetur at a
              expedita obcaecati magni, possimus voluptate eaque doloremque
              voluptas, accusantium distinctio sint?
            </p>
          </BackSide>
        </Flippy>
      </div>
    );
  }
}
export default ServiceCard;
