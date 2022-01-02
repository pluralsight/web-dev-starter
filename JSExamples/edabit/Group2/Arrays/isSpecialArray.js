function isSpecialArray(arr) {
    //even index has even number
    //odd index has odd number
  
    //iterate down array
      //if index is even
        //if number is odd
          //return false
      //otherwise
        //if number is even
          //return false
    //return true - made it all the way through with no false
  
    for (let i = 0; i < arr.length; i++) {
      if(i % 2 === 0) {
        if (arr[i] % 2 === 1){
          return false;
        }
      } else {
        if(arr[i] % 2 === 0){
          return false;
        }
      }
    }
  return true;
  }
  
  
  
  
  console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]))// ➞ true
  // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
  
  console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]))// ➞ false
  // // Index 2 has an odd number 9.
  
  console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]))// ➞ false
  // // Index 3 has an even number 8.
  
  