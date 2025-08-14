import { 
    ListNode, 
    insertion_end, 
    insertion_middle, 
    insertion_start, 
    displayNodes, 
    pop_front, 
    pop_back, 
    size,
    searchNode,
    createNodeList,
} from "./00-Node-Module.js";
import { reverseList } from "./02-reverse-list.js";
import { middleNode } from "./03-middle-of-list.js";
import { isPalindrome } from "./04-palindrome.js";
import { detectCycle, hasCycly } from "./05-list-hasCycle.js";

let head = new ListNode(1);
head = insertion_start(head, 1);
head = insertion_start(head, 2);
head = insertion_start(head, 3);
head = insertion_end(head, 2);
head = insertion_end(head, 3);
head = insertion_middle(head, 0, 4);
head = pop_front(head);
head = pop_back(head);
const index = searchNode(head, 0);
console.log("List Size:",size(head));
console.log("index of 0 is:", index);
// displayNodes(head);
head = reverseList(head);
console.log('reversed node list values:');
// displayNodes(head);
console.log("middle node is:",middleNode(head));
console.log("is list palindrome:",isPalindrome(head));
console.log("hasCycle:",hasCycly(head));
console.log("detect Cycle Node:", detectCycle(head));
console.log("linked List:", createNodeList(1,10,1));

