/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)
console.log('root =', root)

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  debugger

  if ( root.val > p.val && root.val > q.val ) {
    return lowestCommonAncestor(root.left, p, q)
  } else if ( root.val < p.val && root.val < q.val ) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}



 var llowestCommonAncestor = function(root, p, q) {
  debugger
  let arr = []

  if ( !root ) {
    return []
  }
  console.log('root.val =', root.val)
  arr.push(root.val)

  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  arr = arr.concat(left, right)
  console.log('arr =', arr)
  return arr
};
console.log(lowestCommonAncestor(root, 2, 4))


/*
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
*/

