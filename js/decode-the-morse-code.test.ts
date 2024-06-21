import { describe, it, expect } from "bun:test";

const MORSE_CODE = {
  " ": " ",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};

const WORD_SEPARATOR = "   ";
const LETTER_SEPARATOR = " ";

function decodeWord(word: string): string {
  // * this is a bit of a hack, but it works

  return word
    .split(LETTER_SEPARATOR)
    .map((code) => MORSE_CODE[code])
    .join("");
}

export function decodeMorse(morseCode: string): string {
  // your code here
  const morseWords = morseCode.split(WORD_SEPARATOR);

  return morseWords.map(decodeWord).join(" ").trim();
}

describe("decodeMorse", () => {
  it("should work with a single letter", () => {
    expect(decodeMorse(".-")).toEqual("A");
  });

  it("should return SOS", () => {
    expect(decodeMorse("... --- ...")).toEqual("SOS");
  });

  it('should return "HEY JUDE"', () => {
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toEqual("HEY JUDE");
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toEqual("HEY JUDE");
    expect(decodeMorse(" .-.-.-     .-.-.-")).toEqual("HEY JUDE");
  });
});
