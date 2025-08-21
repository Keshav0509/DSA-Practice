/*
Move Last Node to Front of a Linked List
Given a singly linked list, your task is to move the last element of the linked list to the front.

Constraints:
1 <= n <= 10^4.

Input Format:
The input consists of a singly linked list.
Output Format:
Output the linked list after moving the last element to the front.

Examples:
Input: 
Linked List: 1 -> 2 -> 3 -> 4 -> 5
Output : 
Linked List: 5 -> 1 -> 2 -> 3 -> 4
*/
import {ListNode} from './00-ListNode.js';

export const moveToStart = function(head) {
    if (head === null) return head;

    let curr = head;
    let prev = null;
    
    while(curr.next !== null){
        prev = curr;
        curr = curr.next;
    }

    if(curr.next === null){
        prev.next = null;
        curr.next = head;
    }

    return curr;
};