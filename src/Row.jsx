import React, { Component } from "react";
import Box from "./Box.jsx";

class Row extends Component {
  render() {
    const boxInRow = [];
    const myRowNum = this.props.rowNum;
    const mySymbols = this.props.symbols; // it is a 3 element array like [x,x,x]
    for (let i = 0; i < 3; i++) {
      boxInRow.push(
        <Box
          key={i}
          changeSymbol={this.props.changeSymbol}
          position={[myRowNum, i]}
          text={mySymbols[i]}
        />
      ); // give each box the text it will use
    }
    return <>{boxInRow}</>;
  }
}

export default Row;