function findShortestWordAmongMixedElements (arr){
    //Description of Problem
    //Given an array, returns the shortest STRING within the array
  
    //EDGE CASE
    //if there are ties, return the first case in the array
    //expect array to have different types of values
    //if array is empty, return empty string
    //if array has no strings, return empty string -- natural case
    if(arr === undefined || arr.length === 0|| Array.isArray(arr) === false){
      return '';
    }
    //PseduoCode
    //create an empty strings ARRAY to hold array of strings
    //create a variable to hold shortest STRING element and set to really big number
    //iterate over the array
      //if curent value is a string AND length is less than current shortest variable
        //set to current shortest variable
    //return shortest STRING variable
  
  var strings = [];
    
  for( var i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string"){
      strings.push(arr[i]);
      console.log ('strings', strings)
      }
    }
  
    if (strings.length === 0){
      return "";
  
    }
  
  var shortestWord = strings[0]
  for (var i = 1; i < strings.length; i++){
    if (strings[i].length < shortestWord.length){
      shortestWord = strings[i];
    }
  }
      //return something?
    return  shortestWord;
  }
  
  //Test Case
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three', 'yo']);
console.log(output); // --> 'two'

var output = findShortestWordAmongMixedElements();
console.log(output); // --> 'two'
