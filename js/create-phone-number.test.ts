import { describe, expect, it } from "bun:test";

const createPhoneNumber = (n: number[]): string => {
  const j = n.join("");
  return `(${j.slice(0, 3)}) ${j.slice(3, 6)}-${j.slice(6, 10)}`;
};

describe("createPhoneNumber", () => {
  it("should create a phone number", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
      "(123) 456-7890",
    );
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(
      "(111) 111-1111",
    );
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
      "(123) 456-7890",
    );
  });
});
