
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 function ListNode(val) {
  this.val = val;
  this.next = null
}
let head = new ListNode(3)
// head.next = new ListNode(2)
// head.next.next = new ListNode(0)
// head.next.next.next = new ListNode(-4)
//head.next.next.next.next = head.next

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  debugger
  console.log('head =', head)
  let slow = head;
  let fast = head
  while ( fast && fast.next ) {

    slow = slow.next;
    fast = fast.next.next

    if ( slow === fast ) {
      return true
    }

  }
  return false

};


console.log(hasCycle(head))
