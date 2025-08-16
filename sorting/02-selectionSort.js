export function selectionSort(arr) {
  const n = arr.length;
  let isSwap = false;
  for(let i = 0; i < n; i++) {
    let smallIdx = i;
    for(let j = i + 1; j < n; j++) {
      if(arr[j] < arr[j + 1]) smallIdx = j;
      isSwap = true;
    }

    if(!isSwap) return;

    [arr[i], arr[smallIdx]] = [arr[smallIdx], arr[i]];
  }

  return arr;
}