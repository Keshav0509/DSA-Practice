export const findStartNode = (head) => {
  if (head === null) return head;

  let slow = head,
    fast = head,
    hasCycly = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycly = true;
      break;
    }
  }

  if (!hasCycly) return null;

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
