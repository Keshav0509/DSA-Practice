export const segregateElements = (arr) => {
  const pos = [];
  const neg = [];

  for (const num of arr) {
    if (num < 0) {
      neg.push(num);
    } else {
      pos.push(num);
    }
  }
  const n = pos.length;
  for (let i = 0; i < arr.length; i++) {
    if (i < n) {
      arr[i] = pos[i];
    } else {
      arr[i] = neg[i - n];
    }
  }
  return arr;
};
