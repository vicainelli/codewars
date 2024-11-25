import { describe, it, expect } from "bun:test";
import { ipsBetween } from "./count-ips-addresses";

describe("count-ips-addresses", () => {
  it("should count ips between two addresses", () => {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toBe(50);
    expect(ipsBetween("20.0.0.10", "20.0.1.0")).toBe(246);
  });
});
