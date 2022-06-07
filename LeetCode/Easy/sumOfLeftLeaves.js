/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root, isLeft = false) {
   console.log('root =', root)

if(!root) {return 0}
  let sum = 0;

  // is a left branch and a leaf
  // a leaf has null children
  if(isLeft  && !root.left && !root.right) {
    sum += root.val
  }

  sum += sumOfLeftLeaves(root.left, true)
  sum += sumOfLeftLeaves(root.right)

  return sum
};


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var root4 = new TreeNode(1)
var two = new TreeNode(2)
root4.left = two
var three = new TreeNode(3)
root4.right = three
var four = new TreeNode(4)
two.left = four
var five = new TreeNode(5)
two.right = five

console.log('sumOfLeftLeaves =', sumOfLeftLeaves(root4))


module.exports = sumOfLeftLeaves