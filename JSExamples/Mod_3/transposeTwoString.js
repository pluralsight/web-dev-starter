/*
You will be given an array that contains two strings. Your job is to create a function that will take 
those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/


function transposeTwoStrings(arr) {
    var characters = '';
    // var newArr = arr[0];
    
  
  var bigWord = findLongest(arr);

  
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < bigWord.length; j++){
            if(arr[i][j] === undefined){
                arr[i] += ' '
            }
        }
    }
  
 
  for (var i = 0; i < bigWord.length; i++) {
    if(i === bigWord.length - 1){  
      characters += arr[0][i] + ' ' + arr[1][i]
    } else {
        characters += arr[0][i] + ' ' + arr[1][i] + '\n'
    }
   
        
    }
return characters
}

function findLongest (wordArray){
    
    var longestWord = wordArray[0];
    for (var i = 0; i < wordArray.length; i++){
        if(longestWord.length < wordArray[i].length){
            longestWord = wordArray[i]
        }
    }
    return longestWord
}
var arrayOfWords = ['Hello', 'Worldddddddd'];
//console.log(transposeTwoStrings(arrayOfWords2))

function assertEquals (actual, expected, testName){
    if(actual === expected) {
        console.log(`Passed`)
    } else {
        console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}`)
    }
}

actual1 = transposeTwoStrings(arrayOfWords)
expected1 = `H W\ne o\nl r\nl l\no d\n  d\n  d\n  d\n  d\n  d\n  d\n  d`;
assertEquals(actual1, expected1, 'both strings should match')

arrayOfWords2 = ['Helloooooooo', 'World']
actual2 = transposeTwoStrings(arrayOfWords2)
expected2 = `H W\ne o\nl r\nl l\no d\no  \no  \no  \no  \no  \no  \no  `;
assertEquals(actual2, expected2, 'both strings should match')






















// function transposeTwoStrings(arr) {
//     var characters = '';
//     for (var i = 0; i < arr[0].length; i++) {
//         characters += arr[0][i] + ' ' + arr[1][i] + '\n'
        
//     }

// return characters
// }



// var arrayOfWords = ['Hello', 'World'];
// console.log(transposeTwoStrings(arrayOfWords))

/*
H W
e o
l r
l l
o d
*/