export const searchMatrix = (matrix, tar) => {
  matrix = matrix.flat();

  let start = 0,
    end = matrix.length;
  
    while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (matrix[m] === tar) return true;
    if (matrix[m] > tar) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  return false;
};
