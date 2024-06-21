import { describe, it, expect } from "bun:test";

export class Kata {
  /**
   * @description exactly 4 digits or exactly 6 digits.
   * @param pin
   * @returns boolean
   * @example
   * Kata.validatePin("1234") // true
   * Kata.validatePin("12345") // false
   * Kata.validatePin("123456") // true
   * Kata.validatePin("1234567") // false
   * Kata.validatePin("a234567") // false
   */
  static validatePin(pin: string): boolean {
    return /^\d{4}(\d{2})?$/.test(pin);
  }
}

describe("validatePIN", function () {
  it("should return False for pins with length other than 4 or 6", function () {
    expect(Kata.validatePin("1")).toBe(false);
    expect(Kata.validatePin("12")).toBe(false);
    expect(Kata.validatePin("123")).toBe(false);
    expect(Kata.validatePin("12345")).toBe(false);
    expect(Kata.validatePin("1234567")).toBe(false);
    expect(Kata.validatePin("-1234")).toBe(false);
    expect(Kata.validatePin("1")).toBe(false);
    expect(Kata.validatePin("00000000")).toBe(false);
  });

  it("should return False for pins which contain characters other than digits", function () {
    expect(Kata.validatePin("a234")).toBe(false);
    expect(Kata.validatePin(".234")).toBe(false);
  });

  it("should return True for valid pins", function () {
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
