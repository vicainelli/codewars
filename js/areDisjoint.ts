export function areDisjoint(array1: string[], array2: string[]) {
  const set1 = new Set(array1);
  return !array2.some((element: string) => set1.has(element));
}
