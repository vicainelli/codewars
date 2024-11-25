import { describe, it, expect } from "bun:test";
import * as Kata from "./regex-validate-pin-code";

describe("validatePIN", () => {
  it("should return False for pins with length other than 4 or 6", () => {
    expect(Kata.validatePin("1")).toBe(false);
    expect(Kata.validatePin("12")).toBe(false);
    expect(Kata.validatePin("123")).toBe(false);
    expect(Kata.validatePin("12345")).toBe(false);
    expect(Kata.validatePin("1234567")).toBe(false);
    expect(Kata.validatePin("-1234")).toBe(false);
    expect(Kata.validatePin("1")).toBe(false);
    expect(Kata.validatePin("00000000")).toBe(false);
  });

  it("should return False for pins which contain characters other than digits", () => {
    expect(Kata.validatePin("a234")).toBe(false);
    expect(Kata.validatePin(".234")).toBe(false);
  });

  it("should return True for valid pins", () => {
    expect(Kata.validatePin("1234")).toBe(true);
    expect(Kata.validatePin("0000")).toBe(true);
    expect(Kata.validatePin("1111")).toBe(true);
    expect(Kata.validatePin("123456")).toBe(true);
    expect(Kata.validatePin("098765")).toBe(true);
    expect(Kata.validatePin("000000")).toBe(true);
    expect(Kata.validatePin("123456")).toBe(true);
    expect(Kata.validatePin("090909")).toBe(true);
  });
});
