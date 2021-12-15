function sumDigits (num){
    //check if num is negative
    //drop the negative sign
    var inputIsNegative = false;
  if (num < 0){
    num = Math.abs(num)
    inputIsNegative = true;
  }
    var total = 0;
    var numString = num.toString();
  
    var firstValue = Number(numString[0])
  
    for (var i = 0; i < numString.length; i++){
      total += Number(numString[i]);
    }
  
    //if input is negative
  if (inputIsNegative){
    total = total - (2 * firstValue)
    return total;
  }else {
    return total;
  }
  }
  //test case
  
  var output = sumDigits(1148);
  console.log(output); // --> 14
  
  var output = sumDigits(-316);
  console.log(output); // --> 4
  
  