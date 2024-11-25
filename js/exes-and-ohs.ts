export function xo(str: string): boolean {
  return str.match(/x/gi)?.length === str.match(/o/gi)?.length;
}
