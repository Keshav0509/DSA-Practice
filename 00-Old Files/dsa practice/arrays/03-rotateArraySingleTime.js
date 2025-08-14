export const rotate = (arr) => {
  const popped = arr.pop();
  arr.unshift(popped);
  return arr;
};
