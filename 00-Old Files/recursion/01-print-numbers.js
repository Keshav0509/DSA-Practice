export const printNumber = (n) => {
    if (n === 1) {
        console.log(n);
        return;
    }
    console.log(n);
    return printNumber(n-1);
}