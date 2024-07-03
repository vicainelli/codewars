import { describe, it, expect } from "bun:test";

export const order = (words: string): string => {
  // Step 1: Transform words into an array of words
  const wordsArray = words.split(" ");

  // Step 2: Transform wordsArray to an object, extracting the number from the word using it as the key and the word as the value
  const wordsObject: { [key: number]: string } = {};
  wordsArray.forEach((word) => {
    const matchResult = word.match(/\d+/); // Match the number in the word
    if (matchResult) {
      const num = parseInt(matchResult[0]); // Extract the number from the word
      wordsObject[num] = word;
    }
  });

  // Step 3: Sort the object by the keys and transform the sorted object back to an array
  const sortedWordsArray = Object.keys(wordsObject)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((key) => wordsObject[parseInt(key)]);

  // Step 4: Join the sorted array of words with a space
  return sortedWordsArray.join(" ");
};

export const orderShort = (words: string): string =>
  words
    .split(" ")
    .sort((a, b) => +a.match(/\d/) - +b.match(/\d/))
    .join(" ");

describe("order", () => {
  it("basicTests", () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe(
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
  });
});

describe("orderShort", () => {
  it("basicTests", () => {
    expect(orderShort("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
    expect(orderShort("4of Fo1r pe6ople g3ood th5e the2")).toBe(
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
  });
});
