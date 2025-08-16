export function bubbleSort(arr) {
  const n = arr.length;
  let isSwap = false;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - 1 - i; j++) {
      if(arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if(!isSwap) return;
  }
  return arr;
}