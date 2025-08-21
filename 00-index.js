import { printSubarrays1, printSubarrays2 } from "./arrays/01-printSubarray.js";
import { prefixSubarraySum, subarraySum } from "./arrays/02-subarraySum.js";
import { booleanMatrix, optimizeBooleanMatrix } from "./arrays/03-booleanMatrix.js";
import merge from "./arrays/06-mergeTwoSortedArray.js";
import { buildList, printList } from "./linked-list/00-ListNode.js";
import { deleteDuplicates } from "./linked-list/03-deleteDuplicates.js";
import { moveToStart } from "./linked-list/04-moveToStart.js";


// console.log(printSubarrays1([1, 2, 3, 4]));
// console.log(printSubarrays2([1, 2, 3]));
// console.log(subarraySum([12, 18, 5, 11, 30, 5], 69));
// console.log(prefixSubarraySum([12, 18, 5, 11, 30, 5], 69));
// console.log(booleanMatrix([[1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0]]));
// console.log(optimizeBooleanMatrix([[1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 0, 0]]));
// console.log(merge([0],0,[1],1));
// const unique = deleteDuplicates(head);
// console.log(unique); 
const head = buildList([1,2,3,4,5]);
// printList(head);
const result = moveToStart(head);
printList(result);


