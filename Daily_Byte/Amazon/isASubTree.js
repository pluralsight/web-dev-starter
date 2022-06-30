class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.right = right === undefined ? null : right
    this.left = left === undefined ? null : left
  }
}

var s = new TreeNode(7)
var t = new TreeNode(7)
s.left = new TreeNode(8)
t.left = new TreeNode(8)

s.right = new TreeNode(3)
t.right = new TreeNode(3)

const isASubTree = function (s, t) {
  debugger

  let isCopy = true
  const innerFunc = function (s, t) {
    if ( !s && !t ) {
      return
    } else if ( !s || !t ) {
      isCopy = false
      return
    }

    console.log('s =', s.val, 't =', t.val)
    if ( s.val !== t.val ) {
      isCopy = false
    }

    isCopy && innerFunc(s.left, t.left)
    isCopy && innerFunc(s.right, t.right)


  }
  innerFunc(s, t)
return isCopy
}
isASubTree(s, t)

/*
This question is asked by Amazon. Given two trees s and t return whether or not t is a subtree of s.
Note: For t to be a subtree of s not only must each node’s value in t match its corresponding node’s value in s, but t must also exhibit the exact same structure as s. You may assume both trees s and t exist.

*/