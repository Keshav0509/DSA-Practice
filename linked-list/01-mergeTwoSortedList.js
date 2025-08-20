/*
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]  
*/

export function recursionMergeTwoLists(head1, head2) {
  if(head1 === null || head2 === null){
    return head1 === null ? head2 : head1;
  };

  if (head1.val <= head2.val) {
    head1.next = recursionMergeTwoLists(head1.next, head2);
    return head1;
  } else {
    head2.next = recursionMergeTwoLists(head1, head2.next);
    return head2;
  }
}

export function mergeTwoLists(head1, head2) {
  const temp = ListNode(0);
  let curr = temp;

  while(head1 !== null && head2 !== null) {
    if(head1.val <= head2.val){
      curr.next = head1;
      head1 = head1.next;
    }else{
      curr.next = head2;
      head2 = head2.next;
    }
    
    curr = curr.next;
  }

  if(head1 !== null) curr.next = head1;
  else curr.next = head2;

  return temp.next;
}