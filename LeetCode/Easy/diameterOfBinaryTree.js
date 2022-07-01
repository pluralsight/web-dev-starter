/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.right = right === undefined ? null : right
    this.left = left === undefined ? null : left
  }
}

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)
root.right.right = new TreeNode(8)
root.right.left = new TreeNode(9)
root.right.left.left = new TreeNode(10)


//console.log('root =', root)

/**
 * @param {TreeNode} root
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  debugger
  let depth = 0;

  function innerFunc(root) {
    if ( ! root ) {
      return 0
    }
    let left = innerFunc(root.left)
    let right = innerFunc(root.right)
    depth = Math.max(depth, left + right)
    return Math.max(right, left) + 1


  }
  innerFunc(root)
  return depth
}


 var ddiameterOfBinaryTree = function(root) {
  debugger

  console.log('ROOT =', root)

  if ( !root.left || !root.right ) {
    return [root.val]
  }

  return [root.val].concat(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
  //return [].concat(diameterOfBinaryTree(root.right))

};