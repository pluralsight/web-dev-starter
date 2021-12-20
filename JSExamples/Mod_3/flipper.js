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
