// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  var letterArray = word.split('')
  // Count the instances of each letter
  var counts = {};
  for (var i = 0; i < letterArray.length; i++){
    if(counts[letterArray[i]] === undefined){
      counts[letterArray[i]] = 1;
    } else {
      counts[letterArray[i]]++
    }
    //console.log('letterArray', letterArray, 'counts', counts)
  }

  // Iterate all the counts and find the highest
  
  var highest = 0;
  for (var key in counts){
    
    if(counts[key] > highest){
      highest = counts[key]
    }
    
  }
  // Return this word's max repeat count
  return highest;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var listOfWords = text.split(' ')
  // For each word...
  for (var i = 0; i < listOfWords.length; i++){
    var repeatCountForWord = findMaxRepeatCountInWord(listOfWords[i])
    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall){
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = listOfWords[i]
    }
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount
  }
  return wordWithMaxRepeatCount;
  return maxRepeatCountOverall
}

// ASSERTION FUNCTION(S) TO BE USED
//assertEquals function to see if max wod count equals our theoretical value
function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log(`Passed`)
  } else {
    console.log(`Failed: ${testName} Expected ${expected} but got ${actual}`)
  }
}

// TESTS CASES

var testWord_1 = 'Wooords';
var testResult_1 = findMaxRepeatCountInWord(testWord_1);
var exptedResult_1 = 3
assertEqual(testResult_1, exptedResult_1, `should return 3 for a word with 3 repeating letters`);

var testStrign_2 = 'This is a test string thaaaat will work';
var testResult_2 = findFirstWordWithMostRepeatedChars(testStrign_2);
var expectedResult_2 = 'thaaaat';
assertEqual(testResult_2, expectedResult_2, `should return word with most repeated characters`);


























// //FIRST TRY USING VIDEO
// // Skeleton

// // FUNCTION DEFINITION(S)
// function findMaxRepeatCountInWord(word) {
//     // Break up individual words into individual letters.
//     var letters = word.split('');
//     // Count the instances of each letter
//     var letterCount = {}
//     for (var i = 0; i < letters.length; i++){
//       var currentLetter = letters[i];
//       if (letterCount[currentLetter] === undefined){
//         letterCount[currentLetter] = 1;
//       } else {
//         letterCount[currentLetter]++
//       }
//     }
//     // Iterate all the counts and find the highest
//     var max = 0;
//     for (var letter in letterCount){
//       if(letterCount[letter] > max){
//         max = letterCount[letter]
//       }
//     }
//     // Return this word's max repeat count
//     return max;
//   }
  
//   function findFirstWordWithMostRepeatedChars(test) {
//     var maxRepeatCountOverall = 0;
//     var wordWithMaxRepeatCount = '';
  
//     // Break up input text into words (space-delimited).
//     var words = test.split(' ');
//     // For each word...
//     for (var j = 0; j < words.length; j++){
//       var word = words[j];
//       var repeatCountForWord = findMaxRepeatCountInWord(word)
//       // If that max repeat count is higher than the overall max repeat count, then
//       if(repeatCountForWord > maxRepeatCountOverall){
//         // update maxRepeatCountOverall
//         // update wordWithMaxRepeatCount
//         maxRepeatCountOverall = repeatCountForWord;
//         wordWithMaxRepeatCount = word;
//       }
//     }
//     return wordWithMaxRepeatCount;
//   }
  
//   // ASSERTION FUNCTION(S) TO BE USED
//   function assertEqual(actual, expected, testName){
//     if(actual === expected){
//       console.log('Passed')
//     } else {
//       console.log(`FAILED ${testName} Expected ${expected}, but got ${actual}`)
//     }
//   }
  
//   // TESTS CASES
//   var input_1 = 'passed';
//   var actual_1 = findMaxRepeatCountInWord(input_1);
//   var expected_1 = 2;
//   assertEqual(actual_1, expected_1, `should return 2 for give word`)
  
//   var input_2 = 'I passed my exam are you not entertained';
//   var actual_2 = findFirstWordWithMostRepeatedChars(input_2);
//   var expected_2 = 'entertained';
//   assertEqual(actual_2, expected_2, `should return word with most repeated characters`)
  