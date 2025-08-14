export const hasCycly = (head) => {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

export const detectCycle = (head) => {
    let slow = head;
    let fast = head;
    let isCycle = false;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            isCycle = true;
            break;
        }
    }

    if (!isCycle) return null;

    slow = head;
    // let prev = null; // for removing the cycle.
    while(slow !== fast) {
        slow = slow.next;
        // prev = fast;
        fast = fast.next;
    }
    // prev.next = null; // if we want to break a cycle.
    return slow;
}