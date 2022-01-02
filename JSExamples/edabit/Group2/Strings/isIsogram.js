function isIsogram(str){
    str = str.toLowerCase().split('')
  
    char = str.splice(0,1)[0]
  while(str.length > 0){
    console.log(str.indexOf(char), char)
    if(str.indexOf(char) !== -1){
      return false;
    } else {
      char = str.splice(0,1)[0]
    }
  }
  return true
  }
  
  console.log(isIsogram("Algorism"))// ➞ true
  
  console.log(isIsogram("PasSword"))// ➞ false
  // Not case sensitive.
  
  console.log(isIsogram("Consecutive"))// ➞ false
  
  