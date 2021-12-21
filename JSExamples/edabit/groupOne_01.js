/*-
objectToArray({
    D: 1,
    B: 2,
    C: 3
  }) ➞ [["D", 1], ["B", 2], ["C", 3]]
  
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
  */

  function objectToArray (obj) {
    //create an array of obj keys
    //create an array of obj values
    //iterate over array
      //add values from each array at i to array

    var objKeysArray = Object.keys(obj);
    var objValuesArray = Object.values(obj);
    var combArray = []
    
    for (var i = 0; i < objKeysArray.length; i++){
        
        combArray.push([objKeysArray[i], objValuesArray[i]])
        
    }
    

return combArray;
}



var object = {
  likes: 2,
  dislikes: 3,
  followers: 10
}
console.log('object', object)

var result = objectToArray(object)
console.log('RESULT', result)
