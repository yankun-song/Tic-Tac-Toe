import React, { Component } from "react";
import { render } from "react-dom";
import Board from "./Board.jsx";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="gameUI">
        <h1>Tic Tac Toe</h1>
        <div id="board">
          <Board />
        </div>
      </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
