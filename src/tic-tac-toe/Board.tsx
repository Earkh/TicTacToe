import {FC, useEffect, useState} from 'react';
import Cell from './Cell';

interface GameStateType {
  [pos: number]: number;
}

interface Props {
  currentPlayer: number;
  setCurrentPlayer: Function;
  setShowWinScreen: Function;
  setShowDrawScreen: Function;
  resetGame: boolean;
  setResetGame: Function;
}

const Board: FC<Props> = ({currentPlayer, setCurrentPlayer, setShowWinScreen, setShowDrawScreen, resetGame, setResetGame}) => {

  const newBoard: GameStateType  = {
    0: -1, 1: -1, 2: -1,
    3: -1, 4: -1, 5: -1,
    6: -1, 7: -1, 8: -1
  }
  const [gameState, setGameState] = useState(newBoard);
  const [moves, setMoves] = useState<number>(0);

  useEffect(() => {
    if (checkWinCondition()) {
      setShowWinScreen(true)
    } else {
      if (moves === 9) {
        setShowDrawScreen(true)
      } else {
        setCurrentPlayer((prevState: number) => prevState === 0 ? 1 : 0);
      }
    }
  },[gameState]);

  useEffect(() => {
    if (resetGame) {
      setGameState(newBoard);
      setMoves(0);
      setCurrentPlayer(1);
      setResetGame(false);
    }
  },[resetGame]);

  const handleCellClick = (pos: number) => {
    if (gameState[pos] === -1) {
      setGameState({
        ...gameState,
        [pos]: currentPlayer
      });
      setMoves((prevState: number) => prevState + 1);
    }
  }

  const checkWinCondition = () => {
    let result = false;
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
        result = true;
      }
    })
    return result;
  }

  return (
    <section className="grid grid-cols-3 gap-1 w-[500px] max-w-[95%] box-border p-2">
      {
        Object.entries(gameState).map(([key, value]) => (
          <Cell key={key} pos={key} value={value} markCell={handleCellClick} />
        ))
      }
    </section>
  );
};

export default Board;
