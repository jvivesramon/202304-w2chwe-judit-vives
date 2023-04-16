const getcurrentChangesTableCell = (cellTable) => {
  const currentChangesTableCell = cellTable.map((cellRow, rowIndex) => {
    const cellRowResult = cellRow.map((cell, cellPosition) => {
      let upperRowTrueNeighbors = 0;
      let nearTrueNeighbors;
      let bottomRowTrueNeighbors = 0;

      if (rowIndex === 0) {
        if (cellPosition === 0) {
          nearTrueNeighbors = cellRow[cellPosition + 1];
          bottomRowTrueNeighbors =
            cellTable[rowIndex + 1][cellPosition] +
            cellTable[rowIndex + 1][cellPosition + 1];
        }

        if (cellPosition === cellRow.length - 1) {
          nearTrueNeighbors = cellRow[cellPosition - 1];
          bottomRowTrueNeighbors =
            cellTable[rowIndex + 1][cellPosition] +
            cellTable[rowIndex + 1][cellPosition - 1];
        }

        if (rowIndex === 0) {
          nearTrueNeighbors =
            cellRow[cellPosition - 1] + cellRow[cellPosition + 1];
          bottomRowTrueNeighbors =
            cellTable[rowIndex + 1][cellPosition - 1] +
            cellTable[rowIndex + 1][cellPosition] +
            cellTable[rowIndex + 1][cellPosition + 1];
        }
      }

      if (rowIndex === cellTable.length - 1) {
        if (cellPosition === 0) {
          upperRowTrueNeighbors =
            cellTable[rowIndex - 1][cellPosition] +
            cellTable[rowIndex - 1][cellPosition + 1];
          nearTrueNeighbors = cellRow[cellPosition + 1];
        }

        if (cellPosition === rowIndex.length - 1) {
          upperRowTrueNeighbors =
            cellTable[rowIndex - 1][cellPosition] +
            cellTable[rowIndex - 1][cellPosition - 1];
          nearTrueNeighbors = cellRow[cellPosition - 1];
        }

        if (rowIndex === cellTable.length - 1) {
          upperRowTrueNeighbors =
            cellTable[rowIndex - 1][cellPosition - 1] +
            cellTable[rowIndex - 1][cellPosition] +
            cellTable[rowIndex - 1][cellPosition + 1];
          nearTrueNeighbors =
            cellRow[cellPosition - 1] + cellRow[cellPosition + 1];
        }
      }

      if (
        cellPosition === 0 &&
        rowIndex !== 0 &&
        rowIndex !== cellTable.length - 1
      ) {
        upperRowTrueNeighbors =
          cellTable[rowIndex - 1][cellPosition] +
          cellTable[rowIndex - 1][cellPosition + 1];
        nearTrueNeighbors = cellRow[cellPosition + 1];
        bottomRowTrueNeighbors =
          cellTable[rowIndex + 1][cellPosition] +
          cellTable[rowIndex + 1][cellPosition + 1];
      }

      if (
        cellPosition === cellRow.length - 1 &&
        rowIndex !== 0 &&
        rowIndex !== cellTable.length - 1
      ) {
        upperRowTrueNeighbors =
          cellTable[rowIndex - 1][cellPosition] +
          cellTable[rowIndex - 1][cellPosition - 1];
        nearTrueNeighbors = cellRow[cellPosition - 1];
        bottomRowTrueNeighbors =
          cellTable[rowIndex + 1][cellPosition] +
          cellTable[rowIndex + 1][cellPosition - 1];
      }

      if (
        rowIndex !== 0 &&
        rowIndex !== cellTable.length - 1 &&
        cellPosition !== 0 &&
        cellPosition !== cellRow.length - 1
      ) {
        upperRowTrueNeighbors =
          cellTable[rowIndex - 1][cellPosition - 1] +
          cellTable[rowIndex - 1][cellPosition] +
          cellTable[rowIndex - 1][cellPosition + 1];
        nearTrueNeighbors =
          cellRow[cellPosition - 1] + cellRow[cellPosition + 1];
        bottomRowTrueNeighbors =
          cellTable[rowIndex + 1][cellPosition - 1] +
          cellTable[rowIndex + 1][cellPosition] +
          cellTable[rowIndex + 1][cellPosition + 1];
      }

      const sumResultOfAllNeighbors =
        upperRowTrueNeighbors + nearTrueNeighbors + bottomRowTrueNeighbors;

      if (cell) {
        if (sumResultOfAllNeighbors > 3 || sumResultOfAllNeighbors <= 1) {
          cell = 0;
        }
      }

      if (!cell) {
        if (sumResultOfAllNeighbors === 3) {
          cell = 1;
        }
      }

      return cell;
    });

    return cellRowResult;
  });

  return currentChangesTableCell;
};

export default getcurrentChangesTableCell;
