import './App.css';
import Board from './components/Board';
import Square from './components/Square';
import {useState, useEffect} from 'react';

const defaultSquares = () => (new Array(9)).fill(null);

const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

function App() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner,setWinner] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
