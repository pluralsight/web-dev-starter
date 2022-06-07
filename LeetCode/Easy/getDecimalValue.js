/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

function Node (val) {
  this.val = val
  this.next
}


 var getDecimalValue = function(head) {

    let accStr = ''

    while ( head ) {
      accStr += head.val
      console.log(accStr)
      head = head.next
    }
    return parseInt(accStr, 2)
};

var first = new Node(1)
var second = new Node(0)
var third = new Node(1)
first.next = second
second.next = third

console.log(first)

console.log(getDecimalValue(first))



module.exports = getDecimalValue


/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Input: head = [0]
Output: 0

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

*/