import React from "react";
import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return; // stops early if click from overwriting the filled-in square or if game is won
    const nextSquares = squares.slice();
    if (xIsNext) { 
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";      
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext? "X" : "O");
  }

  const renderBoard = () => {
    let board= [];

    let rows = [];
    let counter = 0
    
    for (let i = 0; i < 3; i++) {
      let rowSquares = []
      for (let j = 0; j < 3; j++) {
        const count = counter
        const square = <Square key={count} value={squares[count]} onSquareClick={() => handleClick(count)}  />
        rowSquares.push(square);
        counter += 1;
      }
      const row = <div key={i} className="board-row">{rowSquares}</div>
      rows.push(row);
    }

    board.push(rows);
    return board;
  }

return (
    <>
      <div className="status">{status}</div>
      {renderBoard()}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]; // sets current squares to the element of the history array at the current move

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // creates a new history array by appending the new squares in the current move's position
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // sets the current move to the index of the latest element of the new history array
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move)=> {
    let description;
    if (move === currentMove) {
      return (<li key={move}><div>{"You are at move # " + (move + 1)}</div></li>)
    } else if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      
    </div>
  )
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // checks if all squares are the same (and not null)
      return squares[a];
    }
  }
  return null;
}