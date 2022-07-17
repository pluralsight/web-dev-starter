var revStr = function (str) {
  let accStr = ''

  for (let i = str.length - 1; i >= 0; i-- ) {
    accStr += str[i]
  }

  return accStr;
}

console.log(revStr("Hello World !"))











// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var commonChars = function (words) {
//   let accArr = [];

//   let baseObj = {}

//   for ( let i = 0; i < words[0].length; i++ ) {
//     baseObj[words[0][i]] = (baseObj[words[0][i]] || 0) + 1
//   }

//   //base object complete
//   // scan remaining words for matching letters

//   for ( let letter in baseObj ) {
//     console.log('letter =', letter, baseObj)
//     for (let i = 1; i < words.length; i++ ) {
//       if ( words[i].includes(letter) )
//     }
//   }

//   // let obj = _.reduce(words[0],(acc, ea) => {
//   //     acc[ea] = acc[ea] || 0;
//   //     // acc[ea]++
//   //     return acc;
//   //   },
//   //   {}
//   // );


// };

// const words = ["bella","label","roller"]
// commonChars(words)

/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
{ b: 1, e: 1, l: 2, a: 1 }
{ b: 1, e: 1, l: 2, a: 1 }
{ r: 2, e: 1, l: 2, o: 1 }

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
*/

let Person = function (firstName, lastName) {
  this.silly = firstName;
  var fullName = firstName + ' ' + lastName + ' ' + this.silly;

  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return fullName;
  };
};

let aPerson = new Person('John', 'Smith');
let bPerson = new Person('Sarah', 'Martins');

// console.log(aPerson.getFirstName())
// aPerson.silly = "Silly"
// console.log(aPerson.getFirstName())

// aPerson.firstName = "NotWorking";

// console.log(aPerson.firstName);
// //debugger
// console.log(aPerson.getFullName());
// console.log(aPerson.silly)

//const target = {}
const source = { a: 1, b: 2, c: 3 };
const target = { ...source, z: 10 };

//const newTarget = Object.assign(target, source)
source.d = 4;
//newTarget.f = 6

// console.log('target =', target);
// console.log('source =', source);

//console.log('newTarget =', newTarget)

// Single Linked List

//insertion, removal, traversal methods

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null;
//   }
// }

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      console.log(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  reverse() {
    debugger;
    // swap the head and the tail
    // create variable called next
    // create variable called prev
    // create a variable called node and initialize it to the head property
    // loop through the list
    // set next to be the property on the node to be whatever prev is
    // set prev to be the value of the node variable
    // set node variable to be the value of the next variable

    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    let counter = 0;
    //for (let i = 0; i < this.length; i ++ ) {
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
      counter++;
      console.log(counter);
    }
    print(this);
    return this;
  }

  recursionRev() {
    //debugger
    var currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    function innerFunc(node, parent) {
      let result = parent || {};

      if (node) {
        let child = node.next;
        node.next = parent;
        result = innerFunc(child, node);
      }
      return result;
    }
    return innerFunc(currentNode);
  }

  traverse(val) {
    var counter = 0;
    var current = this.head;
    while (current) {
      console.log('current', current);
      current = current.next;
      counter++;
    }
    return `Number of nodes ${counter}`;
  }

  reverseByLength(val) {
    console.log(val);

    // var end;
    // var node = this.head
    // for (let i = 0; i < val - 1; i++) {
    //   console.log(node.next)
    //   node = node.next
    //   end = node
    //   console.log('end', end)
    // }

    // var tempHead = end.next
    // console.log('tempHead', tempHead)
    //link up tempHead
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}
// var linky = new singlyLinkedList()
// linky.push(10)
// linky.push(20)
// linky.push(30)
// linky.push(40)
// linky.push(50)
// //console.log(linky.reverse())
// console.log(linky.recursionRev())

/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  //debugger
  // set up a largets variable
  //iterate over array
  //iteratae over array, starting at i + 1
  //iterate over array, starting at i + 2
  //check against lartest variable

  let greatest = 0;
  let product = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        product = array[i] * array[j] * array[k];
        if (product > greatest) {
          greatest = product;
        }
      }
    }
  }
  return greatest;
};

// const res = largestProductOfThree([2, 1, 3, 7])
// console.log(res)

