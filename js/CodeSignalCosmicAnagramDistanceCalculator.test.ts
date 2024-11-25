import { describe, it, expect } from "bun:test";
import { findAnagrams } from "./CodeSignalCosmicAnagramDistanceCalculator";

describe("findAnagrams", () => {
  it("should return 9", () => {
    const array1 = ["cat", "dog", "tac", "god", "act"];

    const array2 = ["tca", "ogd", "atc", "taco"];

    const result = findAnagrams(array1, array2);

    expect(result).toEqual(9);
  });
});
