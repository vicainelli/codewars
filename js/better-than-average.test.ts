import { describe, it, expect } from "bun:test";
import { betterThanAverage } from "./better-than-average";

describe("betterThanAverage", () => {
  it("should work", () => {
    expect(betterThanAverage([1, 2, 3, 4, 5], 3)).toEqual(false);
    expect(betterThanAverage([1, 2, 3, 4, 5], 4)).toEqual(true);
  });
});
