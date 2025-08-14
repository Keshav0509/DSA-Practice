const merge = (nums, start, mid, end) => {
  const temp = [];

  let i = start,
    j = mid + 1;

  while (i <= mid && j <= end) {
    if (nums[i] <= nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }
  while (j <= end) {
    temp.push(nums[j]);
    j++;
  }

  for (let k = 0; k < temp.length; k++) {
    nums[start + k] = temp[k];
  }
};
const mergeSort = (nums, start, end) => {
  if (start >= end) return;

  const mid = start + Math.floor((end - start) / 2);

  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);

  merge(nums, start, mid, end);
};

export const sortArray = (nums) => {
  let start = 0,
    end = nums.length - 1;
  mergeSort(nums, start, end);
  return nums;
};
