import getRandomCeroOrOne from "./getRandomCeroOrOne";

describe("Given a function getRandomCeroOrOne", () => {
  describe("When it is called", () => {
    test("Then it should return 0 or 1", () => {
      const expectedResult = 2;
      const result = getRandomCeroOrOne();

      expect(result).toBeLessThan(expectedResult);
    });
  });
});
