export const subsequence = (arr) => {
    arr = [...arr];
    const result = [];

    function subset(i, curr) {
        if(i===arr.length){
            result.push([...curr]);
            return;
        }

        //including step;
        curr.push(arr[i]);
        subset(i+1, curr);
        //exclude step;
        curr.pop();
        subset(i+1, curr);
    };

    subset(0, []);
    return result;
}