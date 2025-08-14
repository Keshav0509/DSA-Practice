import { ListNode } from "./00-ListNode.js";

export const insertAtMiddle = (head, k) => {
  const new_node = new ListNode(k);
  if (head === null) return new_node;

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  new_node.next = slow.next;
  slow.next = new_node;
  return head;
};
