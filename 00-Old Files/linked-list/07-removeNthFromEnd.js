export const removeNthFromEnd = (head, k) => {
  let first = head;
  let second = head;

  // Move the 'second' pointer k steps ahead
  while (k > 0) {
    second = second.next;
    k--;
  }

  // If second is null, we need to remove the head node
  if (second === null) {
    // If k > 0, it means k > list length — invalid case, return head
    if (k > 0) {
      return head;
    }
    // If k == 0, remove the head node
    let temp = head;
    head = head.next; // Move head to next node
    temp.next = null; // Disconnect the removed node
    return head;
  }

  let prev = null;

  // Move both pointers until 'second' reaches the end
  while (second !== null) {
    prev = first; // Track node before the one to be removed
    first = first.next; // Move 'first' ahead
    second = second.next; // Move 'second' ahead
  }

  // 'first' is the node to be removed
  prev.next = first.next; // Bypass the node
  first.next = null; // Disconnect the removed node

  return head; // Return the updated list
};
