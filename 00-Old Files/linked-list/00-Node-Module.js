export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// insert value in the first of the node.
export const insertion_start = function (head, val) {
  const new_node = new ListNode(val);
  new_node.next = head;
  return new_node;
};

// insert node in the kth position in node ListNode.
export const insertion_middle = function (head, val, k) {
  const new_node = new ListNode(val);
  if (k === 0 || k < 0 || head === null) {
    new_node.next = head;
    return new_node;
  }

  let temp = head;
  let i = 1;
  while (i < k - 1 && temp.next !== null) {
    temp = temp.next;
    i += 1;
  }
  new_node.next = temp.next;
  temp.next = new_node;
  return head;
};

// insert value in the end of the Node.
export const insertion_end = function (head, val) {
  const new_node = new ListNode(val);
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = new_node;
  return head;
};

// pop node from front
export const pop_front = function (head) {
  if (head === null) return null;
  let newHead = head.next;
  head.next = null;
  return newHead;
};

//pop node from back.
export const pop_back = function (head) {
  if (head === null || head.next === null) return head;
  let temp = head;
  while (temp.next.next !== null) {
    // 1->2->3->4->Null;
    temp = temp.next;
  }
  temp.next = null;
  return head;
};

export const size = function (head) {
  let n = 0;
  while (head !== null) {
    n += 1;
    head = head.next;
  }
  return n;
};

// display all node's value in the console.
export const displayNodes = function (head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.val);
    temp = temp.next;
  }
};

//search key in node list.
export const searchNode = function (head, key) {
  if (head === null) return null;

  let i = 0;
  let temp = head;
  while (temp !== null) {
    if (temp.val === key) return i;

    temp = temp.next;
    i++;
  }
  return -1;
};

export const createNodeList = (start, end, jump) => {
  let head = new ListNode(end);
  let i = end - jump;
  while (i >= start) {
    head = insertion_start(head, i);

    i -= jump;
  }
  return head;
};

// exporting all function and methods...
/*
export {
    insertion_start,
    insertion_middle,
    insertion_end,

    displayNodes
}
*/
