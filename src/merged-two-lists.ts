class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val: number, next: ListNode | null = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
  
      current = current.next!;
    }
  
    if (l1 !== null) {
      current.next = l1;
    } else {
      current.next = l2;
    }
  
    return dummy.next;
  }
  
  function printList(head: ListNode | null): void {
    let current = head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
  
  let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  
  let mergedList = mergeTwoLists(list1, list2);
  
  printList(mergedList);
  