// var Range = function(start, end = start, step = 1) {

//   debugger

//   this.accArr = []
//   for (let i = start; i >= end; i += step) {
//    this.accArr.push(i)
//   }
//   console.log(this.accArr)
//   //return this.accArr;
// };

// Range.prototype.size = function () {
//   return (this.accArr).length
// };

// Range.prototype.each = function (callback) {
//   let accArr = [];
//   for (let i = 0; i < this.accArr; i++ ) {
//     accArr.push(callback(i))
//   }
//   return accArr;

// };

// Range.prototype.includes = function (val) {
//   return _.some(this.accArr, (each) => each === val)
// };

// var range = new Range(10, 0, -1);

// doesthiswork = () => {

//   const first = ['a', 'b', 'c', 'd', 'f']
//   const second = ['x', 'y', 'z', 'a', 'f', 'z']
//   const accArr = []

//   _.each(first, (feature1, index1, array1) => {
//     _.each(second, (feature2, index2, array2) => {
//       if (feature1 === feature2) {
//         console.log('A MATCH');
//         accArr.push(feature2)
//         array2.splice(index2, 1)
//         array1.splice(index1, 1)
//       }
//     });
//   });
//   console.log('first', first)
//   console.log('second', second)
//   console.log('accArr', accArr)
// }

// doesthiswork()

/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSett = function (str, pre = [], set = []) {
  debugger;
  str;
  //basecase for recursion
  if (str.length === 0) {
    return;
  }

  for (let i = 0; i < str.length; i++) {
    //if a prefix comes through, concatenate value
    set.push(pre.concat(str));
    //call function recursively removing values at or before i and adding value at i to pre
    powerSet(str.slice(i + 1), pre.concat(str[i]), set);
  }
  return set;
};

var powerSet = function (str) {
  //debugger
  let char = {};

  for (let i = 0; i < str.length; i++) {
    char[str[i]] = true;
  }

  let charArr = Object.keys(char);
  let result = [''];

  for (let i = 0; i < charArr.length; i++) {
    // 💡 define the array length here to avoid an infinite loop
    // len = 1 --> 2 --> 4
    let len = result.length;

    for (let j = 0; j < len; j++) {
      result.push(result[j] + charArr[i]);
    }
  }
  return result;
};
//console.log(powerSet('jump'))

var makeChange = function (total) {
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];
  counter = 0;

  var recursion = (sum, idx) => {
    if (sum === total) {
      counter++;
    }
    if (sum <= total) {
      for (var i = idx; i < coins.length; i++) {
        recursion(coins[i] + sum, i);
      }
    }
  };

  recursion(0, 0);
  return counter;
};

/*
n = n || 3;
var accArr = [];

var recFunc = function (str) {
  str = str || '';
  if (str.length === n) {
    accArr.push(str);
    return;
  }
  ['R', 'P', 'S'].forEach(function (el) {
    recFunc(str + el)
  });
}
recFunc()
return accArr;
}

*/

/*
 * Each number key on a standard phone keypad has a set of Latin letters written on
 * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
 *
 * Businesses often try to come up with clever ways to spell out their phone number
 * in advertisements to make it more memorable. But there are a lot of combinations!
 *
 * Write a function that takes up to four digits of a phone number, and
 * returns a list of all of the words that can be written on the phone with
 * that number. (You should return all permutations, not only English words.)
 *
 * Example:
 *   telephoneWords('2745');
 *   => ['APGJ',
 *        'APGK',
 *        'APGL',
 *        ..., // many many more of these
 *        'CSIL']
 *
 * Tips:
 *   - Phone numbers are strings! (A phone number can start with a zero.)
 *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
 *   - Don't return every combination of those digits in any order, just the order given.
 *
 *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
 *  Why not filter your results to only return words contained in that file?
 *
 */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

//return array of all possible characters

var telephoneWords = function (digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  //debugger
  //recursively call the letters
  //2745

  //2 ABC
  //7 PQRS
  //4 GHI
  //5 JKL
  // [APGJ, APGK, APGL, ...., CSIL]

  //helper function

  var getChars = function (num) {
    for (var key in phoneDigitsToLetters) {
      if (key === num) {
        return phoneDigitsToLetters[key];
      }
    }
  };

  var accArr = [];
  var str = digitString.toString();
  str = str.split('');

  for (var i = 0; i < str.length; i++) {
    accArr.push(getChars(str[i]).split(''));
  }
  console.log(accArr);

  var combos = [];

  debugger;
};

