import getRandomCeroOrOne from "../getRandomCeroOrOne/getRandomCeroOrOne.js";

const getCellTable = (numberRows, numberCells) => {
  const table = [];

  let oneOrZero = getRandomCeroOrOne();

  while (table.length !== numberRows) {
    const cellRow = [];

    while (cellRow.length !== numberCells) {
      oneOrZero = getRandomCeroOrOne();
      cellRow.push(oneOrZero);
    }

    table.push(cellRow);
  }

  return table;
};

export default getCellTable;
