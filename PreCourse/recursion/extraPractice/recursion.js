/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

//1). identify smalles piece of data that function needs to handle
//when n gets to zero ... stop
//2). write the function to handle this case and only this case
// n === 0 , return
//3). What will make the function need to continue
// multiply number * (one less than number)
//4). Init recursion
//number * function(one less than number)
//
var factorial = function (n) {

  //edge case , n less than 0
  if (n < 0) {
    return null
  }
  //if number is zero
  //break the recursion and return 1 (multiplication)
  //else
  //multiply number by recursive (number - 1) <-- towards base case
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

//1). identify smallest piece of data that your function needs to handle
//given an array... empty array
//2). write a function to handle this case and only this case
//BASE CASE : when array length is zero
//3). identify what will make the function continue
// array is not zero
//4). Init recursion
//add current number with recursive number

//I - array
//O - number : sum of array
//C - do not mutate original array
//E - positive numbers, negative numbers, empty array return 0
var sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}




// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//1) smallest piece of data that function must handle
//array length 0
//2) write function to handle this case only
//if not array, return number
//3) how will function continue
//slice array
//4) init recursion
//send shortened array through function again


// set a case for the current input, what do you want done?
// case 1

// set a case to detect nestedness
// if nested,

//loop over the nested structure

// recursively call on all values; 

// this will send all values into this function as a new current
//input and our case(s) above would address that input~
//3, 22, 23, 24, and 37
//hasChildNodes, document.body, childNodes, classList, and classList.contains


var arraySum = function (input) {
  //debugger

  var result = 0;
  //base case
  if (!Array.isArray(input)) {
    return input
  }
  input.forEach(function (item) {
    result += arraySum(item)
  })
  return result;
};




// 4. Check if a number is even.
var isEven = function (n) {
  if (n < 0) {
    n = n * -1
  }
  //base case
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  //recursive call
  return isEven(n - 2)
};

