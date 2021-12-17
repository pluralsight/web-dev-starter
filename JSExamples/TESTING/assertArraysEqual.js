//Testing
//
//assertArraysEqual
//actual - array of scalar values created by function we are testing
//expected - array of scalar values, theoretical result of calling function
//testName - string describing what we are verifying


function assertArraysEqual(actual, expected, testName) {
    var areEqualLength = actual.length === expected.length;
  
    var areEqualItems = true;
    for (var i = 0; i < expected.length; i++) {
      if (expected[i] !== actual[i]) {
        areEqualItems = false;
        break;
      }
    }
  
    if (areEqualLength && areEqualItems) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
  }
    

  