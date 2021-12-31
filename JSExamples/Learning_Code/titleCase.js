function titleCase(str) {
    // set all letters in str to lower case
    //split the strings into separate words
    //iterate through array of words
      //at each word
        //iterage through the word
          //convert first letter to upper case and concatentate with empty string
           //concatentate rest of letters onto string
    //return string
  
    var newString = ''
    var arrayOfWords = []
  //   var lowerCaseStr = ''
  str = str.toLowerCase()
    //console.log(str);
  arrayOfWords = str.split(' ')
  //console.log(arrayOfWords)
  for (var i = 0; i < arrayOfWords.length; i++){
    newString += arrayOfWords[i][0].toUpperCase()
    for (var j = 1; j < arrayOfWords[i].length; j++){
      newString += arrayOfWords[i][j]
  
      //console.log('newstring', newString)
    }
    newString += ' '
    
    
  }
  newString = newString.trim();
  return newString;
  
  }
  
  console.log(titleCase('peter piper')); //"Peter Piper"
  console.log(titleCase('teXt mEssAge')); //"Text Message"