import { describe, it, expect } from "bun:test";

// Defining the function areDisjoint
function areDisjoint(array1: string[], array2: string[]) {
  const set1 = new Set(array1);
  return !array2.some((element: string) => set1.has(element));
}

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
