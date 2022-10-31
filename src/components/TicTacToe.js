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
  return (
    <div>TicTacToe</div>
  )
}

export default TicTacToe