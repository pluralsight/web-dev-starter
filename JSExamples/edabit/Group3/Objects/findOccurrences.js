function findOccurrences(str, target){
    //I- string of words
    //O- Object with each words as key
         //value is number of targets in word
    str = str.toLowerCase().split(' ');
    accObj = {};
    //iterate over the array
    //add word to object with value from helper
    //return object
    
    for(let i = 0; i < str.length; i++){
      accObj[str[i]] = numLet(str[i], target.toLowerCase())    
    }
  return accObj
  }
  
  function numLet (str, target){
    //I-string
    //O-number of target letters
    var accSum = 0;
    str = str.split('')
    
    for (let i = 0; i < str.length; i++){
      if(target === str[i]){
        accSum++
      }
    }
  return accSum
  }
  
  //console.log(findOccurrences("Hello World Hello", "o"))
  console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"))
  