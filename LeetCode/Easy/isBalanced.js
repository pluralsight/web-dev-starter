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


console.log('root =', root)

// working code
const isBalanced = function (root) {
  debugger

  let balanced = true

  const innerFunc = function (root) {
    if ( !root ) {
      return 0
    }

    const left = innerFunc(root.left)
    const right = innerFunc(root.right)

    if(Math.abs(left - right) > 1) {
      balanced = false
    }
    return Math.max(left, right) + 1
  }
  innerFunc(root)
  return balanced;
}


console.log(isBalanced(root))


//unknown code?


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

// let root = new TreeNode(3)
// root.left = new TreeNode(9)
// root.right = new TreeNode(20)
// root.right.left = new TreeNode(15)
// root.right.right = new TreeNode(7)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var iisBalanced = function(root, depth = 0) {
  debugger
  console.log('root =', root)
  if ( !root ) {
    return depth
  }

  let left = 0
  let right = 0

  left += isBalanced(root.left, depth + 1)
  right += isBalanced(root.right, depth + 1)
  if ( Math.abs(left - right) > 1) {
    return false
  }
  return Math.max(left, right)

};

const iiisBalanced = function (root) {
  debugger
  let balanced = true;
  let depth = 0;

  const innerFunc = function (root, depth) {

    if ( !root ) { return 0 }

    root.left && innerFunc(root.left, depth + 1)
    root.right && innerFunc(root.right, depth + 1)

    if ( Math.max(left, right) > 1 ) {
      balanced = false
    }
  }
  innerFunc(root)
  return balanced

}