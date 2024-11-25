export function alphabetPosition(text: string): string {
  return [...text]
    .reduce((acc: number[], curr: string) => {
      const letterIndex = [..."abcdefghijklmnopqrstuvwxyz"].findIndex(
        (item) => item === curr.toLowerCase(),
      );

      if (letterIndex >= 0) {
        acc.push(letterIndex + 1);
      }
      return acc;
    }, [])
    .map((num) => num.toString())
    .join(" ");
}

