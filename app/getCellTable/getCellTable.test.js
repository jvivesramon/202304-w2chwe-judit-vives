import getCellTable from "./getCellTable";

describe("Given a function getCellTable", () => {
  describe("When it receives a 1 and 0", () => {
    test("Then it should return [[]]", () => {
      const givenNumber = 1;
      const givenSecondNumber = 0;
      const expectedResult = [[]];
      const result = getCellTable(givenNumber, givenSecondNumber);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
