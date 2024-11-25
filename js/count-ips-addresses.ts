export const ipsBetween = (start: string, end: string): number => {
  return (
    end
      .split(".")
      .map(Number)
      .reduce((acc, curr) => acc * 256 + curr, 0) -
    start
      .split(".")
      .map(Number)
      .reduce((acc, curr) => acc * 256 + curr, 0)
  );
};
