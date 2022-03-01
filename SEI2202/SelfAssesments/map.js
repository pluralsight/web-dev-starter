


/**
  *
  * Implement a `map` method and any other necessary methods on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);  root1 = node
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

 var Tree = function(value) {
  this.value = value;
  this.children = [];
};

//prototype instantiation pattern
/*
Specification -
  Inputs: function
  Outputs: Output a tree structure
  Constraints:
  Edge cases:
Justification - to create a deep copy of one tree to another tree
Explanation -
Visualization - Excalidraw
Approximation -
Verification -
Implementation -
*/






Tree.prototype.map = function (mappingFunc) {
  //instantiate a new node
  //recursively iterate through all nodes in children array
    //apply function to each value in the root1 tree

     var copyNode = new Tree(mappingFunc(this.value))
     for(var i = 0; i < this.children.length; i++ ) {
       copyNode.children.push(this.children[i].map(mappingFunc));
     }
     return copyNode;
}

Tree.prototype.addChild = function (value) {
  //instantiate new Tree
  var newNode = new Tree(value)
  //push new node into the current
  this.children.push(newNode);
  //root1.children.push(newNode)
  return newNode

}

/*
(function testMap() {
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
return value * 2;
})
newTree.value // 2
newTree.children[0].value // 4
newTree.children[1].value // 6
newTree.children[0].children[1].value // 10
newTree.children[1].children[1].value // 14
root1.value // still 1

})();
*/

// Tree.prototype.map = function (cb) {

//   var newMap = new Tree(cb(this.value));
//   for (var i = 0; i < this.children.length; i++) {
//     newMap.children[i] = this.children[i].map(cb);
//   }
//   return newMap;
// }

// Tree.prototype.addChild = function(value) {

//   var child = new Tree(value);
//   this.children.push(child);
//   return child;
//   };

