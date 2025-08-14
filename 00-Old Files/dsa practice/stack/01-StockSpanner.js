export class StockSpanner {
  constructor(){
    this.stack = [];
  }

  next(price) {
    let span = 1;
    while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()[1];
    }

    this.stack.push([price, span]);
    return span;
  }
}

export const stockSpanner = (prices) => {
  const stack = [];
  const res = [];
  const n = prices.length;

  for(let i=0; i<n; i++){
    while(stack.length && prices[stack[stack.length-1]]<=prices[i]){
      stack.pop();
    }
    
    if(stack.length === 0) res.push(i + 1);
    else res.push(i - stack[stack.length - 1]);
    stack.push(i);
  }

  return res;
}