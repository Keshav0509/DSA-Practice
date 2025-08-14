export class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export const push_front = (head, k) => {
  if (head === null) return head;

  const new_node = new ListNode(k);
  
  new_node.next = head;
  return new_node;
};

export const push_back = (head, k) => {
  if (head === null) return head;

  const new_node = new ListNode(k);

  let temp = head;
  while (temp !== null && temp.next !== null) {
    temp = temp.next;
  }
  temp.next = new_node;

  return head;
};
