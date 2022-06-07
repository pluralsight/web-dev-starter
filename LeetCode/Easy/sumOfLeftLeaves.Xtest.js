const sumOfLeftLeaves = require('./sumOfLeftLeaves')

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode()
var nine = new TreeNode(9)
root.left = nine
var twenty = new TreeNode(20)
root.right = twenty
var fifteen = new TreeNode(15)
twenty.left = fifteen
var seven = new TreeNode(7)
twenty.right = seven



test('root = [3,9,20,null,null,15,7]', () => {
  expect(sumOfLeftLeaves(root)).toBe(24);
});


var root2 = new TreeNode(1)

test('root = [1]', () => {
  expect(sumOfLeftLeaves(root2)).toBe(0);
});

var root3 = new TreeNode(1)
var two = new TreeNode(2)
root3.left = two
var three = new TreeNode(3)
two.left = three
test('root = [1, 2, null, 3, null]', () => {
  expect(sumOfLeftLeaves(root3)).toBe(3);
});

var root4 = new TreeNode(1)
var two = new TreeNode(2)
root4.left = two
var three = new TreeNode(3)
root4.right = three
var four = new TreeNode(4)
two.left = four
var five = new TreeNode(5)
two.right = five
test('root = [1, 2, 3, 4, 5]', () => {
  expect(sumOfLeftLeaves(root4)).toBe(4);
});

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2

*/