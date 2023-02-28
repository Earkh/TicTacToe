import {FC} from 'react';

interface Props {
  player: number;
}

const PlayerIndicator: FC<Props> = ({player}) => {
  return (
    <p className="text-2xl">
      <span className={player === 1 ? 'text-rose-500' : 'text-sky-500'}>Player {player}</span> Turn
    </p>
  );
};

export default PlayerIndicator;
