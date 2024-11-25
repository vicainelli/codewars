import { describe, it, expect } from "bun:test";
import { order, orderShort } from "./your-order-please";

describe("order", () => {
  it("basicTests", () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe(
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
  });
});

describe("orderShort", () => {
  it("basicTests", () => {
    expect(orderShort("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
    expect(orderShort("4of Fo1r pe6ople g3ood th5e the2")).toBe(
      "Fo1r the2 g3ood 4of th5e pe6ople",
    );
  });
});
