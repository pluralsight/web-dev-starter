function assertWithinRange(low, high, actual, testName) {
    if (actual <= high && actual >= low){
      console.log(`passed`)
    } else {
      console.log('FAIL [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
    }
    // var inRange = (low <= actual) && (actual <= high);
    // if (inRange) {
    //   console.log('passed');
    // } else {
    //   console.log('FAILED [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
    // }
  }