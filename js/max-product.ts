export const adjacentElementsProduct = (arr: number[]): number => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      result.push(arr[i] * arr[i + 1]);
    }
  }

  return result.sort((a, b) => b - a)[0];
};
