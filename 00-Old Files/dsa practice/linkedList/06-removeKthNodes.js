import { ListNode } from "./00-ListNode.js";

export const removeKthNodes = (head, k) => {
  let dummy = new ListNode(0);
  dummy.next = head;
  let temp = dummy;

  let i = 0;
  while (temp.next !== null) {
    i += 1;
    if (i % k === 0) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return dummy.next;
};
