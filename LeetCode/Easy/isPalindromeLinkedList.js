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

// let head = new ListNode(1)
// head.next = new ListNode(2)
// head.next.next = new ListNode(3)
// head.next.next.next = new ListNode(4)

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   //iterate through list pushing values into array
   // return original === reversed

   let str = ''


   while ( head ) {
    console.log(head.val)
    str += head.val
    head = head.next
   }
   return str.split('').reverse().join('') === str

};

isPalindrome(head)
