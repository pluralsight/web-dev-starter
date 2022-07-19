/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);
root.right.right.right = new TreeNode(8);


/**
 * @param {TreeNode} root
 * @return {number}
 */


 var deepestLeavesSum = function(root) {
  debugger

  var depth = function(root) {
    if (!root.left && !root.right ) {
      return 0
    }

    let left = root.left && depth(root.left)
    let right = root.right && depth(root.right)

    return Math.max(left, right) + 1
  }

  function sum (root, counter) {

    if(!root) {
      return 0
    }
    if ( counter === result) {
      return root.val
    }

    return sum(root.left, counter + 1) + sum(root.right, counter + 1)
  }

  result = depth(root)
  return sum(root, 0)

 }

console.log(deepestLeavesSum(root))


/*
Given the root of a binary tree, return the sum of values of its deepest leaves.
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
*/
