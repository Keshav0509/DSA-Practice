export const largestRectangleArea = (heights) => {
  const stack = [];
  const lmin = [];
  const rmin = [];
  const n = heights.length;

  //left min values;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    lmin[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  
  stack.length = 0;

  //right min values;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    rmin[i] = stack.length ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    const width = rmin[i] - lmin[i] - 1;
    const area = heights[i] * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}