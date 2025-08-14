export const upperBound = (nums, tar) => {
  let start = 0,
    end = nums.length - 1,
    res = nums.length;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] > tar) {
      res = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  return res;
};
