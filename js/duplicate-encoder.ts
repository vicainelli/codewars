export const duplicateEncode = (w: string): string => {
  const m: { [key: string]: number } = w
    .toLowerCase()
    .split("")
    .reduce((p: { [key: string]: number }, c: string) => {
      p[c] = (p[c] || 0) + 1;
      return p;
    }, {});

  return w
    .toLowerCase()
    .split("")
    .map((c) => (m[c] > 1 ? ")" : "("))
    .join("");
};
