import { describe, it, expect } from "bun:test";
import { xo } from "./exes-and-ohs";

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
