

/*
This question is asked by Facebook. Given the root of a binary tree and two values low and high return the sum of all values in the tree that are within low and high.

Ex: Given the following tree where low = 3 and high = 5…

DFS to collect all the values and push into array
inner fuction
then sum up between low and high

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

console.log('root =', root)



const within = function (root, low, high) {
  debugger
  let result = []

  const innerFunc = function(root) {

    result.push(root.val)

    root.left && innerFunc(root.left)
    root.right && innerFunc(root.right)

  }
  innerFunc(root)
  return result.sort((a, b) => a - b).filter(x => low <= x && x <= high).reduce((sum, num) => sum += num)
}

console.log(within(root, 1, 4))