// var phoneDigitsToLetters = {
//   0: '0',
//   1: '1',
//   2: 'ABC',
//   3: 'DEF',
//   4: 'GHI',
//   5: 'JKL',
//   6: 'MNO',
//   7: 'PQRS',
//   8: 'TUV',
//   9: 'WXYZ'
// };
// var telephoneWords = function(digitString) {
//   var resultsArr = [];
//   var innerFunc = function (digitsLeft, wordSoFar) {
//     if (digitsLeft > 0) {
//       for (var i = 0; i < phoneDigitsToLetters[digitsLeft[0]].length; i++) {
//         innerFunc(digitsLeft.slice(1), wordSoFar + phoneDigitsToLetters[digitsLeft[0]][i])
//       }
//     } else {
//       resultsArr.push(wordSoFar)
//     }
//   }
//   innerFunc(digitString, '')
//   return resultsArr;
// }

//   n = n || 3;
// var accArr = [];

// var recFunc = function (str) {
//   str = str || '';
//   if (str.length === n) {
//     accArr.push(str);
//     return;
//   }
//   ['R','P','S'].forEach(function (el) {
//     recFunc(str + el)
//   });
// }
// recFunc()
// return accArr;
// }

//};

//telephoneWords(2745);

// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

function robotVac(arr) {
  debugger;
  arr = arr.split('');
  var accObj = {};

  for (var i = 0; i < arr.length; i++) {
    accObj[arr[i]] = accObj[arr[i]] || 0;
    accObj[arr[i]]++;
  }
  if (accObj['L'] === accObj['R'] && accObj['U'] === accObj['D']) {
    return true;
  } else {
    return false;
  }
}

function robotVac2(arr) {
  //debugger
  var accObj = {};

  arr.split('').forEach(function (el) {
    accObj[el] = accObj[el] || 0;
    accObj[el]++;
  });
  return accObj;
}

// {
// L : 4,
// R : 4,
// U : 2,
// D : 2
// }

//robotVac(['LR')
//robotVac("RUULLDRD")
//console.log(robotVac2("URURD"))

//the following functions act asynchronously
/*
const getFirstName = () => {
  let firstName = "pending";
  setTimeout(() => {
    firstName = "Peter";
  }, 2000);
};

const getLastName = () => {
  let lastName = "pending";
  setTimeout(() => {
    lastName = "Parker";
  }, 1000);
}

//The functions return nothin
const myName = getFirstName();
console.log(myName); //undefined


const getFirstNameCB = (callback) => {
  let firstName = 'pending';

  setTimeout(() => {
    firstName = "Pepper";
    callback(firstName);
  }, 2000);
}

getFirstNameCB((firstName) => {
  console.log(firstName)
});

const getFirstNamePromise = () => {
  return new Promise((resolve, reject) => {
    let firstName = 'pending';

    setTimeout(() => {
      firstName = "Porky";
      //resolve(firstName);
      //throw new Error('An error occurred!');
      resolve(firstName);
    }, 3000)

  })
}

const firstNamePromise = getFirstNamePromise();

firstNamePromise.then((firstName) => {
  console.log(firstName) //Porky
})
.catch((err) => {
  console.log(err); //An error occurred!
});

*/

/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  var copyStr = string;
  string = string.split('');
  //copyStr = copyStr.split('')
  var currentLetter;

  while (string.length) {
    currentLetter = string[0];
    string.splice(0, 1);
    if (string.indexOf(currentLetter) > -1) {
      while (string.indexOf(currentLetter) > -1) {
        string.splice(string.indexOf(currentLetter), 1);
      }
    } else {
      return currentLetter;
    }
  }
  return null;
};

//var teststr = 'someteststringz'
var teststr = 'AACBDBC';
//console.log(firstNonRepeatedCharacter(teststr))

var isPrime = function (num, fc) {
  debugger;
  //recursion
  //base case
  if (num === 1) {
    return true;
  }

  //var isP = true;
  var isP = isPrime(num - 1);
  if (isP) {
    return (isP = fc % num !== 0);
  } else {
    return (isP = false);
  }
};

