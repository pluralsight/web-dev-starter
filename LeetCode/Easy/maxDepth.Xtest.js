const maxDepth = require('./maxDepth')

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1)
var nine = new TreeNode(9)
root.left = nine
var twenty = new TreeNode(20)
root.right = twenty
var fifteen = new TreeNode(15)
twenty.left = fifteen
var seven = new TreeNode(7)
twenty.right = seven


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
test('root = [3,9,20,null,null,15,7]', () => {
  expect(maxDepth(root)).toBe(3);
});

// Input: root = [1,null,2]
// Output: 2
var root2 = new TreeNode(1)
var two = new TreeNode(2)
root2.right = two
test('root = [1,null,2]', () => {
  expect(maxDepth(root2)).toBe(2);
});


// test('', () => {
//   expect(maxDepth()).toBe();
// });


/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2

*/