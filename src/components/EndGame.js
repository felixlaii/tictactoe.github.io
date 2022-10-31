import React from 'react'

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
        {!draw && <span className="win-text">{player ? "O WON" : "X WON"}</span>}
        {draw && <span className="win-text">DRAW GAME</span>}
    </div>
  )
}

export default EndGame