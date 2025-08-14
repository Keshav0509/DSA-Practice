export const missingNumber = (nums) => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // using gauss formula.
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
};
