export const sumOfDigits = (nums) => {
  if (nums > 10 ** 9) return;
  if (nums === 0) return 0;

  const remainder = nums % 10;
  const n = Math.floor(nums / 10);

  return remainder + sumOfDigits(n);
};

export const sumOfDigit = (nums) => {
  if (nums > 10 ** 9) return;

  let sum = 0;
  while (nums > 0) {
    const remainder = nums % 10;
    nums = Math.floor(nums / 10);

    sum += remainder;
  }

  return remainder;
};
