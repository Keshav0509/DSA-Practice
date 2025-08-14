export const deleteMiddle = (head) => {
  if (head === null || head.next === null) return head;

  let slow = head,
    fast = head,
    prev = null;
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;

  return head;
};
