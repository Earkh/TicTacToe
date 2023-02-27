import Cell from './Cell';
import {useEffect, useState} from 'react';

const Board = () => {

  const [gameState, setGameState] = useState({
    0: -1, 1: -1, 2: -1,
    3: -1, 4: -1, 5: -1,
    6: -1, 7: -1, 8: -1
  });
  const [currentPlayer, setCurrentPlayer] = useState(0);
  useEffect(() => {
    checkWinCondition();
  },[gameState]);

  const handleCellClick = (pos: string) => {
    if (gameState[pos] === -1) {
      setGameState({
        ...gameState,
        [pos]: currentPlayer
      });
      setCurrentPlayer(prevState => prevState === 0 ? 1 : 0);
    }
  }

  const checkWinCondition = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
    winConditions.forEach(condition => {
      if (gameState[condition[0]] >= 0 && gameState[condition[0]] === gameState[condition[1]] && gameState[condition[0]] === gameState[condition[2]]) {
        console.log('Winner winner chicken dinner')
      }
    })
  }

  return (
    <section className="grid grid-cols-3 gap-1 w-[500px] box-border p-2">
      {
        Object.entries(gameState).map(([key, value]) => (
          <Cell key={key} pos={key} value={value} markCell={handleCellClick} />
        ))
      }
    </section>
  );
};

export default Board;
