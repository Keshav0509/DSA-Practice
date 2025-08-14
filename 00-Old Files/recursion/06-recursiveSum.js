export const recursiveSum = (i, k) => {
    if(i >= 10 || i === k) return 0;
    return i + recursiveSum(i + 2, k);
}