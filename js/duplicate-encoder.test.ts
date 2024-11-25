import { describe, it, expect } from "bun:test";
import { duplicateEncode } from "./duplicate-encoder";

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
