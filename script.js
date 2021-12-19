//YT
//JavaScript Cardio

function upperCaseEveryWord(nameStr) {
    array = nameStr.split(' ')
    newArray = []
    for (var i = 0; i < array.length; i++){
      if(i === array.length-1){
        newArray += (array[i].charAt(0).toUpperCase() + array[i].slice(1) + '.');

      } else {
          newArray += (array[i].charAt(0).toUpperCase() + array[i].slice(1) + ' ');
      }
        
   }
    return newArray;
  }

function upperCaseEveryWord(nameStr){
  const mySentence = "freeCodeCamp is an awesome resource";
  let words = mySentence.split(" ");
  
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  words.join(' ')
  return words
}


  var result = upperCaseEveryWord('Now is the time for joy');
  console.log (result);
  





//Flip every pair of characters in a string.


//Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!




//function reversString(str){
    // return str
    //   .split('')
    //   .reverse()
    //   .join('');

    // var revString = '';
    // for (let i = str.length - 1; i >= 0; i--){
    //     revString = revString + str[i]
    // }
    // return revString;
    
    // let revString = '';
    // for (let i = 0; i < str.length; i++){
    //     revString = str[i] + revString
    // }
    // return revString

    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString
    // }
    // return revString

    // let revString = '';
    // str.split('').forEach(function(char){
    //     revString = char + revString
    // })
    // return revString

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString

    // return str.split('').reduce(function(revString, char) {
    //     return char + revString

    // }, '');

    //return str.split('').reduce((revString, char) => char + revString, '');




// }

// string = 'Hello World'
// var result = reversString(string)
// console.log(result)



// function verticalWords (string) {
//     var revString = string.split(' ');
//     //find the longest word in array
//     //sort ascending or descending
//     console.log(revString.sort())
//     console.log(revString)
//     //for (var i = 0; i < wordArray[0].length; i++){

//     }





// let string = 'Hello Worlds I am your tathaeltkjaetkj'
// let result = verticalWords(string);
// console.log(result)









// function isPalindrome (str) {





// }


// string = 'racecar domemod hannah'
// var result = isPalindrome(string);
// console.log (result);
























