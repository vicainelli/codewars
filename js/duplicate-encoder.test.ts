import { describe, it, expect } from "bun:test";

const duplicateEncode = (w: string): string => {
  const m: { [key: string]: number } = w
    .toLowerCase()
    .split("")
    .reduce((p: { [key: string]: number }, c: string) => {
      p[c] = (p[c] || 0) + 1;
      return p;
    }, {});

  return w
    .toLowerCase()
    .split("")
    .map((c) => (m[c] > 1 ? ")" : "("))
    .join("");
};

describe("duplicateEncode", () => {
  it("should return a string", () => {
    expect(typeof duplicateEncode("din")).toBe("string");
  });

  it("should return (((", () => {
    expect(duplicateEncode("din")).toBe("(((");
  });

  it("should return ()()()", () => {
    expect(duplicateEncode("recede")).toBe("()()()");
  });

  it("should return )())())", () => {
    expect(duplicateEncode("Success")).toBe(")())())");
  });

  it("should return ))((", () => {
    expect(duplicateEncode("(( @")).toBe("))((");
  });

  it("should return )()))()))))()(", () => {
    expect(duplicateEncode("Supralapsarian")).toBe(")()))()))))()(");
  });

  it("should return )(()()()))))(", () => {
    expect(duplicateEncode("HJcHQHPHHHHHu")).toBe(")(()()()))))(");
  });
});
