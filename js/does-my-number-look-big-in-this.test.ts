import { describe, it, expect } from "bun:test";

export function narcissistic(value: number): boolean {
  return (
    value ===
    value
      .toString()
      .split("")
      .reduce((acc, curr, _, xs) => acc + parseInt(curr) ** xs.length, 0)
  );
}

describe("narcissistic", () => {
  it("should return true for 7", () => {
    expect(narcissistic(7)).toBe(true);
  });

  it("should return true for 153", () => {
    expect(narcissistic(153)).toBe(true);
  });

  it("should return true for 1634", () => {
    expect(narcissistic(1634)).toBe(true);
  });
  it("should return false for 1632", () => {
    expect(narcissistic(1632)).toBe(false);
  });
});
