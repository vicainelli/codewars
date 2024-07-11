import { describe, it, expect } from "bun:test";

const ipsBetween = (start: string, end: string): number => {
  return (
    end
      .split(".")
      .map(Number)
      .reduce((acc, curr) => acc * 256 + curr, 0) -
    start
      .split(".")
      .map(Number)
      .reduce((acc, curr) => acc * 256 + curr, 0)
  );
};

describe("count-ips-addresses", () => {
  it("should count ips between two addresses", () => {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toBe(50);
    expect(ipsBetween("20.0.0.10", "20.0.1.0")).toBe(246);
  });
});
