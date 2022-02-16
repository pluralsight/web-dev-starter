// Write a function, persistence, that takes in a positive parameter num and returns
//its multiplicative persistence, which is the number of times you must multiply
//the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

var persistence = function (num, counter = 0) {

  if (num < 10) {
    return counter;
  } else {
    counter++
    return persistence(num.toString().split('').reduce(function (acc, el) {
      return acc * el
    }), counter)
    return counter
  }
}

var persistence = function (num, counter = 0) {
  //debugger

  if (num < 10) {
    return counter;
  } else {
    counter++
    //build an array of digits using map
    // numArray = num.toString().split('').map(function (el) {
    //   return Number(el)
    // });
    //reduce each element to a solution
    //   return persistence(numArray.reduce(function (acc, el) {
    //     return acc * el
    //   }), counter)
    // }
    // return counter


    return persistence(num.toString().split('').reduce(function (acc, el) {
      return acc * el
    }), counter)
    return counter

    //total = 1;
    //str = num + ''
    // for (i = 0; i < str.length; i++) {
    //   total *= parseInt(str[i], 10)
    // }
    //return persistence(total, counter)
  }
}
console.log(persistence(999))