var issPrime = function (num) {
  //debugger

  var isP = true;
  var ap = num;

  function innerFucn(ap) {
    if (ap === 2) {
      return true;
    }
    if (isP) {
      isP = num % (ap - 1) !== 0;
    } else {
      isP = false;
    }
    innerFucn(ap - 1);
    //return isP
  }
  innerFucn(ap);
  return isP;
};

/*
for (var i = 9; i < 120; i++ ) {
  console.log(issPrime(i))
}
*/

var characterFreq = function (str) {
  //debugger
  const accObj = {};

  str.split('').forEach(function (el) {
    if (accObj[el]) {
      accObj[el]++;
    } else {
      accObj[el] = 1;
    }
  });

  var hi = 0;
  var hiObj = {};
  for (var key in accObj) {
    if (accObj[key] > hi) {
      hi = accObj[key];
      hiObj = {
        [key]: accObj[key],
      };
    }
  }
  return hiObj;
};

var tttt = characterFreq('i am some string');
//console.log(tttt)

// var mergeSort = function(array) {

//   // Your code here.
//   //base case when array.length <= 1
//   //break up the array into halves until you have arrays that are empty or one element
//   //once you have smaller sorted arrays, merge those arrays with the other sorted
//     //arrays until you are back at the full length of the array
//   //once the array has been merged back together, return the merged (and Sorted!) array

//   //Math.floor(arr.length/2)
//   //array.slice from 0 to midpoint
//   //array.slice from midpoint
//   if (array.length <= 1) return array;

//   let mid = Math.floor(array.length/2)
//   let left = mergeSort(array.slice(0, mid));
//   let right = mergeSort(array.slice(mid));
//   return merge(left, right);

// };

// //assume two arrays are sorted
// //[1, 10, 50], [2, 14, 99, 100]
// //create an empty array

// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while(i < arr1.length && j < arr2.length) {
//     if(arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while(i < arr1.length) {
//     results.push(arr1[i])
//     i++;
//   }
//   while(j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

// console.log(mergeSort([10,24, 76, 73]))

var insertionSort = function (arr) {
  //start by picking the second element in the array
  //compare the second element with the one before it
  //swap if necessary
  //continue to the next element and if it is in the incorrect order
  //iterate through the sorted portion (the left side) to place the element in the correct position
  //repeat until array is sorted.

  var currentVal;
  for (i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j].value > currentVal.value; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }

  return arr;
};

//console.log(insertionSort([{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]))   //4

// var currentVal;
//   for (i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j]
//       console.log(arr)
//     }
//     arr[j+1] = currentVal
//   }

//     return arr;

// function diamond(n) {

//   if (n % 2 === 0) {
//     return null;
//   }
//   str = ''
//   for (i = 0; i < n + 1; i++) {
//     if (i % 2 === 1) {
//       for (j = 0; j < i; j++ ) {
//         str += '*'
//       }
//     str += '\n'
//     }
//   }
//   return str
// }

// var res = diamond(5)
// console.log(res)

// var Horse = function(name) {
//   this.name = name;

// };

// Horse.prototype.goSomewhere = function(destination) {
//   return this.name + ' is galloping to ' + destination + '!';
// };

// var FlyingHorse = function(name, color) {
//   Horse.call(this, name);
//   this.color = color;
// };

// FlyingHorse.prototype = Object.create(Horse.prototype);
// FlyingHorse.prototype.constructor = FlyingHorse;

// // FlyingHorse.prototype.oldGoSomewhere = function (destination) {
// //      Horse.prototype.goSomewhere.call(this, destination)
// // }

// FlyingHorse.prototype.oldGoSomewhere = Horse.prototype.goSomewhere
// FlyingHorse.prototype.goSomewhere = function(destination, milesToDestination) {
//   if (milesToDestination < 10) {
//     return this.oldGoSomewhere.call(this, destination);
//   } else {
//     return this.name + ' is flying to ' + destination + '!';
//   }
// }

// /**
//  * Write a stack using your preferred instantiation pattern. Implement a min function
//  * that returns the minimum value of all the elements in the stack in constant time.stack.

