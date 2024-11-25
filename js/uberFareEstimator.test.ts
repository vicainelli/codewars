import { describe, it, expect } from "bun:test";
import { uberFareEstimator } from "./uberFareEstimator";

describe("uberFareEstimator", () => {
  it("should return the correct values", () => {
    const expected = [13.7, 23.1, 28.1, 38];

    const ride_time = 30;
    const ride_distance = 7;
    const cost_per_minute = [0.2, 0.35, 0.4, 0.45];
    const cost_per_km = [1.1, 1.8, 2.3, 3.5];

    const result = cost_per_minute.map((c, i) => {
      return uberFareEstimator(ride_time, ride_distance, c, cost_per_km[i]);
    });

    expect(result).toEqual(expected);
  });
});
