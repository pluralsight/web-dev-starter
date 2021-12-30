//Edabit - is the word an isoGram ?  Does not repeat any letters

function isIsogram(string) {

  string = string.toLowerCase()
  var mySet = new Set(string)
  if(mySet.size === string.length){
    return true
  } else {
    return false
  }

  
  //   var spArr = string.toLowerCase().split('')
  //   console.log(spArr)
  //   var char = spArr.splice(0,1)[0]
  
  //   while (spArr.length > 0){
  //     console.log(char)
  //     if(spArr.indexOf(char) === -1){
  //       char = spArr.splice(0,1)[0]
  //     } else {
  //       return false
  //     }
  //   }
  // return true;
  }
  
  console.log(isIsogram('PasSword'))
  
  



//from Mitchell
  // function isIsogram(text) {
  //   text = text.toLowerCase().split('');
  //   var mySet = new Set(text);
  //   var arrSet = Array.from(mySet);
  //   if (text.length === arrSet.length) {
  //       return true;
  //   } else {
  //       return false;
  //   }
  // }