import {FC} from 'react';

interface Props {
  pos: string;
  value: number;
  markCell: Function;
}

const Cell: FC<Props> = ({pos, value, markCell}) => {
  return (
    <div
      className={`h-[150px] bg-slate-700 rounded hover:bg-slate-500 flex justify-center items-center text-6xl ${value === 0 ? "text-rose-500" : "text-sky-500"}`}
      onClick={() => markCell(pos)}
    >
      {
        value === -1
          ? ''
          : value === 0
            ? 'O'
            : 'X'
      }
    </div>
  );
};

export default Cell;
