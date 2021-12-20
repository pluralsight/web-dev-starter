// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// 

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'



function flipEveryNChars(input, n ) {
    var newString = '';
  
    for(let i = 0; i < input.length; i+=n){
      var charString = input.slice(i, i+n);
      charString = reverseString(charString)
      newString += charString
      
    }
    return newString;
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  var input = 'a short example 123456789';
  var output = flipEveryNChars(input, 2);
  console.log(output); // --> ohs axe trelpma
  
  