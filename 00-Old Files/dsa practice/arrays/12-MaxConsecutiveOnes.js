export const MaxConsecutiveOnes = (nums) => {
  let maxConsecutive = 0;
  let count = 0;
  for (const num of nums) {
    if (num === 1) {
      count += 1;
      maxConsecutive = Math.max(maxConsecutive, count);
    } else {
      count = 0;
    }
  }
  
  return maxConsecutive;
};
