// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascriptx
import { describe, it, expect } from "bun:test";

type BATTLEFIELD_TYPE = number[][];

type SHIP_TYPE = {
  size: number;
  amount: number;
};

type SHIPS_TYPE = {
  battleship: SHIP_TYPE;
  cruiser: SHIP_TYPE;
  destroyer: SHIP_TYPE;
  submarine: SHIP_TYPE;
};

const SHIPS: SHIPS_TYPE = {
  battleship: {
    size: 4,
    amount: 1,
  },
  cruiser: {
    size: 3,
    amount: 2,
  },
  destroyer: {
    size: 2,
    amount: 3,
  },
  submarine: {
    size: 1,
    amount: 4,
  },
};

const isBinary = (num: number): boolean => num === 0 || num === 1;

describe.skip("isBinary", () => {
  it("should return false when is not binary", () => {
    expect(isBinary(2)).toBeFalse();
  });
  it("should return true when is binary", () => {
    expect(isBinary(0)).toBeTrue();
    expect(isBinary(1)).toBeTrue();
  });
});

const isAllBinary = (array: BATTLEFIELD_TYPE) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (!isBinary(array[i][j])) {
        return false; // Return false if the condition matches
      }
    }
  }
  return true; // Return true if no matches found
};

describe("isAllBinary", () => {
  it("should return true when is binary", () => {
    expect(
      isAllBinary([
        [0, 0, 1],
        [1, 0, 1],
      ]),
    ).toBeTrue();
  });
  it("should return false when is not binary", () => {
    expect(
      isAllBinary([
        [0, 0, 1],
        [1, 0, 2],
      ]),
    ).toBeFalse();
    expect(
      isAllBinary([
        [0, 0, 2],
        [1, 0, 0],
      ]),
    ).toBeFalse();
  });
});

const is10x10Matrix = (matrix: BATTLEFIELD_TYPE) => {
  // Check if the outer array has exactly 10 elements
  if (!Array.isArray(matrix) || matrix.length !== 10) {
    return false;
  }

  for (let i = 0; i < 10; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== 10) {
      return false;
    }
  }

  return true; // It's a valid 10x10 array
};

describe("is10x10Matrix", () => {
  it("should return true when is 10x10", () => {
    const arr = new Array(10).fill(null).map(() => new Array(10).fill(0));
    const result = is10x10Matrix(arr);
    expect(result).toBeTrue();
  });
  it("should return false when is not 10x10", () => {
    const arr = new Array(9).fill(null).map(() => new Array(10).fill(0));
    const result = is10x10Matrix(arr);
    expect(result).toBeFalse();
  });
});

const validateBattlefield = (field: BATTLEFIELD_TYPE) => {
  if (!is10x10Matrix(field) || !isAllBinary(field)) return false;

  // 	▪	If occupied, try to find the ship it belongs to by checking adjacent cells (horizontally, vertically, and diagonally)
  // 	▪	If a ship is found, check its size and type (battleship, cruiser, destroyer, submarine) and increment the corresponding counter
  // 	▪	If the ship is not a straight line (except for submarines), return false
  // 	▪	If the ship overlaps or is in contact with another ship, return false
  // 	•	After iterating over the entire grid, check if the counters match the required numbers (1 battleship, 2 cruisers, 3 destroyers, 4 submarines)
  // 	•	If all counters match, return true; otherwise, return false

  for (let x = 0; x < field.length; x++) {
    return false;
  }

  return true;
};

describe.skip("validateBattlefield", () => {
  it("Must return true for valid field", () => {
    const result = validateBattlefield([
      [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    expect(result).toBeTrue();
  });

  it("should return false for invalid field", () => {
    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();

    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();

    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();

    expect(
      validateBattlefield([
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();
    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();
    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();
    expect(
      validateBattlefield([
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]),
    ).toBeFalse();
  });
});
