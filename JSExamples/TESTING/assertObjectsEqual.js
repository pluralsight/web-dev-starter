//Testing
//
//assertObjectsEqual

//actual - object with scalar values from function we are testing
//expected - oject with scalar values - theoretical result of calling function
//testName - string should describe what we are verifying



function assertObjectsEqual(actual, expected, testName) {
    
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if(actual === expected){
      console.log(`passed`);
    } else {
      console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
  }