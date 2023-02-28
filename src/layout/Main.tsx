import {useState} from 'react';
import Board from '../tic-tac-toe/Board';
import PlayerIndicator from '../tic-tac-toe/PlayerIndicator';
import WinScreen from '../tic-tac-toe/WinScreen';

const Main = () => {

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [showWinScreen, setShowWinScreen] = useState<boolean>(false);
  const [resetGame, setResetGame] = useState<boolean>(false);

  const handleResetGame = () => {
    setResetGame(true);
    setShowWinScreen(false);
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setShowWinScreen={setShowWinScreen}
        resetGame={resetGame}
        setResetGame={setResetGame}
      ></Board>
      <PlayerIndicator player={currentPlayer + 1}></PlayerIndicator>
      {
        showWinScreen&&
        <WinScreen player={currentPlayer + 1} handleResetGame={handleResetGame}></WinScreen>
      }
    </main>
  );
};

export default Main;
