export const pythagoreanTriplet = (arr) => {
  const n = arr.length;
  if (n < 3) return false;

  const squers = new Set(arr.map(x => x * x));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = (arr[i] * arr[i]) + (arr[j] * arr[j]);
      if (squers.has(sum)) return true;
    }
  }

  return false;
}

// two pointer approach
export const twoPointerPythagoreanTriplet = (arr) => {
  const n = arr.length;
  if(n < 3) return false;

  const squers = arr.map( x => x * x).sort((a, b) => a - b);

  for (let i = n - 1; i >= 2; i--) {
    let left = 0, right = i - 1;
    while (left < right) {
      const sum = squers[left] + squers[right];
      if(squers[i] === sum) return true;
      else if (sum < squers[i]) left++;
      else right--;
    }
  }

  return false;
}