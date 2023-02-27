import Cell from './Cell';
import {useState} from "react";

const Board = () => {

  const [gameState, setGameState] = useState({
    pos0: -1, pos1: -1, pos2: -1,
    pos3: -1, pos4: -1, pos5: -1,
    pos6: -1, pos7: -1, pos8: -1
  });
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleCellClick = (pos: string) => {
    setGameState({
      ...gameState,
      [pos]: currentPlayer
    });
    setCurrentPlayer(prevState => prevState === 0 ? 1 : 0);
  }

  return (
    <section className="grid grid-cols-3 gap-1 w-[500px] box-border">
      {
        Object.entries(gameState).map(([key, value]) => (
          <Cell key={key} pos={key} value={value} markCell={handleCellClick} />
        ))
      }
    </section>
  );
};

export default Board;
