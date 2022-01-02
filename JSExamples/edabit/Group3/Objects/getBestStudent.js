function getBestStudent(obj){
    //O - key of largest number
    var bestScore = 0;
    var bestStudent = ''
    for(let keys in obj){
      obj[keys] = aveScore(obj[keys])
      if (obj[keys] > bestScore){
        bestScore = obj[keys]
        bestStudent = keys
      }
    }
    
  return bestStudent
  }
  
  function aveScore(arr){
    var accSum = 0;
    for (let i = 0; i < arr.length; i++){
      accSum += arr[i]
    }
  return accSum/arr.length
  }
  
  var result = getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
  })// ➞ "John"
  console.log(result)
  // John's avg = 90
  // Bob's avg = 83.33
  
  var result1 = getBestStudent({
    Susan: [67, 84, 75, 63],
    Mike: [87, 98, 64, 71],
    Jim: [90, 58, 73, 86]
  })// ➞ "Mike"
  console.log(result1)