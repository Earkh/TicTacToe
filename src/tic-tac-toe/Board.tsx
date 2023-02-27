import Cell from './Cell';

const Board = () => {

  const cellsNum: number = 9;

  return (
    <section className="grid grid-cols-3 gap-1 w-[500px] h-[300px]">
      {
        [...Array(cellsNum)].map((e, i) => <Cell key={i}></Cell>)
      }
    </section>
  );
};

export default Board;
