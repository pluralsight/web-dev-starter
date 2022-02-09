// 9, ==> "9"
// null,
// true,
// false,
// 'Hello world',
// [],
// [8],
// ['hi'],
// [8, 'hi'],
// [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
// [8, [[], 3, 4]],
// [[[['foo']]]],
// {},
// {'a': 'apple'},
// {'foo': true, 'bar': false, 'baz': null},
// {'boolean, true': true, 'boolean, false': false, 'null': null },
// // basic nesting
// {'a': {'b': 'c'}},
// {'a': ['b', 'c']},
// [{'a': 'b'}, {'c': 'd'}],
// {'a': [], 'c': {}, 'b': true}

var stringifyJSON = function (obj) {

};


console.log({ 'a': { 'b': 'c' } })




var getElementsByClassName = function (className, node = document.body) {
  debugger;

  // var nodeArray = [];
  // if (node.classList && node.classList.contains(className)) {
  //   nodeArray.push(node);
  //   //console.log(nodeArray)
  // }
  // if (node.hasChildNodes()) {
  //   for (var i = 0; i < node.children.length; i++) {
  //     nodeArray = nodeArray.concat(getElementsByClassName(className, node.children[i]));
  //   }
  // }
  // return nodeArray;
  var result = [];
  if (node.classList.contains(className)) {
    console.log(node);
    result = result.concat(node);
  }

  if (node.hasChildNodes()) {
    for (var i = 0; i < node.children.length; i++) {
      result = result.concat(getElementsByClassName(className, node.children[i]))
    }
  }
  return result;
};
//console.log(getElementsByClassName('someDiv'))






























































































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
  //debugger
  if (input.length === 0) {
    return '';
  }

  return converter(input[0]) + numToText(input.slice(1))

};
//console.log(numToText("I have 5 dogs and 6 ponies and 3 horses."))



// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
  //debugger

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
var ar1 = [1, 2, [3, 4], 5, [6, [7, [8]]], 9]
var obj1 = { a: 1, b: { bb: { bbb: 2 } }, c: 3 }
//obj2 = clone(obj1)
//console.log(obj2)
//var ar2 = clone(ar1)
//console.log(ar1)



// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
  //debugger
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
//console.log(alternateSign([2, 7, 8, 3, 1, 4]))
//console.log(alternateSign([-2, -7, 8, 3, -1, 4]))

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
  //debugger
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
//console.log(minimizeZeroes([2, 0, 0, 0, 1, 4]));
//console.log(minimizeZeroes([2, 0, 0, 0, 1, 0, 0, 4]))


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
//console.log(augmentElements([[], [3], [7]], 5));



// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
  //debugger
  var result = [];

  if (list.length === 1) {
    return list
  }

  var result = compress(list.slice(0, -1))
  //if (!(result.includes(list[list.length - 1]))) {
  if (result[result.length - 1] !== list[list.length - 1]) {
    result = result.concat(list[list.length - 1])
  }
  return result;
};
//console.log(compress([1, 2, 2, 3, 4, 4, 5, 5, 5])) // [1,2,3,4,5])
//console.log(compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]))

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (inp, obj) {
  debugger
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
//console.log(letterTally('potato'))

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
  debugger;
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
//console.log(flatten([1, [2], [3, [[4]]], 5])); // [1,2,3,4,5]



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
var obj1 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
  f: 22
};
//console.log(nestedEvenSum(obj1))




// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
// const memoize = (fn) => {
//   let cache = {};
//   return (...args) => {
//     let n = args[0];
//     if (n in cache) {
//       console.log('Fetching from cache', n);
//       return cache[n];
//     }
//     else {
//       console.log('Calculating result', n);
//       let result = fn(n);
//       cache[n] = result;
//       return result;
//     }
//   }
// }
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
var nthFibo = memoize(function (n) {
  debugger
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

});
//console.log(nthFibo(5)); // 5




// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
  //debugger
  //iterate through the object
  //if current value is an object
  //send current value to helper function
  //otherwise if current key matches oldKey
  //set value of old key to newKey
  //delete old key


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
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
//console.log(replaceKeysInObj(obj, 'y', '###'))


// 23. Write a function that counts the number of times a value occurs in an object.
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
  debugger

  //iterate through the object
  //if current value is object
  //send to helper function
  //if current value matches parameter
  //increase counter
  //return counter

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

//console.log(countValuesInObj(obj, 'r')) // 2
// countValuesInObj(obj, 'e') // 1




// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
function timesTwoo(x) {
  return x * 2;
}
var rMap = function (array, cbFunc) {
  debugger
  if (array.length === 0) {
    return []
  }
  //var arr = rMap(array.slice(1), cbFunc)
  //return [cbFunc(array[0])].concat(arr)
  var arr = rMap(array.slice(0, -1), cbFunc)
  return arr.concat(cbFunc(array[array.length - 1]))
};

//console.log(rMap([1, 2, 3, 4, 5], timesTwoo))



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

// console.log(countOccurrence([2, 7, 4, 4, 1, 4], 4));
// console.log(countOccurrence([2, 'banana', 4, 4, 1, 'banana'], 'banana'));



// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
  debugger
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
//console.log(fizzBuzz(15));



// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {

  if (n === 1) {
    return [0, 1];
  }
  if (n === 0) {
    return [0];
  }
  if (n > 1) {
    var fib = fibonacci(n - 1)
    return fib.concat(fib[n - 2] + fib[n - 1]);
  }

};
//console.log(fibonacci(5))


//count the letters in a string
var countStr = function (str) {
  debugger
  var count = 0;
  if (str.length === 0) {
    return 0
  }

  count++
  return count += countStr(str.slice(1));

}
//console.log(countStr('hello'))

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
  if (array.length === 0) {
    return []
  }
  return [].concat(array[0][0].toUpperCase() + array[0].slice(1), capitalizeFirst(array.slice(1)))
};
//console.log(capitalizeFirst(['car', 'poop', 'banana']));


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
var words = ['i', 'am', 'learning', 'recursion'];
//console.log(capitalizeWords(words))



// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
  //debugger
  //when length reaches zero
  var arr = []
  var result = [value]
  if (length === 0) {
    return []
  }
  return arr.concat(result, buildList(value, length - 1))
};
//console.log(buildList({}, 5))




// 17. Reverse the order of an array
var reverseArr = function (array) {
  //add each end of array to new array, slice remaining array
  if (array.length === 0) {
    return []
  }
  return [].concat(array[array.length - 1], reverseArr(array.slice(0, -1)));

};

//console.log(reverseArr([1, 2, 3, 4, 5]))








// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
  ////debugger
  // 8/2 ==> 8-2 = 6-2 = 4-2 = 2-2 = 0  8/2 = 4  (four #2s);

  //edge cases
  if (y === 0) {
    return NaN
  }
  if (x === 0) {
    return 0;
  }

  if (x === 0) {
    return 0
  }
  //if x is negative
  if (x < 0) {
    //if y is negative
    if (y < 0) {
      if (x - y < 0) {
        return 1 + divide(x - y, y);
      } else {
        return 0
      }
    }
    //if y is positive
    if (y > 0) {
      if (x < (y - y - y)) {
        return 1 + divide(x + y, y);
      } else {
        return 0;
      }
    }

  }
  //if x is positive
  if (x > 0) {
    if (x < y) {
      return 0;
    }

    return 1 + divide(x - y, y)
  }


};

//console.log(divide(78, 453))








// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
  //debugger
  //if each n/2 % 2 === 0 down to n = 2
  //16%2 === 0, 16/2 % 2 === 0, 16/2/2 % 2 === 0, 16/2/2/2 % 2 === 0 true
  //10%2 === 0, 10/2 % 2 !== 0 false
  if (n === 2 || n === 1) {
    return true
  }
  if (n / 2 % 2 !== 0) {
    return false
  }

  return powerOfTwo(n / 2)
}
//console.log(powerOfTwo(0))





//big flipper
var bigFlipper = function (str, n) {
  if (str.length === 0) {
    return ''
  }
  return '' + str.slice(0, n).split('').reverse().join('') + bigFlipper(str.slice(n), n);
}
var num = 5
var string = 'I am a really long string that is going to get flipped'
//console.log(bigFlipper(string, num))


var flipper = function (str) {
  debugger


  if (str.length === 0) {
    return ''
  }
  return (str[1] ? str[1] : '') + str[0] + flipper(str.slice(2))
}
//console.log(flipper('hello this is a new world'))





