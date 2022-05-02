
/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);pmp
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

//DFS is an way of traversinga  tree that uses recursion.

/*

Specification -
  Inputs:  filter function
  Outputs:  array of results
  Constraints:
  Edge cases:
Justification -
Explanation -
Visualization - Excalidraw
Approximation -
Verification -
Implementation -

*/

//pseudoCode
//
//Create a variable to store the values of nodes visited
//Store the root of the BST in a variable called current
//Write a helper function which accepts a node
//push the value of the node to the variable that stores the values
//if the node has a left property, call the helper function with the left property on the node
//if the node has a right property, call the helper function with the righ property on the node
//invoke the helper function with the current variable
//reutn the array of values



Tree.prototype.DFSelect = function (filter) {
  //debugger
  //this.value = value
  var data = [];
  function traverse(node) {
    data.push(filter(this.root1.value, depth=null));
    for (var i = 0; i < this.root1.children.length; i++) {
      data.push(this.root1.children[i].traverse(filter(this.root1.value, depth = null)))
    }
  };
  traverse(this.root1);
  return data;
};


/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);
// root1.DFSelect(function (value, depth) {
//   return value % 2;
// })
// // [1, 5, 3, 7]