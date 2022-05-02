/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  debugger
  if (number < 10){
    return number;
  }
  var digit, result = 0;

  while(number){
    digit = number % 10 //get the right digit
    result = (result * 10) + digit
    number = number/10 || 0
    number = Math.trunc(number)
  }
  return result;

}

console.log(reverseInteger(123))


