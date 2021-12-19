 // FUNCTION DEFINITION(S)
 function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      if (doesEveryElementMatch === false) {
        return doesEveryElementMatch;
    }
    doesEveryElementMatch = callbackFunction(array[i]);
    }
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual (actual, expected, testName){
    //create an asert function to check actual and expected results from given function
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
  
  
  // TESTS CASES
  function allOddNumber (num){
    return (num % 2) === 1;
  }
  
  
  var arr = [1, 3, 5, 7, 90];
  // console.log(allOddNumber(arr))
  
  var actualTrue = every(arr, allOddNumber)
  var expectedTrue = true;
  assertEqual(actualTrue, expectedTrue, `Should return true when all elements pass the test`)