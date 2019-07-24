import React, { Component } from "react";
import "./About_Us.css";

class About_Us extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleHistory: false,
      toggleMission: false,
      toggleVision: false
    };
  }

  displayHistory = () => {
    this.setState({ toggleHistory: !this.state.toggleHistory });
  };

  displayMission = () => {
    this.setState({ toggleMission: !this.state.toggleMission });
  };

  displayVision = () => {
    this.setState({ toggleVision: !this.state.toggleVision });
  };
  displayOff = () => {
    this.setState({
      toggleHistory: false,
      toggleMission: false,
      toggleVision: false
    });
  };
  render() {
    return (
      <div className="About_Us">
        <h1>About Us</h1>
        <div className="About_Us_Icons">
          <div className="History">
            {this.state.toggleHistory ? (
              <p onMouseLeave={this.displayOff}>
                WashyWash is a company that is set out to change how people
                clean their clothes globally, switching people from the outdated
                PERC Dry Clean system to our EcoClean technology.
              </p>
            ) : (
              <img
                src={require("../../assets/images/histo.ico")}
                className="historyicon"
                onMouseOver={this.displayHistory}
                // onMouseLeave={this.displayOff}
              />
            )}
            {/* <figure class="swap-on-hover">
 <img  class="swap-on-hover__front-image" src="https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942"/>
  <img class="swap-on-hover__back-image" src="http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg"/>
</figure> */}
          </div>

          <div className="Mission">
            {this.state.toggleMission ? (
              <p onMouseLeave={this.displayOff}>
                WashyWash is a company that is set out to change how people
                clean their clothes globally, switching people from the outdated
                PERC Dry Clean system to our EcoClean technology.
              </p>
            ) : (
              <img
                src={require("../../assets/images/mission.png")}
                className="missionicon"
                onMouseOver={this.displayMission}
                // onMouseLeave={this.displayOff}
              />
            )}
          </div>
          <div className="Vision">
            {this.state.toggleVision ? (
              <p onMouseLeave={this.displayOff}>
                WashyWash is a company that is set out to change how people
                clean their clothes globally, switching people from the outdated
                PERC Dry Clean system to our EcoClean technology.
              </p>
            ) : (
              <img
                src={require("../../assets/images/vision.png")}
                className="visionicon"
                onMouseOver={this.displayVision}
                // onMouseLeave={this.displayOff}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About_Us;
