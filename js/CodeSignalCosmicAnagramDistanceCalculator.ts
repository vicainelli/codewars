export function sortCharacters(input: string): string {
  return input.split("").sort().join("");
}

export function findAnagrams(array1: string[], array2: string[]) {
  let total = 0;

  const sortedArray_1 = new Set(array1.map(sortCharacters));

  // Check each word in array2
  for (const word of array2) {
    // Sort the current word
    const sortedWord = sortCharacters(word);

    // If the sorted word exists in the Set, add its length to totalLength
    if (sortedArray_1.has(sortedWord)) {
      total += word.length;
    }
  }
  return total;
}

