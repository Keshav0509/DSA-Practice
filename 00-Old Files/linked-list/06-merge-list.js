export const mergeTwoSortedList = (head1, head2) => {
    if(head1 === null || head2 === null) {
        return head1 === null ? head2 : head1;
    }

    if (head1.val <= head2.val) {
        head1.next = mergeTwoSortedList (head1.next, head2);
        return head1;
    } else {
        head2.next = mergeTwoSortedList (head1, head2.next);
        return head2;
    }
}