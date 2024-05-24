import Board from "./components/Board";
import './App.css';

function App() {
  return (
    <div >
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          game-info
        </div>
      </div>
    </div>
  );
}

export default App;
