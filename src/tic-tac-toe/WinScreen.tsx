import {FC} from 'react';

interface Props {
  player: number;
}

const WinScreen: FC<Props> = ({player}) => {

  const blueButton = 'bg-sky-500 hover:bg-sky-400 border-sky-700 hover:border-sky-500';
  const redButton = 'bg-rose-500 hover:bg-rose-400 border-rose-700 hover:border-rose-500';

  return (
    <section className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center backdrop-blur-lg bg-white/10">
      <h1 className="text-8xl text-center mb-6"><span className={player === 1 ? 'text-rose-500' : 'text-sky-500'}>Player {player}</span> Win!</h1>
      <button
        className={`font-sans text-white font-bold py-2 px-4 rounded border-b-4 ${player === 1 ? redButton : blueButton}`
      }>
        Play Again
      </button>
    </section>
  );
};

export default WinScreen;
