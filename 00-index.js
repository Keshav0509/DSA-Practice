import { printSubarrays1, printSubarrays2 } from "./arrays/01-printSubarray.js";
import { prefixSubarraySum, subarraySum } from "./arrays/02-subarraySum.js";
import { booleanMatrix, optimizeBooleanMatrix } from "./arrays/03-booleanMatrix.js";
import merge from "./arrays/06-mergeTwoSortedArray.js";
import { buildList, printList } from "./linked-list/00-ListNode.js";
import { deleteDuplicates } from "./linked-list/03-deleteDuplicates.js";
import { moveToStart } from "./linked-list/04-moveToStart.js";
import { removeKthNodes } from "./linked-list/05-removeKthNodes.js";

// input variables and test cases;
const arr = [1,2,3,4,5,6,7,8,9,10];
const k = 3;
const head = buildList(arr);

// test result;
// console.log(printSubarrays1([1, 2, 3, 4]));
// console.log(printSubarrays2([1, 2, 3]));
// console.log(subarraySum([12, 18, 5, 11, 30, 5], 69));
// console.log(prefixSubarraySum([12, 18, 5, 11, 30, 5], 69));
// console.log(booleanMatrix([[1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0]]));
// console.log(optimizeBooleanMatrix([[1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0]]));
// console.log(merge([0],0,[1],1));
// const unique = deleteDuplicates(head);
// console.log(unique); 
// const result = moveToStart(head);
const result = removeKthNodes(head, k);

printList(result);