// var isEven = function(n) {
//   if (n === 0) {
//     return true;
//   }
//   if (n < -1) {
//     return isEven(n + 2);
//   }
//   if (n < 0) {
//     return false;
//   }
//   return isEven(n - 2);
// };

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1)
  }
  if (n === 0) {
    return n;
  }
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {

  var step = (x > y) ? -1 : 1
  if (y === x || x === y + step) {
    return []
  }
  var results = []

  if (x + step === y) {
    return []
  } else {
    results = results.concat(x + step, range(x + step, y));
    return results;
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {

  //base case x^0 = 1


  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / (exponent(base, exp * -1));
  } else {
    return base * exponent(base, exp - 1)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  if (n === 0) {
    return false
  }
  if (n === 2 || n === 1) {
    return true
  }
  if (n / 2 % 2 !== 0) {
    return false
  }
  return powerOfTwo(n / 2)

};

// 9. Write a function that reverses a string.
var reverse = function (string) {

  if (string.length === 0) {
    return ''
  }
  return string[string.length - 1] + reverse(string.slice(0, -1))
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (str) {
  if (str.length === 1 || str[0] === str[1]) {
    return true
  }

  if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
    //recurse
    return palindrome(str.slice(1, -1))
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {

  if (y === 0) {
    return NaN
  }
  if (x <= 0) {
    if (y < 0) {
      y = y - y - y;
    }
    if ((x + y) > y) {
      return (x + y);
    }
    if ((x + y) > 0) {
      return x;
    }
    if (x === 0) {
      return -0;
    }
    return modulo((x + y), y)
  } else if ((x - y) < y) {
    return ((x - y) < 0 ? x : (x - y));
  }

  return modulo((x - y), y);

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {

  if (y === 0) {
    return 0;
  }
  if (y < 0) {
    return -(x - multiply(x, y + 1))
  } else {
    return x + multiply(x, y - 1)
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
  if (y === 0) {
    return NaN
  }
  if (x === 0) {
    return 0;
  }

  if (x < 0) {
    if (y < 0) {
      if (x - y < 0) {
        return 1 + divide(x - y, y);
      } else {
        return 0
      }
    }
    if (y > 0) {
      if (x < (y - y - y)) {
        return 1 + divide(x + y, y);
      } else {
        return 0;
      }
    }
  }
  if (x > 0) {
    if (x < y) {
      return 0;
    }
    return 1 + divide(x - y, y)
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  if (x < 0 || y < 0) {
    return null
  }
  if (y === 0) {
    return x
  }
  return gcd(y, x % y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
  if (str1[0] !== str2[0]) {
    return false;
  }
  if (str1.length === 0) {
    return true
  }
  return compareStr(str1.slice(1), str2.slice(1));

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {

  var arr = []
  if (str.length === 0) {
    return []
  }

  return arr.concat(str[0], createArray(str.slice(1)))

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length === 0) {
    return []
  }
  return [].concat(array[array.length - 1], reverseArr(array.slice(0, -1)));
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  var result = [value]
  if (length === 0) {
    return []
  }
  return [].concat(result, buildList(value, length - 1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
  if (n === 1) {
    return ['1'];
  }

  var fB = fizzBuzz(n - 1);

  if (n % 3 === 0 && n % 5 === 0) {
    n = 'FizzBuzz';
  }
  if (n % 3 === 0) {
    n = 'Fizz';
  }
  if (n % 5 === 0) {
    n = 'Buzz';
  }
  return fB.concat(n.toString());
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
  var counter = 0
  if (array.length === 0) {
    return 0;
  }
  counter = countOccurrence(array.slice(1), value)
  if (array[0] === value) {
    counter++
  }
  return counter;

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {

  if (array.length === 0) {
    return []
  }
  var arr = rMap(array.slice(1), callback)
  return [callback(array[0])].concat(arr)
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, target) {
  var total = 0;

  //iterate through keys
  //if current value is an object,
  //add value of recursive call to total variable
  //if current key is target
  //add one to total
  //return total


  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      total += countKeysInObj(obj[key], target);
    }
    if (key === target) {
      total++;
    }
  }
  return total;

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
  var counter = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      counter += countValuesInObj(obj[key], value);
    }
    if (obj[key] === value) {
      counter++
    }
  }
  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
    if (key === oldKey) {
      obj[newKey] = obj[oldKey]
      delete obj[oldKey]
    }
  }
  return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {

  if (n === 1) {
    return [0, 1];
  }
  if (n === 0 || n < 0) {
    return null;
  }
  if (n > 1) {
    var fib = fibonacci(n - 1)
    return fib.concat(fib[n - 2] + fib[n - 1]);
  }

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
memoize = function (func) {

  var cache = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);
    var strArgs = JSON.stringify(args);
    if (!(strArgs in cache)) {
      console.log('Calculating result', strArgs);
      cache[strArgs] = func.apply(this, arguments);
      return cache[strArgs];
    }
    console.log('Fetching from cache', strArgs);
    return cache[strArgs];
  };
};
//var nthFibo = memoize(function (n) {
var nthFibo = function (n) {
  if (n < 0) {
    return null
  }
  if (n === 1) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  if (n > 1) {
    var fib1 = nthFibo(n - 1)
    var fib2 = nthFibo(n - 2)
    return fib2 + fib1
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
  //when array length is zero
  //upercase string and create new array
  if (array.length === 0) {
    return []
  }

  return [].concat(array[0].toUpperCase(), capitalizeWords(array.slice(1)))
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
  if (array.length === 0) {
    return []
  }
  return [].concat(array[0][0].toUpperCase() + array[0].slice(1), capitalizeFirst(array.slice(1)))
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
  var total = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      total += nestedEvenSum(obj[key])
    }
    if (obj[key] % 2 === 0) {
      total += obj[key]
    }
  }
  return total
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
  var result = [];

  if (!Array.isArray(array)) {
    return array
  } else {
    for (var key of array) {
      result = result.concat(flatten(key))
    }
  }
  return result;

};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (inp, obj) {
  obj = {};
  if (inp.length === 0) {
    return {}
  }
  obj = letterTally(inp.slice(1), obj)
  if (!obj[inp[0]]) {
    obj[inp[0]] = 1;
  } else {
    obj[inp[0]]++
  }
  return obj
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
  var result = [];

  if (list.length === 1) {
    return list
  }

  var result = compress(list.slice(0, -1))
  if (result[result.length - 1] !== list[list.length - 1]) {
    result = result.concat(list[list.length - 1])
  }
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
  var result = []
  if (array.length === 0) {
    return array
  }

  result = augmentElements(array.slice(0, -1), aug)
  result = result.concat([array[array.length - 1].concat(aug)])
  return result
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
  if (array.length === 0) {
    return []
  }

  var result = minimizeZeroes(array.slice(0, -1))
  //if (result[result.length - 1] === 0) {
  if (array[array.length - 1] === 0) {
    if (result[result.length - 1] !== 0) {
      result = result.concat(array[array.length - 1])
    }
  } else {
    result = result.concat(array[array.length - 1])
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
  if (array.length === 1) {
    if (array[0] < 0) {
      array[0] *= -1
      return array
    }
    return array
  }

  var result = alternateSign(array.slice(0, -1))
  var curIt = array[array.length - 1]
  if ((array.length - 1) % 2 === 1) {
    if (curIt > 0) {
      curIt *= -1
      result = result.concat(curIt);
      return result;
    }

  } else if ((array.length - 1) % 2 === 0) {
    if (curIt < 0) {
      curIt *= -1
      result = result.concat(curIt);
      return result;
    }
  }

  result = result.concat(curIt)
  return result
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var converter = function (num) {
  var hashMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  }
  for (var key in hashMap) {
    if (key === num.toString()) {
      return hashMap[key]
    }
  }
  return num;
}

var numToText = function (input) {
  if (input.length === 0) {
    return '';
  }

  return converter(input[0]) + numToText(input.slice(1))

};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {

  var obj = {};

  for (var key in input) {
    if (typeof input[key] === 'object') {
      obj[key] = input[key]
      clone(input[key]);
    } else {
      obj[key] = input[key]
    }
  }
  return obj;

};
