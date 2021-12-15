function getLongestWordOfMixedElements (arr){
    //Description of Problem
    //given an array of mixed types, return the longest string in array
  
    //EDGE CASE
    //if the array is empty, return empty string
    if(arr.length === 0){
      return "";
    }
    //if array contains no strings, return empty string
  
    //PseudoCode
    
    //create new array to hold values of only strings
    //iterate over the array
      //if item is a number
        //push to new array
    //set longest string variable to length of first index in new array
    //iterate over new array
      //if current word is longer than variable
        //set variable equal to current word
    //return variable of longest word
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      newArr.push(arr[i]);
    }
  }
  if(newArr.length === 0){
    return "";
  }
  
  var longestString = newArr[0];
  
  for (var i = 1; i < newArr.length; i++){
    if(newArr[i].length > longestString.length){
      longestString = newArr[i]
    }
  }
    //return something?
    return longestString
  }
  


//Test Cases
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
