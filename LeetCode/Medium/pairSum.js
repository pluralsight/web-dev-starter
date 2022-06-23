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
const head = new ListNode(4, new ListNode(2, new ListNode(2, new ListNode(3))))


/**
 * @param {ListNode} head
 * @return {number}
 */
 var pairSum = function(head) {
  let arr = []
  let maxPair = 0
  let pair;

  while ( head ) {
    arr.push(head.val)
    head = head.next
  }
   for ( let i = 0; i <= arr.length/2; i++ ) {
    pair = arr[i] + arr[arr.length - 1 - i]
    maxPair = Math.max(pair, maxPair)
   }
   return maxPair
};

pairSum(head)

/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6.

*/