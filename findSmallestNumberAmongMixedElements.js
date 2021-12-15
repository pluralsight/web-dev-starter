function findSmallestNumberAmongMixedElements (arr){
    //Description of Problem
    //Given an array of mixed elements, returns the smallest number in array
  
    //EDGE CASE
    //if given array is empty, return 0
    //if array has no numbers, return 0
    if(arr === undefined || arr.length === 0|| Array.isArray(arr) === false){
      return '';
    }
  
    //PseudoCode
    //create new array to hold number values
    //create variable to hold smallest value from new array
    //iterate over input array
      //if number value
      //push to new array
    //iterate over new array
      //if number is smaller than smallest value variable
      //set smallest value in array to smallest variable
    //return smallest variable
  
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number'){
        newArr.push(arr[i])
      }
    }
    var smallest = newArr[0];
    if (newArr.length === 0){
      return 0;
    }
    
    for(var i = 1; i < newArr.length; i++){
      if(newArr[i] < smallest){
        smallest = newArr[i]
      }
    }
    //return something?
  return smallest;
  }
  
  
  //Test Case
  var output = findSmallestNumberAmongMixedElements(['no', 'lincoln', 'numbers', 'octopus']);
  console.log(output); // --> 4
  