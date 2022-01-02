function isDisarium(num){
    var accSum = 0;
    arr = num.toString().split('')
    for(let i = 0; i < arr.length; i++){
      accSum += (arr[i]**(i+1))
    }
    if(accSum === num){
      return true
    } else {
      return false
    }
  }
   
  //console.log(isDisarium(75))// ➞ false
  // 7^1 + 5^2 = 7 + 25 = 32
  
  //console.log(isDisarium(135))// ➞ true
  // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
  
  //console.log(isDisarium(518))// ➞ true
  
  //console.log(isDisarium(544))// ➞ false
  
  //console.log(isDisarium(8))// ➞ true
  
  console.log(isDisarium(466))// ➞ false