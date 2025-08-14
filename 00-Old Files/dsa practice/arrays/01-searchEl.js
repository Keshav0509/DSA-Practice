export const search = (arr, tar) => {
  for (let i = 0; i < arr.length; i++) {
    if (tar=== arr[i]) return i;
  }
  return -1;
};
