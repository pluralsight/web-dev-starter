function diceScore(arr){
    accSum = 0;
    arr.sort((a, b) => a - b);
    var setsArray = createSets(arr);
    //iterage sets array
      //add currentScore value to sum variable
    //return sum variable.
    for(let i = 0; i < setsArray.length; i++){
      accSum += currentScore(setsArray[i].join(''))   
    } 
  return accSum  
  }
  
  function createSets(arr){
    accArr = [];
    //iterate array
      //if first, next, last are equal
        //push slice into acc array
      //otherwise
        //push slice of current into array
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2]){
        accArr.push(arr.slice(i, i+3))
        i += 2
      } else {
        accArr.push(arr.slice(i,i+1))
      }
    }  
  return accArr;
  }
  
  function currentScore(str){
    
  var scoreObj = {
   '111' : 1000,
   '666' : 600,
   '555' : 500,
   '444' : 400,
   '333' : 300, 
   '222' : 200,
    '1'  : 100,
    '5'  : 50
  }
  
  for (let nums in scoreObj){
    //console.log(nums, scoreObj[nums])
    if(str === nums){
      return scoreObj[nums]
    }
  }  
    
  return 0;  
  }
  
  /*
  
  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
  */
  
  
  
  console.log(diceScore([2, 3, 4, 6, 2]))// ➞ 0
  
  console.log(diceScore([4, 4, 4, 3, 3]))// ➞ 400
  
  console.log(diceScore([2, 4, 4, 5, 4]))// ➞ 450