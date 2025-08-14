export const moveToStart = (head) => {
  let prev = null;
  let curr = head;
  while (curr.next !== null) {
    prev = curr;
    curr = curr.next;
  }
  prev.next = null;
  curr.next = prev;
  head = curr;
  return head;
};
