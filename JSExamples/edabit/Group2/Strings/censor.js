function censor(str) {
    var accArr = [];
    str = str.split(' ')
  
    for(let i = 0; i < str.length; i++){
      accArr.push(replaceCharacters(str[i]))
    }
  return accArr.join(' ')
  }
  
  
  function replaceCharacters (str){
    //if string is > 4
    //replace all characters with '*'
    
    //iterate over letters in str
      //replace current letter with '*'
    //return new str
    str = str.split('')
    if( str.length > 4){
      for (let i = 0; i < str.length; i++){
        str[i] = "*"
      }
    } else {
        return str.join('')
    }
  return str.join('')
  }
  
  
  console.log(censor("The code is fourty"))// ➞ "The code is ******"
  
  console.log(censor("Two plus three is five"))// ➞ "Two plus ***** is five"
  
  console.log(censor("aaaa aaaaa 1234 12345"))// ➞ "aaaa ***** 1234 *****"
  
  