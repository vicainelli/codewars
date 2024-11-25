export const oddOrEven = (a: number[]): string =>
  a.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? "even" : "odd";
