import { ListNode } from "./00-ListNode.js";

//recursion approach
export const mergeList = (head1, head2) => {
  if (head1 === null || head2 === null) {
    return head1 ? head1 : head2;
  }

  if (head1.val <= head2.val) {
    head1.next = mergeList(head1.next, head2);
    return head1;
  } else {
    head2.next = mergeList(head1, head2.next);
    return head2;
  }
};

export const mergeSortedList = (head1, head2) => {
  const temp = new ListNode(-1);
  let curr = temp;

  while (head1 !== null && head2 !== null) {
    if (head1.val <= head2.val) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    curr = curr.next;
  }
  curr.next = head1 ? head1 : head2;

  return temp.next;
};
