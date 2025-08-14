export const fibonacci = (n) => {
    if (n === 0 || n === 1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}







// 1 = 1-1 + 1-2
// fibonaci = n-1 + n-2;