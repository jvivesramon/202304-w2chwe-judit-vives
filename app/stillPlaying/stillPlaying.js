import getcurrentChangesTableCell from "../getCurrenChangesTableCell/getCurrenChangesTableCell.js";

const stillPlaying = (cellTable) => {
  const currentCellTable = cellTable;
  const trueOrFalse = [];

  for (let index = 0; index < currentCellTable.length; index++) {
    trueOrFalse.push(currentCellTable[index].every((cell) => cell === 0));
  }

  const isNotOver = trueOrFalse.some((element) => element === false);

  if (isNotOver) {
    const getTimer = () => {
      stillPlaying(getcurrentChangesTableCell(currentCellTable));
      setTimeout(() => getTimer(), 1000);
    };

    getTimer();
  }
};

export default stillPlaying;
