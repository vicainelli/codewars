import { describe, it, expect } from "bun:test";

/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 *
 * @param str
 * @returns true if the string has the same amount of 'x's and 'o's, false otherwise
 * @example
 * xo("xoxo") // true
 * xo("xox") // false
 * xo("aabb") // false
 */
export function xo(str: string): boolean {
  return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}

describe("xo", () => {
  it("returns true for xoxo", () => {
    expect(xo("xoxo")).toBe(true);
  });

  it("returns false for xox", () => {
    expect(xo("xox")).toBe(false);
  });

  it("returns true for aabb", () => {
    expect(xo("aabb")).toBe(true);
  });

  it('returns false for "zzoo"', () => {
    expect(xo("zzoo")).toBe(false);
  });
});
