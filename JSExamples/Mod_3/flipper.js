//Flip every pair of characters in a string.

function flipPairs(str) {
  //create an array of letters
  //iterate over the letters
    //push i+1 into array
    //push i into array
  var words = str.split('');
  
  var newString = ''

  for (var i = 0; i < words.length; i++) {
      if(words[i+1] === undefined){
        newString += words[i];
      } else {
        newString += (words[i+1] + words[i])
      i++
      }

              
  }
  
return newString
}

function assertEquals (actual, expected, testName) {
if(actual === expected) {
  console.log(`Passed`);
} else {
  console.log(`FAILED: ${testName} Expected ${expected} but got ${actual}`)
}
}
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var expectedResult = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
var result = assertEquals(output, expectedResult, 'flip a string of letters')


// function flipPairs (str) {
//     accumulatorStr = '';

//     for(var i = 0; i < str.length; i += 2) {
//         var stringSlice = str.slice(i, i + 2)
//         var reverseChar = stringSlice.split('').reverse().join('');
//         accumulatorStr += reverseChar
//     }
// console.log(accumulatorStr)
//     return accumulatorStr;

// }

//modified Minggui's code
function flipPairs(string) {
    var flipped = '';
    for (var i = 0; i < string.length; i++) {
      var pairs = []
      pairs.push(string.slice(i, i+2));
            
      i++
      if(pairs[0][1] === undefined){
          flipped += pairs[0][0]
      } else {
      flipped += pairs[0][1] + pairs[0][0];
      }
    } 
    return flipped;
  }



//   function flipPairs(string) {
//     var flipped = '';
//     for (var i = 0; i < string.length; i++) {
//       var pairs = []
//       pairs.push(string.slice(i, i+2));
//       i++
//       for (var j = 0; j < pairs.length; j++) {
//         for (var k = pairs[j].length -1; k >= 0 ; k--) {
//           flipped += pairs[j][k];
//         }
//       }
//     }
//     return flipped;
//   }
  


