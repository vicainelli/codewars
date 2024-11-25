import { describe, it, expect } from "bun:test";
import { areDisjoint } from "./areDisjoint";

describe("areDisjoint", () => {
  it("should return true", () => {
    expect(
      areDisjoint(["Alice", "Bob", "Charlie"], ["Xander", "Yasmine", "Zane"]),
    ).toEqual(true);
  });

  it("shoul return false", () => {
    expect(
      areDisjoint(["Alice", "Bob", "Charlie"], ["Charlie", "Delta", "Echo"]),
    ).toEqual(false);
  });
});
