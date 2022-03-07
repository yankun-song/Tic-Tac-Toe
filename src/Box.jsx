import React, { Component } from "react";

class Box extends Component {
  render() {
    const myPosition = this.props.position; // it is a 2D array like [1,0]
    return (
      <button
        className="box"
        onClick={() => {
          this.props.changeSymbol(...myPosition);
        }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Box;
