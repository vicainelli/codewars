import { describe, it, expect } from "bun:test";

/**
 * @description: Given a number, return the digital root of that number.
 *
 * @example:
 * digitalRoot(16) => 7
 * digitalRoot(456) => 6
 * digitalRoot(493193) => 2
 */
export function digitalRoot(n: number): number {
  return ((n - 1) % 9) + 1;
}

describe("digitalRoot", () => {
  it("return 7 for 16", () => {
    expect(digitalRoot(16)).toBe(7);
  });

  it("return 6 for 456", () => {
    expect(digitalRoot(456)).toBe(6);
  });
  it("return 2 for 493193", () => {
    expect(digitalRoot(493193)).toBe(2);
  });
  it("return 2 for 992", () => {
    expect(digitalRoot(992)).toBe(2);
  });
  it("return 9 for 999999999999", () => {
    expect(digitalRoot(999999999999)).toBe(9);
  });
  it("return 9 for 167346", () => {
    expect(digitalRoot(167346)).toBe(9);
  });
  it("return 1 for 10", () => {
    expect(digitalRoot(10)).toBe(1);
  });
  it("return 0 for 0", () => {
    expect(digitalRoot(0)).toBe(0);
  });
  it("return 2 for 200", () => {
    expect(digitalRoot(200)).toBe(2);
  });
});
