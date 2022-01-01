function mauriceWins (arr, arr2) {
    var a = arr[0] > arr2[2]
    var b = arr[1] > arr2[0]
    var c = arr[2] > arr2[1]
    
  if( (a&b) || (b&&c) || (c&&a)){
    return true
  } else {
    return false
  }
  
  }
  
  
  
  console.log(mauriceWins([3, 5, 10], [4, 7, 11])) //➞ true
  // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.
  
  console.log(mauriceWins([6, 8, 9], [7, 12, 14]))// ➞ false
  //Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.
  
  console.log(mauriceWins([1, 8, 20], [2, 9, 100]))// ➞ true
  