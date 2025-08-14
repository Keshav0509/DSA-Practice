import { longestSubarray } from "./dsa practice/arrays/18-longestSubarray.js";
import { rearrange } from "./dsa practice/arrays/20-rearrange.js";
import { trapRainWater } from "./dsa practice/arrays/22-trapRainWater.js";
import { hollowPyramid } from "./dsa practice/patterns/01-hollowPyramid.js";
import { createNodeList } from "./linked-list/00-Node-Module.js";
import { stockSpanner, StockSpanner } from "./dsa practice/stack/01-StockSpanner.js";
import { largestRectangleArea } from "./dsa practice/stack/02-largestRectangleArea.js";

// const arr = [1,2,3,1,2,3,4,5,1,2,3,4,5,6];
// const prices = [100, 80, 60, 70, 75, 85];
const histogram = [2,1,5,6,2,3];
// console.log("longest Sub Array:", longestSubarray(arr));
// console.log("new Node list:",createNodeList(1,5,1));
// console.log('rearrenge',rearrange(arr));
// console.log('rain water:', trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));
// hollowPyramid(10);
// const stock = new StockSpanner();
// console.log(stock.next(100));
// console.log(stock.next(80));
// console.log(stock.next(60));
// console.log(stock.next(70));
// console.log(stock.next(75));
// console.log(stock.next(85));

// console.log(stockSpanner(prices));
console.log('max area in histogram:',largestRectangleArea(histogram));



