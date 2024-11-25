import { describe, it, expect } from "bun:test";
import { descendingOrder } from "./descending-order";

describe("descendingOrder", () => {
  it("basicTests", () => {
    expect(descendingOrder(0)).toBe(0);
    expect(descendingOrder(1)).toBe(1);
    expect(descendingOrder(2)).toBe(2);
    expect(descendingOrder(3)).toBe(3);
    expect(descendingOrder(4)).toBe(4);
    expect(descendingOrder(5)).toBe(5);
    expect(descendingOrder(6)).toBe(6);
    expect(descendingOrder(7)).toBe(7);
    expect(descendingOrder(8)).toBe(8);
    expect(descendingOrder(9)).toBe(9);
    expect(descendingOrder(10)).toBe(1);
  });
  it("edgeCases", () => {
    expect(descendingOrder(0)).toBe(0);
    // expect(descendingOrder(-1)).toBe(0);
  });

  it("high numbers", () => {
    expect(descendingOrder(100)).toBe(1);
    expect(descendingOrder(829)).toBe(982);
    expect(descendingOrder(2110)).toBe(211);
    expect(descendingOrder(875542110)).toBe(87554211);
    expect(descendingOrder(996654320)).toBe(99665432);
  });
});
