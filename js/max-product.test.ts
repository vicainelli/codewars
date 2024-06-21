import { describe, it, expect } from "bun:test";

const adjacentElementsProduct = (arr: number[]): number => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      result.push(arr[i] * arr[i + 1]);
    }
  }

  return result.sort((a, b) => b - a)[0];
};

describe("adjacentElementsProduct", () => {
  it("fixed tests", () => {
    expect(adjacentElementsProduct([1, 2, 3])).toBe(6);
    expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
    expect(
      adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])
    ).toBe(-14);
  });

  describe("Random tests", function () {
    const sol = (arr: number[]) =>
      arr.reduce(
        (a, b, i) =>
          i < arr.length - 1 && b * arr[i + 1] > a ? b * arr[i + 1] : a,
        -Infinity
      );
    for (let i = 0; i < 100; i++) {
      let a = Array.from(
        { length: Math.floor(Math.random() * 49) + 2 },
        () => Math.floor(Math.random() * 2001) - 1000
      );
      it(`Testing for [${a.join(", ")}]`, () =>
        expect(adjacentElementsProduct(a)).toBe(sol(a)));
    }
  });
});
