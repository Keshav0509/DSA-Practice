function bs (arr, target, start, end) {
    if (start > end) return -1;
    const mid = Math.floor((start+end)/2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
        return bs(arr, target, start, mid - 1);
    } else {
        return bs(arr, target, mid + 1, end);
    }
}

export const binarySearch = (arr, target) => {
    let s = 0, e = arr.length; 
    const t = target;
    return bs(arr, t, s, e); 
} 