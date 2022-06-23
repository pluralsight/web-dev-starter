/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if ( head === undefined ) {return []}

  let prev = null;
  let next

  while ( next !== null ) {
    next = head.next
    head.next = prev
    prev = head
    if ( next ) {
      head = next
    }
  }
  return head
};



// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function myNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var list = new myNode(1)
list.next = new myNode(2)
list.next.next = new myNode(3)
list.next.next.next = new myNode(4)
list.next.next.next.next = new myNode(5)
reverseList(list)