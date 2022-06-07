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

function Node (val) {
  this.val = val
  this.next = null
}

 var middleNode = function(head) {
   const accArr = []
   let node = head
  while (node) {
    console.log(node.val)
    accArr.push(node.val)
    node = node.next
  }
  console.log('accArr', accArr)
 let middleIndex = Math.ceil(accArr.length/2)
 console.log('middleValue', middleIndex)
 let counter = 1;

 while (head) {
   console.log('head', head)
   if ( counter === middleIndex ) {
     console.log('you made it')
     return head
   }
   head = head.next
   counter++
 }
};

var first = new Node (1)
var second = new Node(2)
var third = new Node(3)
var fourth = new Node(4)
var fifth = new Node(5)
var sixth = new Node(6)
first.next = second
second.next = third
third.next = fourth
fourth.next = fifth
fifth.next = sixth

console.log(first)

console.log('middleNode', middleNode(first))


/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


*/