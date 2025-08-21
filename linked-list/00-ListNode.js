export class ListNode {
  constructor(val, next=null){
    this.val = val;
    this.next = next;
  }
}

// build node list;
export const buildList = (arr) => {
  const dummy = new ListNode(0);
  let curr = dummy;
  for(const num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}
// print and return node list as arr;
export const printList = (head) => {
  const res = [];
  while(head !== null){
    res.push(head.val);
    head = head.next;
  }

  console.log(res.join(' -> '));
  // return res;
}