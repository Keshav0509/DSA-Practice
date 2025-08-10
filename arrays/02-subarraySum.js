/*
Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.
Note: If no such array is possible then, return [-1].
example:
Input: arr[] = [1, 2, 3, 7, 5], target = 12
Output: [2, 4]
Explanation: The sum of elements from 2nd to 4th position is 12.
*/

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