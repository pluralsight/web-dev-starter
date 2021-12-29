function isIsogram(text) {
    // add each char to a set
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    // check length of text and the size of the set
    var cleanText = text.toLowerCase()
    var accSet = new Set(cleanText)
    console.log(accSet)
    
    if(accSet.size === text.length){
        return true;
    } else {
        return false;
    }
  }

  var actual = 'Fireox'
  console.log(isIsogram(actual))