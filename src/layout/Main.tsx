import Board from "../tic-tac-toe/Board";
import {useState} from "react";
import PlayerIndicator from "../tic-tac-toe/PlayerIndicator";

const Main = () => {

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      <Board currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer}></Board>
      <PlayerIndicator player={currentPlayer + 1}></PlayerIndicator>
    </main>
  );
};

export default Main;
