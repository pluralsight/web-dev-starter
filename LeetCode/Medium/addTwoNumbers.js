/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
   while (l1.head.next) {
     //console.log('l1.val =', l1.val, 'l1.next =', l1.next)
     l1.next = l1.next
   }

};
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function LinkedList() {

  this.head = null
  this.tail = null
  this.length = 0
}



LinkedList.prototype.push = function (val) {
  var node = new ListNode(val)
  if (!this.head) {
    this.head = node
    this.tail = node
    this.length++
  } else {
    this.tail.next = node
    this.tail = node
    this.length++
   }
 }



const l1 = new LinkedList()
l1.push(2)
l1.push(4)
l1.push(3)

const l2 = new LinkedList()
l2.push(5)
l2.push(6)
l2.push(4)
console.log(l1, l2)

addTwoNumbers(l1, l2)




module.exports = addTwoNumbers


/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/