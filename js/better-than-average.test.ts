import { describe, it, expect } from "bun:test";

const betterThanAverage = (
  classPoints: number[],
  yourPoints: number,
): boolean => {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
};

describe("betterThanAverage", () => {
  it("should work", () => {
    expect(betterThanAverage([1, 2, 3, 4, 5], 3)).toEqual(false);
    expect(betterThanAverage([1, 2, 3, 4, 5], 4)).toEqual(true);
  });
});
