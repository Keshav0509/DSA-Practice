export const insertPosition = (arr, k) => {
  let s = 0,
    e = arr.length - 1,
    r = arr.length;
  while (s <= e) {
    const m = s + Math.floor((e - s) / 2);

    if (arr[m] >= k) {
      r = m;
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return r;
};
