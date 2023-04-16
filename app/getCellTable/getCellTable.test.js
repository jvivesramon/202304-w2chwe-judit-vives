import getCellTable from "./getCellTable";

describe("Given a function getCellTable", () => {
  describe("When it receives a 1 and 1", () => {
    test("Then it should return [[0]]", () => {
      const givenNumber = 1;
      const expectedResult = [[0]];
      const result = getCellTable(givenNumber, givenNumber);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
