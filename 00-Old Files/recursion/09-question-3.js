export const print_output = (n) => {
    function print(num, i){
        const res = i * 5;
        if(res > n){
            return;
        }else{
            console.log(res);
            print_output(num, i+1);
        }
    }
    print(n, 0);
};