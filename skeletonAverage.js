// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    // returns the average of an array of numbers
    if (numbers === undefined || numbers.length === 0 || Array.isArray === false){
      return [];
    }
    var sumForAverage = sum(numbers);
  
    // for (var i = 0; i < numbers.length; i++){
    //   sum += numbers[i];
    //}
    var average = sumForAverage/(numbers.length)
    return average
  }
  
  function sum(numbers) {
    // returns the sum of an array of numbers
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i]
    }
    return sum;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  //are equal
  function areEqual (actual, expected, testName){
    if(actual === expected){
      console.log(`Passed`)
    } else {
      console.log(`Failed ${testName} Expected ${expected} to be the same as ${actual}`)
    }
  }
  
  // TESTS CASES
  var actualTestArray = [3, 3, 4, 5, 10];
  var actualTestCase = average(actualTestArray)
  var expectedTestCase = 5
  areEqual(actualTestCase, expectedTestCase, 'Average number test.')
  
  var actualSumArray = [1, 2, 2, 2, 2, 2]
  var actualSum = sum(actualSumArray);
  var expectedSum = 11;
  areEqual(actualSum, expectedSum, `Sum number test`)