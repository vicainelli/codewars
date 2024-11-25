import { describe, it, expect } from "bun:test";

function josephusSurvivor(n: number, k: number) {
  const players = Array.from({ length: n }, (_, i) => i + 1);
  return players;
}

describe.skip("josephusSurvivor", () => {
  it("josephusSurvivor(7, 3)", () => expect(josephusSurvivor(7, 3)).toEqual(4));
  it.skip("josephusSurvivor(11, 19)", () =>
    expect(josephusSurvivor(11, 19)).toEqual(10));
  it.skip("josephusSurvivor(40, 3)", () =>
    expect(josephusSurvivor(40, 3)).toEqual(28));
  it.skip("josephusSurvivor(14, 2)", () =>
    expect(josephusSurvivor(14, 2)).toEqual(13));
  it.skip("josephusSurvivor(100, 1)", () =>
    expect(josephusSurvivor(100, 1)).toEqual(100));
  it.skip("josephusSurvivor(1, 300)", () =>
    expect(josephusSurvivor(1, 300)).toEqual(1));
  it.skip("josephusSurvivor(2, 300)", () =>
    expect(josephusSurvivor(2, 300)).toEqual(1));
  it.skip("josephusSurvivor(5, 300)", () =>
    expect(josephusSurvivor(5, 300)).toEqual(1));
  it.skip("josephusSurvivor(7, 300)", () =>
    expect(josephusSurvivor(7, 300)).toEqual(7));
  it.skip("josephusSurvivor(300, 300)", () =>
    expect(josephusSurvivor(300, 300)).toEqual(265));
});
