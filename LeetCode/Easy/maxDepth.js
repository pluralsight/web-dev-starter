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
//  var maxDepth = function(root, counter = 1, max = 0) {
//    console.log('root', root)

//    if (!root) {return 0}

//    // grab value
//    console.log(root.val)
//    console.log('counter =', counter, ', max =', max)
//   //  counter++
//    if ( counter > max ) {
//      max = counter
//    }


//    // wash
//    if(root.left) {
//      max = maxDepth(root.left, ++counter, max)
//      counter--


//    }
//    if(root.right) {
//      max = maxDepth(root.right, ++counter, max)
//      counter--

//    }

// return max


// };

const maxDepth = (root) => {
  if (!root) return 0;

  // Max left depth.
  const leftMaxDepth = maxDepth(root.left);
  // Max right depth.
  const rightMaxDepth = maxDepth(root.right);

  // Do not forget to add the root node itself.
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
};

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


console.log(maxDepth(root))

module.exports = maxDepth

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2


*/