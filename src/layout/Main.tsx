import {useState} from 'react';
import Board from '../tic-tac-toe/Board';
import PlayerIndicator from '../tic-tac-toe/PlayerIndicator';
import ResultScreen from '../tic-tac-toe/ResultScreen';

const Main = () => {

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  const [showWinScreen, setShowWinScreen] = useState<boolean>(false);
  const [showDrawScreen, setShowDrawScreen] = useState<boolean>(false);
  const [resetGame, setResetGame] = useState<boolean>(false);

  const handleResetGame = () => {
    setResetGame(true);
    setShowWinScreen(false);
    setShowDrawScreen(false);
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setShowWinScreen={setShowWinScreen}
        setShowDrawScreen={setShowDrawScreen}
        resetGame={resetGame}
        setResetGame={setResetGame}
      ></Board>
      <PlayerIndicator player={currentPlayer + 1}></PlayerIndicator>
      {
        showWinScreen&&
        <ResultScreen result="win" player={currentPlayer + 1} handleResetGame={handleResetGame}></ResultScreen>
      }
      {
        showDrawScreen&&
        <ResultScreen result="draw" player={currentPlayer + 1} handleResetGame={handleResetGame}></ResultScreen>
      }
    </main>
  );
};

export default Main;
