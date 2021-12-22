function removeVowels(str){
    var newString = str.replace( /[aeiou]/ig , "" );
    
    // i = any case, g=global doesnt stop at first found
    
    return newString
  }