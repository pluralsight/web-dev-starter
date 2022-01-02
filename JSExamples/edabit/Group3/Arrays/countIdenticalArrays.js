//object check... if key is NOT in object(JSON.stringify)...
//add key and value of one
//other wise add one to value

//look at results for highest value
function countIdenticalArrays(arr1, arr2, arr3, arr4){
    var accObj = {}
    var accArr = []
    accArr.push(arr1, arr2, arr3, arr4)
  
    for (let i = 0; i < accArr.length; i++){
      var currentArray = JSON.stringify(accArr[i])
      if(accObj[currentArray] === undefined){
        accObj[currentArray] = 1
      } else {
        accObj[currentArray]++
      }
    }
  //return accObj
  var largest = 0
  for (let keys in accObj){
    if(accObj[keys] > largest){
      largest = accObj[keys]
    }
  }
  if(largest === 1){
    return 0;
  } else {
  return largest;
  }
  }
  
  
  
  
  
  
  console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]))
  // ➞ 2
  
  console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]))
  // ➞ 0
  
  console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]))
  // ➞ 3
  
  