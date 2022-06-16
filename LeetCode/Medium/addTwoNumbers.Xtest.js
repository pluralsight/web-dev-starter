// npm test
// function.js
// function.test.js

const addTwoNumbers = require('./addTwoNumbers')

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
 console.log('l1 =', l1, 'push =', l1.push);
 l1.push(2)
 l1.push(4)
 l1.push(3)
 console.log(l1)

 const l2 = new LinkedList()
 l2.push(5)
 l2.push(6)
 l2.push(4)
 console.log('l2 =', l2)

  // Input: l1 = [2,4,3], l2 = [5,6,4]
  // Output: [7,0,8]
  // Explanation: 342 + 465 = 807


test('l1 = [2,4,3], l2 = [5,6,4]', () => {
  expect(addTwoNumbers(l1, l2)).toBe(807);
});


// test('', () => {
//   expect(addTwoNumbers()).toBe();
// });


// test('', () => {
//   expect(addTwoNumbers()).toBe();
// });