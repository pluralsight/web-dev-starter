function identicalFilter(arr){
    //iterate over array
      //iterate over string
        //if any letters don't match
          //push into bad array
        //otherwise
          //push into good array
    //return good array
  
    var goodArr = [];
    var badArr = [];
  
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][0] !== arr[i][j]){
          badArr.push(arr[i])
          arr.splice(i,1)
          i--
          break
        } 
      }
    }
  return arr
  }
  
  
  
  
  
  console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])) 
  //➞ ["aaaaaa", "d", "eeee"]
  
  console.log(identicalFilter(["88", "999", "22", "545", "133"]))
  //➞ ["88", "999", "22"]
  
  console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) )
  //➞ []
  