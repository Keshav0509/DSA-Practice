export const isPalindrome = function (head) {
  if (head === null || head.next === null) return true;

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // reverse node
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // check if node is odd, mode slow pointer by 1 step;
  if (fast !== null) {
    slow = slow.next;
  }

  // final check, is node list palindrome
  while (slow !== null && prev !== null) {
    if (prev.val !== slow.val) return false;

    prev = prev.next;
    slow = slow.next;
  }

  return true;
};
