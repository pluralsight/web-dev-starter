function countOnes(arr) {
    accSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for(let k = 0; k < arr[i].length; k++) {
        if(arr[i][k] === 1)
        accSum += 1
      }
    }
  return accSum
  }
  
  
  var matrix = ([
    [1, 0],
    [0, 0]
  ]) // ➞ 1
  
  var matrix2 = ([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
  ]) // ➞ 7
  
  var matrix3 = ([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
  ]) // ➞ 2
  
  
  console.log(countOnes(matrix3))
  