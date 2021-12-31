// Prompt 1
// This is the function we will be using for tests today.  Take a look at it and tell me what it does.
function assert(comparison, name){
    if (comparison) {
      console.log('passed');
    } else {
      console.log('failed...' + name);
    }
  }
  // Take a look at the example code and test case below.  Change the code on line 15 so the test will pass, and click the run button.
  // Example code
  var x = 30;
  // Example test case
  assert(x === 30, 'x should equal 30');
  // Prompt 2
  // You will now write the concatLetters function described here:
  //  Given an array of objects and a key, return a string of all the values concatenated together found at the property
  var array =  [
    {
      'a': 'hi',
      'b': 'bye',
      'c d': 'hello goodbye'
    },
    {
      'a': 'hi',
      'c d': 'hello goodbye'
    },
     {
      'a': 'hi',
      'b': 'bye',
      'c d': 'hello goodbye'
    },
   {
      'a': 'hi',
      'c d': 'hello goodbye'
    },
  ];
  function concatLetters(arr, key) {
    var string = '';
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] === undefined) {
        continue;
      } else {
        string += arr[i][key];
      }
    }
    console.log(string);
    return string;
  }
  assert(concatLetters(array, 'a') === 'hihihihi', "should concat correct values");
  assert(concatLetters(array, 'c d') === "hello goodbyehello goodbyehello goodbyehello goodbye", "should concat correct values when a given key has a space");
  //Prompt 2 Bonus
  //Your function should skip objects in the array that do not have a property with the given key.
  assert(concatLetters(array, 'b') === 'byebye', "should concat correct values when an object does not have the given key");
  // Prompt 3
  //Before writing the function longestString please create the 2 test cases below. 
  //Do not create your own assert function, but use the assert function provided from the first problem
  //You can look to the test cases provided for concatLetters as examples
  // Write a function 'longestString', given an array of strings, should return the longest string and the length of the string seperated by a colon.
  function longestString (words) {
    var longestWord = words[0];
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return `${longestWord}:${longestWord.length}`;
  } 
  // Example Input:
  var someWords = ['a', 'hello', 'bob', 'dave']
  // Example Output:
  longestString(someWords) // "hello:5"
  // Test Cases:
  // create a test case to check that the actual longestString output matches expected output
  assert(longestString(someWords) === 'hello:5', 'finds the longest string and the length');
  // create a test case to check that longestString output returns a string
  // function assert(comparison, name){
  //   if (comparison) {
  //     console.log('passed');
  //   } else {
  //     console.log('failed...' + name);
  //   }
  // }