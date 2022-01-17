//Given an array of 'objects' (numbers, strings, arrays or objects)
//write a function that takes two inputs:

//1. an array of data (numbers, strings, arrays, objects)
//2. Either : a) a property name
//            b) a predicate function

//The function should return an object that groups each of input arrays elements by either:

//1. Their property, given by the second input string
//2. The return value of the predicate function , invoked on the current array element

//ALWAYS ADD THIS TO YOUR CODE
//Input:
//Output:
//Constraints;
//Edge Cases:

//SAMPLE PSEUDOCODE
//declare a result object

  //iterate through the collection, for each item:
    //thing 1
    //thing 2

  //return result object
//SAMPLE PSEUDOCODE

var groupBy = function(collection, predicate) {
  if (collection.length === 0){
    return 'Uh oh, there are no items in the collection'
  }

  var groups = {};

  //if the predicate is a string
  if (typeof predicate === 'string') {

    //for each item in the collection{
    collection.forEach(function(item){
      //Determin group: look up property (predicate) in the current object
      var group = item[predicate]
      //if the group exists in the results object
      if (groups.hasOwnProperty(group)) {
        //add the current item to the group
        groups[group].push(item)

      //otherwise if the group does Not exist
      } else {
        //add the new group to results object
        groups[group] = []
        //add current item to new group
        groups[group].push(item)
      }
    });
  }

  //if the predicate is a function
  if (typeof predicate === 'function') {
    //invoke predicate function with current item in collection
    collection.forEach(function(item){
      var group = firstLetter(item)
    //if the group exists in the results object
      if (groups.hasOwnProperty(group)) {
      //add the current item to the group
      groups[group].push(item)

    //otherwise if the group does Not exist
      } else {
      //add the new group to results object
      groups[group] = [];
      //add current item to new group
      groups[group].push(item)
      }


    });
  }

return groups
}






//Sample Invocation

var firstLetter = function (word) {
  return word.charAt(0)
};

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));
//returns { 'a' : ['apple'], 'c' : ['cat', 'card'], 'b' : ['boat', 'bond']}

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));
//returns { '5' : ['apple'], '4' : ['boat', 'card', 'bond'], '3' : ['cat']}

