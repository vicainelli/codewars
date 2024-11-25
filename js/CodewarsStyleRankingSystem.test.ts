import { describe, it, expect } from "bun:test";

class User {
  // rank, progress, incProgress
  constructor(rank: number, progress: number) {
    this.rank = rank;
  }

  // // Constructor method
  // constructor(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }

  // Regular method
  getRank() {
    return this.rank;
  }
}

describe.skip("CodewarsStyleRankingSystem", () => {
  it("should return the correct rank", () => {
    const user = new User();
    expect(user.getRank()).toBe(1);
  });
});
