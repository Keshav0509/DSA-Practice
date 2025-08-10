export const subarraySum = (arr, tar) => {
  const n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === tar) return [i + 1, j + 1];
    }
  }
  
  return [-1];
};