/*
// Remove every kth node
Given a singly linked list, your task is to remove every k-th node from the linked list.
Constraints:
The length of the linked list is between 1 and 10^4.
1 <= k <= 10^4.
Input Format:
The head singly linked list.
An integer value k.
Output Format:
Output the linked list after removing every k-th node.

Examples:
Input:
Linked List: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10
k = 3
Output :
Linked List: 1 -> 2 -> 4 -> 5 -> 7 -> 8 -> 10
*/
import { ListNode } from "./00-ListNode.js";

export var removeKthNodes = function(head, k) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  let counter = 1;
  while(current !== null) {
    if(counter % k === 0) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
    counter++;
  }

  return dummy.next;
};
