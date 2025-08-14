export const rearrange = (arr) => {
  arr.sort((a, b) => a - b);
  const n = arr.length - 1;
  const maxElem = arr[n] + 1;

  let i = 0, j = n, k = 0;
  while (i <= j) {
    if (k % 2) {
      arr[k] += (arr[i] % maxElem) * maxElem;
      i++;
    }else{
      arr[k] += (arr[j] % maxElem) * maxElem;
      j--;
    }
    k++;
  }

  for (let i = 0; i <= n; i++) {
    arr[i] = Math.floor(arr[i] / maxElem);
  }
  return arr;
}

export const rearrangeRecursive = (arr) => {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const maxElem = arr[n - 1] + 1;

  function encode(i, j, k) {
    if (k >= n) return;
    if (k % 2 === 0) {
      arr[k] += (arr[j] % maxElem) * maxElem;
      encode(i, j - 1, k + 1);
    } else {
      arr[k] += (arr[i] % maxElem) * maxElem;
      encode(i + 1, j, k + 1);
    }
  }

  encode(0, n - 1, 0);

  function decode(idx) {
    if (idx >= n) return;
    arr[idx] = Math.floor(arr[idx] / maxElem);
    decode(idx + 1);
  }

  decode(0);
  return arr;
};
