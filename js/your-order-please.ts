export const order = (words: string): string => {
  // Step 1: Transform words into an array of words
  const wordsArray = words.split(" ");

  // Step 2: Transform wordsArray to an object, extracting the number from the word using it as the key and the word as the value
  const wordsObject: { [key: number]: string } = {};
  for (const word of wordsArray) {
    const matchResult = word.match(/\d+/); // Match the number in the word
    if (matchResult) {
      const num = Number.parseInt(matchResult[0]); // Extract the number from the word
      wordsObject[num] = word;
    }
  }

  // Step 3: Sort the object by the keys and transform the sorted object back to an array
  const sortedWordsArray = Object.keys(wordsObject)
    .sort((a, b) => Number.parseInt(a) - Number.parseInt(b))
    .map((key) => wordsObject[Number.parseInt(key)]);

  // Step 4: Join the sorted array of words with a space
  return sortedWordsArray.join(" ");
};

export const orderShort = (words: string): string =>
  words
    .split(" ")
    .sort((a, b) => {
      const aMatch = a.match(/\d/);
      const bMatch = b.match(/\d/);
      return (aMatch ? +aMatch[0] : 0) - (bMatch ? +bMatch[0] : 0);
    })
    .join(" ");
