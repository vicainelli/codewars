export const createPhoneNumber = (n: number[]): string => {
  const j = n.join("");
  return `(${j.slice(0, 3)}) ${j.slice(3, 6)}-${j.slice(6, 10)}`;
};
