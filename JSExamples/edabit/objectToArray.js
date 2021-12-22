 /*-
// objectToArray({
//     D: 1,
//     B: 2,
//     C: 3
//   }) ➞ [["D", 1], ["B", 2], ["C", 3]]
  
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10
//   }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
//   */

function objectToArray (obj) {
  //create an array of obj keys
  //create an array of obj values
  //iterate over array of keys 
    //add values from each array at i to array

  var objKeysArray = Object.keys(obj);
  var objValuesArray = Object.values(obj);
  var accumArray = []
  
  for (var i = 0; i < objKeysArray.length; i++){
      
      accumArray.push([objKeysArray[i], objValuesArray[i]])
      
  }
  
return accumArray;
}



var object = {
likes: 2,
dislikes: 3,
followers: 10
}

// console.log('object', object)
// var result = objectToArray(object)
// console.log('RESULT', result)


function assertArraysEqual(actual,expected,testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  //actual === expected will not work with arrays
  var isLengthEqual = true;
  if(actual.length !== expected.length){
      isLengthEqual = false;        
  }

  var isEqualItems = true;
  //iterate through outer array
  for(var i = 0; i < actual.length; i++){
    //JSON stringify each individual array
    //iterate through inner array
    for(var j = 0; j < actual[i].length; j++){
      //check each value for equality
      if(actual[i][j] !== expected[i][j])
      //if not equal return false and break
      isEqualItems = false;
      break;
    }
  }
  //check both length and values for equality
  if(isLengthEqual && isEqualItems){
      console.log(`Passed`)      
  } else {
      console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`)
  }

}

actual1 = objectToArray(object)
expected1 = [["likes", 2], ["dislikes", 3], ["followers", 10]]
assertArraysEqual(actual1, expected1, "both arrays should be equal")