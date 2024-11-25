export function is_perfect(n: number): boolean {
  const x = Math.floor(Math.sqrt(n));
  return x * x === n;
}

export function sumOfSquares(n: number): number {
  if (n < 4) {
    return n;
  }

  if (is_perfect(n)) {
    return 1;
  }

  let m = n;
  while ((m & 3) === 0) {
    m >>= 2;
  }

  if ((m & 7) === 7) {
    return 4;
  }

  const x = Math.floor(Math.sqrt(m));

  for (let i = 1; i <= x; i++) {
    if (is_perfect(n - i * i)) {
      return 2;
    }
  }

  return 3;
}
