/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

function listBuilder(numArr) {
  let accList = new ListNode(-1);
  let tail = accList;

  for (let i = 0; i < numArr.length; i++) {
    tail = accList;

    while (tail) {
      if (!tail.next) {
        tail.next = new ListNode(numArr[i]);
        break;
      }
      tail = tail.next;
    }
  }
  return accList.next;
}

var l1 = listBuilder([9,9,9,9,9,9,9]);
var l2 = listBuilder([9,9,9,9]);

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
var addTwoNumbers = function (l1, l2) {
  debugger;
  console.log('l1 & l2 = ', l1, l2);

  let base = new ListNode(0);
  let tail = base; // helper pointer to keep base clean
  let closure = value()

  while (l1 || l2) {
    let v1 = 0, v2 = 0;

    l1 ? v1 = l1.val : v1
    l2 ? v2 = l2.val : v2

    tail.next = new ListNode(closure(v1, v2));

    // walk down street
    tail = tail.next;
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null;

  }
  var final = closure()
  if ( final ) {
    tail.next = new ListNode(final)
  }
  return base.next;
};

var value = function () {
  debugger;
  let carryOver = 0
  return function summation(v1 = 0, v2 = 0) {
    debugger

    let sum = v1 + v2 + carryOver;
    carryOver = 0  //reset for next iteration


    if (sum > 9) {
      carryOver = parseInt(sum.toString()[0]);
      return sum % 10;
    } else {
      return sum
    }
  };
};

const final = addTwoNumbers(l1, l2);

/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/




















//previous attemp below...  practice area


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
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

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

//addTwoNumbers(l1, l2)




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