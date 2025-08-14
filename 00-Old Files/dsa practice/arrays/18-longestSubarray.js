export const longestSubarray = (nums) => {
  const seen = new Set();

  let longest = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while (seen.has(nums[right])) {
      seen.delete(nums[left]);
      left++;
    }

    seen.add(nums[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
