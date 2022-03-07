import React, { Component } from "react";
import Row from "./Row.jsx";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      0: [],
      1: [],
      2: [],
      playerOne: true,
      unFilled: 9,
    };
    this.changeSymbol = this.changeSymbol.bind(this);
    this.setBoard = this.setBoard.bind(this);
  }
  componentDidMount() {
    this.setBoard();
  }

  componentDidUpdate() {
    this.gameWon();
  }

  setBoard() {
    const newState = {
      0: Array(3).fill("-"),
      1: Array(3).fill("-"),
      2: Array(3).fill("-"),
      playerOne: true,
      unFilled: 9,
    };
    this.setState(newState);
  }

  changeSymbol(rowNum, colNum) {
    const copiedState = { ...this.state };
    const newSymbol = this.state.playerOne ? "X" : "O";

    copiedState[rowNum][colNum] = newSymbol;
    copiedState.playerOne = !copiedState.playerOne;
    copiedState.unFilled -= 1;
    this.setState(copiedState);
  }

  gameWon() {
    let gameOver = false;
    // check Row
    // Iterate the 3 rows
    // compare "XXX" or "OOO" with the row
    for (let i = 0; i < 3; i++) {
      const currentRes = this.state[i].join("");
      if (currentRes === "XXX") {
        alert("Player 1 wins!");
        gameOver = true;
      }
      if (currentRes === "OOO") {
        alert("Player 2 wins!");
        gameOver = true;
      }
    }

    // check columns
    for (let i = 0; i < 3; i++) {
      let column = "";
      //const currentRow = this.state[i].join('');
      for (let j = 0; j < 3; j++) {
        column += this.state[j][i]; //[i][j] each box
      } // after this, we have the column  xxo
      if (column === "XXX") {
        alert("Player 1 wins!");
        gameOver = true;
      }
      if (column === "OOO") {
        alert("Player 2 wins!");
        gameOver = true;
      }
    }

    // check diagonals
    const diagonal1 = this.state[0][0] + this.state[1][1] + this.state[2][2];
    const diagonal2 = this.state[0][2] + this.state[1][1] + this.state[2][0];
    if (diagonal1 === "XXX" || diagonal2 === "XXX") {
      alert("Player 1 wins!");
      gameOver = true;
    }
    if (diagonal1 === "OOO" || diagonal2 === "OOO") {
      alert("Player 2 wins!");
      gameOver = true;
    }

    // check game over
    if (!this.state.unFilled) {
      alert("Draw!");
      gameOver = true;
    }
    if (gameOver) this.setBoard();
  }

  render() {
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(
        <Row
          key={i}
          changeSymbol={this.changeSymbol}
          rowNum={i}
          symbols={this.state[i]} //give each row an array, containing the three symbols it has
        />
      );
    }
    return <>{rows} </>;
  }
}

export default Board;