var modulo = function (x, y) {
  debugger
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
//console.log(modulo(22, 6))


var palindrome = function (str) {
  //if first letter and last letter are the same
  //if only one letter, true
  //if two letters of the same, true

  if (str.length === 1 || str[0] === str[1]) {
    return true
  }

  if (str[0] === str[str.length - 1]) {
    //recurse
    return palindrome(str.slice(1, -1))
  } else {
    return false;
  }


};
//console.log(palindrome('helle'))


var reverse = function (string) {
  if (string.length === 0) {
    return ''
  }
  return string[string.length - 1] + reverse(string.slice(0, -1))
};
console.log(reverse('hello'))


//print out all elements from array
var arrayElements = function (arr) {
  var str = '';
  //base case arr.length
  if (arr.length === 0) {
    return ''
  }
  console.log(arr[arr.length - 1]);

  if (arr.length) {
    str += arr[arr.length - 1] + arrayElements(arr.slice(0, -1))
  }
  return str;
}
//console.log(arrayElements([1, 2, 3, 4, 5, 6, 7, 8]))

//str += 1 + f([2, 3, 4, 5]) ==> 1 + '2345' ==> '12345'
//str += 2 + f([3, 4, 5]) ==> 2 + '345' ==> '2345'
//str += 3 + f([4, 5]) ==> 3 + '45' == > '345'
//str += 4 + f([5]); ==> 4 + '5' ==> '45'
//str += 5 + f([]) ==> 5 + '' ==> '5'
//str.length === 0, return ''



// 17. Reverse the order of an array
var reverseArr = function (array) {
  //base case
  var arr = []
  if (str.length === 0) {
    return [];
  }
  return arr.concat(array[arrary.lenth - 1], reverseArray(array.slice(-1)))
};





// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
  //base case
  if (y === 0) {
    return x
  }
  return gcd(y, x % y)
};
//console.log(gcd(15, 57))



// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function (str) {

  if (str.length === 0) {
    return []
  }
  return [].concat(str[0], createArray(str.slice(1)))
};
//console.log(createArray('Now is the time for all good men'))



// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {

  debugger
  if (x === 0) {
    return y;
  }
  return (x - y) - divide((x - y), y)

};
//console.log(divide(45, 9))




var multiply = function (x, y) {

  if (y === 0) {
    return 0;
  }
  if (y < 0) {
    // step = -1
    return -(x - multiply(x, y + 1))
  } else {
    // step = 1
    return x + multiply(x, y - 1)
  }
};
//console.log(multiply(5, -3))





// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
// var isEven = function (n) {
//   return n % 2 === 0;
// };

// var isOdd = function (n) {
//   return !isEven(n);
// };

var exponent = function (x, n) {

  //base case x^0 = 1
  if (n === 0) {
    return 1;
  }

  // //recursive case if n is negative
  if (n < 0) {
    return 1 / (exponent(x, n * -1));

  }

  return x * exponent(x, n - 1)



};
//console.log(exponent(8, -2));
// console.log(isEven(2))
// console.log(isOdd(3))






// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
  //debugger


  if (x > y) {
    step = -1
  } else {
    step = 1
  }

  var results = []

  if (x === y - step) {
    return []
  } else {
    //results.push(x)
    return results.concat(x + step, range(x + step, y));
  }

};

//console.log(range(2, 5));



var sumBelow = function (n) {
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1)
  }
  if (n === 0) {
    return n;
  }
  return (n - 1) + sumBelow(n - 1);

};

// sumBelow(10); // 45
//console.log(sumBelow(-7)); // 21

var isEven = function (n) {
  //debugger
  if (n < 0) {
    n = n * -1
  }

  //base case
  if (n === 0) {
    return true
  } else if (n === 1) {
    return false
  }
  //recursive call
  return isEven(n - 2)


};

//console.log(isEven(-11));

var testFunc = function () {
  console.log('hi')
  return (!!!1);
}
//console.log(testFunc())





var sumArray = function (arr) {

  // Your code here
  // var sum = 0;
  // for (let e of arr) {
  //   sum += e;
  // }
  // return sum;
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1))
  }
};

//var result = sumArray([10, 20, 30, 40, 50]);
//console.log(result);

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

//console.log(arraySum([1, [2, 3], [[4]], 5]))


//Example input: [1, 2, [3, [4]], 5]
//Example output [1, 2, 3, 4, 5];

var flatten2 = function (input) {
  var result = [];
  var innerFunction = function (array) {
    if (!Array.isArray(array)) {
      result.push(array);
      return;
    }
    array.forEach(function (item) {
      innerFunction(item)
    });
  };
  innerFunction(input);
  return result;
};



