import React, { useState } from 'react';
import Square from './Square';
import EndGame from './EndGame';

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
function TicTacToe() {
    const [grid, setGrid] = useState(Array(9).fill(INITIAL));
    const [player, setPlayer] =useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [draw, setDraw] = useState(false);
    const [winCount, setwinCount] = useState({X: 0, O: 0});
  return (
    <div>TicTacToe</div>
  )
}

export default TicTacToe