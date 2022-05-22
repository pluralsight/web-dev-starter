/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

 function Node(val, children) {
  this.val = val;
  this.children = []
}

var preorder = function(root) {
  debugger

  // pure recursion

  // is root a truthy value?

  if (!root) {
    return //end this executaion context
  }

  // otherwise, store the current node value

  let result =[]
  result.push(root.val)

  //recursively call on each child node
  if (root.children.length){
    for (let i = 0; i < root.children.length; i++ ) {
      result = result.concat(preorder(root.children[i]))
    }
  }
  return result
}



var root = new Node(1)
var nodeThree = new Node(3)
var nodeFive = new Node(5)
nodeThree.children.push(nodeFive)
var nodeSix = new Node(6)
nodeThree.children.push(nodeSix)
root.children.push(nodeThree)
var nodeTwo = new Node(2)
root.children.push(nodeTwo)
var nodeFour = new Node(4)
root.children.push(nodeFour)

console.log(preorder(root))


//preorder([1,null,3,2,4,null,5,6])



/*
Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

*/
