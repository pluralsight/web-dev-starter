function indexMultiplier(arr){
    var accSum = 0;
    var i = 0;
  
    while(arr.length > 0){
      accSum += arr[0] * i;
      arr.splice(0,1)
      i++
    }
  
  return accSum
  }
  
  
  
  
  console.log(indexMultiplier([1, 2, 3, 4, 5]))// ➞ 40
  // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
  
  console.log(indexMultiplier([-3, 0, 8, -6]))// ➞ -2
  // (-3*0 + 0*1 + 8*2 + -6*3)
  
  