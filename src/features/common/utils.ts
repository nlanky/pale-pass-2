export const createArrayOfLength = (length: number) => {
  const array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }

  return array;
};