var flatten = function (input) {
  var result = [];
  if (!Array.isArray(input)) {
    return input;
  }
  input.forEach(function (item) {
    result = result.concat(flatten(item));
  });
  return result;
}
//console.log(flatten2([1, 2, 3, [3, [4]], 5]))


function sumRange(num) {
  if (num === 1) return 1;
  console.log(num)
  return num + sumRange(num - 1);
}
//console.log(sumRange(10))

function stepsToZero(n) {
  //debugger
  if (n === 0) {
    return 'Reached Zero'
  } else {
    console.log(n + ' is not zero');
    return stepsToZero(n - 1)
  }
}

//console.log(stepsToZero(5))


var eat = function (meal) {
  //debugger
  console.log('meal before bite:', meal);
  console.log('now eating:', meal.pop());
  if (meal.length) {
    eat(meal);
  } else {
    console.log('done with my meals!');
  }
}
//eat(['soup', 'potatoes', 'fish'])

var factorial = function (n) {

  //edge case , n less than 0
  if (n < 0) {
    return null
  }
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
//console.log(factorial(6));






















function countDown(num) {

  if (num === 0) {
    console.log('finised', num)
  } else {
    countDown(num - 1);
    console.log('#', num)
  }
}
//countDown(3)

function countDown2(num) {
  debugger
  var string = '' + num;
  if (num === 0) {
    return string;

  } else {
    string += countDown2(num - 1);
  }
  return string
}
//console.log(countDown2(3));

























// var renderFeed = function (user = home) {
//   $feed.html('');
//   var index = streams.home.length - 1;

//   while (index >= 0) {
//     var tweet = streams.home[index];
//     var $tweet = $('<div class="tweet"></div>');
//     var $message = $('<div class="message"></div>');
//     var $username = $('<div class="username"></div>');
//     var $timestamp = $('<div class="timestamp"></div><br>');

//     //profile photo
//     var imgsrc = streams.home[index].profilePhotoURL
//     $profilePhoto = $('<img>');
//     $profilePhoto.attr({ src: imgsrc, class: "profile-photo" });

//     //icons
//     faCommentIcon = "icon comment fas fa-thumbs-up fa-3x";
//     faRetweetIcon = "icon retweet fas fa-satellite-dish fa-3x";
//     faLikeIcon = "icon like fas fa-robot fa-3x";
//     faShareIcon = "icon share fas fa-rocket fa-3x";

//     $commentIcon = $('<i></i>');
//     $commentIcon.attr({ class: faCommentIcon });
//     $retweetIcon = $('<i></i>');
//     $retweetIcon.attr({ class: faRetweetIcon });
//     $likeIcon = $('<i></i>');
//     $likeIcon.attr({ class: faLikeIcon });
//     $shareIcon = $('<i></i>');
//     $shareIcon.attr({ class: faShareIcon });


//     //text updates & inputs
//     $message.text(tweet.message);
//     $username.text('@' + tweet.user);
//     $timestamp.text(jQuery.timeago(tweet.created_at))

//     //main tweet DIV
//     $tweet.appendTo($feed);
//     //sub DIVs
//     $profilePhoto.appendTo($tweet);
//     $timestamp.appendTo($tweet);
//     $username.appendTo($tweet);
//     $message.appendTo($tweet);
//     $commentIcon.appendTo($tweet);
//     $retweetIcon.appendTo($tweet);
//     $likeIcon.appendTo($tweet);
//     $shareIcon.appendTo($tweet);

//     $username.on("click", function (event) {
//       console.log(event, event.currentTarget.innerText);
//       alert("Button has been pressed " + event.currentTarget.innerText);
//       document.querySelector('button').innerText = "Back";
//       var currUser = event.currentTarget.innerText.slice(1);
//       userFeed(currUser);
//     })
//     index -= 1;
//   }
// }












































function joinArrays(user = "home") {

  console.log(user)

  var user = user === "home" ? 'home' : `users[${user}]`
  console.log(user)

  return user

}
// joinArrays()
// joinArrays("shawntheshark")





function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var accLength = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //       accLength += arguments[i].length
  //   }
  //   return accLength
  // }
  var slicedArgs = Array.prototype.slice.call(arguments, 0);

  slicedArgs.forEach(function (ele) {
    accLength += ele.length
  });
  return accLength;
}
//var result2 = getLengthOfThreeWords('one', 'two', 'threee')
//console.log(result2)


