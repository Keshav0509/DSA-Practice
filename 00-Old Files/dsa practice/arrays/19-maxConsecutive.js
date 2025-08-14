// broot force
export const countOnes = (nums, k) => {
  let maxlen = 0;
  for (let i = 0; i < nums.length; i++) {
    let countOne = 0,
      countZero = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) countZero++;
      if (countZero > k) break;
      countOne++;
    }
    maxlen = Math.max(maxlen, countOne);
  }
  return maxlen;
};

//sliding window
export const maxConsecutiveOnes = (nums, k) => {
  let left = 0,
    right = 0,
    zeros = 0,
    maxlen = 0;
  while (right < nums.length) {
    if (nums[right] === 0) zeros++;

    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }

    maxlen = Math.max(maxlen, right - left + 1);
    right++;
  }

  return maxlen;
};
