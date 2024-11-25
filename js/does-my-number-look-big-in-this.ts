
export function narcissistic(value: number): boolean {
  return (
    value ===
    value
      .toString()
      .split("")
      .reduce((acc, curr, _, xs) => acc + Number.parseInt(curr) ** xs.length, 0)
  );
}
