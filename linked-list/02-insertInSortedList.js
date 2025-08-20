/*
// Insert in a Sorted List
Problem Statement:
You are given a singly linked list in sorted order and an integer value. Your task is to insert the integer value into the linked list while maintaining the sorted order of the list.
Constraints:
1 <= length of list <= 1000
Input Format:
The head of sorted linked list.
An integer value to be inserted into the linked list.
Output Format:
the head of linked list after inserting the integer value while maintaining the sorted order.

Examples:
Input:
Sorted Linked List: 1 -> 3 -> 5 -> 7 -> 9
k : 6
Output : 
1 -> 3 -> 5 -> 6 -> 7 -> 9
*/
import {ListNode} from './00-ListNode.js';
var insertAtMiddle = function(head, k) {
  const new_node = new ListNode(k);
  if(head === null || head.val > k){
    new_node.next = head;
    return new_node;
  }

  let curr = head;
  while(curr.next !==null && curr.next.val < k){
    curr = curr.next;
  }
  
  new_node.next = curr.next;
  curr.next = new_node;
  return head;
};
