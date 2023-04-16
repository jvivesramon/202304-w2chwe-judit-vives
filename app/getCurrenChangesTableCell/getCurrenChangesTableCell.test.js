import getCurrenChangesTableCell from "./getCurrenChangesTableCell";

describe("Given a function getCurrenChangesTableCell", () => {
  describe("When it receives a [[0,0,0,0],[0,0,1,0],[0,0,0,0]]", () => {
    test("Then it should return [[0,0,0,0],[0,0,0,0],[0,0,0,0]]", () => {
      const givenTable = [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ];
      const expectedResult = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      const result = getCurrenChangesTableCell(givenTable);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
