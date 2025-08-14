const merge = (arr, star, mid, end) => {
  const temp = [];
  let i = star,
    j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(arr[i]);
  }
  while (j <= end) {
    temp.push(arr[j]);
  }

  for (let k = 0; k < temp.length; k++) {
    arr[star + k] = temp[k];
  }
};
const mergeSort = (arr, start, end) => {
  if (start >= end) return;
  const mid = start + Math.floor((end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  merge(arr, start, mid, end);
};

export const sort = (arr) => {
  let start = 0,
    end = arr.length-1;
  mergeSort(arr, start, end);
  return arr;
};
