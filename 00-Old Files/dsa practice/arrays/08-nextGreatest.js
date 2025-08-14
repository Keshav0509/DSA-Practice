export const nextGreatest = (arr) => {
  if (arr.length === 0) return -1;

  let maxFromRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const tempEl = arr[i];
    arr[i] = maxFromRight;
    if (tempEl > maxFromRight) {
      maxFromRight = tempEl;
    }
  }
  return arr;
};
