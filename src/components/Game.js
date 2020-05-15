import React from 'react';
import Board from './Board';
import '../index.css';

class Game extends React.Component {
    render() {
      return (
        <div className="game" >
        <h1>Tic-Tac-Toe vs Unbeatable AI</h1>
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default Game;