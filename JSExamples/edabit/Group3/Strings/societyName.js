function societyName (arr){
    var accArr = [];
    
    for(let i = 0; i < arr.length; i++){
      accArr.push(arr[i][0])
    } 
  console.log(accArr)
  return (sortLetterArray(accArr))
  }
  
  function lowestLetterIndex(arr){
    var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var smallestVal = 26;
    var smallestLetIndex = 0;
    for (let i = 0; i < arr.length; i++){
      if(key.indexOf(arr[i]) < smallestVal){
        smallestVal = key.indexOf(arr[i])
        smallestLetIndex = i
      }    
    }
    
  return smallestLetIndex  
  }
  
  function sortLetterArray (arr) {
      var accArr = [];
    
      while(arr.length > 0){
        index = lowestLetterIndex(arr);
        accArr.push(arr[index])
        //accArr = accArr.concat(arr[index])
        arr.splice(index,1)
        //accArr.push(arr.splice(index, 1)[0])
      }
  return accArr;
  }
  
  
  
  
  console.log(societyName(["Adam", "Sarah", "Malcolm"]))// ➞ "AMS"
  
  console.log(societyName(["Harry", "Newt", "Luna", "Cho"]))// ➞ "CHLN"
  
  console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))// ➞ "CJMPRR"