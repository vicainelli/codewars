import { describe, expect, it } from "bun:test";

function is_perfect(n: number): boolean {
  const x = Math.floor(Math.sqrt(n));
  return x * x === n;
}

function sumOfSquares(n: number): number {
  if (n < 4) {
    return n;
  }

  if (is_perfect(n)) {
    return 1;
  }

  while ((n & 3) === 0) {
    n >>= 2;
  }

  if ((n & 7) === 7) {
    return 4;
  }

  const x = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= x; i++) {
    if (is_perfect(n - i * i)) {
      return 2;
    }
  }

  return 3;
}

describe("sumOfSquares", () => {
  it("should return the sum of the squares of the first n natural numbers", () => {
    expect(sumOfSquares(17)).toBe(2);
    expect(sumOfSquares(16)).toBe(1);
    expect(sumOfSquares(15)).toBe(4);
    expect(sumOfSquares(40000)).toBe(1);
    expect(sumOfSquares(90000)).toBe(1);
    expect(sumOfSquares(788544)).toBe(1);
    expect(sumOfSquares(1522756)).toBe(1);
    expect(sumOfSquares(152399025)).toBe(1);
    expect(sumOfSquares(1524155677489)).toBe(1);
    expect(sumOfSquares(1524155677490)).toBe(2);
  });
});
