
export const descendingOrder = (n: number): number =>
  Number(
    n
      .toString()
      .split("")
      .map((n) => Number(n))
      .filter((n) => n > 0)
      .sort()
      .reverse()
      .join(""),
  );
