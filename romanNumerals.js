function romanToNum(string) {
    var roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var num = 0;
    for (var i = 0; i < string.length; i++) {
      var currentLetter = roman[string[i]];
      var nextLetter = roman[string[i + 1]];
      console.log ('currentLetter', currentLetter);
      if (currentLetter < nextLetter) {
        num += nextLetter - currentLetter;
        i++;
      } else {
        num += currentLetter;
      }
    }
    return num;
  }
  console.log(romanToNum('MMXXI')); //2021
  console.log(romanToNum('MCMXCIX')); // 1999
  console.log(romanToNum('IV')); //4
  console.log(romanToNum('XXXIII')); //33
  console.log(romanToNum('MXM')); //33
  
  

























// Time limit 45 minutes
// Write a function romanToNum that takes in a string of Roman numerals (less than 4000) and returns the value in a number.
// https://en.wikipedia.org/wiki/Roman_numerals

// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000

var romanToNum = function(roman) {
    //iterate backwards over string of Roman Numerals
       //if number is greater than or equal to previous number
          //add it to totoal sum variable
       //else subtract it from sum
    //return sum
    var numberArray = [];
    var sum = 0;
    var currentNumber = 0;
    
    for (var i = roman.length; i >= 0; i--){
      if(roman[i] === 'I'){
        numberArray.unshift(1);
        if(currentNumber <= 1){
          sum = sum + 1;
        } else {
          sum = sum - 1;
        }
        currentNumber = 1;
      
      } else if (roman[i] === 'V'){
        numberArray.unshift(5);
        if(currentNumber <= 5){
          sum = sum + 5;
        } else {
          sum = sum - 5;
        }
        currentNumber = 5;
        console.log('sum at 5', sum)
  
      }else if (roman[i] === 'X'){
        numberArray.unshift(10);
        if(currentNumber <= 10){
          sum = sum + 10;
        } else {
          sum = sum - 10;
        }
        currentNumber = 10;
  
      } else if (roman[i] === 'L'){
        numberArray.unshift(50);
        if(currentNumber <= 50){
          sum = sum + 50;
        } else {
          sum = sum - 50;
        }
        currentNumber = 50;
  
      } else if (roman[i] === 'C'){
        numberArray.unshift(100);
        if(currentNumber <= 100){
          sum = sum + 100;
        } else {
          sum = sum - 100;
        }
        currentNumber = 100;
  
      } else if (roman[i] === 'D'){
        numberArray.unshift(500);
        if(currentNumber <= 500){
          sum = sum + 500;
        } else {
          sum = sum - 500;
        }
        currentNumber = 500;
  
      } else if (roman[i] === 'M'){
        numberArray.unshift(1000);
        if(currentNumber <= 1000){
          sum = sum + 1000;
        } else {
          sum = sum - 1000;
        }
        currentNumber = 1000;
  
      }
    }
    console.log('Number Array:', numberArray)
    console.log('Sum', sum)
    return sum;
  
  };
  
  console.log('2021:', romanToNum('MMXXI')); //2021
  console.log("1999", romanToNum('MCMXCIX')); //1999
  console.log('4', romanToNum('IV')); //4
  console.log('7', romanToNum('VII')); //4
  console.log('33', romanToNum('XXXIII')) //33
  console.log('3:', romanToNum('III') )
  