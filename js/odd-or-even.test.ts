import { describe, it, expect } from "bun:test";
import { oddOrEven } from "./odd-or-even";

describe("oddOrEven", () => {
  it("Edge tests", () => {
    expect(oddOrEven([0])).toBe("even");
    expect(oddOrEven([1])).toBe("odd");
    expect(oddOrEven([])).toBe("even");
  });

  it("Even tests", () => {
    expect(oddOrEven([0, 1, 5])).toBe("even");
    expect(oddOrEven([0, 1, 3])).toBe("even");
    expect(oddOrEven([1023, 1, 2])).toBe("even");
  });

  it("Negative Even tests", () => {
    expect(oddOrEven([0, -1, -5])).toBe("even");
    expect(oddOrEven([0, -1, -3])).toBe("even");
    expect(oddOrEven([-1023, 1, -2])).toBe("even");
  });

  it("Odd tests", () => {
    expect(oddOrEven([0, 1, 2])).toBe("odd");
    expect(oddOrEven([0, 1, 4])).toBe("odd");
    expect(oddOrEven([1023, 1, 3])).toBe("odd");
  });

  it("Negative Odd tests", () => {
    expect(oddOrEven([0, -1, 2])).toBe("odd");
    expect(oddOrEven([0, 1, -4])).toBe("odd");
    expect(oddOrEven([-1023, -1, 3])).toBe("odd");
  });
});