//  * All of the functions in the Stack should run in constant time!
//  *
//  * var example = new Stack()
//  *  example.push(4)
//  *  example.push(3)
//  *  example.min() === 3
//  *  example.push(3)
//  *  example.push(2)
//  *  example.push(2)
//  *  example.min() === 2
//  */

// /**
//   * Stack Class
//   */
//  var Stack = function() {
//   //var newStack = Object.create(stackMethods);
//   this._storage = {};
//   this._top = 0;
//   //return newStack;
// }

// // var stackMethods = {;
// // add an item to the top of the stack
//  Stack.prototype.push = function (value) {
//     this._storage[this._top] = value;
//     this._top++

//   };

// // remove an item from the top of the stack
//   Stack.prototype.pop = function () {
//     var popped = this._storage[this._top]
//     delete this._storage[this._top]
//     if( this._top ) { this._top--; }
//     return popped
//   };

// // return the number of items in the stack
//   Stack.prototype.size = function () {
//     return this._top;
//   };

// // return the minimum value in the stack
//   Stack.prototype.min = function () {
//     //set a minimum value to start
//     //iterate through all the values in object
//       //if curent value < min
//         // set min to curren value
//     //return min

//     if(this._top) { this._top--; }
//     var min = this._storage[this._top];

//     for (var key in this._storage) {
//       if(this._storage[key] < min ) {
//         min = this._storage[key];
//       }
//     }
//     console.log(min)
//     return min;

//   };

//   var example = new Stack()
//   console.log(example instanceof Stack)
//   example.push(4)
//   example.push(3)
//   example.min() === 3
//   example.push(3)
//   example.push(2)
//   example.push(2)
//   example.min() === 2
//   example.pop()
//   example.pop()
//   example.pop()

/*
 * Write a function that generates every sequence of throws a single
 * player could throw over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   ["RRR",
 *    "RRP",
 *    "RRS",
 *    "RPR",
 *    ...etc...
 *   ]
 *
 * Extra credit:
 *   - Make your function return answers for any number of rounds.
 *
 * Example:
 * rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
 *
 */

/*
var rockPaperScissors = function () {

var accArr = [];
var rps = ['R', 'P', 'S']
  for ( var i = 0; i < 3; i++ ) {
    for (var j = 0; j < 3; j++ ) {
      for (var k = 0; k < 3; k++ ) {

        accArr.push(`${rps[i]}${rps[j]}${rps[k]}`)
      }
    }
  }
  return accArr;

};
//console.log(rockPaperScissors());
*/

//Extra Credit Work

var rockPaperScissors = function (n) {
  //recursion
  //I Number
  //O Array of combinations
  //C Non-O(n^2)
  //E n <= 0, undefined

  //pseudocode
  // if n is undefined
  //n = 3
  // create accumulator array
  //create recursive function
  //create current combos played, empty string, str = str || ''
  //when string length = n
  //push into accumulator array
  //return;
  //create forEach loop
  //invoke recursive function passing in
  //current element concat empty string

  //invoke recursive function
  //return acc array

  n = n || 3;
  var accArr = [];

  var recFunc = function (str) {
    str = str || '';
    if (str.length === n) {
      accArr.push(str);
      return;
    }
    ['R', 'P', 'S'].forEach(function (el) {
      recFunc(str + el);
    });
  };
  recFunc();
  return accArr;
};

//console.log(rockPaperScissors(3))

// //parent class Nut
// class Nut {
//   constructor(color, type) {
//     this.color = color;
//     this.type = type;
//   }
//   favNutType() {
//     return `Are ${this.type}s your favorite type of nut?`;
//   }
//   sayHello() {
//     return `Hello, I am a ${this.type}!`;
//   }
// }
// //now the subclass Almond
// class Almond extends Nut {
//   constructor(color, type, shape) {
//     super(color, type);
//     this.shape = shape;
//   }
//   favNutType() {
//     return `The ${this.type} looks like a ${this.shape}.`;
//   }
// }
// const peeledAlmond = new Almond('white', 'almond', 'teardrop');
// console.log(peeledAlmond.constructor);//Function, Almond constructor
// console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
// console.log(peeledAlmond.favNutType());  //'The almond looks like a    teardrop.'
