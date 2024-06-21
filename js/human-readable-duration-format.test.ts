import { describe, it, expect } from "bun:test";

const formatDuration = (s: number): string => {
  const t = [
    [86400 * 365, "year"],
    [86400, "day"],
    [3600, "hour"],
    [60, "minute"],
    [1, "second"],
  ];
  if (s === 0) return "now";
  return t
    .reduce((p, [d, u]) => {
      const v = Math.floor(s / d);
      s -= v * d;
      if (v > 0) {
        p.push(`${v} ${u}${v > 1 ? "s" : ""}`);
      }
      return p;
    }, [])
    .join(", ")
    .replace(/,([^,]*)$/, " and$1");
};

describe("formatDuration", () => {
  it("should return a string", () => {
    expect(typeof formatDuration(1)).toBe("string");
  });
  it("should return 0 seconds", () => {
    expect(formatDuration(0)).toBe("now");
  });
  it("should return 1 second", () => {
    expect(formatDuration(1)).toBe("1 second");
  });
  it("should return 1 minute and 2 seconds", () => {
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
  });
  it("should return 2 minutes", () => {
    expect(formatDuration(120)).toBe("2 minutes");
  });
  it("should return 1 hour", () => {
    expect(formatDuration(3600)).toBe("1 hour");
  });
  it("should return 1 hour, 1 minute and 2 seconds", () => {
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
  });
  it("should return 182 days, 1 hour, 44 minutes and 40 seconds", () => {
    expect(formatDuration(15731080)).toBe(
      "182 days, 1 hour, 44 minutes and 40 seconds",
    );
  });
  it("should return 57 days, 10 hours, 43 minutes and 55 seconds", () => {
    expect(formatDuration(4963435)).toBe(
      "57 days, 10 hours, 43 minutes and 55 seconds",
    );
  });
  it("should return 4 years, 68 days, 3 hours and 4 minutes", () => {
    expect(formatDuration(132030240)).toBe(
      "4 years, 68 days, 3 hours and 4 minutes",
    );
  });
});
