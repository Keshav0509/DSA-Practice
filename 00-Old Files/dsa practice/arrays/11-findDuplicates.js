export const findDuplicates = (nums) => {
  if (arr.length === 0) return;

  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const res = [];

  for (const [key, val] of map.entries()) {
    if (val > 1) res.push(key);
  }

  return res;
};
