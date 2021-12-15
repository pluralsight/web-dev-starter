  function loopAnArrayOfArrays(arrayOfArrays) {
    // create a loop which iterates over the input array
      // create an inner loop which iterates over current inner array
        // log current element to the console
  
  //console.log(arrayOfArrays.length);
  for (var i = 0; i < arrayOfArrays.length; i++) {
    var innerArray = arrayOfArrays[i];
    for (var j = 0; j < innerArray.length; j++) {
      console.log(innerArray[j]);
    }
    //console.log('end of inner loop');
  }
  }
  //console.log('end of outer loop');
  loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
  //////////////////////////////////////////////////////////////
 
 
 
 
  function loopAnObjectOfObjects(nestedObject) {
    // create a loop which iterates over the input object
      // create an inner loop which iterates over current inner object
        // log current value to the console
  
  for (var key in nestedObject) {
    for (var innerKey in nestedObject[key]) {
      console.log(nestedObject[key][innerKey]);
    }
    //console.log('end of inner loop');
  }
  }
  loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
  //////////////////////////////////////////////////////////////

  function loopAnArrayOfObjects(arrayOfObjects) {
    // create a loop which iterates over the input array
      // create an inner loop which iterates over current inner object
        // log current value to the console
  
  for (var i = 0; i < arrayOfObjects.length; i++) {
    // we can create an 'alias' to more easily name current mutant
    var innerObj = arrayOfObjects[i];
    for (var key in innerObj) {
      console.log(innerObj[key]);
    }
  }
  }
  
  loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
  /////////////////////////
  