import { describe, it, expect } from "bun:test";

function sortCharacters(input: string): string {
  return input.split("").sort().join("");
}

function findAnagrams(array1: string[], array2: string[]) {
  let total = 0;

  const sortedArray_1 = new Set(array1.map(sortCharacters));

  // Check each word in array2
  for (const word of array2) {
    // Sort the current word
    const sortedWord = sortCharacters(word);

    // If the sorted word exists in the Set, add its length to totalLength
    if (sortedArray_1.has(sortedWord)) {
      total += word.length;
    }
  }
  return total;
}

describe("findAnagrams", () => {
  it("should return 9", () => {
    let array1 = ["cat", "dog", "tac", "god", "act"];

    let array2 = ["tca", "ogd", "atc", "taco"];

    let result = findAnagrams(array1, array2);

    expect(result).toEqual(9);
  });
});
