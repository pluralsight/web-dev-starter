function replaceVowel(str) {
    accArr = [];
    str = str.split('')
  
    for (let i = 0; i < str.length; i++){
      accArr.push(checkVowel(str[i]))
    }
  return accArr.join('')
  }
  
  function checkVowel(str){
    var letObj = {
      a : 1,
      e : 2,
      i : 3,
      o : 4,
      u : 5
    }
  
    for(var keys in letObj){
      if (keys === str){
      return letObj[keys]
      }   
    }
  return str
  }
  
  
  console.log(replaceVowel("karachi"))// ➞ "k1r1ch3"
  
  console.log(replaceVowel("chembur"))// ➞ "ch2mb5r"
  
  console.log(replaceVowel("khandbario"))// ➞ "kh1ndb1r3"
  
  