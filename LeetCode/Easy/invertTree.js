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
//let root = new TreeNode(4)
// root.left = new TreeNode(2)
// root.right = new TreeNode(7)
// root.left.left = new TreeNode(1)
// root.left.right = new TreeNode(3)
// root.right.left = new TreeNode(6)
// root.right.right = new TreeNode(9)
//console.log("root =", root)

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  debugger

  if ( root.val === undefined)

  if ( root === null ) {
    return
  }
  console.log(root.val)
  //swap left and right
  let temp = root.right
  root.right = root.left;
  root.left = temp

  invertTree(root.left)
  invertTree(root.right)

  return root

};

invertTree(root)
console.log('invert =', root)

/*
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

