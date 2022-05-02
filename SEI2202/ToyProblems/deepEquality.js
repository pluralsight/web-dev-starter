/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function (apple, orange) {
  debugger
  //nested objects


  //iterate over the object
  //if object is an object
  //send back to deepEauals function

  var aplArr = Object.keys(apple)
  var orArr = Object.keys(orange)
  if (aplArr.length !== orArr.length) {
    return false
  }


  if (typeof apple[aplArr[0]] !== 'object' && typeof orange[orArr[0]] !== 'object') {
    //check to see if both are equal
    //if yes, return true
    if (apple[aplArr[0]] !== orange[orArr[0]]) {
      return false
    }
  }

  for (var key in apple) {
    if (typeof apple[key] !== 'object') {
      if (apple[key] !== orange[key]) {
        return false
      }
    } else {
      if (! deepEquals(apple[key], orange[key])) {
        return false;
      }
    }
  };
  return true;
}
//var abc = deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }); // true
var abc = deepEquals({a:1, b: {c:6, d:7}, c:1} ,   {a:1, b: {c:6, d:7}, c:1}); // false
console.log(abc)