// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      newArray.push(callbackFunction(array[i]));
      //newArray = newArray + callbackFunction(array[i])
    }
  
    return newArray;
  }
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n * n * n;
    });
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertArraysEqual(actual, expected, testName){
    var areEqualLength = actual.length === expected.length;
  
    var areEqualItems = true;
    for (var i = 0; i < expected.length; i++){
      if(expected[i] !== actual[i]){
        areEqualItems = false;
        break;
      }
    }
  
    if(areEqualLength && areEqualItems){
      console.log(`passed`)
    } else {
      console.log("FAILED [" + testName + "] Expected " + expected + ", but got " + actual)
    }
    
  
  }
  
  // TESTS CASES
  var cubeAllTestArray = [1, 2, 3, 4];
  var actualCubeAllTest = cubeAll(cubeAllTestArray);
  var expectCubeAllTest = [1, 8, 27, 64];
  assertArraysEqual(actualCubeAllTest, expectCubeAllTest, 'should cube all elements and return results in an array');
  