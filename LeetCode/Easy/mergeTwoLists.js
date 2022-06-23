/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let head1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let head2 = new ListNode(1, new ListNode(3, new ListNode(5)))
console.log(head1, head2)
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

const head = new ListNode()
let cur = head;

  while ( list1 && list2 ) {

    if( list1.val > list2.val ) {
      cur.next = list2
      list2 = list2.next
      cur = cur.next
      } else {
        cur.next = list1
        list1 = list1.next
        cur = cur.next
      }
    }
    if ( list1 ) {
      cur.next = list1
    } else {
      cur.next = list2
    }
    return head.next
};

console.log('solutions =', mergeTwoLists(head1, head2))

/*
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/