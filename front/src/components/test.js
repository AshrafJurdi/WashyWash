import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "old"
    };
  }

  Press_Current = () => {
    this.setState({
      toggleCurrent: !this.state.toggleCurrent,
      togglePrevious: false
    });
  };
  Press_Previous = () => {
    this.setState({
      togglePrevious: !this.state.togglePrevious,
      toggleCurrent: false
    });
  };

  achraf = () => {
    this.setState({
      order: "new"
    });
  };
  render() {
    return (
      <div>
        <h2>It is {this.state.order}.</h2>
        <button onClick={this.achraf} />
        <p>{this.state.order}</p>
      </div>
    );
  }
}

export default Test;
