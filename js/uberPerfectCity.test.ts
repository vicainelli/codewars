import { describe, it, expect } from "bun:test";

function uberPerfectCity(dep: number[], dest: number[]) {
  const [dep_x, dep_y] = dep;
  const [dest_x, dest_y] = dest;

  let min_x = Math.abs(dep_x - dest_x);
  let min_y = Math.abs(dep_y - dest_y);

  if (Math.ceil(dep_x) === Math.ceil(dest_x)) {
    const paths_x = [
      Math.ceil(dep_x) - dep_x + (Math.ceil(dest_x) - dest_x),
      dep_x - Math.floor(dep_x) + dest_x - Math.floor(dest_x),
    ];

    min_x = Math.min(...paths_x);
  }

  // if (Math.ceil(dep_y) === Math.ceil(dest_y)) {
  const paths_y = [
    Math.ceil(dep_y) - dep_y + (Math.ceil(dest_y) - dest_y),
    dep_y - Math.floor(dep_y) + dest_y - Math.floor(dest_y),
  ];

  // min_x = Math.min(...paths_y);
  // }
  //
  return min_x + min_y;
}

describe("uberPerfectCity", () => {
  it("should return 2.7 given [0.4,1] and [0.9, 3]", () => {
    expect(uberPerfectCity([0.4, 1], [0.9, 3])).toBe(2.7);
  });
  it("should return 8.5 given [2.4, 1] and [0.9, 8]", () => {
    expect(uberPerfectCity([2.4, 1], [0.9, 8])).toBe(8.5);
  });
  it("should return 0.4 given [0, 0], [0, 0.4]", () => {
    expect(uberPerfectCity([0, 0], [0, 0.4])).toBe(0.4);
  });
  it("should return 2 given [1, 1], [2, 2]", () => {
    expect(uberPerfectCity([1, 1], [2, 2])).toBe(2);
  });
  it("should return 2 given [1, 1], [2, 0]", () => {
    expect(uberPerfectCity([1, 1], [2, 0])).toBe(2);
  });
  it("should return 1 given [0, 1], [0, 2]", () => {
    expect(uberPerfectCity([0, 1], [0, 2])).toBe(1);
  });
  it("should return 1 given [1, 2], [1, 1]", () => {
    expect(uberPerfectCity([1, 2], [1, 1])).toBe(1);
  });
  it("should return 1 given [0,2], [1, 1]", () => {
    expect(uberPerfectCity([0, 2], [1, 1])).toBe(2);
  });
  it("should return 1.5 given [0,2], [1, 1]", () => {
    expect(uberPerfectCity([0, 2], [0.5, 1])).toBe(1.5);
  });
  it("should return 1.5 given [0,2], [1, 1]", () => {
    expect(uberPerfectCity([0, 2], [1, 0.5])).toBe(2.5);
  });
  it.todo("should return 1.5 given [0,2], [1, 1]", () => {
    expect(uberPerfectCity([0, 1], [1, 0.5])).toBe(1.5);
  });
  it.todo("should return 1.4 given [0, 1] and [1, 0.4]", () => {
    expect(uberPerfectCity([0, 1], [1, 0.4])).toBe(1.4);
  });
});
