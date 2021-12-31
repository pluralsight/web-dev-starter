/*
You will be given an array that contains two strings. Your job is 
to create a function that will take those two strings and transpose
 them, so that the strings go from top to bottom instead of left to
  right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

function transposeTwoStrings(arr) {
    var accSt = '';
    var longestWord = [arr[0]]
  
    for (let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord[0].length){
        longestWord = [arr[i]]
      }
    }
   
    for(let k = 0; k < longestWord[0].length; k++){
      for(let j = 0; j < arr.length; j++) {
        if(j === arr.length -1){
          if(arr[j][k] === undefined){
            accSt += '_' + '\n'
          } else {
          accSt += arr[j][k] + '\n'
          }
  
        } else {
          if(arr[j][k] === undefined){
            accSt += '_' + ' '
          } else {
          accSt += arr[j][k] + ' '
          }
        }
      }
    }
  
  return accSt
  }
  console.log(transposeTwoStrings(['Luna', 'Maya', 'Carolina', 'Will', 'Atwood']));
  