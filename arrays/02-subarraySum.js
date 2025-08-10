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

export const prefixSubarraySum = (arr, tar) => {
  const n = arr.length;
  const prefixMap = new Map();

  let sum = 0;
  prefixMap.set(0, 0);

  for(let i = 0; i < n; i++) {
    sum += arr[i];

    if (prefixMap.has(sum - tar)) {
      return [prefixMap.get(sum - tar) + 1, i + 1];
    }
    if(!prefixMap.has(sum)){
      prefixMap.set(sum, i + 1);
    }
  }

  return [-1];
}